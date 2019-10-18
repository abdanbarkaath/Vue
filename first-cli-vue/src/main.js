import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Child3 from './views/Child3'

Vue.config.productionTip = false
// export const bus = new Vue()
new Vue({
  router,
  store,
  // Child3,
  render: h => h(App)
}).$mount('#app')
