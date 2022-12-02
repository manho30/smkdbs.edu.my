<template>
  <header-container></header-container>
  <content-container></content-container>
  <footer-container></footer-container>
</template>

<script>
  import HeaderContainer from './components/header.vue'
  import ContentContainer from './components/content.vue'
  import FooterContainer from './components/footer.vue'

  export default {
    name: 'App',
    components: {
      HeaderContainer,
      ContentContainer,
      FooterContainer
    }
  }
</script>