<template>
  <div id="main-banner">
    <h1>Make your burguer</h1>
  </div>
</template>

<script>
export default {
  name: 'MainBanner'
}
</script>

<style scoped>
  #main-banner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    background-image: url('/public/img/burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
  }
</style>