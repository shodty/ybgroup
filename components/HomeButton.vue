<template lang="pug">
#home-button
  nuxt-link(to='/')
    .desktop.hide-on-mobile
      img(:src=' light? getImgUrl("home_blk", ".png") : getImgUrl("home_whi", ".png")')
    .mobile.hide-on-desktop
      img(:src=' light? getImgUrl("home_blk", ".png") : getImgUrl("home_whi", ".png")')

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
#home-button
    height 40px
    width 40px

img
    width: 28px
    margin-left: 5px
    margin-top: 8px
</style>
