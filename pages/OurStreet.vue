<template lang="pug">
#ourstreet-main
    CaseLeft(caseTitle='Our Street' year='2018 2019' :pattern='patterns.ourstreet' case='ourstreet')
        p(slot="description")
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning,
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight(case='ourstreet')
        hooper( :settings='hooperSettings' slot='image1' class='case-image' style="height: 100%")
          slide
            img(class='case-image' alt='os1' src='../assets/img/cases/os/slide/s1.jpg' id='our-street1')
          slide
            img(class='case-image' alt='os2' src='../assets/img/cases/os/slide/s2.jpg' id='our-street2')
          slide
            img(class='case-image' alt='os3' src='../assets/img/cases/os/slide/s3.jpg' id='our-street2')
          slide
            img(class='case-image' alt='os4' src='../assets/img/cases/os/slide/s4.jpg' id='our-street2')
          hooper-navigation(slot="hooper-addons")
        img(class='case-image' slot='image0' alt='our-street1' src='../assets/img/cases/os/1.jpg' id='our-street1')
        video(class='case-image' slot='image2' alt='our-street1' src='../assets/img/cases/os/2.mp4' id='our-street1' controls muted loop poster="../assets/img/posters/os2.jpg")
        img(class='case-image' slot='image3' alt='our-street1' src='../assets/img/cases/os/3.jpg' id='our-street1')
        img(class='case-image' slot='image4' alt='our-street1' src='../assets/img/cases/os/4a.jpg' id='our-street1')
        img(class='case-image' slot='image5' alt='our-street1' src='../assets/img/cases/os/5.jpg' id='our-street1')
        video(class='case-image' slot='image6' alt='our-street1' src='../assets/img/cases/os/5.5.mp4' id='our-street1' controls muted loop poster="../assets/img/posters/os3.jpg")
        img(class='case-image' slot='image7' alt='our-street1' src='../assets/img/cases/os/6.jpg' id='our-street1')
        img(class='case-image-last' slot='image8' alt='our-street1' src='../assets/img/cases/os/7.jpg' id='our-street1')

        img( alt='acr1' slot='z1' src='../assets/img/cases/os/z/z1.png' id='z1' class='hide-on-ipad zbit')
        img( alt='acr1' slot='z1' src='../assets/img/cases/os/z/z2.png' id='z2' class='hide-on-ipad zbit')
        img( alt='acr1' slot='z1' src='../assets/img/cases/os/z/z3.png' id='z3' class='hide-on-ipad zbit')
        img( alt='acr1' slot='z1' src='../assets/img/cases/os/z/z4.png' id='z4' class='hide-on-ipad zbit')
        img( alt='acr1' slot='z1' src='../assets/img/cases/os/z/z5.png' id='z5' class='hide-on-ipad zbit')
        img( alt='acr1' slot='z1' src='../assets/img/cases/os/z/z6.png' id='z6' class='hide-on-ipad zbit')
</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import CaseLeft from '../components/cases/CaseLeft.vue'
import CaseRight from '../components/cases/CaseRight.vue'
import 'hooper/dist/hooper.css'

export default {
  name: 'OurStreet',
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
        ourstreet: [1, 1, 1, 1, 1, 1, 1, 1, 1]
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

#ourstreet-main
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

#z1
  position absolute
  top 60%
  left 0
  padding-left 24%

#z2
  position absolute
  top 160%
  left 0
  padding-left 30%

#z3
  position absolute
  top 220%
  left 0
  padding-left 20%

#z4
  position absolute
  top 306%
  left 0
  padding-left 34%

#z5
  position absolute
  top 336%
  left 0
  padding-left 29%

#z6
  position absolute
  top 396%
  left 0
  padding-left 22%

.zbit
  height 10%
  z-index 1000

</style>
