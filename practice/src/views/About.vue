<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <ul>
      <li v-for="val in vals" :key="val.id">
        {{val}}
      </li>
    </ul> -->
  <login v-on:changed="run($event)" v-bind:users="names"></login>
  </div>
</template>

<script>
export default {
  data(){
    return{
      age:20,
      names:"abdan",
    }
  },
  methods:{
    run(x){
      this.names = x;
    }
  }
}
</script>
