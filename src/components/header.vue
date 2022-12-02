<template>
  <div class="header-container">
    <a class="p-3 bg-white shadow rounded-lg flex items-center">
      <div id="logo-sklh">
        <img src="../assets/logo.png" alt="Lencana SMK DATO BIJAYA SETIA"
             className="max-w-full h-auto lg:block" height="31.5" width="42">
      </div>
      <div id="logo-kpm">
        <img src="../assets/malaysia.png" alt="Lencana KPM"
             className="max-w-full h-auto lg:block" height="31.5" width="42">
      </div>
      <div id="title" className="ml-2">
        <h1 className="font-inherit font-extrabold mt-1 text-gray-800 lg:text-3xl md:text-2xl sm:text-xl">
          SMK DATO BIJAYA SETIA</h1>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'header-container'
}
</script>