<template>
  <div class="home">
    <button @click="signup">Signup</button>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import VueRouter from '../router/index'

export default {
  name: 'home',
  methods:{
    login(){
      this.$router.push({ name:'login'});
    },
    signup(){
      this.$router.push({ name:'signup'});
    }
  }
}
</script>
