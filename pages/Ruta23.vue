<template lang="pug">
#ruta-main
  .bg(:style='[ light? {"background" : bgc } : {"background" : "black"} ]')
  MobileMenu
  .gridbackground(:style="[gridded? gridStyles : noGridStyles]")
  .parental(ref="parental")
    TextBox.absolute(v-for="(box, index) in boxCount" :initW='600' :initH='100' :top='72' :left='96' :index="index" :boxCount="boxCount" )
    //TextBox.absolute(v-once :initW='1356' :initH='500' :top='180' :left='12' :textsize=256 content="Ruta 23")
  .bottombar
    .bottomcontrols
      .inlinedivsquare(@click="changeBGColor('black')" style="background: black")
      .inlinedivsquare(@click="changeBGColor('#0076bd')" style="background: #0076bd")
      .inlinedivsquare(@click="changeBGColor('#f26760')" style="background: #f26760; border: 1px solid white")
      .inlinedivsquare(@click="changeBGColor('white')" style="background: white")
      .inlinedivgrid(@click="gridded = !gridded" style="color: white") GRID
      .inlinedivplus(@click="createTextBox" style="color: white; margin-left: 24px") +
      .inlinedivgrid(@click="resetCount" style="color: white; margin-left: 24px") RESET
</template>

<script>

import { mapState } from 'vuex'
import VueDraggableResizable from 'vue-draggable-resizable'
import MobileMenu from '../components/MobileMenu.vue'
import DarkLight from '../components/DarkLight.vue'
import TextBox from '../components/TextBox.vue'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
  name: 'Ruta23',
  components: {
    MobileMenu,
    DarkLight,
    VueDraggableResizable,
    TextBox
  },
  data () {
    return {
      gridded: true,
      strokecolor: 'white',
      backgroundcolor: 'white',
      boxCount: 1
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    },
    ...mapState({
      bgc: state => state.backgroundchange.bgc
    }),
    gridStyles () {
      return {
        'background': 'linear-gradient(-90deg, rgba(255, 103, 93, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(255, 103, 93, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
      }
    },
    noGridStyles () {
      return {
        'background': this.backgroundcolor
      }
    }
  },
  methods: {

    changeBGColor (color) {
      this.backgroundcolor = color
      this.$store.dispatch('backgroundchange/backgroundChange', color)
    },
    createTextBox () {
      this.boxCount = this.boxCount + 1
    },
    resetCount () {
      this.boxCount = 0
    }
  }
}
</script>

<style lang="stylus">
#ruta-main
  overflow hidden

.gridbackground
  position absolute
  height 98vh
  width 100vw

.parental
  height 100vh
  width 100vw
  position relative

*
  margin: 0px
  padding: 0px

.bg
  position fixed
  background : black
  min-height: 100%;
  transition 1s
  width: 100%

.inlinedivsquare
  display inline-block
  margin 12px 12px
  cursor crosshair
  width 25px
  height 25px

.inlinedivsquare:hover
  border 1px solid black !important

.inlinedivgrid
  position relative
  display inline-block
  line-height 0
  top -12px
  font-family: 'ruta_23regular', sans-serif
  font-size 2em
  cursor crosshair

.inlinedivplus
  position relative
  display inline-block
  line-height 0
  top -12px
  font-family: Verdana, Geneva, Tahoma, sans-serif
  font-size 2em
  cursor crosshair

.bottombar
  position fixed
  height 48px
  bottom 0
  background #ff675d
  color white
  width 100%
  z-index 100
.absolute
  position absolute

</style>
