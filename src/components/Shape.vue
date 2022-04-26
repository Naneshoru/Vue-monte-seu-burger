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
    }
  }
</script>