
<template lang="pug">
#testfive
    .quadrantwrapper
        .quadrant1(:class="q1Class")
            transition(name="fade" mode="out-in")
                .designbox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(1)" key=1)
                    nuxt-link(to='design' event="disabled" @click.native="goToLink") Design
                WorkGrid(v-else-if="currentQuadrant == 3" key=2)
                .designbox.ctrtxt(v-else-if="currentQuadrant == 4" key=3)
                  InfoComponent
                .designpic.ctrtxt(v-else-if="currentQuadrant == 1" key=4)
                  DesignImages(:design='design')
                .infotxt(v-else-if="currentQuadrant == 2" key=3)
                    MarketingInfo(:market='market')
        .quadrant2(:class="q2Class")
            transition(name="fade" mode="out-in")
                .marketingbox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(2)" key=1)
                    nuxt-link(to='marketing' event="disabled" @click.native="goToLink") Marketing
                WorkGrid(v-else-if="currentQuadrant == 3" key=2)
                .marketingbox.ctrtxt(v-else-if="currentQuadrant == 4" key=3)
                  InfoComponent
                .marketingpic.ctrtxt(v-else-if="currentQuadrant == 2" key=4)
                  MarketingImages(:market='market')
                .infotxt(v-else-if="currentQuadrant == 1" key=5)
                  DesignInfo(:design='design')
        .quadrant3(:class="q3Class")
            transition(name="fade" mode="out-in")
                .workbox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(3)" key=0)
                    nuxt-link(to='work' event="disabled" @click.native="goToLink") Work
                WorkGrid(v-else-if="currentQuadrant == 3" key=1)
        .quadrant4(:class="q4Class")
            transition(name="fade" mode="out-in")
                .infobox.ctrtxt.pointer(v-if="currentQuadrant == 0" @click="changeQuadrant(4)" key=0)
                  nuxt-link(to='info' event="disabled" @click.native="goToLink") Info

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
      design: 'overview'
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
  },
  methods: {
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
#testfive
    width: 100vw
    height: 100vh
    overflow hidden
    background black

.quadrantwrapper
    position relative
    top 5vh
    width 97%
    height 95vh

.quadrant1, .quadrant2, .quadrant3, .quadrant4
  position: absolute
  display: flex
  justify-content: center
  align-items: center
  height: 50%
  width 50%
  transition height 1s ease, width 1s ease, background 1s ease, color 1s ease
  border 3px solid black

.quadrant1 p, .quadrant2 p, .quadrant3 p, .quadrant4 p
    transition color 1s ease, opacity .5s ease

.quadrant1
    top 0
    left 0

.quadrant2
    top 0
    right 0

.quadrant3
    bottom 0
    left 0

.quadrant4
    bottom 0
    right 0

.h100
    height 100%

.hw50
    height 50%
    width 50%

.hw100
    height 100%
    width 100%

.hw0
    height 0%
    width 0%

.w0
    width 0%

.h0
    height: 0%

.h0 p, .w0 p, .hw0 p, .o0 p
    color: transparent

.pink
    background: #E2A0C7
    color: #0076BB
.green
    background: #235D39
    color: #F3B120
.yellow
    background: #F3B120
    color: #E43E30
.blue
    background: #0076BB
    color: #E2A0C7
.orange
    background: #ec7625
    color: #E2A0C7
.red
    background: #E43E30
    color: white

.white
    background: white
    color: black

.black
    background: black
    color: white

.pink-text
    color: #E2A0C7

.green-text
    color: #235D39

.yellow-text
    color: #F3B120

.blue-text
    color: #0076BB

.orange-text
    color: #ec7625

.red-text
    color: #E43E30

.ctrtxt
    font-family: goopersuperbold_italic
    font-size: 7em
    text-align: center
    line-height: 50%

.infotxt
    font-family cardinal_grotesque_wideSBd
    font-size 4em
    height 100%
    width 100%
    display: flex
    align-items: center
    overflow hidden

.marketing-categories, .design-categories
    font-family cardinal_grotesque_wideSBd
    font-size 4em
    height 100%
    width 100%
    display: flex
    align-items: center
    overflow hidden
    padding-left 12%

.marketing-categories li, .design-categories li
    list-style-type: none
    cursor pointer
    transition color .5s ease

.design-categories li:hover
    color  #F3B120
.marketing-categories  li:hover
    color #0076BB
.marketingpic, .designpic
    width 100%
    height 100%
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    box-shadow: 0px 0px 0px 4px #000000

</style>
