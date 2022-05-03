<template>
  <div id="ap"> 
    <CustomNavbar :logo="logoSrc" :alt="appName" />
    <router-view />
    <CustomFooter :appName="appName"/>
  </div>
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
  #ap {
    height: 100vh
  }

  * {
    font-family: 'Proxima Nova';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222
  }
</style>
 