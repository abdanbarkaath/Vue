<template>
  <div>
    <AppHeader></AppHeader>
    <AppSubHeader></AppSubHeader>
    <div v-if="loader" class="text-center spin">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <div>
      <b-container v-if="!loader" class="mt-5">
        <b-row class="main-row">
          <b-col sm="6" class="col-1">
            <div class="image-div">
            </div>
          </b-col>
          <b-col class="col-2" align-self="start" sm="6">
            <b-row>
              <b-col class="col1" align-self="start">
                <span>{{shirt.name}}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col2" align-self="start">
                <span>₹{{shirt.price}}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col2" align-self="start">
                <span>{{shirt.company}}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col3" align-self="start">
                <span>
                  <b-btn class="btn" variant="success">Add to cart</b-btn>
                </span>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import AppHeader from "../AppHeader/AppHeader";
import AppSubHeader from "../AppHeader/AppSubHeader";
import axios from "axios";
export default {
  components: {
    AppHeader,
    AppSubHeader
  },
  data() {
    return {
      loader:false,
      id: this.$route.params.id,
      shirt: "",
    };
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log(to.params.id);
      console.log(this.id);
      console.log(from);
      this.id = to.params.id;
    },
    id: function() {
      this.loaddata();
    },
  },
  methods: {
    loaddata() {
      this.loader = true;
      axios.get(`http://localhost:3001/tshirts/${this.id}`).then(response => {
        this.shirt = response.data;
        console.log(this.shirt);
        this.loader = false;
      });
    }
  },
  mounted() {
    this.loaddata();
  }
};
</script>

<style lang="scss" scoped>
.spin{
  position: absolute;
    left: 50%;
    top: 50%;
}
.main-row {
  height: 500px;
  .col-1 {
    height: 100%;
    .image-div {
      height: 100%;
      .left-image {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }
  }
  .col-2 {
    .col1 {
      height: 100px;
      span {
        font-size: 40px;
        float: left;
      }
    }
    .col2 {
      height: 100px;
      span {
        font-weight: 800;
        font-size: 20px;
        float: left;
      }
    }
    .col3 {
      height: 100px;
      span {
        float: left;
        .btn {
          width: 200px;
        }
      }
    }
  }
}
</style>