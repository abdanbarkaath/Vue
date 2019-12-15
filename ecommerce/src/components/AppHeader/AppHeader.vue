<template>
  <div>
    <div class="main">
      <b-navbar class="main-nav" toggleable="lg">
        <b-navbar-brand class="ml-5" href="#" @click="home">
          <font-awesome-icon icon="store" /> NavBar
        </b-navbar-brand>

        <b-nav-form class="mr-auto ml-2">
          <b-form-input @keyup="senddata" v-model="input" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="outline-danger">Search</b-button>
        </b-nav-form>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- Right aligned nav items -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto mr-5">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-navbar-nav>
              <b-btn @click="goto" class="ml-3" variant="danger">
                <font-awesome-icon icon="cart-plus" /> Cart
              </b-btn>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return{
      input:'',
      x:2
    }
  },
  // watch:{
  //   input(){
  //     console.log(this.input);
  //   }
  // },
  methods:{
    goto(){
      this.$router.push('/cart')
    },
    senddata(){
          this.$emit("enter",this.input);
          console.log(this.input);
        },
    home(){
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.main-nav {
  background: whitesmoke;
}
</style>