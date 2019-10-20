<template>
  <div>
    <p>Day</p>
    <div>{{city}}</div>
    <!-- <p>{{data.DailyForecasts[0].Date}}</p> -->
    <div class="container">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Chart } from "highcharts-vue";
import axios from "axios";
export default {
  computed: {
    ...mapGetters(["city"]),
    ...mapGetters(["temp"]),
    ...mapGetters(["data"]),
  },
  data() {
    return {
      val: null,
      store:2,
      chartOptions: {
        chart: {
          type: "line"
        },
        title: {
          text: "Hourly"
        },
        xAxis: {
          categories: ["a",this.store]
        },
        yAxis:{
          categories:["abdan","basil","qadeer","turab"]
        },
        colors: ["blue"],
        series: [
          {
            data: [1, 8, 3, 4, 5]
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(['mutateData']),
    loadData() {
        axios
        .get(
          "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+this.temp+"?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&metric=true"
        )
        .then(response => {
             this.mutateData(response.data)
             console.log(this.data);
        });
    }
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
</style>