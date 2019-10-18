<template>
  <div>
    <p>{{weatherInfo}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data(){
  return{
    weatherInfo:null
  }
},
methods:{
  loadData(){
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8cce7edd41e14cec15c5a85b3ea142c8")
    .then(response=>{
      this.weatherInfo = response.data;
      console.log(this.weatherInfo);
    })
  }
}
}
</script>

<style>

</style>