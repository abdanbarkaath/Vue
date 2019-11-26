<template>
<div>
  <h4>
      {{run}}
  </h4>
  <input type="text" v-model="name">
  <input type="checkbox" v-model="age">23
  <button v-on:click="submit">submit</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            value:200,
            name:'',
            age:''
        }
    },
    methods:{
    change(){
        console.log(`new value = ${this.name}`);
    },
    submit(){
        var newvalue = this.value +200;
        console.log(newvalue);
    }
    },
    watch:{
        // name: (oldVal,newval) => {
        //     console.log(oldVal,newvalue);
        // },
        name(oldval){
            // this.name=val;
            console.log(oldval);
        },
        age:(newVal,oldVal)=>{
            if(newVal === true){
                console.log("checked");
            }else{
                console.log("unchecked");
            }
        }
    },
    computed:{
        run(){
        console.log("computed");
            var calc;
            // return  calc = 200+1;
            return "hello"
        }
    },
    mounted(){
        console.log("mounted");
    },
    created(){
        console.log("created");
    }
}
</script>

<style>

</style>