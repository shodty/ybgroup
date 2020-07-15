<template lang="pug">
#ruta-main
  .bg(:style='{"background" : bgc}')
  .gridbackground(:style="gridStyles")
  .paper.multiply
  .parental(ref="parental")
    TextBox.absolute.hide-on-mobile(v-if='layout === "purchase"' v-for="(box, index) in startObject"  :initW='roundToMultiple(w * box.width, grid)' :initH='roundToMultiple(h * box.height, grid)' :top='roundToMultiple(y * box.y, grid)' :left='roundToMultiple(x * box.x, grid)' :index="index" :initTextSize='roundToMultiple(ts * box.textSize, 6)' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :layout='box.layout' :zkey='"A" + index' :key="'A' + index")
    TextBox.absolute.hide-on-desktop(v-if='layout === "purchase"' v-for="(box, index) in startMobile"  :initW='roundToMultiple(w * box.width, grid)' :initH='roundToMultiple(h * box.height, grid)' :top='roundToMultiple(y * box.y, grid)' :left='roundToMultiple(x * box.x, grid)' :index="index" :initTextSize='roundToMultiple(ts * box.textSize, 6)' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :layout='box.layout' :zkey='"A" + index' :key="'A2' + index")
    TextBox.absolute(v-if='layout === "what"' v-for="(box, index) in whatObject"  :initW='w * box.width' :initH='h * box.height' :top='y * box.y' :left='x * box.x' :index="index" :initTextSize='ts * box.textSize' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :layout='box.layout' :zkey='"B" + index'  :key="'B' + index")
    TextBox.absolute(v-if='layout === "why"' v-for="(box, index) in whyObject"  :initW='w * box.width' :initH='h * box.height' :top='y * box.y' :left='x * box.x' :index="index" :initTextSize='ts * box.textSize' :initContent='box.content' :initAlign='box.align' :initColor='box.color' :initTracking='box.tracking' :initStroked='box.stroked' :resize='box.resize' :zkey='"C" + index' :key="'C' + index")
    TextBox.absolute(v-for="(box, index) in chaosCount"  :initW='w' :initH='h' :top='y' :left='x' :index="index" :initTextSize='roundToMultiple(ts * Math.random(), 6)' :initStroked='(Math.random() >= 0.5)' :initTracking='Math.random()' :chaos='true' :zkey='"D" + index' :key="'D' + index")
    TextBox.absolute(v-for="(box, index) in boxCount"  :initW='roundToMultiple(w * .25, grid)' :initH='roundToMultiple(h * .5, grid)' :top='y*2' :left='newX' :index="index" :initTextSize='roundToMultiple(ts * .2, 6)' :initActive='true' :initAlign='"center"' :zkey='"E" + index' :key="'E' + index")
  .bottombar
    b-row.bottomcontrols
      .inlinedivsquare.no-overflow(@click="changeBGColor('black')" style="background: black; margin-left: 32px" v-tooltip="'black'") b
      .inlinedivsquare.no-overflow(@click="changeBGColor('#008ff8')" style="background: #008ff8" v-tooltip="'blue'") b
      .inlinedivsquare.no-overflow(@click="changeBGColor('#ff5b49')" style="background: #ff5b49; border: 1px solid white" v-tooltip="'red'") r
      .inlinedivsquare.no-overflow(@click="changeBGColor('white')" style="background: white; color: black" v-tooltip="'white'") w
      .inlinedivgrid.bluehover.no-overflow(@click="toggleGrid(!gridded)" style="font-family: Georgia; margin-left: 24px; color: white" v-tooltip="'Toggle Grid'") ⋮⋮⋮
      .inlinedivgrid.bluehover.no-overflow(@click="resetCount" style="margin-left: 24px") START
      .inlinedivgrid.no-overflow(style="color: white; margin-left: 24px; cursor: default; font-family: Georgia") 🞗
      .inlinedivgrid.bluehover.no-overflow(@click="chaos" style="margin-left: 24px") chaos machine
      //.inlinedivgrid(style="color: white; margin-left: 24px; cursor: default; font-family: Georgia") 🞗
      //.inlinedivgrid.bluehover(@click="scramble" style="margin-left: 24px") scramble
      //.inlinedivgrid(style="color: white; margin-left: 24px; cursor: default; font-family: Georgia") 🞗
      //.inlinedivgrid.bluehover(@click="clear" style="margin-left: 24px" v-tooltip="'Blank Canvas'") clear
      //.inlinedivgrid(style="color: white; margin-left: 24px; cursor: default; font-family: Georgia") 🞗
      .inlinedivgrid.buyclass.no-overflow(@click='addToCart') Add to Cart
  .circlebuttons.no-overflow
      .addbutton(@click="createTextBox" style="cursor: cell" v-tooltip="'Add Text Box'") +
      .clearbutton(@click="clear" v-tooltip="'Clear Canvas'") x
      .buybtn.buycursor(@click='addToCart' v-tooltip="'Add to Cart'") $
</template>

<script>

import { mapState } from 'vuex'
import VueDraggableResizable from 'vue-draggable-resizable'
import VTooltip from 'v-tooltip'
import TextBox from '../components/TextBox.vue'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import '../static/v-tooltip.css'

export default {
  name: 'Ruta23',
  layout: 'ruta23',
  components: {
    VueDraggableResizable,
    TextBox,
    VTooltip
  },
  data () {
    return {
      strokecolor: 'white',
      backgroundcolor: 'white',
      boxCount: 0,
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
      startObject: state => state.rutalayouts.startObject,
      whatObject: state => state.rutalayouts.whatObject,
      whyObject: state => state.rutalayouts.whyObject,
      startMobile: state => state.rutalayouts.startMobile
    }),
    gridStyles () {
      let gridcolor = 'white'
      if (this.gridded) {
        gridcolor = 'linear-gradient(-90deg, rgba(255, 103, 93, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(255, 103, 93, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
        if (this.bgc === '#ff5b49' || this.bgc === '#008ff8') {
          gridcolor = 'linear-gradient(-90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
        } else if (this.bgc === 'black') {
          gridcolor = 'linear-gradient(-90deg, rgba(0, 117, 191, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px, linear-gradient(rgba(0, 117, 191, 0.2) 1px, transparent 1px) 0% 0% / 12px 12px'
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
    },
    product () {
      return this.$store.state.shopify.products[0]
    },
    selectedOptions () {
      return this.product.options.reduce(
        (acc, cur) => ({ ...acc, [cur.name]: cur.values[0].value }),
        {}
      )
    },
    selectedVariant () {
      return this.$shopifyClient.product.helpers.variantForOptions(
        this.product,
        this.selectedOptions
      )
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
      this.$store.dispatch('ruta/changeLayout', 'purchase')
    },
    one () {
      this.$store.dispatch('ruta/changeLayout', 'one')
      this.boxCount = 0
      this.chaosCount = 0
    },
    clear () {
      this.$store.dispatch('ruta/changeLayout', 'clear')
      this.boxCount = 0
      this.chaosCount = 0
    },
    chaos () {
      this.$store.dispatch('ruta/changeLayout', 'chaos')
      this.chaosCount += 6
      if (this.chaosCount > 48) { this.chaosCount = 0 }
    },
    toggleGrid (bool) {
      this.$store.dispatch('ruta/toggleGrid', bool)
    },
    roundToMultiple (value, multiple) {
      return Math.ceil(value / multiple) * multiple
    },
    addToCart () {
      this.$store.commit('shopify/openCart')

      const checkoutId = this.$store.state.shopify.checkout.id
      const lineItemsToAdd = [
        {
          variantId: this.selectedVariant.id,
          quantity: parseInt(this.quantity, 10)
        }
      ]

      this.$shopifyClient.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((res) => {
          this.$store.commit('shopify/updateCheckout', res)
        })
    }
  }
}
</script>

<style lang="stylus">
#ruta-main
  overflow hidden

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
.inlinedivsquare
  display flex
  margin 12px 0px 12px 12px
  cursor crosshair
  width 25px
  height 25px
  justify-content: center
  font-family: 'ruta_23regular', sans-serif

.inlinedivsquare:hover
  border 1px solid black !important

.inlinedivgrid
  display flex
  font-family: 'ruta_23regular', sans-serif
  font-size 2em
  cursor crosshair
  height 40px
  margin-left 16px

.inlinedivplus
  display flex
  font-family: Verdana, Geneva, Tahoma, sans-serif
  font-size 2em
  cursor crosshair
  height 40px

.addbutton, .clearbutton, .buybtn
  font-family: Arial, Helvetica, sans-serif
  font-weight 1000
  font-size 42px
  line-height 1
  cursor crosshair
  height 48px
  width 48px
  border-radius 48px
  margin-left 16px
  background #ff5b49
  text-align center
  transition background .45s ease
  border 2px solid white

.clearbutton
  line-height 1.2
  font-size 32px
.buybtn
  line-height 1.4
  font-size 32px
  font-weight 600

.buycursor
  cursor: url('../assets/buy.png'), auto;
.addbutton:hover, .clearbutton:hover, .buybtn:hover
  background #008ff8

.bottombar
  position fixed
  bottom 0
  background #ff5b49
  color white
  width 100%
  z-index 2000
  overflow: hidden
.absolute
  position absolute

.no-overflow
  overflow hidden

.bluehover
  transition color .2s ease
  color white

.bluehover:hover
  color black

.multiply
  mix-blend-mode: multiply

.lighten
  mix-blend-mode: overlay

.buyclass
  margin-left: auto

.circlebuttons
  width 100%
  z-index: 9999
  display flex
  justify-content center
  color white
  position fixed
  margin 0 auto
  bottom 72px
</style>
