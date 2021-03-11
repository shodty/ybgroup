
<template lang="pug">
.case-study
    .workwrapper
        .title ALL CITY RIDERS / IDENTITY + SOCIAL + CONTENT CREATION
        .leftarrow(@click="changeImg(false)")
        .rightarrow(@click="changeImg(true)")
        .full
            div(v-for="(slide, index) in slideObject.slideCount" @click="changeImg(true)" @mouseenter="showText(false)" @mouseleave="showText(false)")
                .ctrimg(v-if="(index+1 == count) && (slideObject.ext[index] != 'mp4')" key=1)
                    img(:src='getImgUrl(index+1, slideObject.ext[index])')
                .ctrimg(v-else-if="(index+1 == count)" key=2)
                    video(:src='getImgUrl(index+1, slideObject.ext[index])' autoplay muted loop )
            //.textdesc(:class="showingtext? 'showtext' : 'hidetext' ")
                .headtext {{name}}
                .bodytext Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    | Lorem ipsum dolor sit amet, cons
        nuxt-link(to='work')
            .backbtn BACK
        SliderCounter.footer(:lit='count' :slideObject='slideObject' :icon='slideObject.icon')

</template>
</template>

<script>

import SliderCounter from '../components/SliderCounter.vue'

export default {
  layout: 'casestudy',
  components: {
    SliderCounter
  },
  data () {
    return {
      count: 1,
      name: 'acr',
      showingtext: false,
      currentSlide: 1,
      slideObject: {
        slideCount: 9,
        pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ext: ['mp4', 'jpg', 'mp4', 'jpg', 'mp4', 'mp4', 'jpg', 'jpg', 'mp4'],
        icon: ['social', 'social', 'concept', 'web', 'id', 'id', 'id', 'print', 'print']
      }
    }
  },
  mounted () {
    this.$bus.$on('countchange', (index) => {
      this.count = index
      return this.count
    })
  },
  methods: {

    changeImg (up) {
      if (up) {
        this.count++
        if (this.count > this.slideObject.slideCount) { this.count = 1 }
      } else {
        this.count--
        if (this.count < 1) { this.count = this.slideObject.slideCount }
      }
    },
    showText () {
      this.showingtext = !this.showingtext
    },
    getImgUrl (pic, ext) {
      return require('../assets/cases/' + this.name + '/' + pic + '.' + ext)
    }
  }
}
</script>

<style lang="stylus">
.case-study
    width: 100vw
    height: 100vh
    overflow hidden
    background black

.workwrapper
    position relative
    top 5vh
    width 97%
    height 95vh
    background white
    border 3px solid black
hr
    border-top: 4px solid black

.title
    width 100%
    top 1.5%
    font-size 20px
    position absolute
    text-align center
    font-family cardinal_grotesque_wideSBd

.backbtn
    width 100%
    bottom .1%
    padding-left 20px
    font-size 32px
    position absolute
    text-align left
    font-family cardinal_grotesque_wideBlack
    color black
.textdesc
    transition opacity .6s ease
    background: black
    border-radius 0px 25px 25px 25px
    color white
    padding 15px 30px 30px 30px
    position absolute
    bottom 6%
    right 6%
    width 20%
    font-family: 'cardinal_grotesque_wideReg'
    font-size 20px

.hidetext
    opacity: 0

.showtext
    opacity:  1

.bodytext
    font-size 14px

.headtext
    font-family: 'cardinal_grotesque_wideSBd'
    font-size 48px
    text-transform: capitalize

.leftarrow, .rightarrow
    position absolute
    height 2%
    width 3%
    top 50%
    background-image: url('../assets/img/test/left.png')
    background-size contain
    background-repeat no-repeat
    background-position: center;

.leftarrow
    left 15%
.rightarrow
    right 15%
    background-image: url('../assets/img/test/right.png')

.footer
    width 50%
    height: 40px
    margin auto
    left 0
    right 0
    bottom .5%
    position absolute
    text-align center

.full
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  width 100%
  float left

.ctrimg
    width: 60vw
    height: 70vh
    margin: 0 auto
    cursor: url('../assets/hand.png'), auto

.ctrimg img, .ctrimg video
    object-fit: contain
    width: 100%;
    height: 100%;
</style>
