<template lang="pug">
#case-right(:style='[ light? {"background" : "white" } : {"background" : "black"} ]')
    slot(name='image0')
    slot(name='image1')
    slot(name='image2')
    slot(name='image3')
    slot(name='image4')
    slot(name='image5')
    slot(name='image6')
    slot(name='image7')
    slot(name='image8')
    slot(name='image9')
    slot(name='image10')
    slot(name='image11')
    slot(name='image12')
    slot(name='z1')
    .prev-next(class="mobile-menu-hide")
      .prev
          img(:src=' light? getImgUrl("prev", ".png") : getImgUrl("prev_white", ".png")' @click="goToLink(false)")
      .next
          img(:src=' light? getImgUrl("next", ".png") : getImgUrl("next_white", ".png")' @click="goToLink(false)")
    .mobile-case-footer(class="mobile-menu-hide")
      img(:src=' light? getImgUrl("ybg_badge_black", ".png") : getImgUrl("ybg_badge_white", ".png")' height='60px')
</template>

<script>

export default {
  name: 'CaseLeft',
  props: {
    bg: { type: String, default: '' },
    case: { type: String, default: '' }
  },
  data () {
    return {
      cases: ['ourstreet', 'allcityriders', 'jump', 'mastaco', 'bottomless', 'shangrila', 'thecabin', 'artlifetour', 'bardismiry']
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    goToLink (forward) {
      const index = this.cases.indexOf(this.case)
      if (forward) {
        if (this.cases.length - 1 > index) { this.$router.push(this.cases[index + 1]) } else { this.$router.push(this.cases[0]) }
      } else
      if (index > 0) { this.$router.push(this.cases[index - 1]) } else { this.$router.push(this.cases[this.cases.length - 1]) }
      window.scrollTo(0, 0)
    },
    getImgUrl (pic, ext) {
      return require('../../assets/' + pic + ext)
    }
  }
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding 0px

#case-right {
    transition: 1s
    @media(max-width: 1139px) {
      display: inline-block
      width: 100%
      float: right
    }
    @media(min-width: 1140px) {
      display: inline-block
      width: 62%
      float: right
      //padding-right: 65px
    }
}

.sidebar-hide {
  @media(max-width: 1139px) {
    display: none !important
  }
}

.mobile-menu-hide {
  @media(min-width: 1140px) {
    display: none !important
  }
}

.prev-next
  padding 24px 0
  width: 90%
  margin: 0 auto
  overflow:hidden;
  position: relative
  z-index 1000

.prev, .next
  width: 100%
  height: 100%

.prev img
  width: 40%
  height: 100%
  float: left
  display: inline-block

.next img
  width: 40%
  height: 100%
  float: right
  display: inline-block

.mobile-case-footer
  text-align center
  padding-bottom 24px

.image-slider
  cursor: url('../../assets/leftright.png'), auto
</style>
