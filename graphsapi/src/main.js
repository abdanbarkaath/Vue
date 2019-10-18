import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import HighchartsVue from 'highcharts-vue'
// import vuetify from './plugins/vuetify';
// import Vuetify from 'vuetify/lib'

Vue.use(HighchartsVue)
// Vue.use(Vuetify,{
//   iconfont:'md'
// });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
