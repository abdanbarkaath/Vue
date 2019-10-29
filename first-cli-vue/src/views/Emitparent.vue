<template>
  <div>
      <h1>name = {{name}}</h1>
  <Emitchild @acceptData="recieve"></Emitchild>
  </div>
</template>

<script>
import Emitchild from "../components/Emitchild.vue";

export default {
    components:{
        Emitchild
    },
    data(){
        return{
            name:null
        }
    },
    methods:{
        recieve(val){
            this.name = val;
        }
    }
}
</script>

<style>

</style>