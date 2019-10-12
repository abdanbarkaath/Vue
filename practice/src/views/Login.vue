<template>
    <form action="/registeration" cleardefaults>
        <input type="text" name="name" v-model="uname" placeholder="Name"><br>
        <input type="password" name="password" v-model="pass" placeholder="Password"><br>
        <button @click="validate(uname,pass)">login</button>
        <p @click="change" >{{users}}</p>
    </form>
</template>


<script>
import VueRouter from '../router.js'

export default {
  name: 'Login',
  props:['users'],
  data(){
      return{
            uname:null,
            pass:null
      }
  },
  methods:{
      change(){
          console.log("hello");
        this.$emit('changed','basil')  
      },
      validate(n,p){
          event.preventDefault();
            if(n === "abdan" && p === "abd"){
                console.log("login successful");
                // router.push({name:'About'})
                this.$router.push({ name:'about' });
            }else{
                console.log("login not successful");
                this.$router.push({ name:'registeration' });
            }
      }
  }
}
</script>