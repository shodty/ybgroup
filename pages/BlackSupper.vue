<template lang="pug">
#ruta-main
  .rutawrapper
    .bg(:style='{"background" : bgc}')
    .gridbackground(:style="gridStyles")
    .paper.multiply
    .parental(ref="parental")
      TextBoxSupper.absolute.hide-on-mobile(v-if='layout === "purchase"' v-for="(box, index) in startObject"  :initW='roundToMultiple(w * box.width, grid)' :initH='roundToMultiple(h * box.height, grid)' :top='roundToMultiple(y * box.y, grid)' :left='roundToMultiple(x * box.x, grid)' :index="index" :initTextSize='roundToMultiple(ts * box.textSize, 6)' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :layout='box.layout' :zkey='"A" + index' :key="'A' + index" :pointer='box.pointer')
      TextBoxSupper.absolute.hide-on-desktop(v-if='layout === "purchase"' v-for="(box, index) in startMobile"  :initW='roundToMultiple(w * box.width, grid)' :initH='roundToMultiple(h * box.height, grid)' :top='roundToMultiple(y * box.y, grid)' :left='roundToMultiple(x * box.x, grid)' :index="index" :initTextSize='roundToMultiple(ts * box.textSize, 6)' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :layout='box.layout' :zkey='"A" + index' :key="'A2' + index" :pointer='box.pointer')
      TextBoxSupper.absolute(v-if='layout === "what"' v-for="(box, index) in whatObject"  :initW='w * box.width' :initH='h * box.height' :top='y * box.y' :left='x * box.x' :index="index" :initTextSize='ts * box.textSize' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :layout='box.layout' :zkey='"B" + index'  :key="'B' + index")
      TextBoxSupper.absolute(v-if='layout === "why"' v-for="(box, index) in howObject"  :initW='w * box.width' :initH='h * box.height' :top='y * box.y' :left='x * box.x' :index="index" :initTextSize='ts * box.textSize' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :layout='box.layout' :pointer='box.pointer' :zkey='"C" + index' :key="'C' + index")
      TextBoxSupper.absolute(v-for="(box, index) in chaosCount"  :initW='w' :initH='h' :top='y' :left='x' :index="index" :initTextSize='roundToMultiple(ts * Math.random(), 6)' :initStroked='(Math.random() >= 0.5)' :initTracking='Math.random()' :chaos='true' :zkey='"D" + index' :key="'D' + index")
      TextBoxSupper.absolute(v-for="(box, index) in boxCount"  :initW='roundToMultiple(w * .25, grid)' :initH='roundToMultiple(h * .5, grid)' :top='y*2' :left='newX' :index="index" :initTextSize='roundToMultiple(ts * .2, 6)' :initActive='true' :initAlign='"center"' :zkey='"E" + index' :key="'E' + index")
      TextBoxSupper.absolute(v-for="(box, index) in mobileBoxCount"  :initW='roundToMultiple(w, grid)' :initH='roundToMultiple(h*.8, grid)' :top='y*2' :left='x*.5' :index="index" :initTextSize='roundToMultiple(ts * 1.5, 6)' :initActive='true' :initAlign='"center"' :zkey='"F" + index' :key="'F' + index" :layout='"mobile"')
    .bs-bottombar
      b-row.bottomcontrols
        .bs-inlinedivsquare.no-overflow(@click="changeBGColor('black')" style="background: black; margin-left: 32px" v-tooltip="'black'") k
        .bs-inlinedivsquare.no-overflow(@click="changeBGColor('white')" style="background: white; color: black" v-tooltip="'white'") w
        .bs-inlinedivgrid.bs-bluehover.no-overflow(@click="toggleGrid(!gridded)" style="font-family: Georgia; margin-left: 24px; color: black" v-tooltip="'Toggle Grid'") ⋮⋮⋮
        .bs-inlinedivgrid.bs-bluehover.no-overflow.hide-on-mobile(@click="chaos" style="margin-left: 24px"  v-tooltip="'Keep Clicking to Collage'") play!
        .bs-inlinedivgrid.no-overflow.hide-on-mobile(style="color: black; margin-left: 24px; cursor: default; font-family: Georgia") •
        .bs-inlinedivgrid.bs-bluehover.no-overflow.hide-on-mobile(@click="resetCount" style="margin-left: 24px"  v-tooltip="'Splash Page'") reset
        .bs-inlinedivgrid.no-overflow.hide-on-mobile(style="color: black; margin-left: 24px; cursor: default; font-family: Georgia") •
        .bs-inlinedivgrid.bs-bluehover.no-overflow.hide-on-mobile(@click="clear" style="margin-left: 24px"  v-tooltip="'Clear Canvas'") clear canvas
        .bs-inlinedivgrid.bs-bluehover.no-overflow.hide-on-desktop(@click="createMobileTextBox()" style="margin-left: 24px") play
        .bs-inlinedivgrid.buyclass.no-overflow
          a(href="https://www.ybgroupshop.us/products/black-supper-typeface") Add to Cart
    .circlebuttons.no-overflow
        .bs-addbutton.hide-on-mobile.pointerall(@click="createTextBox" style="cursor: cell" v-tooltip="'Add Text Box'") +
        .bs-addbutton.hide-on-desktop.pointerall(@click="createMobileTextBox" style="cursor: cell" v-tooltip="'Add Text Box'") +
        .bs-clearbutton.pointerall(@click="clear" v-tooltip="'Clear Canvas'") x
        .bs-buybtn.pointerall(v-tooltip="'Add to Cart'")
          a.bs-buycursor(href="https://www.ybgroupshop.us/products/black-supper-typeface") $
</template>

<script>

import { mapState } from 'vuex'
import VueDraggableResizable from 'vue-draggable-resizable'
import VTooltip from 'v-tooltip'
import TextBoxSupper from '../components/TextBoxSupper.vue'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import '../static/v-tooltip.css'

export default {
  name: 'BlackSupper',
  layout: 'ruta23',
  components: {
    VueDraggableResizable,
    TextBoxSupper,
    VTooltip
  },
  data () {
    return {
      strokecolor: 'white',
      backgroundcolor: 'black',
      boxCount: 0,
      mobileBoxCount: 0,
      chaosCount: 0,
      grid: 12,
      stroked: false,
      quantity: 1
    }
  },
  computed: {
    ...mapState({
      bgc: state => state.backgroundchange.bgc,
      light: state => state.darklight.light,
      gridded: state => state.ruta.grid,
      layout: state => state.ruta.layout,
      startObject: state => state.blacksupperlayouts.startObject,
      whatObject: state => state.blacksupperlayouts.whatObject,
      howObject: state => state.blacksupperlayouts.howObject,
      startMobile: state => state.blacksupperlayouts.startMobile
    }),
    gridStyles () {
      let gridcolor = 'black'
      if (this.gridded) {
        gridcolor = 'linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 12px 12px'
        if (this.bgc === '#ff5b49' || this.bgc === '#008ff8') {
          gridcolor = 'linear-gradient(-90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
        } else if (this.bgc === 'black') {
          gridcolor = 'linear-gradient(-90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px) 0% 0% / 12px 12px'
        }
        return {
          'background': gridcolor
        }
      } else {
        return {
          'background': null
        }
      }
    },
    w () {
      if (process.client) { return Math.ceil((window.innerWidth / 1.1) / 12) * 12 } else { return 600 }
    },
    newW () {
      if (process.client) { return Math.ceil((window.innerWidth / 4) / 12) * 12 } else { return 600 }
    },
    h () {
      if (process.client) { return Math.ceil((window.innerHeight / 2) / 12) * 12 } else { return 300 }
    },
    x () {
      if (process.client) { return Math.ceil(((window.innerWidth - this.w) / 2) / 12) * 12 } else { return 150 }
    },
    newX () {
      if (process.client) { return Math.ceil(((window.innerWidth - this.newW) / 2) / 12) * 12 } else { return 150 }
    },
    y () {
      if (process.client) { return Math.ceil(((window.innerHeight - this.h) / 4) / 12) * 12 } else { return 200 }
    },
    ts () {
      if (process.client) { return Math.floor(this.w / 6) } else { return 96 }
    }
  },
  mounted () {
    this.boxCount = 0
    this.chaosCount = 0
    this.$store.dispatch('ruta/changeLayout', 'purchase')
    this.$store.dispatch('backgroundchange/backgroundChange', 'black')
  },
  methods: {

    changeBGColor (color) {
      this.backgroundcolor = color
      this.$store.dispatch('backgroundchange/backgroundChange', color)
      if (this.layout === 'purchase' && color === 'white') { this.$store.dispatch('ruta/changeLayout', 'clear') }
    },
    createTextBox () {
      this.boxCount = this.boxCount + 1
    },
    createMobileTextBox () {
      this.$store.dispatch('ruta/changeLayout', 'clear')
      this.mobileBoxCount += 1
    },
    resetCount () {
      this.boxCount = 0
      this.chaosCount = 0
      this.$store.dispatch('ruta/changeLayout', 'purchase')
      this.$store.dispatch('backgroundchange/backgroundChange', 'black')
    },
    one () {
      this.$store.dispatch('ruta/changeLayout', 'one')
      this.boxCount = 0
      this.chaosCount = 0
    },
    clear () {
      this.$store.dispatch('ruta/changeLayout', 'clear')
      this.boxCount = 0
      this.mobileBoxCount = 0
      this.chaosCount = 0
    },
    howTo () {
      this.$store.dispatch('ruta/changeLayout', 'why')
      this.boxCount = 0
      this.mobileBoxCount = 0
      this.chaosCount = 0
    },
    chaos () {
      this.$store.dispatch('ruta/changeLayout', 'chaos')
      this.chaosCount += 6
      if (this.chaosCount > 64) { this.chaosCount = 0 }
    },
    toggleGrid (bool) {
      this.$store.dispatch('ruta/toggleGrid', bool)
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

.rutawrapper
    position: relative;
    top: 5vh;
    width: 97%;
    height: 95vh;
    background: #fff;
    border-top: 3px solid #000;

.gridbackground
  position absolute
  height 100vh
  width 100vw
  z-index 0
  pointer-events: none

.paper
  position absolute
  height 100vh
  width 100vw
  z-index 1000
  pointer-events: none
  background: url(../assets/paper3.jpg)
  background-size: cover
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

.bottomcontrols
  justify-content: center
  display: flex;
  width: 100%

.bs-inlinedivsquare
  display flex
  margin 12px 0px 12px 12px
  cursor: url("../assets/hand.png"), auto;
  width 25px
  height 25px
  justify-content: center
  font-family: 'blacksupper', serif
  border 1px solid black !important

.bs-inlinedivsquare:hover
  border 1px solid black !important

.bs-inlinedivgrid
  display flex
  font-family: 'blacksupper', serif
  font-size 2em
  cursor: url("../assets/hand.png"), auto;
  height 40px
  margin-left 16px

.bs-inlinedivgrid a
  color black !important

.bs-addbutton, .bs-clearbutton, .bs-buybtn
  font-family: Arial, Helvetica, sans-serif
  font-weight 1000
  font-size 42px
  color black
  line-height 1
  cursor: url("../assets/hand.png"), auto;
  height 48px
  width 48px
  border-radius 48px
  margin-left 16px
  background white
  text-align center
  transition background .45s ease
  border 2px solid black
  @media(max-width: 767px) {
    height 36px
    width 36px
    font-size 28px
  }
.bs-clearbutton
  line-height 1.2
  font-size 32px
  @media(max-width: 767px) {
    font-size 22px
    line-height 1.4
  }

.bs-buybtn
  line-height 1.4
  font-size 32px
  font-weight 600
  @media(max-width: 767px) {
    font-size 22px
    line-height 1.45
  }
.bs-buycursor
  cursor: url("../assets/hand.png"), auto;
.bs-addbutton:hover, .bs-clearbutton:hover, .bs-buybtn:hover
  background black
  color white
  border 2px solid white

.bs-buybtn:hover a
  color white !important
  text-decoration:  none
.bs-bottombar
  position fixed
  bottom 0
  background white
  color white
  width 100%
  z-index 2000
  overflow: hidden
.absolute
  position absolute

.no-overflow
  overflow hidden

.bs-bluehover
  transition color .2s ease
  color black

.bs-bluehover:hover
  color gray

.multiply
  mix-blend-mode: multiply

.lighten
  mix-blend-mode: overlay

.buyclass
  margin-left: auto

.circlebuttons
  width 100%
  pointer-events: none
  z-index: 9999
  display flex
  justify-content center
  color white
  position fixed
  margin 0 auto
  bottom 72px
  @media(max-width: 767px) {
    bottom 56px
  }

.pointerall
  pointer-events: all

.bs-buybtn a
  color black

</style>
