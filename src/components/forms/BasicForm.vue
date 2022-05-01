<template>
  <div>
    <form action="" @submit="sendData">
      <div><input type="text" v-model="nome"/></div>
      <div><input type="text" v-model="email"/></div>
      <div><input type="submit" value="Enviar"/></div>
    </form>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      nome: '',
      email: ''
    }
  },
  methods: {
    sendData(e) {
      console.log('Enviado', this.nome, this.email)
      e.preventDefault()
    }
  }
}
</script>
