<template>
  <div>
    <VuePerfectScrollbar
      class="scroll-area"
      v-once
      :settings="settings"
      @ps-scroll-y="scrollHandle"
    >
      <AppHeader @enter="recieve"></AppHeader>
      <AppSubHeader></AppSubHeader>
      <div v-if="loader" class="text-center spin">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <div class="overflow-auto container mt-5">
        <b-row>
          <b-col
            class="mb-5 mt-1"
            sm="4"
            v-for="(shoe, index) in lists"
            :key="index.id"
          >
            <div>
              <b-card class="card">
                <b-card-title @click="goto(shoe.id)" class="card-title">{{
                  shoe.name
                }}</b-card-title>
                <b-card-text @click="goto(shoe.id)" class="card-text">{{
                  shoe.isActive
                }}</b-card-text>
                <b-card-text @click="goto(shoe.id)" class="card-text">{{
                  shoe.company
                }}</b-card-text>
                <b-card-text @click="goto(shoe.id)" class="price"
                  >₹{{ shoe.price }}</b-card-text
                >
                <b-btn
                  class="card-btn"
                  @click="addtocart(shoe)"
                  variant="primary"
                  >Add to Cart</b-btn
                >
              </b-card>
            </div>
          </b-col>
        </b-row>
        <b-table
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
        <b-pagination
          :total-rows="rows"
          v-model="currentPage"
          :per-page="perPage"
          align="center"
        />
      </div>
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AppHeader from "../../AppHeader/AppHeader";
import AppSubHeader from "../../AppHeader/AppSubHeader";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  components: {
    AppHeader,
    AppSubHeader,
    VuePerfectScrollbar
  },
  props: ["input"],
  name:'app',
  data() {
    return {
      shoes: [],
      perPage: 9,
      currentPage: 1,
      loader: false,
      val: "",
      searchedItems: [],
       settings: {
        maxScrollbarLength: 60
      }
    };
  },
  methods: {
    scrollHandle(evt) {
      console.log(evt)
    },
    ...mapActions(["productaction"]),
    //get the data from the props and is searched here

    searched() {
      this.searchedItems = this.shoes.filter(item => {
        if (
          this.val
            .toLowerCase()
            .split(" ")
            .every(s => item.name.toLowerCase().includes(s))
        ) {
          return this.val
            .toLowerCase()
            .split(" ")
            .every(s => item.name.toLowerCase().includes(s));
        }
      });
      // this.searchedItems = this.val
      //   ? this.shoes.filter(
      //       shoe => shoe.name.toLowerCase().search(this.val) > -1
      //     )
      //   : this.shoes;
    },
    goto(id) {
      this.$router.push("/shoe/" + id);
    },
    loaddata() {
      this.loader = true;
      axios.get("http://localhost:3002/shoes").then(response => {
        console.log(response.data);
        this.shoes = response.data;
        this.searchedItems = this.shoes;
        this.loader = false;
      });
    },
    recieve(val) {
      this.val = val;
    },
    addtocart(product) {
      this.productaction(product);
    }
  },
  watch: {
    val() {
      this.searched();
      console.log(this.val);
    }
  },
  computed: {
    lists() {
      return this.searchedItems.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    rows() {
      window.console.log(this.searchedItems.length);
      return this.searchedItems.length;
    }
  },
  mounted() {
    this.loaddata();
  }
};
</script>

<style lang="scss" scoped>
.card {
  text-align: left;
  border: none;
  color: #3d5c5c;
  box-shadow: 0px 1px 5px 1px #737878;

  .price {
    font-weight: 800;
  }
}
.card-title:hover,
.card-text:hover {
  cursor: pointer;
}
.scroll-area {
  position: relative;
  margin: auto;
  height: 100vh;
}
</style>
