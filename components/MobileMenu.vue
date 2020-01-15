<template lang="pug">
#mobile-menu
    .menu-icon(@click="openMenu")
        img(:src=' light? getImgUrl("menu", ".png") : getImgUrl("menu_white", ".png")')
    .menu-container(:class="opened? 'open' : 'closed'")
        .menu
            .nav(@click="openMenu")
                img(src="../assets/close2.png" width="32px" height="32px")
            .nav(@click="goToLink('/'); rotateCube('showFront'); onClick()")
                p HOME
            .nav(@click="show = !show")
                p WORK
            ul(v-if='show' class="list")
                li(@click="goToLink('os')") Our Street
                li(@click="goToLink('acr')") All City Riders
                li(@click="goToLink('jump')") Jump
                li(@click="goToLink('mas')") Mas Taco
                li(@click="goToLink('btm')") Bottomless
                li(@click="goToLink('shang')") Shangri-La
                li(@click="goToLink('cabin')") The Cabin
                li(@click="goToLink('alt')") Art Life Tour
                li(@click="goToLink('bm')") Bardis & Miry
            .nav(@click="goToLink('contact')")
                p CONTACT
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
      show: false
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
    }
  }
}

</script>

<style scoped lang="stylus">

*
  margin: 0px

.menu-icon
    z-index : 1300
    position: fixed
    top: 0
    right: 0
    padding 2vw

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

.menu-container
    top: 0
    position: fixed
    z-index: 1200
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

li:hover
    color white

</style>
