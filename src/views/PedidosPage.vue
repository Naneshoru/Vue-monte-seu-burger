<template>
  <div class="main-container">
    <h1>Gerenciar pedidos:</h1>
    <OrdersDashboard />
  </div> 
</template>

<script>
import OrdersDashboard from '../components/OrdersDashboard.vue'

export default {
  name: 'PedidosPage',
  components: {
    OrdersDashboard
  }
}
</script>
