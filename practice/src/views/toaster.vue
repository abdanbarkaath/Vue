<template>
    <div>

  <b-button class="mb-2" variant="primary" @click="toast('b-toaster-top-right')">
      Show toast
    </b-button>
  <!-- <b-toaster-top-full id="full">asdas</b-toaster-top-full> -->
     <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
      Hello, world! This is a toast message.
     </b-toast>
    </div>
  
</template>

<script>
export default {
    methods:{
        toast(){
            this.$bvToast.toast(`Toast body content`, {
          title: `Toaster`,
          toaster: 'b-toaster-top-full',
          solid: true,
          appendToast: false,
          autoHideDelay:1000	
        })
        }
    }

}
</script>

<style>

</style>