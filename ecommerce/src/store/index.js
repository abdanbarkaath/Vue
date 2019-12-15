import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    productaction:(store,totals)=>{
      store.commit("mutatueproduct",totals);
    }
  },
  mutations: {
    mutatueproduct:(store,totals)=>{
      store.total.push(totals);
    }
  },
  state: {
    total:[],
  },
  getters:{
    total:state=> state.total
  }
})
