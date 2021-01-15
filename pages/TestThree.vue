
<template lang="pug">
#testthree
    .title FRIENDO / IDENTITY
    .leftarrow(@click="changeImg(false)")
    .rightarrow(@click="changeImg(true)")
    .full.gray
        // p.ctrtxt Services
        .ctrimg.testimg(@click="changeImg(false)" :class="imgClass")
        .textdesc
            .headtext Friendo
            .bodytext Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                | Lorem ipsum dolor sit amet, cons
    .backbtn BACK
    .footer
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      count: 1,
      imgClass: 'testimg1'
    }
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
    }
  }
}
</script>

<style lang="stylus">

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
    font-size 52px
    position absolute
    text-align left
    font-family cardinal_grotesque_wideBlack

.textdesc
    opacity 0
    transition opacity .6s ease
    background: black
    color #C7C9CA
    padding 15px 30px 30px 30px
    position absolute
    top 56%
    right 7%
    width 20%
    font-family: 'cardinal_grotesque_wideReg'
    font-size 20px

.textdesc:hover
    opacity 1

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
    width 100%
    height: 3%
    margin 0 auto
    bottom 1.5%
    position absolute
    background-image: url('../assets/img/test/icons_test.png')
    background-size contain
    background-repeat no-repeat
    background-position: center;

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
