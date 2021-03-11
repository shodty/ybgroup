
<template lang="pug">
#testthree
    .workwrapper
        .title FRIENDO / IDENTITY
        //.leftarrow(@click="changeImg(false)")
        //.rightarrow(@click="changeImg(true)")
        .full
            // p.ctrtxt Services
            .ctrimg.testimg(@click="changeImg(true)" :class="imgClass" @mouseenter="showText()" @mouseleave="showText()")
            .textdesc(:class="showingtext? 'showtext' : 'hidetext' ")
                .headtext Friendo
                .bodytext Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    | Lorem ipsum dolor sit amet, cons
        nuxt-link(to='work')
            .backbtn BACK
        SliderCounter.footer(:lit='count' :slideObject='slideObject' :icon='slideObject.icon')

</template>

<script>

import SliderCounter from '../components/SliderCounter.vue'

export default {
  components: {
    SliderCounter
  },
  data () {
    return {
      count: 1,
      imgClass: 'testimg1',
      showingtext: false,
      currentSlide: 1,
      slideObject: {
        slideCount: 12,
        pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        icon: ['social', 'social', 'concept', 'web', 'id', 'id', 'id', 'print', 'print', 'print', 'gather', 'id']
      }
    }
  },
  mounted () {
    this.$bus.$on('countchange', (index) => {
      this.count = index
      this.imgClass = 'testimg' + this.count
      return this.count
    })
  },
  methods: {

    changeImg (up) {
      if (up) {
        this.count++
        if (this.count > 12) { this.count = 1 }
      } else {
        this.count--
        if (this.count < 1) { this.count = 12 }
      }
      this.imgClass = 'testimg' + this.count
    },
    showText () {
      this.showingtext = !this.showingtext
    }
  }
}
</script>

<style lang="stylus">
#testthree
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
    color #C7C9CA
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

.leftarrow, .rightarrow
    position absolute
    height 2%
    width 3%
    top 50%
    background-image: url('../assets/img/test/left.png')
    background-size contain
    background-repeat no-repeat
    background-position: center;

.rightarrow
    right 0
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

#testthree
    width: 100vw
    height: 100vh
    color black
.full
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  width 100%
  float left

.gray
    background: #C7C9CA
    color black
.pink
    background: #E2A0C7
    color: #0076BB
.green
    background: #235D39
    color: #F3B120
.yellow
    background: #F3B120
    color: #E43E30
.blue
    background: #0076BB
    color: #E2A0C7

.ctrtxt
    font-family: goopersuperbold_italic
    font-size: 6em
    text-align: center
    line-height: 50%

.ctrimg
    width: 60%
    height: 70%
    margin: 0 auto
    background-size contain
    background-repeat no-repeat
    background-position: center;
    cursor: url('../assets/hand.png'), auto
.testimg1
    background-image: url('../assets/img/test/Frame 77.png')

.testimg2
    background-image: url('../assets/img/test/Frame 78.png')

.testimg3
    background-image: url('../assets/img/test/Frame 79.png')

.testimg4
    background-image: url('../assets/img/test/Frame 80.png')

.testimg5
    background-image: url('../assets/img/test/Frame 81.png')

.testimg6
    background-image: url('../assets/img/test/Frame 82.png')

.testimg7
    background-image: url('../assets/img/test/Frame 83.png')

.testimg8
    background-image: url('../assets/img/test/Frame 84.png')

.testimg9
    background-image: url('../assets/img/test/Frame 85.png')

.testimg10
    background-image: url('../assets/img/test/Frame 86.png')

.testimg11
    background-image: url('../assets/img/test/Frame 87.png')

.testimg12
    background-image: url('../assets/img/test/Frame 88.png')
</style>
