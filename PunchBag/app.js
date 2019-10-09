var app =new Vue({
    el:"#app-root",
    data:{
        health:100,
        x:1
    },
    methods:{
        damage(){
            this.health -=10;
            console.log(this.health);
        },
    },
    computed:{
        add(){
            this.x++;
            console.log(this.x);
        }
    }
})