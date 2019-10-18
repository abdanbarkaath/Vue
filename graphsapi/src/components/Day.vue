<template>
  <div>
      <div class="container">
        <highcharts :options="chartOptions"></highcharts>
      </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import axios from "axios";
export default {
    data(){
        return{
            chartOptions:{
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
        }
    }
}
</script>

<style>

</style>