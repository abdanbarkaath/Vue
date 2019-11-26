import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bikes:["gixxer","cbr","hayabusa","luna","chetak","unicorn","duke"]
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    bikes: state => state.bikes
  }
})
