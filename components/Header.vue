<template lang="pug">
#header-div
    .headerimages
        .icon-container(class='hide-on-mobile')
          IconTwo(icon-name="yellow brick group" width="80vw" height="5vw" :icon-color=' light? "black" : "white" ')
            component(:is="componentName[this.count]")
          .click-box(@click='onClick')
        .mobile-container(class='hide-on-desktop')
          img(:src=' light? getImgUrl("ybg_bubbly", ".png") : getImgUrl("ybg_bubbly_white", ".png")'  width="80%")
        .mobile-instructions(class='hide-on-desktop')
          img(:src=' light? getImgUrl("welcome_mobile", ".png") : getImgUrl("welcome_mobile_white", ".png")' width="60%" v-if='displayNavBar')
    NavBar(class='hide-on-mobile' v-if='displayNavBar')
</template>

<script>

import NavBar from './NavBar.vue'
import IconTwo from './IconTwo.vue'

export default {
  name: 'AppHeader',
  components: {
    NavBar,
    IconTwo
  },
  props: { displayNavBar: Boolean },
  data () {
    return {
      activeLink: 'navigation',
      count: 0,
      headerColor: 'black',
      componentName: ['yellow-brick-group', 'ybg-solid', 'ybg-bricked', 'ybg-hollow']
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  mounted () {
    this.$bus.$on('moviechange', (movie, play) => {
      if (play) {
        this.count = 3
        return this.count
      }
    })
  },
  methods: {
    onClick () {
      this.count++
      if (this.count > 3) { this.count = 0 }
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    }
  }
}
</script>

<style scoped lang="stylus">
#header-div
  position: relative
  z-index : 900
  margin: 0 auto
  text-align: center

.headerimages {
  @media(min-width:768px) {
    padding-bottom: 1vw
  }
  @media(max-width:767px) {
    padding-bottom: 20px
  }
}
.icon-container
  position: relative
  width: 100%

.click-box
  position: absolute
  display: block
  height: 100%
  width: 30%
  margin: 0 auto
  top: 0
  left: 35%
  cursor: url("../assets/eye.png"), auto

.mobile-container
  color: white
  padding-bottom: 20px
</style>
