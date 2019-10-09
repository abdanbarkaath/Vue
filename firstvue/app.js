new Vue({
    el:'#app',
    data:{
        title:"hello",
        website:"google.com",
        age:0
    },
    methods:{
        run:function(event){
            this.title=event.target.value;
            this.website=event.target.value;
        },
        greet:function(){
            return "hello gentlemen"
        },
        add:function(event){
            this.age++;
        },
        rem:function(){
            this.age--;
        }
    }
})

new Vue({
    el:'#app-root',
    data:{
        title:"hello",
        num:1,
        col:true
    },
    methods:{
        increase(){
            setInterval(()=>{
                this.num+=1;
                if(this.num === 10){
                    clearInterval(looper);
                }
            },1000)
        },
        keyp(event){
            console.log(event);
            if(event.key ==="ArrowUp"){
                this.num+=1;
            }
        }
    }
})