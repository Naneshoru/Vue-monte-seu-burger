<template>
 <CustomNavbar />
 <!-- router-view -->
 <router-view />
</template>

<script>
  import CustomNavbar from './components/CustomNavbar.vue'

  export default {
    name: 'My-app',
    components: {
      CustomNavbar
    } 
  }
</script>
