<template>
  <footer aria-label="Site Footer" class="bg-white">
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="p-3 bg-white rounded-lg flex items-center">
            <div id="logo-kpm">
              <img src="../assets/malaysia.png" alt="Lencana KPM"
                   className="max-w-full h-auto lg:block" height="31.5" width="42">
            </div>
            <!-- draw a vertical line -->
            <div class="border-l-2 border-gray-700 h-8 mx-2 ml-4"></div>
            <div id="logo-sklh">
              <img src="../assets/logo.png" alt="Lencana SMK DATO BIJAYA SETIA"
                   className="max-w-full h-auto lg:block" height="33" width="45">
            </div>
          </div>
          <p class="max-w-xs mt-4 text-gray-500 text-1xl font-bold">
            "BERTEKUN HINGA BERJAYA"
          </p>
        </div>
      </div>
      <div class="text-base text-gray-500 font-bold">
        <p class="text-1xl font-bold">
          © {{year_now}} SMK Dato Bijaya Setia<br v-if="isMobile"> All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footer-container',
  data() {
    return {
      year_now: this._getCurrentYear(),
      isMobile: this._isMobile()
    }
  },
  methods: {
    /**
     * @returns {boolean}
     * @private
     */
    _isMobile() {
      return window.innerWidth <= 768;
    },
    /**
     * @returns {number}
     * @private
     */
    _getCurrentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>
