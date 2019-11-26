import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import login from './views/Login.vue'
import BootstrapVue from "bootstrap-vue";
import { ToastPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(ToastPlugin)
Vue.config.productionTip = false
Vue.component('login',login);

export const bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
