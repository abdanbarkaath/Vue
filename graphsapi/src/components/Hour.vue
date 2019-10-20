<template>
  <div>
    <p>Hour</p>
    <p>{{city}}</p>
    <p>{{data}}</p>
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
    ...mapGetters(['data'])
  },
  data() {
    return {
      val: null,
      chartOptions: {
        chart: {
          type: "column"
        },
        title: {
          text: "Daily"
        },
        xAxis: {
          categories: [this.data],
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
        ]
      }
    };
  },
  methods: {
    ...mapActions(['mutateData']),
    loadData() {
      axios
        .get(
          "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"+this.temp+"?apikey=rRIAyCDjOM3B7vL2asO8KA9ytn4NQAIp&metric=true"
        )
        .then(response => {
          this.mutateData(response.data)
          console.log(this.data);
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