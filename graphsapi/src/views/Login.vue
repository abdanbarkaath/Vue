<template>
<div id="back">
  <div class="login">
    <form id="forms"> 
		<h2>Login</h2>
		<hr>
        <div class="form-group">
        	<input type="name" class="form-control" @keypress="enable" v-model="localUsers.name" placeholder="Name" required>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" @keypress="enable" v-model="localUsers.password" placeholder="Password" required>
        </div>
		
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg" :disabled="x==0" @click.prevent="check">Login</button>
        </div>
    <div class="hint-text">Want to create an account? <a href="" @click.prevent="go">Sign up here</a></div>
    </form>
	</div>
</div>
</template>

<script>
import VueRouter from '../router/index'
export default {
    data(){
        return{
            localUsers:{},
            x:0,
        }
    },
    methods:{
      enable(){
         if(this.localUsers.name  &&  this.localUsers.password)
        {
          this.x = 1;
        }else{
          this.x = 0;
        }
      },
        go(){
            this.$router.push({name:'signup'})
        },
        check(){
            var i=0;
            var values = JSON.parse(localStorage.getItem('users'));
            // console.log(values);
            values.forEach(x=>{
                if(x.name == this.localUsers.name && x.password == this.localUsers.password){
                    console.log("loged in");
                    this.$router.push({ name:'dashboard'});
                    i=1;
                }
            })
            if(i==0){
               alert("wrong name or password")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#back{
   background: #3598dc;
   height: 625px;;
  color: black;
  padding:50px;
}

.login{
  width: 400px;
  margin: 0 auto;
  background: white;
  #forms{
    width: 100%;
    padding: 20px;
  }
  .form-group{
    padding: 10px;
  }
  a{
    color: red;
  }
}
</style>