<template lang="pug">
#alt-main
    CaseLeft(caseTitle='Art Life Tour' year='2018' :pattern='patterns.artlife'  case='artlifetour')
        p(slot="description")
            |Renowned Sacramento artist David Garibaldi enlisted our help in creating the identity and promotional materials for his 2019 national
            |touring act, Art Life Tour. David's usage of large screens and visual effects paired with his signature live painting style informed the creation
            |of the ALT logo and digital campaign materials. Colorful. Energetic. Engaging. Fun. We launched a national print and digital campaigns and
            |produced a line of merchandise adapting David's prismatic works into 3-color screenprints.
            |Our media production team then shot and edited video content of his act
            |to capture David's raw passion and incredible talent.

    CaseRight(case='artlifetour')
        hooper( :settings='hooperSettings' slot='image2' class='case-image' style="height: 100%" class='image-slider')
          slide
            img(class='case-image' alt='os1' src='../assets/img/cases/alt/slide/s1.jpg' id='art-life-tour1')
          slide
            img(class='case-image' alt='os2' src='../assets/img/cases/alt/slide/s2.jpg' id='art-life-tour2')
          slide
            img(class='case-image' alt='os3' src='../assets/img/cases/alt/slide/s3.jpg' id='art-life-tour3')
          slide
            img(class='case-image' alt='os4' src='../assets/img/cases/alt/slide/s4.jpg' id='art-life-tour4')
          slide
            img(class='case-image' alt='os5' src='../assets/img/cases/alt/slide/s5.jpg' id='art-life-tour5')
          hooper-navigation(slot="hooper-addons")
        img(class='case-image' slot='image0' alt='art-life-tour1' src='../assets/img/cases/alt/1.jpg' id='art-life-tour1')
        video(class='case-image' slot='image1' alt='art-life-tour2' src='../assets/img/cases/alt/2.mp4' id='art-life-tour2' controls muted loop poster="../assets/img/posters/alt2.jpg")
        img(class='case-image' slot='image3' alt='art-life-tour3' src='../assets/img/cases/alt/3.jpg' id='art-life-tour3')
        img(class='case-image' slot='image4' alt='art-life-tour4' src='../assets/img/cases/alt/4.jpg' id='art-life-tour4')
        //img(class='case-image' slot='image5' alt='art-life-tour5' src='../assets/img/cases/alt/5.jpg' id='art-life-tour5')
        img(class='case-image' slot='image6' alt='art-life-tour6' src='../assets/img/cases/alt/6.jpg' id='art-life-tour6')
        video(class='case-image-last' slot='image7' alt='art-life-tour7' src='../assets/img/cases/alt/7.mp4' id='art-life-tour7'  controls muted loop poster="../assets/img/posters/alt1.jpg")
</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import CaseLeft from '../components/cases/CaseLeft.vue'
import CaseRight from '../components/cases/CaseRight.vue'
import 'hooper/dist/hooper.css'

export default {
  name: 'ArtLifeTour',
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
        artlife: [1, 1, 1, 1, 0, 1, 1, 0, 1],
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

#alt-main
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
