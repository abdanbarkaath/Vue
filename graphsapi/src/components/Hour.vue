<template>
  <div>
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
    ...mapGetters(["datas"])
  },
  data() {
    return {
      val: null,
      x1: this.datas,
      chartOptions: {
        chart: {
          type: "column"
        },
        title: {
          text: "Hourly"
        },
        xAxis: {
          // categories: ["abdan", "basil"],
          crosshair: true
        },
        yAxis: {
         
        },
        colors: ["black"],

        series: []
      }
    };
  },
  methods: {
    ...mapActions(["mutateData"]),
    loadData() {
      axios
        .get(
          "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" +
            this.temp +
            "?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&metric=true"
        )
        .then(response => {
          this.mutateData(response.data);
          // console.log(response.data);
          this.val = response.data;
          console.log(this.val[0]);
          const temp = [];
          const xvalue = [];
          // const yvalue = [0,10,20,30,40,50,60];
          this.val.forEach(i => {
            var t = i.DateTime;
            var z = t.split("T")
            var q = z[1].split("+");
            temp.push(i.Temperature.Value);
            xvalue.push(q[0]);
          });
          this.chartOptions.series = [
            {
              data:temp
            }
          ];
          this.chartOptions.xAxis={
            title:{
              text:"Time"
            },
            categories:xvalue,
          }
          this.chartOptions.yAxis={
            title:{
              text:"degrees"
            }
          }
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style>
</style>