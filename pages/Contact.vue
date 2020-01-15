<template lang="pug">
#contact-main
  .bg(:style='[ light? {"background" : "white" } : {"background" : "black"} ]')
  MobileMenu
  DarkLight
  .text(:class='light? "black" : "white" ')
    h1 (LET’S&nbspWORK TOGETHER!)
    //h2 +1&nbsp916&nbsp123&nbsp4567
    br
    h2
      a(href="mailto:contact@ybgroup.us" :class='light? "black" : "white" ') contact&nbsp
    h3
      a(href="mailto:contact@ybgroup.us" :class='light? "black" : "white" ') (AT)
    h2
      a(href="mailto:contact@ybgroup.us" :class='light? "black" : "white" ')  YBGROUP.US
    br
    br
    h4
      a(href="https://www.instagram.com/yellowbrickgroup/" :class='light? "black" : "white" ') @yellowbrickgroup

</template>

<script>

import MobileMenu from '../components/MobileMenu.vue'
import DarkLight from '../components/DarkLight.vue'

export default {
  name: 'Contact',
  components: {
    MobileMenu,
    DarkLight
  },
  data () {
    return {
      activeLink: 'navigation',
      count: 0
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  }
}
</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding: 0px

.bg
  position fixed
  background : black
  min-height: 100%;
  transition 1s
  width: 100%

.text
  margin 0 auto
  text-align center
  position: relative
  @media(max-width: 767px){
    padding-top  16%
  }
  @media(min-width: 768px){
    padding-top  6vw
  }

.white {
    color: white
    transition: 1s
}

.black {
    color: black
    transition: 1s
}

h1
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  letter-spacing: 1px
  font-size: 11em
  line-height : 1
  @media(max-width: 767px){
    font-size: 3em
  }

h2
  font-family: 'cardinal_grotesque_condenseBd', sans-serif
  letter-spacing: 1px
  font-size: 16em
  line-height : .9
  display: inline;
  @media(max-width: 767px){
    font-size: 6em
  }

h3
  font-family: 'goopersemibold_italic', sans-serif
  letter-spacing: 1px
  font-size: 16em
  line-height : .9
  display: inline;
  @media(max-width: 767px){
    font-size: 6em
  }

h4
  font-family: 'cardinal_grotesque_condenseBd', sans-serif
  letter-spacing: 1px
  font-size: 8em
  line-height : .9
  display: inline;
  @media(max-width: 767px){
    font-size: 3em
  }

h4 a:hover
  text-decoration none

</style>
