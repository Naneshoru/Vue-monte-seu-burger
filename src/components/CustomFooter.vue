<template>
  <footer>
    <p>{{ appName }} &copy; 2022</p>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  props: {
    appName: String
  }
}
</script>

<style scoped>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    border-top: 4px solid #111;
    color: #FCBA03;
    bottom: 0;
    width: 100%;
    height: 200px;
  }
</style>