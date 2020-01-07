<template>
  <div>
     <VuePerfectScrollbar class="scroll-area" v-once :settings="settings" @ps-scroll-y="scrollHandle">
    <AppHeader></AppHeader>
    <AppSubHeader></AppSubHeader>
    <div v-if="total.length == 0" class="empty">
      <h1><font-awesome-icon icon="frown" /> Shopping cart is empty</h1>
    </div>
    <b-container>
      <div v-if="total.length != 0">
        <b-row v-for="(item, index) in total" :key="index">
          <b-col>
            <div class="mt-5">
              <b-card
                img-src="https://placekitten.com/300/300"
                img-alt="Card image"
                img-left
                class="mb-3 card"
              >
                <b-card-title>
                  {{ item.name }}
                </b-card-title>
                <b-card-text>
                  {{ item.company }}
                </b-card-text>
                <b-card-text class="price">
                  {{ item.price }}
                </b-card-text>
                <b-btn @click="addtocart(tshirt)" variant="outline-success"
                  >Buy Now</b-btn
                >
              </b-card>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
     </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AppHeader from "../AppHeader/AppHeader";
import AppSubHeader from "../AppHeader/AppSubHeader";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AppHeader,
    AppSubHeader,
    VuePerfectScrollbar
  },
  data(){
    return{
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  methods: {
    ...mapActions(["productaction"])
  },
  computed: {
    ...mapGetters(["total"])
  }
};
</script>

<style lang="scss" scoped>
.empty {
  margin-top: 10%;
}
.card {
  text-align: left;
}
.price {
  font-weight: 800;
}
.scroll-area {
  position: relative;
  margin: auto;
  height: 100vh;
}
</style>
