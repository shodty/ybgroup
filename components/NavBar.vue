<template lang="pug">
.navdiv
    .icons
        transition(name='slide-fade')
            .nav-image(v-if='activeLink =="start"')
                .welcome-image(v-if="light")
                    img(alt='welcome' src='../assets/welcome3.png' id='welcome')
                .welcome-image(v-else)
                    img(alt='welcome' src='../assets/welcome4.png' id='welcome2')

        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="sort"')
                .icon-wrapper(:class="[{ lightclass: light }, { darkclass: !light }]")
                    //loops thru iconObject to create icons with name/color/text/clickstate assigned via the object. click event fires to action/mutation in store that will change icons clickstate & colors across components
                    .icon-text(v-for="icon in iconObject" @click="colorChanger(icon.name, icon.clicked)")
                        IconBase(class="iconbases"  width="2.5vw" height="4.5vw"  :icon-color='icon.clicked? icon.color : baseColor')
                            component(:is="icon.name")
                        p {{icon.text}}
        transition(name='slide-fade')
            .video-play-controls(v-if='activeLink =="videos"')
                .video-controls
                    img(alt='welcome' src='../assets/img/icons/back.png' @click='previous')
                    img(v-if="!play" alt='welcome' src='../assets/img/icons/play.png'  @click='playVid')
                    img(v-else-if="play" alt='welcome' src='../assets/img/icons/pause.png'  @click='pause')
                    img(alt='welcome' src='../assets/img/icons/forward.png'  @click='next')
                    br
                    vue-slider(v-model="value" @change="changeVolume" :process-style="{ backgroundColor: 'black' }" :tooltip-style="{ backgroundColor: 'white', borderColor: 'black', color: 'black' }")
                      template( v-slot:dot="{ value }")
                         img(v-if="value <= 5" id='volume-slider' src='../assets/img/icons/vol0.png' )
                         img(v-else-if="33 >= value && value > 5" id='volume-slider' src='../assets/img/icons/vol1.png' )
                         img(v-else-if="66 >= value && value > 33" id='volume-slider' src='../assets/img/icons/vol2.png' )
                         img(v-else-if="100 >= value && value > 66" id='volume-slider' src='../assets/img/icons/vol3.png' )
        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="projects"')
                .icon-wrapper
                    //loops through cubeObject to create icons in nav bar of PROJECTS link that are same letter forms/colors as the projects
                    //IconBase(v-for="cube in cubeObject" class="iconbases" :icon-name="cube.text" width="3vw" height="3vw" :icon-color='cube.color1')
                        component(:is="cube.letter")
                    .click-image(v-if="light")
                        img(alt='welcome' src='../assets/click_black.png' id='welcome')
                    .click-image(v-else)
                        img(alt='welcome' src='../assets/click_white.png' id='welcome2')
    .buttons
        //text for START, PROJECTS, SORT, VIDEOS buttons. clicking makes the link active and rotates cube accordingly. 2 class bindings, one assigns .active class if link clicked, the other assigns lightmode/darkmode appropriate class
        .nav.nav-text(href='#' @click='onClick("start"); rotateCube("showFront")'       :class='[activeLink == "start"? "active" : "", light? "lightclass" : "darkclass"]' )    START
        .nav.nav-text(href='#' @click='onClick("projects"); rotateCube("showRight")'    :class='[activeLink == "projects"? "active" : "", light? "lightclass" : "darkclass"]')  PROJECTS
        .nav.nav-text(href='#' @click='onClick("sort"); rotateCube("showTop")'          :class='[activeLink == "sort"? "active" : "", light? "lightclass" : "darkclass"]')      SORT
        .nav.nav-text(href='#' @click='onClick("videos"); '                             :class='[activeLink == "videos"? "active" : "", light? "lightclass" : "darkclass"]')    VIDEOS
        nuxt-link(to='ruta23')
          .nav.nav-text.ruta(href='#' :class='[light? "lightclass" : "darkclass"]')   <span style='color: #f26760; line-height: 2'>*</span>RUTA 23<span style='color: #f26760; line-height: 2'>*</span>
        a(href='https://ybgroupshop.us')
          .nav.nav-text(href='#' :class='[light? "lightclass" : "darkclass"]')   SHOP
</template>

<script>

import { mapState } from 'vuex'
import IconBase from './IconBase.vue'

export default {
  name: 'NavBar',
  components: {
    IconBase
  },
  data () {
    return {
      activeLink: 'start',
      topShower: true,
      rightShower: true,
      leftShower: true,
      bottomShower: true,
      frontShower: true,
      play: true,
      volume: false,
      count: 0,
      value: 0
    }
  },
  computed: {
    ...mapState({
      light: state => state.darklight.light,
      iconObject: state => state.colorchange.iconObject,
      cubeObject: state => state.colorchange.cubeObject,
      cubeFace: state => state.facechange.cubeFace,
      baseColor: state => state.darklight.baseColor,
      videoArray: state => state.videoarray.videoArray
    })
  },
  mounted () {
    this.$bus.$on('menuChange', (entry) => {
      this.activeLink = entry
    })
  },
  methods: {
    rotateCube (side) {
      this.$store.dispatch('facechange/faceChange', side)
    },
    onClick (entry) {
      this.activeLink = entry
      if (entry === 'videos') { this.movieChange('cases/ybg/ybg_launch', true) } else { this.$bus.$emit('moviechange', 'null', false) }
    },
    movieChange (movie, play) {
      this.$bus.$emit('moviechange', movie, play)
    },
    colorChanger (name, clicked) {
      this.$store.dispatch('colorchange/colorChange', { name, clicked })
    },
    playVid () {
      this.play = true
      this.$bus.$emit('playVid', true)
    },
    pause () {
      this.play = false
      this.$bus.$emit('pause', true)
    },
    next () {
      this.count++
      if (this.count > this.videoArray.length - 1) { this.count = 0 }
      this.movieChange(this.videoArray[this.count], true)
    },
    previous () {
      this.count--
      if (this.count < 0) { this.count = this.videoArray.length - 1 }
      this.movieChange(this.videoArray[this.count], true)
    },
    changeVolume () {
      this.$bus.$emit('volumeChange', this.value)
    }
  }
}

</script>

<style scoped lang="stylus">

.nav
    float: left
    padding-left: 7px
    padding-right: 5px
    margin-left : 10px
    margin-right : 10px
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    font-weight: bold
    letter-spacing: 3px
    font-size: 20px
    cursor: pointer
    transition: all .5s

.nav:hover
    color: #e43d30
    transition: all .5s

.navdiv
    margin: 0 auto
    align-items: center
    justify-content: center
    padding-bottom: 30px
    padding-top: 15px

.icons
    display: flex
    align-items: center
    justify-content: center
    height: 2vw
    padding-bottom: 1vw

.nav-image
    position: relative

.nav-icons
    position: absolute

.video-play-controls
    position absolute
    padding-top 2vw

.icon-wrapper
    display: inline-flex
    padding-top: 1.5vw

.iconbases
    padding-right: 4px
    cursor: pointer

.lightclass
    color: black

.darkclass
    color: white

.lightclass.active
    color: white
    background: black
    transition: 1s

.darkclass.active
    color: black
    background: white
    transition: 1s

.buttons
    display: flex
    align-items: center
    justify-content: center
    margin-top: 2.5vw

.icon-text
    display : block
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    font-weight: 700
    font-size: 10px
    letter-spacing: 1px
    line-height: .2
    text-transform: uppercase
    margin-left: 15px
    margin-right : 15px
    cursor: pointer
    padding-top 2vh

.slide-fade-enter-active
  transition: all 1s ease

.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(50px)
  opacity: 0

.movie-button
    cursor: url('../assets/hand.png'), auto

.video-controls
    background: white
    padding: 3px 30px
    border-radius: 35px;

.video-controls img
    padding: 0 10px
    height 2vw

.welcome-image img
    padding-top: 1vw
    height: 5vw

.click-image img
    padding-top: 1vw
    height: 3vw

#volume-slider
    position absolute
    left -8px
    top -6px
    height 26px

.ruta
  font-family: 'ruta_23regular', sans-serif
  color #008ff8
</style>
