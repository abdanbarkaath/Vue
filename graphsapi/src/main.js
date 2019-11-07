import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import HighchartsVue from 'highcharts-vue'
import VueProgressBar from 'vue-progressbar'
// import Toasted from 'vue-toasted';
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'



Vue.use(VueProgressBar, {
  color: '#0713f2',
  failedColor: 'red',
  height: '2px'
});
Vue.use(HighchartsVue)
Vue.use(VueToastr)
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
