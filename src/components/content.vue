<template>
  <div class="content-container mt-10">
    <!-- create a container with grey background -->
    <div class="bg-white rounded-md p-4">
      <div class="flex flex-col md:flex-row ml-4">
        <div class="md:w-1/2">
          <h1 class="font-bold text-2xl text-gray-800 md:text-3xl sm:text-2xl">
            Event </h1>
          <p class="text-gray-700 text-sm mb-5 ml-0.5 lg:text-lg md:text-base sm:text-sm">Event will be held in SMK Dato Bijaya
            Setia </p>
          <div class="event" v-if="event_list.length >= 1 && !internalServerError">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li v-for="index in event_list" :key="index" class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{index.date}}</time>
                <h3 class="text-lg font-semibold text-black-500">{{index.title}}</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{index.description}}</p>
              </li>
            </ol>
          </div>
          <div v-else-if="internalServerError" class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
            {{internalServerError}}
          </div>
          <div v-else class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
            Tidak ada aktiviti yang akan dijalankan
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 mb-5"></div>
  <div class="bg-white rounded-md p-4">
    <div class="flex flex-col md:flex-row ml-4">
      <div class="md:w-1/2">
        <h1 class="font-bold text-2xl text-gray-800 md:text-3xl sm:text-2xl">
          Pengumuman </h1>
        <p class="text-gray-700 text-sm mb-5 ml-0.5 lg:text-lg md:text-base sm:text-sm"> Pengumuman disampaikan oleh pentadbir</p>
        <div class="announcement" v-if="announcement_list.length >=1">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li v-for="index in announcement_list" :key="index" class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{index.date}}</time>
              <h3 class="text-lg font-semibold text-black-500">{{index.title}}</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{index.description}}</p>
            </li>
          </ol>
        </div>
        <div v-else>
          <div class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
            Tidak ada pengumuman yang diterbitkan.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 mb-5"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "content-container",
  data() {
    return {
      announcement_list: [],
      event_list: [],
      internalServerError: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/event")
      .then((response) => {
        this.nm = response;
        this.event_list = response.data.result || [];
      })
      .catch(() => {
        this.internalServerError = 'Internal Server Error. Considerly check your internet connection or contact the administrator.';
      });
  }
};
</script>
