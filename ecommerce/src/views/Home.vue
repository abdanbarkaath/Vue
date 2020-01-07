<template>
  <div class="home">
     <VuePerfectScrollbar class="scroll-area" v-once :settings="settings" @ps-scroll-y="scrollHandle">
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
     </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import AppHeader from "../components/AppHeader/AppHeader";
import AppSubHeader from "../components/AppHeader/AppSubHeader";
// import Users from "../components/Data/Users/Users"
import Landing from "../components/Landing/Landing";
export default {
  components: {
    AppHeader,
    AppSubHeader,
    Landing,
    VuePerfectScrollbar
  },
  data() {
    return {
      name: "app",
      settings: {
        maxScrollbarLength: 60
      }
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.scroll-area {
  position: relative;
  margin: auto;
  height: 100vh;
}
</style>
