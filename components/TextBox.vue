<template lang="pug">
vue-draggable-resizable.drag(:w="getW" :h="getH" :x="getX" :y="getY" @dragging="onDrag" @resizing="onResize" drag-handle=".dragger" :parent="true" :grid="[12,12]"  :style='[ stroked? strokeStyles : boxStyles ]' class-name-active="my-active-class" :active.sync="active")
    .cutoff(@mouseenter='showControls=true, active=true' @mouseleave='showControls=false')
        .controller(:style='[ showControls? {"opacity" : 100 } : {"opacity" : 0} ]')
            .inlinediv(@click="changeColor('black')" style="color: black") F
            .inlinediv(@click="changeColor('#0076bd')" style="color: #0076bd") F
            .inlinediv(@click="changeColor('#f26760')" style="color: #f26760") F
            .inlinediv.strokedblack(@click="changeColor('white')" style="color: white") F
            .slider
                vue-slider.textsize(v-model="textsize" :min="6" :max="576" :interval="6" :rail-style="{backgroundColor: '#9bbccc'}" :process-style="{ backgroundColor: '#0076bd' }" :tooltip-style="{ backgroundColor: 'white', borderColor: '#0076bd', color: '#0076bd' }")
                    template(v-slot:dot)
                        .circle
            .slider(style="margin-left: 20px")
                vue-slider(v-model="tracking" :min="0" :max="1" :interval="0.01" :rail-style="{backgroundColor: '#eab8b7'}" :process-style="{ backgroundColor: '#f26760' }" :tooltip-style="{ backgroundColor: 'white', borderColor: '#f26760', color: '#f26760' }")
                    template(v-slot:dot)
                        .circlered
            .dragger(:style="draggerStyle" @mousedown="upZ(index)")
               // img.dragicon(src="../assets/drag_white.png" width="16px")
            .inlinedivtext(@click="stroked = !stroked" style="color: black") S
            .inlinedivtext(@click="align = 'left'")
                img.dragicon(src="../assets/l.png" width="16px")
            .inlinedivtext(@click="align = 'center'")
                img.dragicon(src="../assets/c.png" width="16px")
            .inlinedivtext(@click="align = 'right'")
                img.dragicon(src="../assets/r.png" width="16px")
            .inlinedivtext(@click="boxClose = true" style="color: black") x
        div.textinside(contenteditable="plaintext-only" spellcheck="false") {{content}}
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
    boxCount: { type: Number, default: 0 }
  },
  data () {
    return {
      active: false,
      stroked: false,
      gridded: true,
      showControls: false,
      textcolor: '#f26760',
      backgroundcolor: 'white',
      tracking: 0,
      strokecolor: 'white',
      align: 'center',
      textsize: '16',
      boxText: [
        'THIS IS THE BEGINNING',
        '0123456789',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'RUTA 23',
        'EL PARQUE, LA CONDESA',
        'CDMX',
        'MEXICO CITY',
        '¿ꜛꜜ…¿·•‖//()[]–€¥¢↖§…ꜛꜜ',
        'BEYOND SPACE, BEYOND TIME',
        'YELLOW BRICK GROUP 2020',
        '. \\ -¤- / .',
        'ME & YOU',
        '®',
        '©',
        'Ƒ',
        '§§§§§§§§§§'

      ],
      stack: 0,
      w: this.initW,
      h: 0,
      x: 0,
      y: 0,
      boxClose: false
    }
  },
  computed: {
    zindex () {
      return this.$store.state.ruta.zindex
    },
    thiszindex () {
      if (this.boxClose) { return -1 } else if (this.zindex === this.index) {
        return 100
      } else { return 0 }
    },
    content () {
      return this.boxText[Math.floor(Math.random() * this.boxText.length)]
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
      return {
        '--text-color': this.textcolor,
        'caret-color': this.textcolor,
        '--text-size': this.textsize + 'px',
        'letter-spacing': ((this.tracking) * this.textsize).toString() + 'px',
        'text-align': this.align,
        'z-index': this.thiszindex
      }
    },
    strokeStyles () {
      return {
        '--text-color': 'transparent',
        '--stroke-color': this.textcolor,
        'caret-color': this.textcolor,
        '--text-size': this.textsize + 'px',
        'letter-spacing': ((this.tracking) * this.textsize).toString() + 'px',
        '-webkit-text-stroke-width': 'calc(var(--text-size)/64)',
        '-webkit-text-stroke-color': this.textcolor,
        'text-align': this.align,
        'z-index': this.thiszindex
      }
    },
    draggerStyle () {
      return {
        'width': this.w + 'px'
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
      this.$store.dispatch('ruta/upZ', index)
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

.strokedblack
  -webkit-text-stroke-width: 1px !important
  -webkit-text-stroke-color: black

.strokedwhite
  -webkit-text-stroke-width: 1px !important
  -webkit-text-stroke-color: white

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
  transition opacity .5s ease
  white-space : nowrap;
  text-align center
  letter-spacing 0
.dragger
  display inline-block
  position absolute
  top -32px
  left 0
  height 24px
  cursor grab
  background #ff675d

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
  background #ff675d !important
  border 1px solid white !important

.bottombar
  position absolute
  height 48px
  bottom 0
  background #ff675d
  color white
  width 100%

.dragicon
    background transparent
</style>
