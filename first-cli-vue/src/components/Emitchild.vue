<template>
  <div>
      <button @click="sendData">click me to send data to parent</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:"abdan"
        }
    },
    methods:{
        sendData(event){
            this.$emit("acceptData",this.name)
        }
    }
}
</script>

<style>

</style>