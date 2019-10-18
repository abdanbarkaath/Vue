<template>
  <div>
    <button class="btn btn-primary" @click="goDay">Daily</button>
    <button class="btn btn-primary" @click="goHourly">Hourly</button>
    <input type="text" >
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
import VueRouter from "../router/index";
import { Chart } from "highcharts-vue";
import axios from "axios"
export default {
  data() {
    return {
        city:null,
        hourly:null,
        display:null,
        // code:null,
      time: "hourly",
      chart1Options: {
        chart: {
          type: "column"
        },
        title: {
          text: "Daily"
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: "Rainfall (mm)"
          }
        },
        colors: ["black"],

        series: [
          {
            data: [
              49.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ] // sample data
          }
        ],
      },
      chart2Options:{
            chart:{
                type:"line"
            },
            title:{
                text:"Hourly"
            },
            colors:["blue"],
            series:[
                {
                    data:[1,8,3,4,5]
                }
            ]
        }
    };
  },
  methods:{
    goHourly(){
      this.$router.push({name:'hour'})
    },
    goDay(){
      this.$router.push({name:'day'})
    },
      go(){
           axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&APPID=8cce7edd41e14cec15c5a85b3ea142c8&units=metric")
      .then(response=>{
            this.display = response.data.main.temp;
      })
  },
      update1(){
          this.time = "hourly"
      },
      update2(){
          this.time = "daily"
      }
},
  mounted(){
      axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cce7edd41e14cec15c5a85b3ea142c8")
      .then(response=>{
            this.hourly = response.data;
      })
  }
}
</script>

<style>
</style>