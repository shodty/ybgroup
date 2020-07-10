<template lang="pug">
#ruta-main
  .bg(:style='[ light? {"background" : bgc } : {"background" : "black"} ]')
  MobileMenu
  .gridbackground(:style="[gridded? gridStyles : noGridStyles]")
  .parental(ref="parental")
    TextBox.absolute(v-if='layout === "purchase"' v-for="(box, index) in boxObject"  :initW='roundToMultiple(w * box.width, grid)' :initH='roundToMultiple(h * box.height, grid)' :top='roundToMultiple(y * box.y, grid)' :left='roundToMultiple(x * box.x, grid)' :index="index" :initTextSize='roundToMultiple(ts * box.textSize, 6)' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize')
    TextBox.absolute(v-if='layout === "one"' v-for="(box, index) in oneObject"  :initW='w * box.width' :initH='h * box.height' :top='y * box.y' :left='x * box.x' :index="index" :initTextSize='ts * box.textSize' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize')
    TextBox.absolute(v-for="(box, index) in chaosCount"  :initW='roundToMultiple(w * (Math.random()), grid)' :initH='roundToMultiple(h * (Math.random()),grid)' :top='roundToMultiple(y * (Math.random() * 6), grid)' :left='roundToMultiple(x * (Math.random() * 12), grid)' :index="index" :initTextSize='roundToMultiple(ts * Math.random(), 6)' :initStroked='(Math.random() >= 0.5)' :initTracking='Math.random()')
    TextBox.absolute(v-for="(box, index) in boxCount"  :initW='roundToMultiple(w * .25, grid)' :initH='roundToMultiple(h * .5, grid)' :top='y' :left='x' :index="index" :initTextSize='roundToMultiple(ts * .2, 6)')
  .bottombar
    b-row.bottomcontrols.no-overflow
      .inlinedivgrid.no-overflow(style="color: white; margin-left: 24px; cursor: default") BG:
      .inlinedivsquare.no-overflow(@click="changeBGColor('black')" style="background: black")
      .inlinedivsquare.no-overflow(@click="changeBGColor('#0076bd')" style="background: #0076bd")
      .inlinedivsquare.no-overflow(@click="changeBGColor('#f26760')" style="background: #f26760; border: 1px solid white")
      .inlinedivsquare.no-overflow(@click="changeBGColor('white')" style="background: white")
      .inlinedivgrid.no-overflow(@click="createTextBox" style="color: white; cursor: cell") ADD BOX
      .inlinedivgrid.no-overflow(style="color: white; margin-left: 24px; cursor: default") •
      .inlinedivgrid.no-overflow(@click="gridded = !gridded" style="color: white; font-family: Georgia") ⋮⋮⋮
      .inlinedivgrid.no-overflow(style="color: white; margin-left: 16px; cursor: default") •
      .inlinedivgrid.no-overflow(@click="resetCount" style="color: white; margin-left: 24px") START
      .inlinedivgrid.no-overflow(style="color: white; margin-left: 24px; cursor: default") •
      .inlinedivgrid.no-overflow(@click="one" style="color: white; margin-left: 24px") RUTA
      .inlinedivgrid.no-overflow(style="color: white; margin-left: 24px; cursor: default") •
      .inlinedivgrid.no-overflow(@click="chaos" style="color: white; margin-left: 24px") chaos machine
      .inlinedivgrid.no-overflow(style="color: white; margin-left: 24px; cursor: default") •
      .inlinedivgrid.no-overflow(@click="clear" style="color: white; margin-left: 24px") clear

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
      boxCount: 0,
      chaosCount: 0,
      grid: 12,
      stroked: false,
      layout: 'purchase',
      boxObject: [
        {
          width: 1,
          height: 0.725,
          y: 1,
          x: 1,
          textSize: 1,
          content: 'Ruta 23',
          align: 'center',
          color: '#f26760',
          tracking: 0,
          stroked: false,
          resize: true
        },
        {
          width: 0.9,
          height: 0.25,
          y: 0.25,
          x: 2.5,
          textSize: 0.25,
          content: '§§§§§§§§§§§§§§§§§§§§§§§§§§§§',
          align: 'left',
          color: '#f26760',
          tracking: 0.29,
          stroked: true
        },
        {
          width: 0.9,
          height: 0.25,
          y: 5.5,
          x: 2.5,
          textSize: 0.25,
          content: '§§§§§§§§§§§§§§§§§§§§§§§§§§§§',
          align: 'left',
          color: '#f26760',
          tracking: 0.29,
          stroked: true
        },
        {
          width: 0.66,
          height: 0.25,
          y: 1.05,
          x: 2.5,
          textSize: 0.1666,
          content: 'inspired by mexico city',
          align: 'left',
          color: '#0076bd',
          tracking: 0,
          stroked: false,
          resize: true
        },
        {
          width: 0.66,
          height: 0.25,
          y: 3.5,
          x: 6,
          textSize: 0.08333,
          content: 'a monospaced typeface by yellow brick group',
          align: 'right',
          color: 'black',
          tracking: 0,
          stroked: false,
          resize: true
        },
        {
          width: 0.65,
          height: 0.375,
          y: 3.7,
          x: 6.25,
          textSize: 0.4,
          content: 'purchase now',
          align: 'right',
          color: '#0076bd',
          tracking: 0,
          stroked: false,
          resize: true
        },
        {
          width: 0.1,
          height: 0.25,
          y: 3.93,
          x: 5,
          textSize: 0.08333,
          content: 'On Sale',
          align: 'right',
          color: '#f26760',
          tracking: 0,
          stroked: false,
          resize: false
        },
        {
          width: 0.15,
          height: 0.25,
          y: 4.07,
          x: 4.12,
          textSize: 0.25,
          content: '$25',
          align: 'right',
          color: '#f26760',
          tracking: 0,
          stroked: false,
          resize: false
        },
        {
          width: 0.4,
          height: 0.25,
          y: 4.9,
          x: 2.475,
          textSize: 0.1666,
          content: 'What\'s included?',
          align: 'left',
          color: '#0076bd',
          tracking: 0,
          stroked: false,
          resize: true
        },
        {
          width: 0.4,
          height: 0.25,
          y: 4.9,
          x: 10.9,
          textSize: 0.1666,
          content: 'Why purchase?',
          align: 'right',
          color: '#f26760',
          tracking: 0,
          stroked: false,
          resize: true
        },
        {
          width: 0.1,
          height: 0.35,
          y: 3.825,
          x: 3,
          textSize: 0.5,
          content: '®',
          align: 'center',
          color: '#0076bd',
          tracking: 0,
          stroked: false,
          resize: false
        }
      ],
      oneObject: [
        {
          width: 1,
          height: 0.725,
          y: 1,
          x: 1,
          textSize: 1,
          content: 'Ruta 23',
          align: 'center',
          color: '#f26760',
          tracking: 0,
          stroked: false,
          resize: true
        }
      ]
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
      let gridcolor = 'linear-gradient(-90deg, rgba(255, 103, 93, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(255, 103, 93, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
      if (this.bgc === '#f26760' || this.bgc === '#0076bd') {
        gridcolor = 'linear-gradient(-90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
      } else if (this.bgc === 'black') {
        gridcolor = 'linear-gradient(-90deg, rgba(0, 117, 191, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(0, 117, 191, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
      }
      return {
        'background': gridcolor
      }
    },
    noGridStyles () {
      return {
        'background': this.backgroundcolor
      }
    },
    w () {
      if (process.client) { return Math.ceil((window.innerWidth / 1.1) / 12) * 12 } else { return 600 }
    },
    h () {
      if (process.client) { return Math.ceil((window.innerHeight / 2) / 12) * 12 } else { return 300 }
    },
    x () {
      if (process.client) { return Math.ceil(((window.innerWidth - this.w) / 2) / 12) * 12 } else { return 150 }
    },
    y () {
      if (process.client) { return Math.ceil(((window.innerHeight - this.h) / 4) / 12) * 12 } else { return 200 }
    },
    ts () {
      if (process.client) { return Math.floor(this.w / 6) } else { return 96 }
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
      this.chaosCount = 0
      this.layout = 'purchase'
    },
    one () {
      this.layout = 'one'
      this.boxCount = 0
      this.chaosCount = 0
    },
    clear () {
      this.layout = 'clear'
      this.boxCount = 0
      this.chaosCount = 0
    },
    chaos () {
      this.chaosCount = 0
      this.layout = 'chaos'
      this.chaosCount = 25
    },
    roundToMultiple (value, multiple) {
      return Math.ceil(value / multiple) * multiple
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
  margin 12px 0px 12px 12px
  cursor crosshair
  width 25px
  height 25px

.inlinedivsquare:hover
  border 1px solid black !important

.inlinedivgrid
  display inline-block
  font-family: 'ruta_23regular', sans-serif
  font-size 2em
  cursor crosshair
  height 40px
  margin-left 16px

.inlinedivplus
  display inline-block
  font-family: Verdana, Geneva, Tahoma, sans-serif
  font-size 2em
  cursor crosshair
  height 40px

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

.no-overflow
  overflow hidden

</style>
