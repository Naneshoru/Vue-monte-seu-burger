<template>
  <nav>
    <router-link id="logo-url" to="/">
      <img id="logo" :src="logo" :alt="alt">
    </router-link>
    <router-link to="/">Home</router-link> | 
    <router-link to="/pedidos">Pedidos</router-link>
 </nav>
</template>

<script>
export default {
  name: 'CustomNavbar',
  props: {
    logo: String,
    alt: String
  }
}
</script>

<style scoped>
 nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    height: var(--header-size);
    width: 100%;
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
  }

  nav #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #logo {
    width: 40px;
    height: 40px;
  }

  nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }

  nav a:hover {
    color: #FFF;
  }
  
</style>

