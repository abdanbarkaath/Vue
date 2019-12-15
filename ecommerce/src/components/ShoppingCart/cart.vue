<template>
  <div>
    <AppHeader></AppHeader>
    <AppSubHeader></AppSubHeader>
    <div class="empty">
      <h1 v-if="total.length == 0"><font-awesome-icon icon="frown" /> Shopping cart is empty</h1>
    </div>
    <b-container>
        <b-row v-if="total.length !=0">
          <b-col>
            {{total}}
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "../AppHeader/AppHeader";
import AppSubHeader from "../AppHeader/AppSubHeader";
import { mapActions,mapGetters } from "vuex";

export default {
  components: {
    AppHeader,
    AppSubHeader
  },
  methods:{
    ...mapActions([
      'productaction'
    ]),
  },
  computed:{
    ...mapGetters(["total"])
  },
};
</script>

<style lang="scss" scoped>
.empty{
  margin-top: 10%;
}
</style>