<template lang="pug">
vue-draggable-resizable.drag(:w="getW()" :h="getH" :x="getX" :y="getY" @dragging="onDrag" @resizing="onResize" drag-handle=".dragger" :parent="true" :grid="[12,12]"  :style='boxStyles' class-name-active="my-active-class" :active.sync="active")
    .cutoff(@mouseenter='showControls=true' @mouseleave='showControls=false' :style='outlineStyles'  @mousedown="upZ(index)")
        .controller.hide-on-mobile(v-if="resize && active" :style='[active? {"display" : 100 } : {"opacity" : 0} ]')
            .dragger(:style="draggerStyle()")
            .inlinediv.strokedwhite.black(@click="changeColor('black')" :style='strokeStyles("black")') ⬤
            .inlinediv.strokedwhite.blue(@click="changeColor('#008ff8')" :style='strokeStyles("#008ff8")') ⬤
            .inlinediv.strokedwhite.red(@click="changeColor('#ff5b49')" :style='strokeStyles("#ff5b49")') ⬤
            .inlinediv.strokedblack.white(@click="changeColor('white')" :style='strokeStyles("white")') ⬤
            .inlinedivtext.strokedwhite(@click="stroked = !stroked" style="color: black" :style="style=strokeStyles('black')")
                img.dragicon(:src="strokeFillIcon()" width="16px")
            .slider
                vue-slider.textsize(v-model="textsize" :min="6" :max="576" :interval="6" :rail-style="{backgroundColor: '#9bbccc'}" :process-style='bgc === "#008ff8"? { backgroundColor: "white" } : { backgroundColor: "#008ff8" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#008ff8', color: '#008ff8' }" )
                    template(v-slot:dot)
                        .circle(style="border : 1px solid white !important")
            .slider(style="margin-left: 20px")
                vue-slider(v-model="tracking" :min="0" :max="1" :interval="0.01" :rail-style="{backgroundColor: '#eab8b7'}" :process-style='bgc === "#ff5b49"? { backgroundColor: "white" } : { backgroundColor: "#ff5b49" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#ff5b49', color: '#ff5b49' }")
                    template(v-slot:dot)
                        .circlered(style="border : 1px solid white !important")
            .inlinedivtext(@click="align = 'left'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/l.png" width="16px")
            .inlinedivtext(@click="align = 'center'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/c.png" width="16px")
            .inlinedivtext(@click="align = 'right'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/r.png" width="16px")
            .inlinedivclose.back.strokedwhite(@click="moveToBack" style="color: white" :style="style=strokeStyles('black')" v-tooltip="'send to back'") ▾
            .inlinedivclose.strokedred(@click="closeBox" style="color: white" :style="style=strokeStyles('black')" v-tooltip="'close'") x
        .controller(v-if="!resize" :style='[ showControls || active? {"opacity" : 100 } : {"opacity" : 0} ]' @mousedown="upZ(index)")
          .dragger(:style="draggerStyle()")
          .inlinedivclose.back.strokedwhite(@click="moveToBack" style="color: white" :style="style=strokeStyles('black')" v-tooltip="'send to back'") ▾
          .inlinedivclose.strokedred(@click="closeBox" style="color: white" :style="style=strokeStyles('black')"  v-tooltip="'close'") x
        .controller.hide-on-desktop(v-if="resize && active" :style='[active? {"display" : 100 } : {"opacity" : 0} ]')
            .dragger(:style="draggerStyle()")
            .bottomsliders
              .slidermobile
                vue-slider.textsize(v-model="textsize" :min="6" :max="282" :interval="6" :rail-style="{backgroundColor: '#9bbccc'}" :process-style='bgc === "#008ff8"? { backgroundColor: "white" } : { backgroundColor: "#008ff8" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#008ff8', color: '#008ff8' }" )
                    template(v-slot:dot)
                        .circle(style="border : 1px solid white !important")
              .slidermobile(style="margin-left: 20px")
                vue-slider(v-model="tracking" :min="0" :max="1" :interval="0.01" :rail-style="{backgroundColor: '#eab8b7'}" :process-style='bgc === "#ff5b49"? { backgroundColor: "white" } : { backgroundColor: "#ff5b49" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#ff5b49', color: '#ff5b49' }")
                    template(v-slot:dot)
                        .circlered(style="border : 1px solid white !important")
            .inlinediv.strokedwhite.black(@click="changeColor('black')" :style='strokeStyles("black")') ⬤
            .inlinediv.strokedwhite.blue(@click="changeColor('#008ff8')" :style='strokeStyles("#008ff8")') ⬤
            .inlinediv.strokedwhite.red(@click="changeColor('#ff5b49')" :style='strokeStyles("#ff5b49")') ⬤
            .inlinediv.strokedblack.white(@click="changeColor('white')" :style='strokeStyles("white")') ⬤
            .inlinedivtext.strokedwhite(@click="stroked = !stroked" style="color: black" :style="style=strokeStyles('black')")
                img.dragicon(:src="strokeFillIcon()" width="16px")
            //.slider
                vue-slider.textsize(v-model="textsize" :min="6" :max="576" :interval="6" :rail-style="{backgroundColor: '#9bbccc'}" :process-style='bgc === "#008ff8"? { backgroundColor: "white" } : { backgroundColor: "#008ff8" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#008ff8', color: '#008ff8' }" )
                    template(v-slot:dot)
                        .circle(style="border : 1px solid white !important")
            //.slider(style="margin-left: 20px")
                vue-slider(v-model="tracking" :min="0" :max="1" :interval="0.01" :rail-style="{backgroundColor: '#eab8b7'}" :process-style='bgc === "#ff5b49"? { backgroundColor: "white" } : { backgroundColor: "#ff5b49" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#ff5b49', color: '#ff5b49' }")
                    template(v-slot:dot)
                        .circlered(style="border : 1px solid white !important")
            .inlinedivtext(@click="align = 'left'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/l.png" width="16px")
            .inlinedivtext(@click="align = 'center'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/c.png" width="16px")
            .inlinedivtext(@click="align = 'right'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/r.png" width="16px")
            .inlinedivclose.back.strokedwhite(@click="moveToBack" style="color: white" :style="style=strokeStyles('black')" v-tooltip="'send to back'") ▾
            .inlinedivclose.strokedred(@click="closeBox" style="color: white" :style="style=strokeStyles('black')" v-tooltip="'close'") x
        div.textinside(v-if="layout === 'default'" contenteditable="true" spellcheck="false" @click="upZ(index)") {{content}}
        div.textinside.whatcursor(v-if="layout === 'what'" spellcheck="false" @focus="upZ(index)" @click="changeLayout('what')") {{content}}
        div.textinside.whatcursor(v-if="layout === 'why'" spellcheck="false" @focus="upZ(index)" @click="changeLayout('why')") {{content}}
        div.textinside.buycursor(v-if="layout === 'buy'" spellcheck="false" @focus="upZ(index)" @click='addToCart') {{content}}
        div.textinsidemobile(v-if="layout === 'mobile'" contenteditable="true" spellcheck="false" @focus="upZ(index)") Type Here
        div.textinside(v-if="layout === 'zine'"  spellcheck="false" @focus="upZ(index)" style="cursor: pointer; line-height: 0")
          img(src="../assets/zine2.png" width="250px")
</template>

<script>

import { mapState } from 'vuex'
import VueDraggableResizable from 'vue-draggable-resizable'
import DarkLight from '../components/DarkLight.vue'
import 'vue-slider-component/theme/default.css'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
  name: 'TextBox',
  components: {
    DarkLight,
    VueDraggableResizable
  },
  props: {
    initW: { type: Number, default: 1 },
    initH: { type: Number, default: 1 },
    top: { type: Number, default: 100 },
    left: { type: Number, default: 100 },
    index: { type: Number, default: 0 },
    initTextSize: { type: Number, default: 66 },
    initContent: { type: String, default: 'random' },
    initAlign: { type: String, default: 'left' },
    initColor: { type: String, default: 'red' },
    initTracking: { type: Number, default: 0 },
    initStroked: { type: Boolean, default: false },
    resize: { type: Boolean, default: true },
    initActive: { type: Boolean, default: false },
    chaos: { type: Boolean, default: false },
    layout: { type: String, default: 'default' },
    zkey: { type: String, default: 'A0' }
  },
  data () {
    return {
      active: this.initActive,
      gridded: true,
      showControls: false,
      backgroundcolor: 'white',
      strokecolor: 'white',
      stroked: this.initStroked,
      textcolor: this.initColor,
      outlinecolor: 'red',
      tracking: this.initTracking,
      textsize: this.initTextSize,
      align: this.initAlign,
      grid: 12,
      boxText: [
        'THIS IS THE BEGINNING. este es el comienzo.',
        '0123456789',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'RUTA 23',
        'Somos un pueblo',
        'EL PARQUE, LA CONDESA',
        'CDMX',
        'MEXICO CITY',
        '¿ꜛꜜ…¿·•‖//()[]–€¥¢↖§…ꜛꜜ',
        'BEYOND SPACE, BEYOND TIME',
        'YELLOW BRICK GROUP 2020',
        '. \\ -¤- / . \\ • / -¤- \\ .',
        'you and me! tu y yo!',
        '®',
        '©',
        '§§§§§§§§§§',
        'alone together. solo juntos.',
        'todo el mundo',
        '■',
        '* * *',
        '#',
        '••••••••••••',
        '‖ ‖ ‖ ‖ ‖ ‖ ‖ ‖ ',
        'break the rules. romper las reglas'
      ],
      colorPalette: [
        '#008ff8',
        '#ff5b49',
        'white',
        'black'
      ],
      stack: 0,
      w: this.initW,
      h: 0,
      x: 0,
      y: 0,
      display: 'default',
      quantity: 1,
      chaosed: true
    }
  },
  computed: {
    zindex () {
      return this.$store.state.ruta.zindex
    },
    computeTextColor: {
      get () {
        if (this.textcolor === 'red') {
          let colors = []
          if (this.bgc === '#008ff8') {
            colors = ['#ff5b49', 'white', 'black']
          }
          if (this.bgc === '#ff5b49') {
            colors = ['#008ff8', 'white', 'black']
          }
          if (this.bgc === 'white') {
            colors = ['#008ff8', '#ff5b49', 'black']
          }
          if (this.bgc === 'black') {
            colors = ['#008ff8', '#ff5b49', 'white']
          }
          return colors[Math.floor(Math.random() * colors.length)]
        }
        return this.textcolor
      },
      set (newValue) {
        this.textcolor = newValue
      }
    },
    thiszindex () {
      return this.$store.state.ruta.zstack.indexOf(this.zkey)
    },
    content () {
      if (this.initContent === 'random') { return this.boxText[Math.floor(Math.random() * this.boxText.length)] }
      return this.initContent
    },
    light () {
      return this.$store.state.darklight.light
    },
    getH () {
      if (this.chaos) {
        const random = this.initH * Math.random()
        return Math.ceil(random / this.grid) * this.grid
      }
      return this.initH
    },
    getX () {
      if (this.chaos) {
        const random = this.left * Math.random() * 12
        return Math.ceil(random / this.grid) * this.grid
      }
      return this.left
    },
    getY () {
      if (this.chaos) {
        const random = this.top * Math.random() * 6
        return Math.ceil(random / this.grid) * this.grid
      }
      return this.top
    },
    boxStyles () {
      const currentZ = this.thiszindex
      let textColor = this.computeTextColor
      let strokeWidth = '0'
      if (this.stroked) {
        textColor = 'transparent'
        strokeWidth = 'calc(var(--text-size)/64)'
      }
      return {
        '--text-color': textColor,
        'caret-color': textColor,
        '--text-size': this.textsize + 'px',
        'text-align': this.align,
        'letter-spacing': ((this.tracking) * this.textsize).toString() + 'px',
        '-webkit-text-stroke-width': strokeWidth,
        '-webkit-text-stroke-color': this.computeTextColor,
        'z-index': currentZ,
        'display': this.display
      }
    },
    outlineStyles () {
      if (this.showControls) {
        return { 'outline': '2px dashed ' + this.outlinecolor }
      }
      return {
        'outline': '0px'
      }
    },
    ...mapState({
      bgc: state => state.backgroundchange.bgc
    }),
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
  mounted () {
    this.addToZStack()
  },
  methods: {
    getW () {
      if (this.chaos && this.chaosed) {
        const random = this.initW * Math.random()
        this.chaosed = false
        this.w = Math.ceil(random / this.grid) * this.grid
      }
      return this.w
    },
    changeColor (color) {
      this.computeTextColor = color
    },
    changeBGColor (color) {
      this.backgroundcolor = color
      this.$store.dispatch('backgroundchange/backgroundChange', color)
    },
    onResize (x, y, width, height) {
      this.x = x
      this.y = y
      this.w = width
      this.h = height
    },
    onDrag (x, y) {
      this.x = x
      this.y = y
    },
    upZ (index) {
      this.active = true
      this.$store.dispatch('ruta/moveToTop', this.zkey)
    },
    draggerStyle () {
      let bgcolor = '#ff5b49'
      if (this.bgc === '#ff5b49') {
        bgcolor = 'white'
      }
      return {
        'width': this.getW() + 'px',
        'background': bgcolor
      }
    },
    strokeStyles (color) {
      if (this.bgc === color) { return '-webkit-text-stroke-width: 1px !important' }
      return '-webkit-text-stroke-width: 0px !important'
    },
    strokeFillIcon () {
      if (this.computeTextColor === '#ff5b49' && !this.stroked) { return require('../assets/red_fill.png') }
      if (this.computeTextColor === '#ff5b49' && this.stroked) { return require('../assets/red_stroke.png') }
      if (this.computeTextColor === '#008ff8' && !this.stroked) { return require('../assets/blue_fill.png') }
      if (this.computeTextColor === '#008ff8' && this.stroked) { return require('../assets/blue_stroke.png') }
      if (this.computeTextColor === 'white' && !this.stroked) { return require('../assets/white_fill.png') }
      if (this.computeTextColor === 'white' && this.stroked) { return require('../assets/white_stroke.png') }
      if (this.computeTextColor === 'black' && !this.stroked) { return require('../assets/black_fill.png') }
      if (this.computeTextColor === 'black' && this.stroked) { return require('../assets/black_stroke.png') }
      return require('../assets/black_stroke.png')
    },
    changeLayout (layout) {
      this.$store.dispatch('ruta/toggleGrid', false)
      this.$store.dispatch('ruta/changeLayout', layout)
    },
    addToZStack () {
      this.$store.dispatch('ruta/addToZStack', this.zkey)
    },
    moveToBack () {
      this.$store.dispatch('ruta/moveToBottom', this.zkey)
    },
    closeBox () {
      this.display = 'none'
      this.$store.dispatch('ruta/removeFromZStack', this.zkey)
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
#text-box
  overflow hidden

.circle
  background #008ff8
  width 10px
  height 10px
  border-radius 5px
  margin-top 2px

.circlered
  background #ff5b49
  width 10px
  height 10px
  border-radius 5px
  margin-top 2px

.drag
  position: relative
  font-family: 'ruta_23regular', sans-serif
  font-size: 6em
  line-height : 1
  outline: 0

.inlinediv
  position relative
  top 0
  font-family: 'ruta_23regular', sans-serif
  width 36px
  font-size 2em
  display inline-block
  padding 0px 5px
  cursor crosshair
  transition font-size .2s ease
  height 36px
  line-height 0
  -webkit-text-stroke-width: 0px !important

.inlinediv:hover
  font-size 2.5em

.inlinedivtext
  position relative
  font-family: 'ruta_23regular', sans-serif
  font-size 2em
  display inline-block
  padding 0px 5px
  cursor crosshair
  transition font-size .2s ease
  line-height 1
  -webkit-text-stroke-width: 0px !important
  letter-spacing 0 !important

.inlinedivclose
  position absolute
  top -32px
  left 0
  font-family: Verdana, Geneva, Tahoma, sans-serif
  font-weight 1000
  font-size 1.8em
  display inline-block
  padding 0px 5px
  cursor crosshair
  transition font-size .2s ease
  line-height 1
  -webkit-text-stroke-width: 0px !important
  letter-spacing 0 !important

.back
  left 24px

.strokedblack
  -webkit-text-stroke-width: 1px !important
  -webkit-text-stroke-color: black
  color white
.strokedwhite
  -webkit-text-stroke-width: 1px !important
  -webkit-text-stroke-color: white
  color black

.slider
  z-index 100
  display inline-block
  margin-right 20px
  cursor e-resize
  min-width 10%
  font-size 12px !important
  letter-spacing 0 !important
  -webkit-text-stroke-width: 0px !important
  font-family: Verdana, Geneva, Tahoma, sans-serif

.slidermobile
  z-index 100
  display inline-block
  margin-right 12px
  cursor e-resize
  min-width 40%
  font-size 12px !important
  letter-spacing 0 !important
  -webkit-text-stroke-width: 0px !important
  font-family: Verdana, Geneva, Tahoma, sans-serif

.textsize .vue-slider-dot-tooltip-text::after
  content: "px";

.vdr
  border 1px solid transparent !important

.my-active-class
  border 1px solid #ff675d !important

.controller
  color white !important
  font-size 12px
  position absolute
  z-index 25
  height 36px
  width 100%
  white-space : nowrap;
  text-align center
  letter-spacing 0

.dragger
  position absolute
  top -32px
  left 0
  height 24px
  cursor grab
  background #ff675d
  outline 1px solid white
.dragger img
    position relative
    top 4px

.textinside
  position relative
  color: var(--text-color);
  font-size: calc(var(--text-size) * 1);
  z-index 0
  outline 0
  height: calc(100% - 36px);
  width 100%
  overflow hidden
  top: 36px;

.textinsidemobile
  position relative
  color: var(--text-color);
  font-size: calc(var(--text-size) * 1);
  z-index 0
  outline 0
  height: calc(100% - 36px);
  width 100%
  overflow hidden
  top: 58px;

.cutoff
  overflow hidden
  height: 100%;
  width 100%

.handle
  background #ff5b49 !important
  border 1px solid white !important

.bottombar
  position absolute
  height 48px
  bottom 0
  background #ff5b49
  color white
  width 100%

.dragicon
    background transparent

.black
  color black

.white
  color white

.red
  color #ff5b49

.blue
  color #008ff8

.multiply
  mix-blend-mode: multiply

.whatcursor
  cursor: url('../assets/what.png'), auto;

.bottomsliders
  display flex
  justify-content center
  margin-bottom 8px
</style>
