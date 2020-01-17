<template lang="pug">
#header-div
    .headerimages
        .icon-container( @click='onClick')
            IconBase(icon-name="yellow brick group" width="15vh" height="15vh" :icon-color=' light? "black" : "white" ' rotate=true)
              component(:is="componentName[this.count]" )
</template>

<script>

import IconBase from './IconBase.vue'

export default {
  name: 'AppHeader',
  components: {
    IconBase
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
  position: relative
  z-index : 900
  margin: 0 auto
  text-align: center

.icon-container
  position: relative
  padding-top: 1vh
  width: 100%
  @media(max-width: 767px){
      padding-top: 0
  }

</style>
