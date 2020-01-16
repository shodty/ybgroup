<template lang="pug">
.scene(class="project" @mouseenter="shiftCube(true, color1)" @mouseleave="shiftCube(false, 'white')"  @click="mobileShift(true, color1)")
    .cube(:class="hovered? 'showRight' : cubeFace")
        .cube__face.cube__face--front(:style="bgColor[0]")
            IconBase(width="22vw" height="22vw" :icon-name="project" :icon-color="color1"  class='hide-on-mobile')
                component(:is="letter")
            IconBase(width="42vw" height="42vw" :icon-name="project" :icon-color="color1"  class='hide-on-desktop')
                component(:is="letter")
        .cube__face.cube__face--back back
        .cube__face.cube__face--right(:style="bgColor[0]" @click="goToCaseStudy")
          nuxt-link(:to="link")
            img(:alt='project' :src='getImgUrl(image, ".png")' width="100%" height="100%")
        .cube__face.cube__face--left
            IconBase(width="22vw" height="22vw" :icon-name="project" :icon-color="color2")
                component(:is="letter")
        .cube__face.cube__face--top(:style="[cubeFace == 'showTop' || light? {'background' : 'black'} : bgColor[0]]")
            .project-name
              nuxt-link(:to="link")
                p(@click="goToCaseStudy") {{ project }}
            .icon-container(v-for="(icon, index) in iconObject" @click="colorChanger(icon.name, icon.clicked)")
                IconBase(v-if="pattern.includes(index)" class="iconbases" :icon-name="icon.name" width="2.5vw" height="2.5vw"  :icon-color='icon.clicked? icon.color : baseColor')
                    component(:is="icon.name")
        .cube__face.cube__face--bottom

</template>

<script>

import IconBase from './IconBase.vue'

export default {
  name: 'Cube',
  components: {
    IconBase
  },
  props: {
    project: { type: String, default: '' },
    letter: { type: String, default: '' },
    color1: { type: String, default: '' },
    color2: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    bgColor: { type: Array, default () { return [] } },
    pattern: { type: Array, default () { return [] } }
  },
  data () {
    return {
      hovered: false,
      baseColor: 'white',
      pictureclass: 'null'
    }
  },
  computed: {
    light () {
      return !this.$store.state.darklight.light
    },
    iconObject () {
      return this.$store.state.colorchange.iconObject
    },
    cubeFace () {
      return this.$store.state.facechange.cubeFace
    }
  },
  methods: {
    getImgUrl (pic, ext) {
      return require('../assets/img/' + pic + ext)
    },
    goToCaseStudy () {
      window.scrollTo(0, 0)
    },
    colorChanger (name, clicked) {
      this.$store.dispatch('colorchange/colorChange', { name, clicked })
    },
    shiftCube (entered, color) {
      this.$store.dispatch('facechange/faceColor', { entered, color })
      if (this.cubeFace === 'showFront' && entered) {
        this.hovered = true
        this.pictureclass = 'show-picture'
      } else if (this.cubeFace === 'showFront' && !entered) {
        this.hovered = false
        this.pictureclass = 'null'
      }
    },
    mobileShift (entered, color) {
      this.$store.dispatch('facechange/faceColor', { entered, color })
      if (this.cubeFace === 'showFront' && entered) {
        this.hovered = true
        this.pictureclass = 'show-picture'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

* {
    @media(max-width: 767px) {
        --cube-face-size: 42vw
    }
    @media(min-width: 768px) {
        --cube-face-size: 22vw
    }

    box-sizing: border-box
    --cube-translate:       translateZ(calc(var(--cube-face-size)/-2))
    --cube-translate-pos:   translateZ(calc(var(--cube-face-size)/2))
}

a
  text-decoration: none
  color: white

body
    font-family: sans-serif

.scene
    width: var(--cube-face-size)
    height: var(--cube-face-size)
    perspective: calc(var(--cube-face-size)*1.5)
    float: left
    transform-style: preserve-3d
    position: relative
    z-index: 1

.cube
    width: inherit
    height: inherit
    position: relative
    z-index: 1
    transform-style: preserve-3d
    transform: var(--cube-translate)
    transition: transform 1s
    //float: left

.cube.showFront
    transform: var(--cube-translate) rotateY(   0deg)
.cube.showRight
    transform: var(--cube-translate) rotateY( -90deg)
.cube.showBack
    transform: var(--cube-translate) rotateY(-180deg)
.cube.showLeft
    transform: var(--cube-translate) rotateY(  90deg)
.cube.showTop
    transform: var(--cube-translate) rotateX( -90deg)
.cube.showBottom
    transform: var(--cube-translate) rotateX(  90deg)

.cube__face
    position: absolute
    z-index: 1
    width: inherit
    height: inherit
    color: white
    text-align: center
    overflow: hidden
    transition: background 1s

.cube__face--front, .cube__face--right

.cube__face--front
    background: hsla(  0, 0%, 100%, 1)
    cursor: url('../assets/hand.png'), auto
.cube__face--right
    background: hsla(  0, 0%, 100%, 1)
    cursor: url('../assets/hand.png'), auto
.cube__face--back
    background: hsla(  0, 0%, 100%, 0)
.cube__face--left
    background: hsla(  0, 0%, 100%, 0)
.cube__face--top
    background: hsla(  0, 0%, 100%, 1)
.cube__face--bottom
    background: hsla(  0, 0%, 100%, 0)

.cube__face--front
    transform: rotateY(  0deg) var(--cube-translate-pos)
.cube__face--right
    transform: rotateY( 90deg) var(--cube-translate-pos)
.cube__face--back
    transform: rotateY(180deg) var(--cube-translate-pos)
.cube__face--left
    transform: rotateY(-90deg) var(--cube-translate-pos) scaleX(-1)
.cube__face--top
    transform: rotateX( 90deg) var(--cube-translate-pos)
.cube__face--bottom
    transform: rotateX(-90deg) var(--cube-translate-pos)

.icon-container
    padding-left: 6px
    display: inline-block
    float: left
    height: 33%
    width: 33%
    cursor: url('../assets/hand.png'), auto

.project-name
    padding-left: 4px
    padding-top: 15px
    position: fixed
    font-size: 1.1vw
    writing-mode: vertical-rl;
    color: white
    text-transform: uppercase
    letter-spacing: 3px

.iconbases
    width: 100%
    padding-top: 2vw
    margin: 0 auto

p
    transition .5s

p:hover
    color: #e43d30
    cursor: url('../assets/hand.png'), auto
</style>
