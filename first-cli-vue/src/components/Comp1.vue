<template>
  <div>
      <div>
          <input type="text" v-model="item" >
          <button @click="addval(item)">ADD value</button>
      </div>
      <ul>
          <li v-for="l of list" :key="l.id">
              {{l.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    
data(){
    return{
        item:null
    }
    },
    computed:{
        list(){
            return this.$store.getters.things;
        }
    },
    methods:{
        // addval(item){
        //     this.$store.state.list.push({name:item})
        // }
        // addval(item){
        //     this.$store.commit('addmutationProducts',{name:item})
        // }
        addval(item){
            this.$store.dispatch('addactionProducts',{name:item})
        }
    }
}
</script>

<style>

</style>