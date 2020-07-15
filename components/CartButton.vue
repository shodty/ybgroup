<template lang="pug">
#cart-button
    .view-cart-wrapper(v-if='!$store.state.shopify.cartOpen')
        .view-cart(@click="$store.commit('shopify/openCart')")
            img(:src=' light? getImgUrl("cart", ".png") : getImgUrl("cart_whi", ".png")')

</template>

<script>

export default {
  name: 'HomeButton',
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    getImgUrl (pic, ext) {
      return require('../assets/img/icons/' + pic + ext)
    }
  }
}

</script>

<style scoped lang="stylus">
#cart-button
    height 40px
    width 40px

.view-cart img
    width: 28px
    height: 28px
    margin-left: 5px
    margin-top: 8px
    background: no-repeat
</style>
