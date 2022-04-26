<template>
  <div>
    <p> Welcome </p>
    <Info :data="data" :created="created" :mounted='mounted'/>
  </div>
</template>

<script>
  import Info from './Info.vue'

  export default {
    components: { 
      Info 
    },
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