<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Comp1 :msg="message"></Comp1>
    <Comp2 :msg="message"></Comp2>
  </div>
</template>

<script>

import Comp1 from '../components/Comp1'
import Comp2 from '../components/Comp2'
import store from '../store'

export default {
  name: 'home',
  data(){
    return{
      message:"hello components"
    }
  },
  components: {
    Comp1,
    Comp2
  }
}
</script>
