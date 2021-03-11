<template lang='pug'>
div
  //IconButtons
  nuxt
  Cart
  //MobileMenu
  .siteheader
    .icon-container
        IconTwo(icon-name="yellow brick group" width="100vw" height="2.5vh" icon-color='black')
            component(is="yellow-brick-group")
        nuxt-link(to='testfive')
          .click-box(@click="changeQuadrant(0)")
  .sidemenu
    .menubox.blue.white-text.pointer
      nuxt-link(to='design' event="disabled" @click.native="goToLink($event, 1)") DESIGN
    .menubox.yellow.white-text.pointer
        nuxt-link(to='marketing' event="disabled" @click.native="goToLink($event, 2)") MARKETING
    .menubox.red.white-text.pointer
        nuxt-link(to='work' event="disabled" @click.native="goToLink($event, 3)") WORK
    .menubox.green.white-text.pointer
        nuxt-link(to='info' event="disabled" @click.native="goToLink($event, 4)") INFO
    .menubox.orange.white-text.pointer
        p STORE
  //.information
    span Current Quadrant: {{currentQuadrant}}
    span Previous Quadrant: {{previousQuadrant}}
    span Ready: {{ready}}
</template>

<script>
import IconTwo from '~/components/IconTwo.vue'
import Cart from '~/components/Cart.vue'
import MobileMenu from '~/components/MobileMenu.vue'
import IconButtons from '~/components/IconButtons.vue'

export default {
  components: {
    Cart,
    MobileMenu,
    IconButtons,
    IconTwo
  },
  computed: {
    currentQuadrant () {
      return this.$store.state.quadrants.currentQuadrant
    },
    previousQuadrant () {
      return this.$store.state.quadrants.previousQuadrant
    },
    ready () {
      return this.$store.state.quadrants.ready
    }
  },
  methods: {
    goToLink (event, quadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', quadrant)
      setTimeout(() => {
        this.$router.push(event.target.pathname)
      }, 1000)
    },
    changeQuadrant (quadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', quadrant)
    }
  }
}
</script>

<style lang="stylus">

.information
  position fixed
  top 0
  left 70%
  color black
  font-size 12px
  z-index 5000

.information span
  padding-right: 5px

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  margin: 0;
}

.siteheader
    z-index 1000
    position fixed
    display: flex
    justify-content: center
    align-items: center
    top 0
    left 0
    background white
    border-bottom 3px solid black
    height 5vh
    width 100vw

.icon-container
  position: relative
  width: 100%

.click-box
  position: absolute
  display: block
  height: 100%
  width: 20vw
  margin: 0 auto
  top: 0
  left: 40vw
  cursor: pointer

.sidemenu
    z-index 100
    position fixed
    bottom 0
    right 0

.sidemenu a
  color white
  text-decoration none
.menubox
    display: flex
    font-family cardinal_grotesque_wideSBd
    font-size 2em
    width 3vw
    border 3px solid black
    height 19vh
    writing-mode vertical-rl
    text-align center
    justify-content: center
    align-items: center
    overflow hidden
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@font-face {
    font-family: 'cardinal_grotesque_condenseBd';
    src: url('../assets/fonts/cardinalgrotesquecondensed-bold-webfont.woff2') format('woff2'),
         url('../assets/fonts/cardinalgrotesquecondensed-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'cardinal_grotesque_wideReg';
    src: url('../assets/fonts/CardinalGrotesqueWide-Regular.woff2') format('woff2'),
         url('../assets/fonts/CardinalGrotesqueWide-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'cardinal_grotesque_wideBlack';
    src: url('../assets/fonts/CardinalGrotesqueWide-Black.woff2') format('woff2'),
         url('../assets/fonts/CardinalGrotesqueWide-Black.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'cardinal_grotesque_wideSBd';
    src: url('../assets/fonts/cardinalgrotesquewide-semibold-webfont.woff2') format('woff2'),
         url('../assets/fonts/cardinalgrotesquewide-semibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'goopersemibold_italic';
    src: url('../assets/fonts/gooper-semibolditalic-webfont.woff2') format('woff2'),
         url('../assets/fonts/gooper-semibolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'goopersuperbold_italic';
    src: url('../assets/fonts/Gooper5-SuperItalic.woff2') format('woff2'),
         url('../assets/fonts/Gooper5-SuperItalic.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'ruta_23regular';
    src: url('../assets/fonts/ruta-regular_v1-webfont.woff2') format('woff2'),
         url('../assets/fonts/ruta-regular_v1-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

.hide-on-mobile {
  @media(max-width: 767px) {
    display: none !important
  }
}

.hide-on-desktop {
  @media(min-width: 768px) {
    display: none !important;
  }
}

.show-on-ipad {
  @media(min-width: 1140px) {
    display: none !important;
  }
}

.hide-on-ipad {
  @media(max-width: 1139px) {
    display: none !important;
  }
}

.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}

.button
  background-color: #2752ff;
  color: white;
  border: none;
  font-size: 1.2rem;
  padding: 10px 17px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition background-color .2s ease

.button:hover, .button:focus
    background-color: #f26760;

.button:disabled
    background: #bfbfbf;
    cursor: not-allowed;

.white-text
    color: white !important

.black-text
  color black !important

.pointer
  cursor pointer

.fade-enter-active, .fade-leave-active
    transition: opacity 1s

.fade-enter, .fade-leave-to
    opacity: 0

</style>

/*
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}*/
