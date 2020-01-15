<template lang="pug">
#home
  .background-div(:style='[ light? {"background" : bgc } : {"background" : "black"} ]')
  video(v-if="videoplay" poster="../assets/videobg.png" class="video-bottom" :src="getImgUrl(videosource, '.mp4')" autoplay muted loop @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused")
  DarkLight(class="darklightclass")
  MobileMenu
  Header(displayNavBar = true)
  .container-fluid
      .test-wrapper
        b-row(align-h="center")
          b-col(v-for="cube in cubeObject" cols=6 md=4  @mouseenter='bgcChange(cube.color2)' @mouseleave='bgcChange("white")' class='nopadding' v-if="cube.show" :key="cube.text")
            Cube( class="cubeClass" :project='cube.text' :letter='cube.letter' :color1='cubeHovered? faceColor : cube.color1' color2='cube.color2' :image='cube.image' :pattern='cube.pattern' :bgColor='[ light? { "background" : bgc} : {"background" : "black"} ]')
  Footer(class="footerclass")
</template>

<script>

import { mapState } from 'vuex'
// import { EventBus } from '../event-bus.js'
import Cube from '../components/Cube.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import DarkLight from '../components/DarkLight.vue'
import MobileMenu from '../components/MobileMenu.vue'

export default {
  name: 'Home',
  components: {
    Cube,
    Header,
    Footer,
    DarkLight,
    MobileMenu
  },
  data () {
    return {
      videoplay: false,
      videosource: 'cases/acr/2',
      videoElement: null,
      paused: null
    }
  },
  computed: {

    playing () { return !this.paused },

    ...mapState({
      light: state => state.darklight.light,
      iconObject: state => state.colorchange.iconObject,
      cubeObject: state => state.colorchange.cubeObject,
      bgc: state => state.backgroundchange.bgc,
      faceColor: state => state.facechange.faceColor,
      cubeHovered: state => state.facechange.cubeHovered
    })
  },
  /* mounted () {
    EventBus.$on('moviechange', (movie, play) => {
      if (play) {
        this.videosource = movie
        this.videoplay = true
      } else if (!play) {
        this.videosource = null
        this.videoplay = false
      }
    }),
    EventBus.$on('playVid', (play) => {
      if (play) {
        this.videoElement.play()
      }
    }),
    EventBus.$on('pause', (play) => {
      if (play) {
        this.videoElement.pause()
      }
    }),
    EventBus.$on('volumeChange', (vol) => {
      if (vol > 0) {
        this.videoElement.muted = false
        this.videoElement.volume = vol / 100
      } else { this.videoElement.muted = true }
    })
  }, */
  methods: {
    bgcChange (color) {
      this.$store.dispatch('backgroundchange/backgroundChange', color)
    },
    getImgUrl (pic, ext) {
      return require('../assets/img/' + pic + ext)
    },
    updatePaused (event) {
      this.videoElement = event.target
      this.paused = event.target.paused
    }
  }
}
</script>

<style lang="stylus">

.container-fluid
  position: relative
  z-index: 1

.test-wrapper{
  margin: 0 auto
  z-index: 0
  position: relative
  @media(max-width: 767px) {
    width: 87%
  }
  @media(min-width: 768px) {
    width: 72%
  }
}
*
  margin: 0px
  padding 0px

body
  margin: 0
  width: 100%
  height: 100%

.cubeClass
  margin-bottom: 1.3vw

#home
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  padding-top: 60px
  overflow-x: hidden

.background-div
  position: fixed
  z-index: 0
  top 0
  left 0
  height: 100%
  width: 100%
  transition: 1s

.main-container
  margin: 0 auto
  width: 80%
  display: flex
  align-items: center
  justify-content: center
  z-index : 25

.grid
  margin: 0 auto
  width: 100%
  display: inline-flex
  flex-wrap: wrap;
  align-items: center
  justify-content: center

.video-bottom
    position: fixed
    top: 50%
    left: 50%
    -webkit-transform: translateX(-50%) translateY(-50%)
    transform: translateX(-50%) translateY(-50%)
    min-height: 100%
    min-width: 100%
    z-index: 3
    overflow: hidden

.footerclass{
    position: relative
    z-index : 950
    @media (min-width: 768px) and (orientation:portrait) {
      position: fixed
      bottom: 0
    }

}

.darklightclass {
    position: relative
    z-index : 950
}
</style>
