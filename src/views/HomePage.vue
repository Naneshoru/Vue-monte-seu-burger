<template>
  <MainBanner />
  <div class="main-container">
    <h1>Monte o seu burguer: </h1>
    <BurguerForm />
  </div> 

</template>

<script>
import BurguerForm from '@/components/BurguerForm.vue'
import MainBanner from '../components/MainBanner.vue'

export default {
  name: 'HomePage',
  components: {
    MainBanner,
    BurguerForm
  }
}
</script>

<style scoped>
  
</style>
