<template lang="pug">
#dark-light
    .desktop(class='hide-on-mobile')
        .icon-holder(:class="[{ lightmode: light }, { darkmode: !light }]" @click='flip')
            IconBase(icon-name="dark light" width="40" height="40" :icon-color=' light? "black" : "white" ')
                component(is="sun-moon")
    .mobile(class='hide-on-desktop')
        .icon-holder(:class="[{ lightmode: light }, { darkmode: !light }]" @click='flip')
            IconBase(icon-name="dark light" width="35" height="35" :icon-color=' light? "black" : "white" ')
                component(is="sun-moon")

</template>

<script>

import IconBase from './IconBase.vue'
import SunMoon from './icons/SunMoon.vue'

export default {
  name: 'DarkLight',
  components: {
    IconBase,
    SunMoon
  },
  data () {
    return {
      faceColor: 'black'
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    flip () {
      this.$store.dispatch('darklight/darkLight')
    }
  }
}

</script>

<style scoped lang="stylus">

*
    margin: 0px

#dark-light
    position: fixed
    top: 0
    left: 0
    z-index: 1000

.icon-holder
    transition: all 2s

.darkmode
    transform: rotate(180deg)

.lightmode
    transform: rotate(0deg)

.mobile
    margin-left: 3vw
    margin-top: 3vw

.desktop
    margin-left: .75vw
    margin-top: .75vw
</style>
