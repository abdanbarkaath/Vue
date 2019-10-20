import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:null,
    temp:null,
    data:null
  },
  mutations: {
    stateMethod(state,val){
      state.city = val;
    },
    statecCity(state,val){
      state.temp = val;
    },
    stateData(state,val){
      state.data = val;
    }
  },
  actions: {
    mutateMethod(state,val){
      state.commit('stateMethod',val)
    },
    mutateCity(state,val){
      state.commit('statecCity',val)
    },
    mutateData(state,val){
      state.commit('stateData',val)
    }
  },
  getters:{
    city : state => state.city,
    temp: state => state.temp,
    data: state=> state.data
  }
})
