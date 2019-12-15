<template>
  <div></div>
</template>

<script>
export default {
    beforeCreate(){
        console.log("beforecc");
    },
    beforeMount(){
        console.log("beforemc");
    },
    mounted(){
        console.log("mchild");
    },
    created(){
        console.log("cchild");
    }

}
</script>

<style>

</style>