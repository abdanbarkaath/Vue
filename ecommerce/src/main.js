import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faStore, faCartPlus, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from "vue-router";
 

library.add(faUserSecret);
library.add(faStore);
library.add(faCartPlus);
library.add(faArrowAltCircleLeft);
library.add(faArrowAltCircleRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
