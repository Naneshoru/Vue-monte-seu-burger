<template>
  <MainBanner />
  <div class="main-container">
    <h1>Monte o seu burger: </h1>
    <BurgerForm />
  </div> 

</template>

<script>
import BurgerForm from '@/components/BurgerForm.vue'
import MainBanner from '../components/MainBanner.vue'

export default {
  name: 'HomePage',
  components: {
    MainBanner,
    BurgerForm
  }
}
</script>

<style scoped>
  
</style>
