<template>
  <div>
    <div id="main-back">
    <h1>Weather Api</h1>
    <input id="getin" type="text" v-model="time">
    <button class="btn btn-outline-primary sub" @click="sendData"><router-link to="/weather?mode=day"/> Get Temperatures</button><br>
    <button class="btn btn-primary day" @click="goDay">Daily</button>
    <button class="btn btn-primary hour" @click="goHourly">Hourly</button>
    <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
import VueRouter from "../router/index";
import { Chart } from "highcharts-vue";
import axios from "axios"
export default {
  computed:{
    ...mapGetters(['city']),
    ...mapGetters(['temp'])
  },
  data() {
    return {
       time:null,
       val:null
    }
  },
  methods:{
    ...mapActions(['mutateMethod']),
    ...mapActions(['mutateCity']),
    loadKey(){
      axios
        .get(
          "http://dataservice.accuweather.com/locations/v1/cities/IN/search?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&q=" +
            this.city +
            "&offset=1"
        )
        .then(response => {
          console.log(response.data[0].Key);
          this.val = response.data[0].Key;
          this.mutateCity(this.val);
          console.log(this.temp);
        });
    },
    goHourly(){
      this.$router.push({name:'hour'})
    },
    goDay(){
      this.$router.push({name:'day'})
    },
    sendData(){
      this.mutateMethod(this.time)
      console.log(this.city);
      this.loadKey();
    }
},
}
</script>

<style lang="scss" scoped>
#main-back{
  padding-top: 50px;
  height: 625px;
  background: lightblue;
  #getin{
    border-radius: 5px;
    height: 35px;
    box-shadow: 0;
  }
  .sub{
    margin-left: 5px;
  }
  .day{
    margin: 10px;
  }
  .hour{
    margin:10px;
  }
}
</style>