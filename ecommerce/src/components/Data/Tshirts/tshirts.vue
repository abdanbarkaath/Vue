<template>
  <div>
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
          v-for="(tshirt, index) in lists"
          :key="index.id"
        >
          <div>
            <b-card class="card">
              <b-card-title @click="goto(tshirt.id)" class="card-title">{{
                tshirt.name
              }}</b-card-title>
              <b-card-text @click="goto(tshirt.id)" class="card-text">{{
                tshirt.isActive
              }}</b-card-text>
              <b-card-text @click="goto(tshirt.id)" class="card-text">{{
                tshirt.company
              }}</b-card-text>
              <b-card-text @click="goto(tshirt.id)" class="price"
                >₹{{ tshirt.price }}</b-card-text
              >
              <b-btn
                class="card-btn"
                @click="addtocart(tshirt)"
                variant="primary"
                >Add to Cart</b-btn
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
      <b-pagination
        :total-rows="rows"
        v-model="currentPage"
        :per-page="perPage"
        align="center"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from "../../AppHeader/AppHeader";
import AppSubHeader from "../../AppHeader/AppSubHeader";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  components: {
    AppHeader,
    AppSubHeader
  },
  data() {
    return {
      employees: [],
      perPage: 9,
      currentPage: 1,
      tshirts: "",
      loader: false,
      val: "",
      searchedItems: []
    };
  },
  methods: {
    ...mapActions(["productaction"]),
    //gets the value from props and is searched here
    searched() {
      this.searchedItems = this.tshirts.filter(item => {
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
    },
    //   this.searchedItems = this.val
    //     ? this.tshirts.filter(shirt => shirt.name.search(this.val) > -1)
    //     : this.tshirts;
    // },
    
    //value recieved from the props
    recieve(val) {
      this.val = val;
    },
    goto(id) {
      this.$router.push("/tshirt/" + id);
    },
    loaddata() {
      this.loader = true;
      axios.get("http://localhost:3001/tshirts").then(response => {
        console.log(response.data);
        this.tshirts = response.data;
        this.searchedItems = response.data;
        this.loader = false;
      });
    },
    addtocart(product) {
      this.productaction(product);
    }
  },
  watch: {
    val() {
      this.searched();
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
.card:hover {
  cursor: pointer;
}
</style>
