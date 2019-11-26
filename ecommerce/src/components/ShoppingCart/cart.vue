<template>
  <div>
    <AppHeader></AppHeader>
    <AppSubHeader></AppSubHeader>
    <b-container>
      <b-row>
        <b-col>
          <b-row>
            <b-col></b-col>
          </b-row>
          <b-row>
            <b-col></b-col>
          </b-row>
          <b-row>
            <b-col></b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col><b-btn variant="success">Proceed</b-btn></b-col>
          </b-row>
          <b-row>
            <b-col><b-btn variant="danger">Remove from cart</b-btn></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "../AppHeader/AppHeader";
import AppSubHeader from "../AppHeader/AppSubHeader";
export default {
  components: {
    AppHeader,
    AppSubHeader
  }
};
</script>

<style>
</style>