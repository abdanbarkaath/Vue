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
                <span>{{shoe.name}}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col2" align-self="start">
                <span>₹{{shoe.price}}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col2" align-self="start">
                <span>{{shoe.company}}</span>
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
import { mapActions} from "vuex";

export default {
  components: {
    AppHeader,
    AppSubHeader
  },
  data() {
    return {
      loader:false,
      id: this.$route.params.id,
      shoe: "",
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
    ...mapActions([
      'productaction'
    ]),
    loaddata() {
      this.loader = true;
      axios.get(`http://localhost:3002/shoes/${this.id}`).then(response => {
        this.shoe = response.data;
        this.loader = false;
      });
    },
    addtocart(product){
      this.productaction(product)
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