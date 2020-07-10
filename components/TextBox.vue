<template lang="pug">
vue-draggable-resizable.drag(:w="getW" :h="getH" :x="getX" :y="getY" @dragging="onDrag" @resizing="onResize" drag-handle=".dragger" :parent="true" :grid="[12,12]"  :style='boxStyles' class-name-active="my-active-class" :active.sync="active" :resizable="resize")
    .cutoff(@mouseenter='showControls=true' @mouseleave='showControls=false' :style='outlineStyles')
        .controller(v-if="resize" :style='[active? {"opacity" : 100 } : {"opacity" : 0} ]' @mousedown="upZ(index)")
            .inlinediv.strokedwhite.black(@click="changeColor('black')" :style='strokeStyles("black")') F
            .inlinediv.strokedwhite.blue(@click="changeColor('#0076bd')" :style='strokeStyles("#0076bd")') F
            .inlinediv.strokedwhite.red(@click="changeColor('#f26760')" :style='strokeStyles("#f26760")') F
            .inlinediv.strokedblack.white(@click="changeColor('white')" :style='strokeStyles("white")') F
            .slider
                vue-slider.textsize(v-model="textsize" :min="6" :max="576" :interval="6" :rail-style="{backgroundColor: '#9bbccc'}" :process-style='bgc === "#0076bd"? { backgroundColor: "white" } : { backgroundColor: "#0076bd" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#0076bd', color: '#0076bd' }" )
                    template(v-slot:dot)
                        .circle(style="border : 1px solid white !important")
            .slider(style="margin-left: 20px")
                vue-slider(v-model="tracking" :min="0" :max="1" :interval="0.01" :rail-style="{backgroundColor: '#eab8b7'}" :process-style='bgc === "#f26760"? { backgroundColor: "white" } : { backgroundColor: "#f26760" }' :tooltip-style="{ backgroundColor: 'white', borderColor: '#f26760', color: '#f26760' }")
                    template(v-slot:dot)
                        .circlered(style="border : 1px solid white !important")
            .dragger(:style="draggerStyle")
            .inlinedivtext.strokedwhite(@click="stroked = !stroked" style="color: black" :style="style=strokeStyles('black')")
                img.dragicon(:src="strokeFillIcon()" width="16px")
            .inlinedivtext(@click="align = 'left'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/l.png" width="16px")
            .inlinedivtext(@click="align = 'center'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/c.png" width="16px")
            .inlinedivtext(@click="align = 'right'" :style="bgc === 'black'? 'background: white' : 'background: transparent'")
                img.dragicon(src="../assets/r.png" width="16px")
            .inlinedivclose.back.strokedwhite(@click="inBack = true" style="color: white" :style="style=strokeStyles('black')") ▾
            .inlinedivclose.strokedred(@click="boxClose = true" style="color: white" :style="style=strokeStyles('black')") x
        .controller(v-if="!resize" :style='[ showControls || active? {"opacity" : 100 } : {"opacity" : 0} ]' @mousedown="upZ(index)")
          .dragger(:style="draggerStyle")
          .inlinedivclose.back.strokedwhite(@click="inBack = true" style="color: white" :style="style=strokeStyles('black')") ▾
          .inlinedivclose.strokedred(@click="boxClose = true" style="color: white" :style="style=strokeStyles('black')") x
        div.textinside(contenteditable="plaintext-only" spellcheck="false" @focus="upZ(index)") {{content}}
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
    initW: { type: Number, default: 100 },
    initH: { type: Number, default: 100 },
    top: { type: Number, default: 100 },
    left: { type: Number, default: 100 },
    index: { type: Number, default: 0 },
    initTextSize: { type: Number, default: 66 },
    initContent: { type: String, default: 'random' },
    initAlign: { type: String, default: 'left' },
    initColor: { type: String, default: 'red' },
    initTracking: { type: Number, default: 0 },
    initStroked: { type: Boolean, default: false },
    resize: { type: Boolean, default: true }
  },
  data () {
    return {
      active: false,
      stroked: this.initStroked,
      gridded: true,
      showControls: false,
      backgroundcolor: 'white',
      tracking: this.initTracking,
      strokecolor: 'white',
      outlinecolor: 'red',
      align: this.initAlign,
      textsize: this.initTextSize,
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
        'todo el mundo junto',
        'break the rules. romper las reglas'
      ],
      colorPalette: [
        '#0076bd',
        '#f26760',
        'white',
        'black'
      ],
      stack: 0,
      w: this.initW,
      h: 0,
      x: 0,
      y: 0,
      boxClose: false,
      inBack: false
    }
  },
  computed: {
    zindex () {
      return this.$store.state.ruta.zindex
    },
    textcolor: {
      get () {
        if (this.initColor === 'red') { return this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)] }
        return this.initColor
      },
      set (newValue) {
        this.initColor = newValue
      }
    },
    thiszindex () {
      if (this.boxClose) { return -1 } else if (this.zindex === this.index) {
        return 100
      } else { return 0 }
    },
    content () {
      if (this.initContent === 'random') { return this.boxText[Math.floor(Math.random() * this.boxText.length)] }
      return this.initContent
    },
    light () {
      return this.$store.state.darklight.light
    },
    getW () {
      return this.initW
    },
    getH () {
      return this.initH
    },
    getX () {
      return this.left
    },
    getY () {
      return this.top
    },
    boxStyles () {
      let currentZ = 0
      let textColor = this.textcolor
      let strokeWidth = '0'
      if (this.inBack) { currentZ = 0 } else { currentZ = this.thiszindex }
      if (this.stroked) {
        textColor = 'transparent'
        strokeWidth = 'calc(var(--text-size)/64)'
      }
      return {
        '--text-color': textColor,
        'caret-color': this.textcolor,
        '--text-size': this.textsize + 'px',
        'text-align': this.align,
        'letter-spacing': ((this.tracking) * this.textsize).toString() + 'px',
        '-webkit-text-stroke-width': strokeWidth,
        '-webkit-text-stroke-color': this.textcolor,
        'z-index': currentZ
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
    draggerStyle () {
      let bgcolor = '#f26760'
      if (this.bgc === '#f26760') {
        bgcolor = 'white'
      }
      return {
        'width': this.w + 'px',
        'background': bgcolor
      }
    },
    ...mapState({
      bgc: state => state.backgroundchange.bgc
    })
  },
  methods: {
    changeColor (color) {
      this.textcolor = color
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
      this.inBack = false
      this.active = true
      this.$store.dispatch('ruta/upZ', index)
    },
    strokeStyles (color) {
      if (this.bgc === color) { return '-webkit-text-stroke-width: 1px !important' }
      return '-webkit-text-stroke-width: 0px !important'
    },
    strokeFillIcon () {
      if (this.textcolor === '#f26760' && !this.stroked) { return require('../assets/red_fill.png') }
      if (this.textcolor === '#f26760' && this.stroked) { return require('../assets/red_stroke.png') }
      if (this.textcolor === '#0076bd' && !this.stroked) { return require('../assets/blue_fill.png') }
      if (this.textcolor === '#0076bd' && this.stroked) { return require('../assets/blue_stroke.png') }
      if (this.textcolor === 'white' && !this.stroked) { return require('../assets/white_fill.png') }
      if (this.textcolor === 'white' && this.stroked) { return require('../assets/white_stroke.png') }
      if (this.textcolor === 'black' && !this.stroked) { return require('../assets/black_fill.png') }
      if (this.textcolor === 'black' && this.stroked) { return require('../assets/black_stroke.png') }
      return require('../assets/black_stroke.png')
    }
  }
}
</script>

<style lang="stylus">
#text-box
  overflow hidden

.circle
  background #0076bd
  width 10px
  height 10px
  border-radius 5px
  margin-top 2px

.circlered
  background #f26760
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

.cutoff
  overflow hidden
  height: 100%;
  width 100%

.handle
  background #f26760 !important
  border 1px solid white !important

.bottombar
  position absolute
  height 48px
  bottom 0
  background #f26760
  color white
  width 100%

.dragicon
    background transparent

.black
  color black

.white
  color white

.red
  color #f26760

.blue
  color #0076bd

</style>
