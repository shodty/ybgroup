<template lang="pug">
#case-left(:style='[ light? {"background" : "white" } : {"background" : "black"} ]')
    .escape(class="escape-desktop hide-for-desktop" @click="goHome")
        img(:src=' light? getImgUrl("escape_black", ".png") : getImgUrl("escape_white", ".png")'  width="22px")
    DarkLight
    .case-content(:class='light? "black" : "white" ')
        h1 {{caseTitle}}
        .line-two
            .year-heading
                h3 Year: {{year}}
            .icons
                .icon-table
                    .icon-row
                        .icon-cell(v-if="pattern[4]== '1'")
                            IconBase( class="iconbases" icon-name="Concept" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="concept")
                        .icon-cell(v-if="pattern[1] == '1'")
                            IconBase( class="iconbases" icon-name="Video" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="vid")
                        .icon-cell(v-if="pattern[2] == '1'")
                            IconBase( class="iconbases" icon-name="Gathering" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="gather")
                        .icon-cell(v-if="pattern[3] == '1'")
                            IconBase( class="iconbases" icon-name="Print" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="print")
                        .icon-cell()
                            IconBase(v-if="pattern[0] == '1'" class="Iconbases" icon-name="Identity" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="id")
                        .icon-cell(v-if="pattern[5] == '1'")
                            IconBase( class="iconbases" icon-name="Photo" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="photo")
                        .icon-cell()
                            IconBase(v-if="pattern[6] == '1'" class="iconbases" icon-name="Social" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="social")
                        .icon-cell(v-if="pattern[7] == '1'")
                            IconBase( class="iconbases" icon-name="Web" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="web")
                        .icon-cell(v-if="pattern[8] == '1'")
                            IconBase( class="iconbases" icon-name="Collaboration" width="30" height="30" :icon-color='light? "black" : "white" ')
                                component(is="collab")
        slot(name="description")
    .prev-next(class="hide-for-mobile")
        .prev(@click="goToLink(false)")
            img(src="../../assets/prev.png")
        .next(@click="goToLink(true)")
            img(src="../../assets/next.png")
</template>

<script>

import IconBase from '../IconBase.vue'
import DarkLight from '../DarkLight.vue'

export default {
  name: 'CaseLeft',
  components: {
    IconBase,
    DarkLight
  },
  props: {
    caseTitle: { type: String, default: '' },
    year: { type: String, default: '' },
    pattern: { type: Array, default () { return [] } },
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
    goHome () {
      this.$router.push('/')
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

#case-left {
    transition: 1s
    @media(max-width: 1139px) {
        width: 100%
        position: relative
        display: block
        padding: 30px
        padding-top: 65px

    }
    @media(min-width: 1140px) {
        padding-top: 45px
        padding-left: 60px
        padding-right: 16px
        width: 38%
        top: 0
        left: 0
        position: fixed
        height: 100%
    }
}

.white {
    color: white
    transition: 1s
}

.black {
    color: black
    transition: 1s
}
h1
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    letter-spacing: 1px
    font-size: 60px
    line-height : 1
    font-weight: 900

h1 {
    @media(max-width: 1139px){
        font-size: 32px
        padding-bottom: 15px
    }
}

h3
    font-size: 22px
    font-weight: 500

h3 {
    @media(min-width: 1140px){
        padding-top: 25px
    }
}

.year-heading
    display: inline-block
    padding-right: 20px
    height: 100%
    top: 60%;
    -ms-transform: translateY(-12%);
    transform: translateY(-12%);

p
    font-family: 'Open Sans', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    font-size: 13px
    font-weight: 600
    padding-top: 3vw
    line-height: 1.5

p {
    @media(min-width: 1140px) {
        padding-top: .5vw
        font-size: 18px
    }
}

.icons
    display: inline-block

.icon-table
    display:table;
    table-layout:fixed;
    border-collapse: collapse;

.icon-cell
    padding-right: 5px
    display: table-cell

.icon-row
    padding-top: 5px
    display: table-row

.prev-next
    z-index: 1300
    bottom: 35px
    position: fixed
    width: 35%
    left: 0
    padding-left: 3%

.prev img
    width: 25%
    float: left
    cursor: url('../../assets/hand.png'), auto

.next img
    width: 25%
    float: right
    cursor: url('../../assets/hand.png'), auto

.hide-for-mobile {
  @media(max-width: 1139px) {
    display: none !important
  }
}

.hide-for-desktop {
  @media(min-width: 1140px) {
    display: none !important
  }
}

.escape
    position: fixed
    top: 0
    left: 49%;
    transform: translate(-51%, 0);
    margin-top: 4vw

.escape-desktop {
  @media(max-width: 1140px) and (orientation:landscape) {
    margin-top: 2vw
  }
  @media(max-width: 1140px) and (orientation:portrait) {
    margin-top: 3.4vw
  }
}

</style>
