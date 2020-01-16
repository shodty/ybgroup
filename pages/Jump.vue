<template lang="pug">
#jump-main
    CaseLeft(caseTitle='Jump' year='2019' :pattern='patterns.jump' case='jump')
        p(slot="description")
            |Our work with JUMP bikes has given us the opportunity to conceptualize, organize and execute content and events in multiple cities.
            |The content we've captured in each city is pursued with a specialized message and unique goals, and each shoot
            |presents it's own puzzle to solve in order to achieve those goals. From partnering with local cycling studios, to putting on group
            |rides through Sacramanto, San Francisco, and Santa Cruz, to shooting “Do not throw your bike in the ocean”
            |videos, JUMP Bikes has been a constant adventure.

    CaseRight(case='jump')
        img(class='case-image' slot='image1' alt='jump1' src='../assets/img/cases/jump/1.jpg' id='jump1')
        video(class='case-image' slot='image2' alt='jump2' src='../assets/img/cases/jump/2.mp4' id='jump2' controls muted loop poster="../assets/img/posters/jump1.jpg")
        video(class='case-image' slot='image3' alt='jump3' src='../assets/img/cases/jump/3.mp4' id='jump3' controls muted loop poster="../assets/img/posters/jump4.jpg")
        video(class='case-image' slot='image4' alt='jump4' src='../assets/img/cases/jump/4.mp4' id='jump4' controls muted loop poster="../assets/img/posters/jump2.jpg")
        img(class='case-image' slot='image5' alt='jump5' src='../assets/img/cases/jump/5.jpg' id='jump5')
        video(class='case-image' slot='image6' alt='jump6' src='../assets/img/cases/jump/6.mp4' id='jump6' controls muted loop poster="../assets/img/posters/jump3.jpg")
        img(class='case-image-last' slot='image7' alt='jump7' src='../assets/img/cases/jump/7.jpg' id='jump7')
</template>

<script>

import CaseLeft from '../components/cases/CaseLeft.vue'
import CaseRight from '../components/cases/CaseRight.vue'

export default {
  name: 'Jump',
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
        jump: [0, 1, 1, 0, 0, 1, 1, 0, 1],
        artlife: [1, 0, 1, 1, 0, 1, 1, 0, 1],
        mastaco: [0, 0, 1, 1, 0, 1, 1, 1, 0]
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

#jump-main
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
