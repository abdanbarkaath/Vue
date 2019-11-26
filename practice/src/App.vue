<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/registeration">Register</router-link>|
      <router-link to="/computed">computed</router-link>|
      <router-link to="/toaster">toaster</router-link>|
      <router-link to="/styleCheck">styleCheck</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss">
h1{
  color: green;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
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
