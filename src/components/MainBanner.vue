<template>
  <div id="main-banner">
    <h1>Make your burger</h1>
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
    height: 800px;
  }

  #main-banner h1 {
    color: #FFF;
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px 40px;

  }
</style>