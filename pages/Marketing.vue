
<template lang="pug">
#marketing-page
    .quadrantwrapper.hide-on-mobile
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
    .quadrantwrapper.hide-on-desktop
      .marketing1mobile.pink
        hooper.marketingslider(ref="hooperimages" :settings='hooperSettings'  @slide='changeSlides($event)')
            slide
                img(src="../assets/img/ruta01.jpg" index)
            slide
                img( src="../assets/img/test/friendo01.jpg" index)
            slide
                video(poster="../assets/img/test/burn.jpg" autoplay muted loop controls key=3)
                  source(src="../assets/img/test/burn01.mp4")
            slide
                img(src="../assets/img/test/Jump-60.jpg" key=4)

      .marketing2mobile.yellow
        hooper.marketingslider(ref="hooperinfo" :settings='hooperSettings'  @slide='changeSlides($event)')
            slide
                p.marketing-services Marketing
                p.marketing-copy Creating with purpose, intent and a cohesive strategy in mind is what we do best.
                  |  Work with our creative team to not only develop an effective and compelling strategy but
                  |  to also manage and execute the plan in a collaborative manner.
            slide
                p.marketing-services Lifestyle
                p.marketing-copy Our strength is helping our clients tie it all together.
                  |  Whether it’s a product or service you offer, we enjoy synthesizing all
                  |  of your various marketing efforts into an effective and on-brand strategy.
            slide
                p.marketing-services Content Creation
                p.marketing-copy In today’s digital landscape the ability to tell your story through
                  |  meaningful, impactful and contextual content is essential to compete in any industry.
                  |  We specialize in and enjoy the process of creating custom content that is unique and on brand.
            slide
                p.marketing-services Brand Activation
                p.marketing-copy Every brand has a story to tell and what we’ve found is that the truest way
                  |  of telling it is often in person, getting physical, and wrapping oneself into the experience
                  |  of a brand rather than the consumption of it.
      .marketing3mobile.pink
        MobileQuadrantMenu(bg="pink" text="black" :links="['design', 'work', 'info', 'home']")
</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import MarketingImages from '../components/quadrants/MarketingImages.vue'
import MarketingInfo from '../components/quadrants/MarketingInfo.vue'
import SliderCounter from '../components/SliderCounter.vue'
import 'hooper/dist/hooper.css'
import MobileQuadrantMenu from '../components/MobileQuadrantMenu.vue'

export default {
  components: {
    MarketingImages,
    MarketingInfo,
    SliderCounter,
    Hooper,
    Slide,
    HooperNavigation,
    MobileQuadrantMenu
  },
  data () {
    return {
      market: 'overview',
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        wheelControl: false
      }
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
    if (this.currentQuadrant !== 2) { this.changeQuadrant(2) }
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
    },
    changeSlides (event) {
      this.$refs.hooperimages.slideTo(event.currentSlide)
      this.$refs.hooperinfo.slideTo(event.currentSlide)
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

.marketing1mobile, .marketing2mobile, .marketing3mobile
  width 100%
  border-bottom 3px solid black
  display: flex;
  justify-content: center;
  align-items: center;
.marketing1mobile
  height: 50%;

.marketing2mobile
  height: 30%;

.marketing3mobile
  height: 20%;

.marketing1mobile img, .marketing1mobile video
  height: 100%

.marketing3mobile .marketing-categories ul li
  font-size 24px
  line-height 1.5

.marketing3mobile .marketing-categories
  margin 0 auto
  padding 0

.marketing2mobile .marketing-overview
  font-size 16px
  line-height 1

.marketing2mobile .marketing-copy
  font-size 3.5vw

.marketingslider
    height: 100%
li.is-active.is-current
    z-index 100

.marketingslider p
    padding-left: 10%
    padding-right: 10%
    color black
.marketingslider .marketing-services
    padding-top 8%
    font-weight 1000
    text-transform uppercase
    letter-spacing 2px

li img, li video
  object-fit: cover;
  width 100%

.marketing-links
    font-family: cardinal_grotesque_wideSBd;
    font-size: 1.5em;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    line-height 1.5

.marketing-links li
      list-style-type: none;

.marketing-links li a
  color black !important

</style>
