<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <div id="main">
      <div class="container-fluid">
        <div id="info">
          <h3>Dashboard</h3>
          <button class="btn btn-outline-primary">
            <img src="https://img.icons8.com/nolan/26/000000/positive-dynamic.png" />
          </button>
          <button class="btn btn-outline-primary">
            <img src="https://img.icons8.com/color/26/000000/combo-chart.png" />
          </button>
        </div>
      </div>
    </div>
    <div class="row rows">
      <div class="col-lg-4 col1 col-sm-6" v-for="tshirt of tshirts" :key="tshirt.id">
        <div class="card " style="width: 200px;margin:0 auto">
          <div class="card-body">
            <img class="card-img-top" id="img-1" v-bind:src="tshirt.image" alt="Card image cap" />
            <h5 class="card-title">{{tshirt.name}}</h5>
            <p class="card-text">₹{{tshirt.price}}</p>
            <a class="btn btn-outline-warning" @click="addToCart(tshirt,i)">
              <p>add to cart</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HelloWorld from "../components/HelloWorld";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(["bikes"])
  },
  components: {
    HelloWorld
  },
  data() {
    return {
      tshirts:[
        {   
            id:1,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/1/22/da35719a-e5a3-47e1-9abf-b77aafd8c32c1548138100408-1.jpg",
            name:"Calvin klien",
            price:700,
            count:1
        },
        {
            id:2,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1780784/2017/3/10/11489139677796-United-Colors-of-Benetton-Men-Grey-Melange-Solid-V-Neck-T-Shirt-5021489139677579-1.jpg",
            name:"Lee",
            price:1200,
            count:1
        },
        {
            id:3,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10360601/2019/8/9/e6fe7f53-ea25-40a0-86ba-1d90058621441565349665438-HM-Men-Black-Solid-V-neck-T-shirt-Slim-Fit-7161565349664543-1.jpg",
            name:"H&M",
            price:3000,
            count:1
        },
        {
            id:4,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2303557/2018/1/24/11516793447454-Roadster-Men-Navy-Blue-Striped-Henley-Neck-T-shirt-3351516793447274-1.jpg",
            name:"Hrx",
            price:799,
            count:1
        },
        {
            id:5,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10360957/2019/8/13/e45e8c81-a97a-4cb5-b1e6-7037045f1b891565683193840-HM-Men-Grey-Striped-3-pack-T-shirts-Regular-Fit-987156568319-1.jpg",
            name:"Roadster",
            price:999,
            count:1
        },
        {
            id:6,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7187020/2018/12/18/a882e837-454a-45b8-a064-45660ba6ee201545124603056-Puma-Men-Tshirts-8171545124601033-1.jpg",
            name:"Puma",
            price:1999,
            count:1
        },
    ]
    };
  },
  methods: {
    loadKey() {
      axios.get("http://localhost:3000/users").then(response => {
        response.data.forEach(e => {
          this.users.push(e);
        });
        console.log(this.users[0].address.street);
      });
    }
  },
  mounted() {
    this.loadKey();
  }
};
</script>

<style lang="scss" scoped>


///Body and divs
#info {
  margin-bottom: 0px;
  margin: 0 5px 0 5px;
  padding: 5px;
  // background: ;
  text-align: right;
  button {
    height: 30px;
    width: 30px;
    padding: 0;
    margin-right: 2px;
  }
  h3 {
    display: inline;
    float: left;
    color: #7952b3;
    margin-bottom: 0;
  }
}
.col1 {
  padding: 5px 10px 0px 20px;
  .extend1 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body1 {
      padding: 20px 0 20px 0;
    }
  }
}
.col2 {
  padding: 5px 20px 0px 10px;
  .extend2 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body2 {
      padding: 20px 0 20px 0;
    }
  }
}
.col3 {
  padding: 5px 10px 0px 20px;
  .extend3 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body3 {
      padding: 20px 0 20px 0;
    }
  }
}
.col4 {
  padding: 5px 10px 0px 10px;
  .extend4 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body4 {
      overflow: hidden;
      padding: 20px 0 20px 0;
    }
  }
}
.col5 {
  padding: 5px 10px 0px 10px;
  .extend5 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body5 {
      // padding: 20px 5 20px 0px;
      overflow: hidden;
    }
  }
}
.col6 {
  padding: 5px 20px 0px 10px;
  .extend6 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body6 {
      // padding: 20px 0 20px 50px;
      overflow: hidden;
    }
  }
}
.col7 {
  padding: 5px 20px 0px 20px;
  margin-top: 10px;
  .extend7 {
    width: 100%;
    height: 280px;
    margin: 1px;
    border: 0px;
    .body7 {
      padding: 20px 0 20px 0;
    }
  }
}
.card-header {
  font-family: cursive;
  background: gainsboro;
  font-size: 26px;
  padding: 0px;
}
</style>