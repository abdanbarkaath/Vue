<template>
  <div>
    <b-container fluid class="ml-3 mt-3">
      <b-row class="ml-5" align-h="start">
        <b-col class="ml-5" >
          <router-link to="/shoes" class="ml-5"><span class="link">Shoes</span></router-link>
          <hr />
        </b-col>
      </b-row>
    </b-container>
    <div v-if="loader" class="text-center spin">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <b-container fluid>
      <b-row class="main-row" >
        <b-col class="main-col" sm="1" align-self="center">
          <font-awesome-icon class="fonts"  v-if="slide>0" @click="left" icon="arrow-alt-circle-left" size="3x"/>
        </b-col>
        <b-col class="main-col" sm="10">
          <b-row>
            <b-col class="col" v-for="(shoe,index) in lists" :key="index.id">
              <b-card @click="goto(shoe.id)" class="card">
                <b-card-title class="card-title">{{shoe.name}}</b-card-title>
                <b-card-text>{{shoe.isActive}}</b-card-text>
                <b-card-text>{{shoe.company}}</b-card-text>
                <b-card-text class="price">{{shoe.price}}</b-card-text>
                <b-btn variant="outline-success">Add to Cart</b-btn>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="main-col" sm="1" align-self="center">
          <font-awesome-icon class="fonts" v-if="slide<=loops-2" @click="right" icon="arrow-alt-circle-right" size="3x"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      shoes: [],
      perPage: 4,
      loops: "",
      loader:false
    };
  },
  methods: {
    /* eslint-disable */
    goto(id){
      this.$router.push('/shoe/'+id);
    },
    right() {
        console.log(this.loops);
        if(this.slide+1 < this.loops ){
            this.slide++;
        }else{
            this.slide = 0 ;
        }
        console.log(this.slide);
    },
    left() {
        if(this.slide>0){
            this.slide--;
        }else{
            this.slide = this.loops -1;
            console.log("min val");
        }
        console.log(this.slide);
    },
    /* eslint-disable */
    loaddata() {
      this.loader = true;
      axios.get(`http://localhost:3002/shoes`).then(response => {
        this.shoes = response.data;
        var temp = this.shoes.length / 4;
        this.loops =  Math.round(temp);
        console.log(this.loops);
        this.loader = false;
      });
    }
  },
  computed: {
    lists() {
      var tempslide = this.slide + 1;
      var store = this.shoes.slice(
        (tempslide - 1) * this.perPage,
        tempslide * this.perPage
      );
      return store;
    }
  },
  mounted() {
    this.loaddata();
  }
};
</script>

<style lang="scss" scoped>
.link{
  font-size: 30px;
  color: black;
  float: left;
}
.link:hover{
  text-decoration: none;
}
.main-row{
    height: 300px;
    .main-col{
        .col{
            height: 280px;
            .price{
              font-weight: 800;
            }
        }
    }
}
.card{
    height:100%;
    text-align: left;
    color: #3d5c5c;
    box-shadow: 5px 5px 10px 1px #737878;
}
.select{
  width: 90px;
}
.fonts{
  color: #0275d8;
}
.fonts:hover,.card:hover{
  cursor: pointer;
}

</style>