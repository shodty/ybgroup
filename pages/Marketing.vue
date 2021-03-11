
<template lang="pug">
#marketing-page
    .quadrantwrapper
        .quadrant1(:class="q1Class")
            .infotxt
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    MarketingInfo(v-if="ready" :market='market')
        .quadrant2(:class="q2Class")
            .infotxt
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    .marketingpic.ctrtxt(v-if="ready")
                        MarketingImages(:market='market')
        .quadrant3(:class="q3Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    .marketing-categories(v-if="ready")
                        ul
                            li(@click="changeMarket('overview')") OVERVIEW
                            li(@click="changeMarket('lifestyle')") LIFESTYLE MARKETING
                            li(@click="changeMarket('content')") CONTENT CREATION
                            li(@click="changeMarket('activation')") BRAND ACTIVATION
        .quadrant4(:class="q4Class")

</template>

<script>

import MarketingImages from '../components/quadrants/MarketingImages.vue'
import MarketingInfo from '../components/quadrants/MarketingInfo.vue'

export default {
  components: {
    MarketingImages,
    MarketingInfo
  },
  data () {
    return {
      market: 'overview'
    }
  },
  computed: {
    currentQuadrant () {
      return this.$store.state.quadrants.currentQuadrant
    },
    previousQuadrant () {
      return this.$store.state.quadrants.previousQuadrant
    },
    ready () {
      return this.$store.state.quadrants.ready
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
  },
  methods: {
    changeMarket (market) {
      this.market = market
    },
    changeQuadrant (newQuadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', newQuadrant)
    },
    goToLink (event) {
      setTimeout(() => {
        this.$router.push(event.target.pathname)
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/quadrants.css';

#marketing-page
    width: 100vw
    height: 100vh
    overflow hidden
    background black

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
    box-shadow: 0px 0px 0px 4px #000000
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
