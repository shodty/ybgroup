
<template lang="pug">
#design-page
    .quadrantwrapper
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

</template>

<script>

import DesignImages from '../components/quadrants/DesignImages.vue'
import DesignInfo from '../components/quadrants/DesignInfo.vue'

export default {
  components: {
    DesignImages,
    DesignInfo
  },
  data () {
    return {
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

</style>
