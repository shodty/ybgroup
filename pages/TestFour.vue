
<template lang="pug">
#testfour
    //.title FRIENDO / IDENTITY
    //.leftarrow
    //.rightarrow
    //.full.gray
        //ctrimg.testimg
    //.backbtn BACK
    //div.footer
        img.footer.pointer.icongif(src='../assets/img/icon_colorgif.gif')
        p.pointer.align-center click to enter
    .flexcontainer
        nuxt-link.redbox(to='/')
            img.icongif.pointer(src='../assets/img/icon_colorgif.gif')
            p.align-center.pointer(:class='showtxt? "show" : "hide"') ENTER
</template>

<script>

import SliderCounter from '../components/SliderCounter.vue'

export default {
  name: 'Splash',
  layout: 'splash',
  components: {
    SliderCounter
  },
  data () {
    return {
      count: 1,
      imgClass: 'testimg1',
      showtxt: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      setTimeout(() => { this.showtxt = true }, 2000)
    })
  },
  methods: {
    showText () {
      this.showtxt = true
    }
  }
}
</script>

<style lang="stylus">

#testfour
    height: 100vh
    width: 100vw
    background #c7c9c9

.flexcontainer
  height 100%
  display: flex
  flex-direction: column
  align-items: center

.redbox
    align-self: center
    background transparent
    width 200px
    height 200px
    margin auto

.icongif
    object-fit: cover
    width 100%
    height 100%

p
    color #000000
    font-family: 'cardinal_grotesque_wideBlack';
    font-size: 56px
    line-height 1.5

.align-center
    text-align center

.pointer
    cursor: url('../assets/hand.png'), auto

.hide
    opacity 0
    transition opacity 2s ease
.show
    opacity 1
    transition opacity 2s ease

.flexcontainer a
  text-decoration: none !important
</style>
