<template lang="pug">
#shangrila-main
    CaseLeft(caseTitle='Shangri-La' year='2018 2019' :pattern='patterns.shangrila' case='shangrila')
        p(slot="description")
            |Shangri-La was as mystical of a project as the name suggests. They wanted to created a fun and beautiful bar with a large patio that you might find downtown,
            |but in old Fair Oaks. From the moment we first met with them about the project we knew it was for us. Taking vibes from vintage Palm Springs and the mid-century modern
            |aesthetic that inspired the concept, we created a playful mark that has
            |elegance, but doesn’t take itself too seriously. It has been so rewarding to see the the branding translated over this beautiful space.

    CaseRight(case='shangrila')
        hooper( :settings='hooperSettings' slot='image1' class='case-image' style="height: 100%" class='image-slider')
          slide
            img(class='case-image' alt='os1' src='../assets/img/cases/shang/slide/s5.png' id='shangri-la1')
          slide
            img(class='case-image' alt='os2' src='../assets/img/cases/shang/slide/s6.png' id='shangri-la2')
          slide
            img(class='case-image' alt='os3' src='../assets/img/cases/shang/slide/s1.png' id='shangri-la3')
          slide
            img(class='case-image' alt='os4' src='../assets/img/cases/shang/slide/s2.png' id='shangri-la4')
          slide
            img(class='case-image' alt='os5' src='../assets/img/cases/shang/slide/s3.png' id='shangri-la5')
          slide
            img(class='case-image' alt='os5' src='../assets/img/cases/shang/slide/s4.png' id='shangri-la5')
          hooper-navigation(slot="hooper-addons")
        img(class='case-image' slot='image0' alt='shangrila1' src='../assets/img/cases/shang/1.jpg' id='shangrila1')
        img(class='case-image' slot='image2' alt='shangrila2' src='../assets/img/cases/shang/2.jpg' id='shangrila2')
        img(class='case-image' slot='image3' alt='shangrila3' src='../assets/img/cases/shang/3.jpg' id='shangrila3')
        img(class='case-image' slot='image4' alt='shangrila4' src='../assets/img/cases/shang/4.jpg' id='shangrila4')
        img(class='case-image' slot='image5' alt='shangrila5' src='../assets/img/cases/shang/5.jpg' id='shangrila5')
        img(class='case-image' slot='image6' alt='shangrila6' src='../assets/img/cases/shang/6.jpg' id='shangrila6')

</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import CaseLeft from '../components/cases/CaseLeft.vue'
import CaseRight from '../components/cases/CaseRight.vue'
import 'hooper/dist/hooper.css'

export default {
  name: 'Shangrila',
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

#shangrila-main
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
