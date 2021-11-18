
<template lang="pug">
#home
    .quadrantwrapper.hide-on-mobile
        .quadrant1(:class="q1Class"  @mouseenter="hoverAnimation(1)" @mouseleave="hoverAnimation(0)")
            .quad1gif(:class="quad1hover")
            transition(name="fade" mode="out-in")
                .designbox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(1)" index)
                    nuxt-link.pink-text(to='design' event="disabled" @click.native="goToLink") Design
                WorkGrid(v-else-if="currentQuadrant == 3" index)
                .designbox.ctrtxt(v-else-if="currentQuadrant == 4" key=3)
                  InfoComponent
                .designpic.ctrtxt(v-else-if="currentQuadrant == 1" key=4)
                  DesignImages(:design='design')
                .infotxt(v-else-if="currentQuadrant == 2" key=3)
                    MarketingInfo(:market='market')
        .quadrant2(:class="q2Class" @mouseenter="hoverAnimation(2)" @mouseleave="hoverAnimation(0)")
            .quad2gif(:class="quad2hover")
            transition(name="fade" mode="out-in")
                .marketingbox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(2)" index)
                    nuxt-link.red-text(to='marketing' event="disabled" @click.native="goToLink") Marketing
                WorkGrid(v-else-if="currentQuadrant == 3" index)
                .marketingbox.ctrtxt(v-else-if="currentQuadrant == 4" key=3)
                  InfoComponent
                .marketingpic.ctrtxt(v-else-if="currentQuadrant == 2" key=4)
                  MarketingImages(:market='market')
                .infotxt(v-else-if="currentQuadrant == 1" key=5)
                  DesignInfo(:design='design')
        .quadrant3(:class="q3Class"  @mouseenter="hoverAnimation(3)" @mouseleave="hoverAnimation(0)")
            .quad3gif(:class="quad3hover")
            transition(name="fade" mode="out-in")
                .workbox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(3)" key=0)
                    nuxt-link.blue-text(to='work' event="disabled" @click.native="goToLink") Work
                WorkGrid(v-else-if="currentQuadrant == 3" index)
        .quadrant4(:class="q4Class"  @mouseenter="hoverAnimation(4)" @mouseleave="hoverAnimation(0)")
            .quad4gif(:class="quad4hover")
            transition(name="fade" mode="out-in")
                .infobox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(4)" key=0)
                  nuxt-link.yellow-text(to='info' event="disabled" @click.native="goToLink") Contact
    .quadrantwrapper.hide-on-desktop
      .quadrant1mobile.blue
        nuxt-link.pink-text.mobilectrtxt(to='design' event="disabled" @click.native="goToLink") Design
      .quadrant2mobile.pink
        nuxt-link.red-text.mobilectrtxt(to='marketing' event="disabled" @click.native="goToLink") Marketing
      .quadrant3mobile.yellow
        nuxt-link.blue-text.mobilectrtxt(to='work' event="disabled" @click.native="goToLink") Work
      .quadrant4mobile.green
        nuxt-link.yellow-text.mobilectrtxt(to='info' event="disabled" @click.native="goToLink") Contact
      .quadrant4mobile.black
        nuxt-link.white-text.mobilectrtxt(to='blacksupper' event="disabled" @click.native="goToLink") Black Supper
      .quadrant4mobile.white
        nuxt-link.black-text.mobilectrtxt(to='mailservice' event="disabled" @click.native="goToLink") Mail Service
      .quadrant4mobile.red
        nuxt-link.white-text.mobilectrtxt(to='ruta23' event="disabled" @click.native="goToLink") Ruta 23

</template>

<script>

import WorkGrid from '../components/WorkGrid.vue'
import IconTwo from '../components/IconTwo.vue'
import DesignImages from '../components/quadrants/DesignImages.vue'
import MarketingImages from '../components/quadrants/MarketingImages.vue'
import DesignInfo from '../components/quadrants/DesignInfo.vue'
import MarketingInfo from '../components/quadrants/MarketingInfo.vue'
import InfoComponent from '../components/quadrants/InfoComponent.vue'

export default {
  components: {
    WorkGrid,
    IconTwo,
    DesignImages,
    MarketingImages,
    DesignInfo,
    MarketingInfo,
    InfoComponent
  },
  data () {
    return {
      quadrant: 0,
      work: false,
      info: false,
      market: 'overview',
      design: 'overview',
      quad1hover: 'null',
      quad2hover: 'null',
      quad3hover: 'null',
      quad4hover: 'null'
    }
  },
  computed: {
    currentQuadrant () {
      return this.$store.state.quadrants.currentQuadrant
    },
    previousQuadrant () {
      return this.$store.state.quadrants.previousQuadrant
    },
    q1Class () {
      return this.$store.state.quadrants.q1Class
    },
    q2Class () {
      return this.$store.state.quadrants.q2Class
    },
    q3Class () {
      return this.$store.state.quadrants.q3Class
    },
    q4Class () {
      return this.$store.state.quadrants.q4Class
    }
  },
  mounted () {
    this.init()
    if (this.currentQuadrant !== 0) { this.changeQuadrant(0) }
  },
  methods: {
    hoverAnimation (quadrant) {
      if (quadrant === 0) {
        this.quad1hover = 'quadblank'
        this.quad2hover = 'quadblank'
        this.quad3hover = 'quadblank'
        this.quad4hover = 'quadblank'
      }
      if (quadrant === 1) {
        this.quad1hover = 'hovered'
      }
      if (quadrant === 2) {
        this.quad2hover = 'hovered'
      }
      if (quadrant === 3) {
        this.quad3hover = 'hovered'
      }
      if (quadrant === 4) {
        this.quad4hover = 'hovered'
      }
    },
    init () {
      this.$bus.$on('changeQuadrant', (quadrant) => {
        this.changeQuadrant(quadrant)
      })
    },
    changeMarket (market) {
      this.market = market
    },
    changeDesign (design) {
      this.design = design
    },
    changeQuadrant (newQuadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', newQuadrant)
    },
    changeWidth (quadrant) {
      if (this.quadrant === 2) {
        this.quadrant = quadrant
      }
    },
    goToLink (event) {
      setTimeout(() => {
        this.$router.push(event.target.pathname)
        /* setTimeout(() => {
          this.$store.dispatch('quadrants/changeQuadrant', 0)
        }
        , 1000) */
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/quadrants.css';

#home
    width: 100vw
    height: 100vh
    overflow hidden
    background black

.quad1gif, .quad2gif, .quad3gif, .quad4gif
  position absolute
  height 100%
  width 100%
  display: flex;
  justify-content: center;
  align-items: center;
  opacity 0
  transition opacity 1s ease
  background-position: center;
  background-size: cover;
.quad1gif
  background-image url('../assets/quadrants/quad1hovered.gif') !important

.quad2gif
  background-image url('../assets/quadrants/quad2hovered.gif') !important

.quad3gif
  background-image url('../assets/quadrants/quad3hovered.gif') !important

.quad4gif
  background-image url('../assets/quadrants/quad4hovered.gif') !important

.hovered
  opacity 1

</style>
