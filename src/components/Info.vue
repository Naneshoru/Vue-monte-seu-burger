<template>
  <div>
    <h1> {{ data }} </h1>
    <h1> {{ created }} </h1>
    <h1> {{ mounted }} </h1>
  </div>
</template>

<script>
  export default {
    name: 'InfoItem',
    props: {
      data: String,
      created: String,
      mounted: String
    }
  }
</script>
