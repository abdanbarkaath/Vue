<template>
  <div>
      <ul>
          <li v-for="user in username" :key="user.id">
              {{user}}
          </li>
      </ul>
      <!-- <slot>{{name}}</slot> -->
  </div>
</template>

<script>
export default {
    props:['username'],
    data(){
        return{
            
        }
    }   
}
</script>

<style>

</style>