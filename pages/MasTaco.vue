<template lang="pug">
#mastaco-main
    CaseLeft(caseTitle='Mas Taco' year='2018 2019' :pattern='patterns.mastaco' case='mastaco')
        p(slot="description")
            |Our partnership with Mas Taco began at an exciting time in their trajectory. They were getting ready to open the first location,
            |had a logo, but needed a brand story to back it up. From there we hit the ground running with our #MasFamilia and haven’t looked back.
            |In addition to running their social accounts and creating all their content, we get to help create unique dining experiences like their
            |“Late Night Taco Stand” and Cinco de Mayo festivities. With a fun, vibrant restaurant we get to flex our animation skills throughout
            |our promotion, and their menu provides an endless amount of delicious items to photograph.

    CaseRight(case='mastaco')
        video(class='case-image' slot='image1' alt='mastaco1' src='../assets/img/cases/mas/1.mp4' id='mastaco1' controls muted loop poster="../assets/img/posters/mas1.jpg")
        video(class='case-image' slot='image2' alt='mastaco2' src='../assets/img/cases/mas/2.mp4' id='mastaco2' controls muted loop poster="../assets/img/posters/mas6.jpg")
        video(class='case-image' slot='image3' alt='mastaco3' src='../assets/img/cases/mas/3.mp4' id='mastaco3' controls muted loop poster="../assets/img/posters/mas5.jpg")
        video(class='case-image' slot='image4' alt='mastaco4' src='../assets/img/cases/mas/4.mp4' id='mastaco4' controls muted loop poster="../assets/img/posters/mas4.jpg")
        video(class='case-image' slot='image5' alt='mastaco5' src='../assets/img/cases/mas/5.mp4' id='mastaco5' controls muted loop poster="../assets/img/posters/mas2.jpg")
        video(class='case-image' slot='image6' alt='mastaco6' src='../assets/img/cases/mas/6.mp4' id='mastaco6' controls muted loop poster="../assets/img/posters/mas3.jpg")
        img(class='case-image-last' slot='image7' alt='mastaco7' src='../assets/img/cases/mas/7.jpg' id='mastaco7')

</template>

<script>

import CaseLeft from '../components/cases/CaseLeft.vue'
import CaseRight from '../components/cases/CaseRight.vue'

export default {
  name: 'Mastaco',
  components: {
    CaseLeft,
    CaseRight
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
        mastaco: [0, 1, 1, 1, 0, 1, 1, 1, 0]
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

#mastaco-main
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
