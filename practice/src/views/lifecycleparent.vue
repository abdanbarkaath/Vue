<template>
  <div><child></child></div>
</template>

<script>
import child from './lifecyclechild'
export default {
    components:{
        child
    },
    mounted(){
        console.log("mounter");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforem");
    },
    beforeCreate(){
        console.log("beforec");
    }

}
</script>

<style>

</style>