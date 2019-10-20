<template>
  <div>
    <button class="btn btn-primary" @click="goDay">Daily</button>
    <button class="btn btn-primary" @click="goHourly">Hourly</button>
    <input type="text" v-model="time">
    <button class="btn btn-primary" @click="sendData">Get Temperatures</button>
    <!-- <button class="btn btn-primary" @click="loadKey">again</button> -->
    <!-- <span>City</span>
    <input type="text" v-model="city">
    <button @click="go">Go</button>
    <p>temp ={{display}}</p>
    <div>
        <p>{{hourly}}</p>
    </div> -->
    <router-view/>
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

<style>
</style>