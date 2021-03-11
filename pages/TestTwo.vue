
<template lang="pug">
#testtwo
    .siteheader
        .icon-container
            IconTwo(icon-name="yellow brick group" width="100vw" height="2.5vh" icon-color='black')
                component(is="yellow-brick-group")
            .click-box(@click="changeQuadrant(0)")
    .quadrantwrapper
        .quadrant1(:class="quadrantOneClass()")
            transition(name="fade" mode="out-in")
                .designbox.ctrtxt.pointer(v-if="quadrant == 0" @click="changeQuadrant(1)" key=1) Design
                WorkGrid(v-else-if="quadrant == 1 && work" key=2)
                .designbox.ctrtxt(v-else-if="quadrant == 1 && info" key=3)
                  p Contact Us
                  p.email(:class="emailColor[count]") info@ybgroup.us
                  p.est EST. 2018
                .designpic.ctrtxt(v-else-if="quadrant == 1 && !work && !info" key=4)
                  DesignImages(:design='design')
                .infotxt(v-else-if="quadrant == 2" key=3)
                    MarketingInfo(:market='market')
        .quadrant2(:class="quadrantTwoClass()")
            transition(name="fade" mode="out-in")
                .marketingbox.ctrtxt.pointer(v-if="quadrant == 0" @click="changeQuadrant(2)" key=1) Marketing
                WorkGrid(v-else-if="quadrant == 2 && work" key=2)
                .marketingbox.ctrtxt(v-else-if="quadrant == 2 && info" key=3)
                  p Contact Us
                  p.email(:class="emailColor[count]") info@ybgroup.us
                  p.est EST. 2018
                .marketingpic.ctrtxt(v-else-if="quadrant == 2 && !work && !info" key=4)
                  MarketingImages(:market='market')
                .infotxt(v-else-if="quadrant == 1" key=5)
                  DesignInfo(:design='design')
        .quadrant3(:class="quadrantThreeClass()")
            transition(name="fade" mode="out-in")
                .workbox.ctrtxt.pointer(v-if="quadrant == 0 && !work" @click="changeQuadrant(3)" key=0) Work
                WorkGrid(v-else-if="quadrant == 0 && work" key=1)
                .ctrtxt(v-else-if="quadrant == 1" key=2)
                .marketing-categories(v-else-if="quadrant == 2" key=3)
                    ul
                        li(@click="changeMarket('overview')") OVERVIEW
                        li(@click="changeMarket('lifestyle')") LIFESTYLE MARKETING
                        li(@click="changeMarket('content')") CONTENT CREATION
                        li(@click="changeMarket('activation')") BRAND ACTIVATION
        .quadrant4(:class="quadrantFourClass()")
            transition(name="fade" mode="out-in")
                .infobox.ctrtxt.pointer(v-if="quadrant == 0 && !work" @click="changeQuadrant(4)" key=0)
                  transition(name="fade" mode="out-in")
                    p(v-if="!info" key=1) Info
                    div(v-else key=2)
                      p Contact Us
                      p.email(:class="emailColor[count]") info@ybgroup.us
                      p.est EST. 2018
                .design-categories(v-else-if="quadrant == 1" key=2)
                    ul
                        li(@click="changeDesign('overview')") OVERVIEW
                        li(@click="changeDesign('branding')") BRANDING
                        li(@click="changeDesign('motion')") MOTION
                        li(@click="changeDesign('packaging')") PACKAGING
                .ctrtxt(v-else-if="quadrant == 2" key=3)
    //.infodisplay(@click="changeQuadrant(0)")
        span {{quadrant}}
        span {{work}}
        span {{info}}

</template>

<script>

import WorkGrid from '../components/WorkGrid.vue'
import IconTwo from '../components/IconTwo.vue'
import DesignImages from '../components/quadrants/DesignImages.vue'
import MarketingImages from '../components/quadrants/MarketingImages.vue'
import DesignInfo from '../components/quadrants/DesignInfo.vue'
import MarketingInfo from '../components/quadrants/MarketingInfo.vue'

export default {
  components: {
    WorkGrid,
    IconTwo,
    DesignImages,
    MarketingImages,
    DesignInfo,
    MarketingInfo
  },
  data () {
    return {
      quadrant: 0,
      work: false,
      info: false,
      market: 'overview',
      design: 'overview',
      emailColor: ['pink-text', 'red-text', 'blue-text', 'green-text', 'yellow-text', 'orange-text'],
      count: 0
    }
  },
  computed: {
    currentQuadrant () {
      return this.$store.state.quadrants.quadrant
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
      this.count = setInterval(() => {
        this.count++
        if (this.count > 5) { this.count = 0 }
      }, 1500)
    },
    changeMarket (market) {
      this.market = market
    },
    changeDesign (design) {
      this.design = design
    },
    quadrantOneClass () {
      if (this.quadrant === 0 && !this.work && !this.info) {
        return 'blue'
      } else if (this.quadrant === 1 && !this.work && !this.info) {
        return ['h100', 'blue']
      } else if (this.quadrant === 1 && this.work && !this.info) {
        return ['hw100', 'blue']
      } else if (this.quadrant === 1 && !this.work && this.info) {
        return ['hw100', 'white']
      } else if (this.quadrant === 2 && !this.work && !this.info) {
        return 'yellow'
      } else if (this.quadrant === 0 && (this.work || this.info)) {
        return 'o0'
      } else { return 'blue' }
    },
    quadrantTwoClass () {
      if (this.quadrant === 0 && !this.work && !this.info) {
        return 'yellow'
      } else if (this.quadrant === 1 && !this.work && !this.info) {
        return 'blue'
      } else if (this.quadrant === 2 && !this.work && !this.info) {
        return ['h100', 'yellow']
      } else if (this.quadrant === 2 && this.work && !this.info) {
        return ['hw100', 'yellow']
      } else if (this.quadrant === 2 && !this.work && this.info) {
        return ['hw100', 'white']
      } else if (this.quadrant === 0 && (this.work || this.info)) {
        return 'o0'
      } else { return 'yellow' }
    },
    quadrantThreeClass () {
      if (this.quadrant === 0 && !this.work && !this.info) {
        return 'red'
      } else if (this.quadrant === 1 && !this.work && !this.info) {
        return ['h0', 'red']
      } else if (this.quadrant === 1 && this.work && !this.info) {
        return 'o0'
      } else if (this.quadrant === 1 && !this.work && this.info) {
        return 'o0'
      } else if (this.quadrant === 2 && this.work && !this.info) {
        return 'o0'
      } else if (this.quadrant === 2 && !this.work && this.info) {
        return 'o0'
      } else if (this.quadrant === 2 && !this.work && !this.info) {
        return ['pink', 'black-text']
      } else if (this.quadrant === 0 && this.work && !this.info) {
        return ['hw100', 'red']
      } else if (this.quadrant === 0 && !this.work && this.info) {
        return 'o0'
      } else { return 'red' }
    },
    quadrantFourClass () {
      if (this.quadrant === 0 && !this.work && !this.info) {
        return 'green'
      } else if (this.quadrant === 2 && !this.work && !this.info) {
        return ['h0', 'green']
      } else if (this.quadrant === 1 && this.work && !this.info) {
        return 'o0'
      } else if (this.quadrant === 1 && !this.work && this.info) {
        return 'o0'
      } else if (this.quadrant === 1 && !this.work && !this.info) {
        return 'red'
      } else if (this.quadrant === 2 && this.work && !this.info) {
        return ['h0', 'green']
      } else if (this.quadrant === 2 && !this.work && this.info) {
        return ['h0', 'green']
      } else if (this.quadrant === 0 && this.work && !this.info) {
        return 'o0'
      } else if (this.quadrant === 0 && !this.work && this.info) {
        return ['hw100', 'white']
      } else { return 'green' }
    },
    changeQuadrant (quadrant) {
      if (quadrant <= 2) { this.quadrant = quadrant; this.work = false; this.info = false }
      if (quadrant === 3) { this.work = true; this.info = false }
      if (quadrant === 4) { this.info = true; this.work = false }
    },
    changeWidth (quadrant) {
      if (this.quadrant === 2) {
        this.quadrant = quadrant
      }
    }
  }
}
</script>

<style lang="stylus">
#testtwo
    width: 100vw
    height: 100vh
    overflow hidden
    background black

.siteheader
    z-index 1000
    position fixed
    display: flex
    justify-content: center
    align-items: center
    top 0
    left 0
    background white
    border-bottom 3px solid black
    height 5vh
    width 100vw

.siteheader span
    color black
    font-family cardinal_grotesque_wideSBd
    font-size 2em

.icon-container
  position: relative
  width: 100%

.click-box
  position: absolute
  display: block
  height: 100%
  width: 20vw
  margin: 0 auto
  top: 0
  left: 40vw
  cursor: pointer

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
    z-index 100

.hw100
    height 100%
    width 100%
    z-index 100

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
.infodisplay
    z-index 1000
    display block
    float left
    position fixed
    top 0
    left 50%

</style>
