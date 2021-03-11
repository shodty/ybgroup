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
    height 36x
    width 36px

img
    width: 36px
    margin-left: 0px
    margin-top -2px
</style>
