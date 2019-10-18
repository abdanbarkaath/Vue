<template>
  <div id="app">
    <!-- <Child3 :username="names">
      <p name="abdan">I am a slot</p>
    </Child3> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/child1">child1</router-link>|
      <router-link to="/child2">child2</router-link>|
      <router-link to="/child3">child3</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<script>
import Child3 from './views/Child3'
export default {
  data(){
    return{
      names:["abdan","basil","qadeer"]
    }
  },
  components:{
    Child3
  }
  
}
</script>

<style lang="scss">
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
