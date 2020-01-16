<template lang="pug">
#bardis-miry-main
    CaseLeft(caseTitle='Bardis & Miry' year='2019' :pattern='patterns.bardismiry'  case='bardismiry')
        p(slot="description")
          |As individuals, Bay Miry and Katherine Bardis-Miry are leaders in the Sacramento development space. When they chose to launch a new development firm as partners, we were honored that they approached us to bring
          |their vision to life. Throughout the Bardis & Miry Development identity we sought to accentuate the
          |duality inherent in the personality, expertise, and style of the firm. This duality infused throughout
          |the identity speaks to the strength and symbiosis of Bardis & Miry coming together to create truly unique development projects.

    CaseRight(case='bardismiry')
        img(class='case-image' slot='image0' alt='bardis-miry1' src='../assets/img/cases/bm/1a.jpg' id='bardis-miry1')
        hooper( :settings='hooperSettings' slot='image1' class='case-image' style="height: 100%" class='image-slider')
          slide
            img(class='case-image' alt='bm' src='../assets/img/cases/bm/slide/s1.png' id='bardis-miry1')
          slide
            img(class='case-image' alt='bm' src='../assets/img/cases/bm/slide/s2.png' id='bardis-miry2')
          slide
            img(class='case-image' alt='bm' src='../assets/img/cases/bm/slide/s3.png' id='bardis-miry3')
          slide
            img(class='case-image' alt='bm' src='../assets/img/cases/bm/slide/s4.png' id='bardis-miry4')
          hooper-navigation(slot="hooper-addons")
        img(class='case-image' slot='image2' alt='bardis-miry2' src='../assets/img/cases/bm/2.jpg' id='bardis-miry2')
        img(class='case-image' slot='image3' alt='bardis-miry3' src='../assets/img/cases/bm/3.jpg' id='bardis-miry3')
        video(class='case-image' slot='image4' alt='bardis-miry4' src='../assets/img/cases/bm/4.mp4' id='bardis-miry4' controls muted loop poster="../assets/img/posters/bm1.jpg")
        //img(class='case-image' slot='image5' alt='bardis-miry5' src='../assets/img/cases/bm/5.jpg' id='bardis-miry5')
        //img(class='case-image' slot='image6' alt='bardis-miry6' src='../assets/img/cases/bm/6.jpg' id='bardis-miry6')
        //img(class='case-image-last' slot='image7' alt='bardis-miry7' src='../assets/img/cases/bm/7.gif' id='bardis-miry7')
</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import CaseLeft from '../components/cases/CaseLeft.vue'
import CaseRight from '../components/cases/CaseRight.vue'
import 'hooper/dist/hooper.css'

export default {
  name: 'BardisMiry',
  components: {
    CaseLeft,
    CaseRight,
    Hooper,
    Slide,
    HooperNavigation
  },
  data () {
    return {
      patterns: {
        ourstreet: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        acr: [1, 1, 0, 1, 0, 1, 1, 1, 0],
        bottomless: [1, 1, 1, 1, 1, 1, 1, 0, 1],
        shangrila: [1, 0, 0, 1, 0, 1, 1, 1, 1],
        bardismiry: [1, 0, 0, 1, 0, 0, 1, 0, 1],
        cabin: [1, 0, 0, 1, 0, 1, 1, 1, 0],
        jump: [1, 0, 1, 0, 1, 1, 1, 0, 1],
        artlife: [1, 0, 1, 1, 0, 1, 1, 0, 1],
        mastaco: [0, 0, 1, 1, 0, 1, 1, 1, 0]
      },
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        wheelControl: false
      }
    }
  },
  methods: {

  }
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding 0px

#bardis-miry-main
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  transition: 1s
  width:100%
  height:100%

.case-image
    width:100%
    padding-bottom: 20px

.case-image-last
    width:100%
    padding-bottom: 0px

</style>
