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
        chartOptions: {
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
    }
}

}
</script>

<style>

</style>