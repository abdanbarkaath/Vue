<template>
  <div>
      <ul>
          <li v-for="(username,index) in usernames" :key="username.id">
              {{usernames[index].name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
data(){
    return{
        name:"abdan",
        usernames:null
    }
},
created(){
this.loadFunction();
},
methods:{
    loadFunction(){
        // var vm=this;
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            this.usernames = response.data
            // console.log(response.data[0].name);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}
}
</script>

<style>

</style>