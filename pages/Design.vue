
<template lang="pug">
#design-page
    .quadrantwrapper.hide-on-mobile
      .quadrant1(:class="q1Class")
        .designpic.ctrtxt
          transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
            DesignImages(v-if="ready" :design='design')
      .quadrant2(:class="q2Class")
        .infotxt
          transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
            DesignInfo(v-if="ready" :design='design')
      .quadrant3(:class="q3Class")
      .quadrant4(:class="q4Class")
        .design-categories
          transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
            ul(v-if="ready")
              li(@click="changeDesign('overview')") OVERVIEW
              li(@click="changeDesign('branding')") BRANDING
              li(@click="changeDesign('motion')") MOTION
              li(@click="changeDesign('packaging')") PACKAGING
    .quadrantwrapper.hide-on-desktop
      .design1mobile.pink
        hooper.designslider(ref="hooperimages" :settings='hooperSettings'  @slide='changeSlides($event)')
            slide
                video(poster="../assets/vid/poster/ybg_launch.jpg" autoplay muted loop controls key=1)
                  source( src="../assets/vid/ybg_launch02.mp4")
            slide
                img( src="../assets/img/test/vpp01.png" key=2)
            slide
                video(poster="../assets/cases/wjs/poster/1.jpg" autoplay muted loop controls key=3)
                  source(src="../assets/cases/wjs/1.mp4")
            slide
                img(src="../assets/img/test/fr03.jpg" key=4)

      .design2mobile.blue
        hooper.designslider(ref="hooperinfo" :settings='hooperSettings'  @slide='changeSlides($event)')
            slide
                p.design-services Design
                p.design-copy We work to effectively communicate the story of your brand, product, or project to your audience. Whether that story is told through the packaging your product comes in or the logo that serves as the face of your brand, our team strategizes from the ground-up to craft the most effective solution and follow it through from conception to execution. Building you a strong foundation and developing systems for continued excellence is our bread & butter.
            slide
                p.design-services Branding
                p.design-copy A brand is more than a logo. It is every touchpoint a person has with your company; from the way you communicate to the aesthetic of each digital or physical piece of collateral. We can help you develop those touchpoints to successfully tell the story of your brand. Whether you need to re-work your current brand or build one from the ground up, we are equipped to help you discover your authentic brand identity.
            slide
                p.design-services Motion
                p.design-copy Motion breathes a fourth dimension into traditional graphic design touchpoints by allowing your brand elements to dance, morph, interact, and communicate over time. In today's digital world of byte-sized attention spans, we love conceptualizing and executing motion pieces that quickly catch the eye of your audience and communicate to them with style and respect for their time.
            slide
                p.design-services Packaging
                p.design-copy Designing packaging that not only looks beautiful but clears all the compliance and regulatory hurdles to get your product on the shelf is no small feat. Our team is well-versed in the entire packaging production pipeline, allowing us to help you R&D the packaging for your next product line, find vendors, prototype, create dielines, design, print prep, and execute production at scale.
      .design3mobile.red
        MobileQuadrantMenu(bg="red" text="white" :links="['marketing', 'work', 'info', 'home']")
</template>
<script>

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import DesignImages from '../components/quadrants/DesignImages.vue'
import DesignInfo from '../components/quadrants/DesignInfo.vue'
import SliderCounter from '../components/SliderCounter.vue'
import 'hooper/dist/hooper.css'
import MobileQuadrantMenu from '../components/MobileQuadrantMenu.vue'

export default {
  components: {
    DesignImages,
    DesignInfo,
    SliderCounter,
    Hooper,
    Slide,
    HooperNavigation,
    MobileQuadrantMenu
  },
  data () {
    return {
      design: 'overview',
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
    if (this.currentQuadrant !== 1) { this.changeQuadrant(1) }
  },
  methods: {
    changeDesign (design) {
      this.design = design
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

#design-page
    width: 100vw
    height: 100vh
    overflow hidden
    background black

.design1mobile, .design2mobile, .design3mobile
  width 100%
  border-bottom 3px solid black
  display: flex;
  justify-content: center;
  align-items: center;
.design1mobile
  height: 50%;

.design2mobile
  height: 30%;

.design3mobile
  height: 20%;

.design1mobile img, .design1mobile video
  height: 100%

.design3mobile .design-categories ul li
  font-size 24px
  line-height 1.5

.design3mobile .design-categories
  margin 0 auto
  padding 0

.design2mobile .design-overview
  font-size 16px
  line-height .8

.design2mobile .design-copy
  font-size 3vw

.designslider
    min-height: 100%

li.is-active.is-current
    z-index 100

.designslider p
    padding-left: 10%
    padding-right: 10%
    color white
.designslider .design-services
    padding-top 8%
    font-weight 1000
    text-transform uppercase
    letter-spacing 2px

.design-links
    font-family: cardinal_grotesque_wideSBd;
    font-size: 1.5em;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    line-height 1.5

.design-links li
      list-style-type: none;

.design-links li a
  color white !important

.design-categories li
  color white

</style>
