
<template lang="pug">
.case-study
    .workwrapper
        .title FRIENDO / IDENTITY + PACKAGING + APPAREL
        .full(@click='incrementSlide')
          hooper.sliderclass(ref="hooper" :settings='hooperSettings' @slide='incrementCount($event)')
            slide(v-for="(slide, index) in slideObject.slideCount")
                .ctrimg(v-if="(slideObject.ext[index] != 'mp4')" key=index)
                    img(:src='getImgUrl(name, index+1, slideObject.ext[index])')
                .ctrimg(v-else key=index-100)
                    video( :poster='getPosterUrl(name, index+1, "jpg")'  playsinline autoplay muted loop)
                      source(:src='getImgUrl(name, index+1, slideObject.ext[index])')
            hooper-navigation(slot="hooper-addons")
        SliderCounter.footer.hide-on-mobile(:lit='count' :slideObject='slideObject' :icon='slideObject.icon')

</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import SliderCounter from '../components/SliderCounter.vue'
import casestudy from '../mixins/casestudy.js'
import 'hooper/dist/hooper.css'

export default {
  layout: 'casestudy',
  components: {
    SliderCounter,
    Hooper,
    Slide,
    HooperNavigation
  },
  mixins: [casestudy],
  data () {
    return {
      count: 1,
      name: 'friendo',
      showingtext: false,
      currentSlide: 1,
      slideObject: {
        slideCount: 13,
        ext: ['png', 'mp4', 'jpg', 'gif', 'png', 'mp4', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'png'],
        icon: ['social', 'social', 'concept', 'web', 'id', 'id', 'id', 'print', 'print', 'gather', 'id', 'gather', 'id']
      },
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        wheelControl: false
      }
    }
  },
  mounted () {
    this.$bus.$on('countchange', (index) => {
      this.$refs.hooper.slideTo(index - 1)
    })
  },
  methods: {
    incrementSlide () {
      this.$refs.hooper.slideNext()
    },
    incrementCount (event) {
      this.count = event.currentSlide + 1
      if (this.count > this.slideObject.slideCount) { this.count = 1 }
      if (this.count === 0) { this.count = this.slideObject.slideCount }
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/casestudies.css'
</style>
