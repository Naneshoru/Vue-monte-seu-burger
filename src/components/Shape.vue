<template>
  <div>
    <p> Welcome </p>

    {{ data }}
    {{ created }}
    {{ mounted }}
  </div>
</template>

<script>
  export default {
    name: 'ShapeComponent',
    data() {
      return {
        data: 'Ricardo',
        created: 'Created',
        mounted: 'Mounted'
      }
    },                                                       // beforeCreated() {}
    created() { // onInit // Receber os dados da requisição, por exemplo
      // this.created = `Created atualizado`
    },                                                        // beforeMounted() {}
    mounted() { // afterviewInit
      // this.mounted = `Mounted atualizado`
    }
  }
</script>