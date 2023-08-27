<template>
  <div id="app">
      <HeaderComponent/>
      <router-link to="/allProducts">About</router-link>
    <router-view/>
  </div>
</template> 

<script>
import HeaderComponent from './components/HeaderComponent.vue';
 
export default {
  components: {
    HeaderComponent
  }
}
</script>
ve

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
