<template lang="pug">
#header-div
    .headerimages
        .icon-container(@click='onClick')
            IconThree(icon-name="yellow brick group" width="100%" height="100%" :icon-color=' light? "black" : "white" ' rotate=true)
              component(:is="componentName[this.count]" )
            .click-box
</template>

<script>

import IconThree from './IconThree.vue'

export default {
  name: 'AppHeader',
  components: {
    IconThree
  },
  data () {
    return {
      activeLink: 'navigation',
      count: 0,
      headerColor: 'black',
      componentName: ['ybg-mail-service', 'ybg-mail-bxb', 'ybg-mail-diamond']
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    onClick () {
      this.count++
      if (this.count > 2) { this.count = 0 }
    }
  }
}
</script>

<style scoped lang="stylus">
#header-div
  width 10%
  position: relative
  z-index : 900
  margin: 0 auto
  text-align: center
  @media(max-width: 767px){
    width 25%
  }
  @media(min-width: 768px){
    width 15%
  }
  @media(min-width: 1001px){
    width 12%
  }
  @media(min-width: 1200px){
    width 8%
  }
.icon-container
  position: relative
  padding-top: 1vh
  width: 100%
  @media(max-width: 767px){
      padding-top: 0
  }

.click-box
  position: absolute
  display: block
  height: 100%
  width: 10%
  margin: 0 auto
  top: 0
  left: 45%
  cursor: url("../assets/eye.png"), auto

</style>
