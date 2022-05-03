<template>
 <CustomNavbar :logo="logoSrc" :alt="appName" />
 <router-view />
 <CustomFooter />
</template>

<script>
  import CustomNavbar from './components/CustomNavbar.vue'
  import CustomFooter from './components/CustomFooter.vue'

  export default {
    name: 'My-app',
    components: {
      CustomNavbar,
      CustomFooter
    },
    data() {
      return {
        logoSrc: './img/logo.png',
        appName: 'Make your Burguer'
      }
    }
  }
</script>

<style>
  * {
    font-family: 'Proxima Nova';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

</style>
 