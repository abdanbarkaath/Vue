<template>
  <div>
    <p>Wher</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {

data(){
  return{
    weatherInfo:null
  }
},
methods:{
  loadData(){
    axios.get("")
    .then(response=>{
      this.weatherInfo = response;
    })
  }
},
mounted(){
  this.loadData();
}
}
</script>

<style>

</style>