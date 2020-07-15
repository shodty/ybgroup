<template lang="pug">
#dark-light
  .icon-holder(v-if="darkmode" :class="[{ lightmode: light }, { darkmode: !light }]" @click='flip')
      IconBase(icon-name="dark light" width="40" height="40" :icon-color=' light? "black" : "white" ')
          component(is="sun-moon")
  .icon-holder(v-else :class="[{ lightmode: light }, { darkmode: !light }]")
      IconBase(icon-name="dark light" width="40" height="40" :icon-color=' light? "black" : "white" ')
          component(is="sun-moon")
</template>

<script>

import IconBase from './IconBase.vue'

export default {
  name: 'DarkLight',
  components: {
    IconBase
  },
  props: {
    darkmode: { type: Boolean, default: true }
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

.icon-holder
    transition: all 2s

.darkmode
    transform: rotate(180deg)

.lightmode
    transform: rotate(0deg)

</style>
