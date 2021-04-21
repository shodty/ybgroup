<template lang="pug">
#casemenu
    .case-menu
        .casestudy-menu-container(:class='menuclass')
            .casebox.white.black-text.pointer(v-if="!menuopen" @click="openMenu(!menuopen)") {{menulabel}}
            div(v-for="(casestudy, index) in cases" :key="index")
                nuxt-link.casebox.white.black-text.pointer( :to='casestudy.link' event="disabled" @click.native="goToLink") {{casestudy.name}}
            .casebox.white.black-text.pointer(v-if="menuopen" @click="openMenu(!menuopen)") {{menulabel}}
</template>
<script>
export default {
  data () {
    return {
      menuopen: false,
      menulabel: 'MORE',
      menuclass: 'closed',
      cases: {
        doyourbest: {
          name: 'do your best',
          link: 'doyourbest'
        },
        visitmodesto: {
          name: 'visit modesto',
          link: 'friendo'
        },
        ruta: {
          name: 'ruta 23',
          link: 'ruta'
        },
        thc: {
          name: 'thc',
          link: 'thc'
        },
        ybgapparel: {
          name: 'ybg apparel',
          link: 'ybgapparel'
        },
        vote: {
          name: 'vote',
          link: 'vote'
        },
        friendo: {
          name: 'friendo',
          link: 'friendo'
        },
        droppingpins: {
          name: 'dropping pins',
          link: 'droppingpins'
        },
        jump: {
          name: 'jump',
          link: 'jump'
        },
        ourstreet: {
          name: 'our street',
          link: 'ourstreet'
        },
        blasphemy: {
          name: 'blasphemy',
          link: 'blasphemy'
        },
        shangrila: {
          name: 'shangri la',
          link: 'shangrila'
        },
        icon: {
          name: 'icon apparel',
          link: 'icon'
        },
        wjs: {
          name: 'WJS',
          link: 'wjs'
        },
        acr: {
          name: 'acr',
          link: 'acr'
        },
        vpp: {
          name: 'vpp',
          link: 'vpp'
        }

      }
    }
  },
  methods: {
    openMenu (truth) {
      if (truth) {
        this.menuclass = 'open'
        this.menulabel = 'CLOSE'
        this.menuopen = true
      } else {
        this.menuclass = 'closed'
        this.menuopen = false
        this.menulabel = 'MORE'
      }
    },
    goToLink (event) {
      setTimeout(() => {
        this.$router.push(event.target.pathname)
        setTimeout(() => {
          this.menuclass = 'closed'
          this.menuopen = false
          this.menulabel = 'MORE'
        }, 250)
      }, 50)
    }
  }
}
</script>
<style lang="stylus">
@import '../assets/styles/colors.css'
.case-sidemenu
    z-index 100
    position fixed
    bottom 0
    right 0

.case-sidemenu a, .case-menu a
  color black !important
  text-decoration none

.case-menu
    z-index 100
    position fixed
    bottom 1vh
    right 12vw
    @media(max-width: 767px) {
      bottom 10%
      right 72vw
    }
.casestudy-menu-container
    position absolute
    bottom 100%
    height 32px
    overflow hidden
    transition height 1s ease, opacity .5s ease
    @media(max-width: 767px) {
      height 24px
    }
.open
    height: 544px
    @media(max-width: 767px) {
      height 408px
    }

.closed div div
    margin-top: 3%
.casebox
    display: flex
    font-family cardinal_grotesque_wideSBd
    font-size 1em
    width 165px
    border 3px solid black
    height 32px
    text-align center
    justify-content: center
    align-items: center
    overflow hidden
    transition: background .3s ease
    text-transform: uppercase
    @media(max-width: 767px) {
      font-size .8em
      height 24px
    }
.casebox:hover
    background: #0076BB

.transparent
    opacity .5

</style>
