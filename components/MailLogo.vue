<template lang="pug">
#header-div
    .headerimages
        .icon-container( @click='onClick')
          IconBase(icon-name="yellow brick group" height="15vh" :icon-color=' light? "black" : "white" ' class="rotating")
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

.click-box
  position: absolute
  display: block
  height: 100%
  width: 30%
  margin: 0 auto
  top: 0
  left: 35%
  cursor: url("../assets/eye.png"), auto

@keyframes rotating {
    from {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}
@-webkit-keyframes rotating {
    from {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}
.rotating {
    -webkit-animation: rotating 9s linear infinite;
    -moz-animation: rotating 9s linear infinite;
    -ms-animation: rotating 9s linear infinite;
    -o-animation: rotating 9s linear infinite;
    animation: rotating 9s linear infinite;
}
</style>
