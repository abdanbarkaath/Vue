<template>
  <div class="home">
    <div>
    <AppHeader></AppHeader>
    </div>
    <div class="sub">
    <AppSubHeader></AppSubHeader>
    </div>
    <div>
      <!-- <Users></Users> -->
      <Landing></Landing>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader/AppHeader";
import AppSubHeader from "../components/AppHeader/AppSubHeader"
// import Users from "../components/Data/Users/Users"
import Landing from "../components/Landing/Landing"
export default {
  components:{
    AppHeader,AppSubHeader,Landing
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
</style>
