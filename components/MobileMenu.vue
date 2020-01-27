<template lang="pug">
#mobile-menu
    .menu-icon(@click="openMenu")
        img(:src=' light? getImgUrl("menu", ".png") : getImgUrl("menu_white", ".png")')
    .menu-container(:class="opened? 'open' : 'closed'")
        .menu( :class='mailed? "mailservice" : null')
            .nav(@click="openMenu")
                img(src="../assets/close2.png" width="32px" height="32px")
            .nav
                nuxt-link(to='/')
                  p(@click="openMenu(); rotateCube('showFront'); onClick()") HOME
            .nav(@click="show = !show")
                p WORK
            ul(v-if='show' class="list")
                nuxt-link(to='ourstreet')
                  li(@click="openMenu()") Our Street
                nuxt-link(to='allcityriders')
                  li(@click="openMenu()") All City Riders
                nuxt-link(to='jump')
                  li(@click="openMenu()") Jump
                nuxt-link(to='mastaco')
                  li(@click="openMenu()") Mas Taco
                nuxt-link(to='bottomless')
                  li(@click="openMenu()") Bottomless
                nuxt-link(to='shangrila')
                  li(@click="openMenu()") Shangri-La
                nuxt-link(to='thecabin')
                  li(@click="openMenu()") The Cabin
                nuxt-link(to='artlifetour')
                  li(@click="openMenu()") Art Life Tour
                nuxt-link(to='bardismiry')
                  li(@click="openMenu()") Bardis & Miry
            .nav
              nuxt-link(to='mailservice')
                .mailnav
                  p(@click="openMenu()" @mouseenter="mail()" @mouseleave="mail()") MAIL SERVICE
            .nav
              nuxt-link(to='contact')
                p(@click="openMenu()") CONTACT
            b-row(class="copyright")
                b-col(xs=6 md=6 lg=4 class='ml-auto mr-auto')
                    img(src="../assets/copyright.png" width="50%")
</template>

<script>
import { EventBus } from '../event-bus.js'

export default {
  name: 'ToTop',
  components: {
  },
  data () {
    return {
      opened: false,
      faceColor: 'black',
      show: false,
      mailed: false
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    openMenu () {
      this.opened = !this.opened
      return this.opened
    },
    goToLink (link) {
      this.openMenu()
      this.$router.push(link)
      window.scrollTo(0, 0)
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    },
    rotateCube (side) {
      this.$store.dispatch('facechange/faceChange', side)
    },
    onClick () {
      EventBus.$emit('menuChange', 'start')
    },
    mail () {
      this.mailed = !this.mailed
    }
  }
}

</script>

<style scoped lang="stylus">

*
  margin: 0px

a
  text-decoration: none
  color: black
  margin 0 auto

.menu-icon
    z-index : 2700
    position: fixed
    top: 0
    right: 0
    padding 2vw
    cursor: url('../assets/hand.png'), auto

.menu-icon img {
    @media(max-width: 767px) {
        width 12vw
        margin-right: 2vw
        margin-top: 2vw
    }
    @media(min-width: 768px) {
        width 4vw
    }
}

p
  color: black
  transition: .2s

p:hover
  color: white

.menu-container
    top: 0
    position: fixed
    z-index: 2500
    margin 0
    padding 0
    left: 100%;
    height 100vw

.menu
    position: fixed
    top: 0
    width: 100%
    height: 100%
    color: black
    border-left: 2px solid black;
    line-height: 1
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    font-weight: 1000
    font-size: 54px
    text-align: center
    background: #f3b120
    transition: .1s
    @media(max-width: 767px) {
      font-size: 46px
    }
.yellowmenu
    background: #f3b120

.bluemenu
    background: #83cef2

.menu.mailservice

.menu-container.closed {
    transition: left 1s
}

.menu-container.open {
    left: 0
    transition: left 1s

}

.menu p
    padding-bottom: 10px
    padding-top:20px
    margin 0 auto
    cursor: url('../assets/hand.png'), auto

.nav img
    margin: 25px

.copyright
    margin-top: 10%

.list
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform-origin: top;
  transition: transform .4s ease-in-out;
  overflow: hidden;

li
    margin 0 auto
    padding-bottom 10px
    font-size: 24px
    font-weight: 100
    cursor: url('../assets/hand.png'), auto
    color black
    transition .25s

.nav img
    cursor: url('../assets/hand.png'), auto

li:hover
    color white

</style>
