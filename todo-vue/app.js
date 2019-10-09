var app = new Vue({
    el:"#app-root",
    data:{
        lists:[],
        value:null,
    },
    methods:{
        addToList(i){
            this.lists.push({name:this.value,check:false});
            this.value = "";
            console.log(this.lists[0]);
        },
        del(i){
            this.lists.splice(i,1);
            console.log(this.lists[i]);
        },
        done(i){
            this.lists[i].check = true;
        }
    }

})