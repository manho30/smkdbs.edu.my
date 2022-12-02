<template>
  <div class="content-container mt-10">

    <!-- create a container with grey background -->
    <div class="bg-gray-100 rounded-md p-4">
      <div class="flex flex-col md:flex-row ml-4">
        <div class="md:w-1/2">
          <h1 class="font-bold text-gray-800 lg:text-3xl md:text-2xl sm:text-xl">
            Event </h1>
          <p class="text-gray-700 text-sm mb-5">Event will be held in SMK Dato Bijaya Setia </p>

          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">7/12/2022</time>
              <h3 class="text-lg font-semibold text-black-500">Pertandingan Kawad Kaki</h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Pertandingan kawad kaki antara peringkat sekolah.</p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">7/12/2022 </time>
              <h3 class="text-lg font-semibold text-black-500">Aktiviti RIMUP</h3>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1/12/2022</time>
              <h3 class="text-lg font-semibold text-red-600">Pertandingan Bola Sepak Sesi Pagi [TAMAT]</h3>
              <p class="mb-4 text-base font-normal text-red-600">Pertandingan bola sepak antara peringkat sekolah.</p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">30/11/2022</time>
              <h3 class="text-lg font-semibold text-red-600">Pertandingan Bola Sepak Sesi Petang [TAMAT]</h3>
              <p class="mb-4 text-base font-normal text-red-600">Pertandingan bola sepak antara peringkat sekolah.</p>
            </li>

          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content-container'
  }
</script>