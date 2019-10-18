import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[{name:"abdan"},{name:"basil"},{name:"qadeer"}],
    bikes:[{name:"honda"},{name:"suzuki"},{name:"cbz"}]
  },
  mutations: {
    addmutationProducts:(store,item) =>{
      store.list.push(item);
    }
  },
  actions: {
    addactionProducts:(store,item) =>{
      store.commit('addmutationProducts',item);
    }
  },
  getters:{
    things: state => state.list
  }
})
