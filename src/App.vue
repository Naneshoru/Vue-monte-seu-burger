<template>
  <div id="wrapper"> 
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
        appName: 'Make your Burger'
      }
    }
  }
</script>

<style>
  :root {
    --header-size: 80px;
    --light-accent: #FCBA03;
  }

  html, body {
    height: 100%;
  }

  * {
    font-family: 'Proxima Nova';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #wrapper {
    padding-top: var(--header-size);
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222
  }
</style>
 