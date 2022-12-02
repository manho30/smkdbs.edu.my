<template>
  <header-container></header-container>
  <content-container></content-container>
</template>

<script>
  import HeaderContainer from './components/header.vue'
  import ContentContainer from './components/content.vue'
  export default {
    name: 'App',
    components: {
      HeaderContainer,
      ContentContainer
    }
  }
</script>