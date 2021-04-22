<template lang="pug">
#work-grid
    transition(name="fade" mode="out-in")
        .workholder(v-if="workgrid" index)
            .case-img.no-top-border.no-left-border
                img(src="../assets/covers/dyb01.jpg")
                .overlay.pink
                    nuxt-link(to='/doyourbest' event="disabled" @click.native="goToWork") DO YOUR BEST
                        //p DO YOUR BEST
                        //p.secondary MAIL SERVICE
            .case-img.no-top-border
                img(src="../assets/covers/vm01.jpg")
                .overlay.vmgreen
                    nuxt-link(to='/friendo' event="disabled" @click.native="goToWork") VISIT MODESTO
            .case-img.no-top-border
                img(src="../assets/covers/ru01.jpg")
                .overlay.blue
                    nuxt-link(to='/ruta' event="disabled" @click.native="goToWork") RUTA 23
            .case-img.no-top-border.no-right-border
                img(src="../assets/covers/thc01.jpg")
                .overlay.tan
                    nuxt-link(to='/thc' event="disabled" @click.native="goToWork") TAHOE HONEY CO.
            .case-img.no-left-border
                img(src="../assets/covers/ybga01.jpg")
                .overlay.yellow
                    nuxt-link(to='/ybgapparel' event="disabled" @click.native="goToWork") YBG APPAREL
            .case-img
                img(src="../assets/covers/vo01.jpg")
                .overlay.neon
                    nuxt-link(to='/vote' event="disabled" @click.native="goToWork") VOTE
                        //p VOTE
                        //p.secondary MAIL SERVICE
            .case-img
                img(src="../assets/covers/fr03.jpg")
                .overlay.orange
                    nuxt-link(to='/friendo' event="disabled" @click.native="goToWork") FRIENDO
            .case-img.no-right-border
                img(src="../assets/covers/dp01.jpg")
                .overlay.pink
                    nuxt-link(to='/droppingpins' event="disabled" @click.native="goToWork") DROPPING PINS
            .case-img.no-left-border
                img(src="../assets/covers/ju01.jpg")
                .overlay.red
                    nuxt-link(to='/jump' event="disabled" @click.native="goToWork") JUMP
            .case-img
                img(src="../assets/covers/os01.jpg")
                .overlay.purple
                    nuxt-link(to='/ourstreet' event="disabled" @click.native="goToWork") OUR STREET
            .case-img
                img(src="../assets/covers/bl03.jpg")
                .overlay.black
                    nuxt-link(to='/blasphemy' event="disabled" @click.native="goToWork") BLASPHEMY
            .case-img.no-right-border
                img(src="../assets/covers/sh02.jpg")
                .overlay.navy
                    nuxt-link(to='/shangrila' event="disabled" @click.native="goToWork") SHANGRI LA
            .case-img.no-bottom-border.no-left-border
                img(src="../assets/covers/icon.jpg")
                .overlay.teal
                    nuxt-link(to='/icon' event="disabled" @click.native="goToWork") ICON
            .case-img.no-bottom-border
                img(src="../assets/covers/wjs.jpg")
                .overlay.wjsblue
                    nuxt-link(to='/WJS' event="disabled" @click.native="goToWork") WJS
            .case-img.no-bottom-border
                img(src="../assets/covers/acr01.jpg")
                .overlay.acrgreen
                    nuxt-link(to='/acr' event="disabled" @click.native="goToWork") ALL CITY RIDERS
            .case-img.no-bottom-border.no-right-border
                img(src="../assets/covers/vpp01.jpg")
                .overlay.dosblue
                    nuxt-link(to='/vpp' event="disabled" @click.native="goToWork") VALLEY PRODUCER PROGRAM
            .case-img.no-bottom-border.no-right-border.hide-on-desktop.black
        .worksingle(v-else index)
</template>

<script>

export default {
  name: 'Work',
  components: {
  },
  data () {
    return {
      workgrid: true
    }
  },
  methods: {
    goToWork (event) {
      this.workgrid = !this.workgrid
      setTimeout(() => {
        this.$router.push(event.target.pathname)
      }, 1000)
    }
  }
}

</script>

<style scoped lang="stylus">
@import '../assets/styles/colors.css'

#work-grid, .workholder
    position relative
    width 100%
    height 100%

.worksingle
    background white
    width 100%
    height 100%

.case-img
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    width 25%
    height 25%
    float left
    border 3px solid black
    background black
    @media(max-width: 767px) {
        height 33.3333%
    }
.case-img a
    min-width: 100%
    min-height: 100%
.case-img img
    flex-shrink: 0
    min-width: 100%
    min-height: 100%
    padding 0
    margin 0

.case-img
  @media(max-width: 767px) {
    width 100%
  }
.no-top-border
    border-top 0px solid black
    @media(max-width: 767px) {
        border-top 3px solid black
    }
.no-right-border
    border-right 0px solid black
    @media(max-width: 767px) {
        border-right 3px solid black
    }
.no-bottom-border
    border-bottom 0px solid black
    @media(max-width: 767px) {
        border-bottom 3px solid black
    }
.no-left-border
    border-left 0px solid black
    @media(max-width: 767px) {
        border-left 3px solid black
    }
.overlay
    display: flex
    justify-content: center
    align-items: center
    position absolute
    min-width: 25%
    min-height: 25%
    opacity 0
    transition opacity .5s ease
    border 3px solid black
    color white
    font-family: goopersuperbold_italic
    line-height 1
    font-size: 3em
    @media(max-width: 767px) {
        min-width: 100%
        min-height 33.3333%
    }
.overlay:hover
    opacity 1

.overlay a
    text-align center
    text-decoration none
    color white

.secondary
    font-size 24px
    line-height 0
    font-family cardinal_grotesque_wideSBd

.fade-enter-active, .fade-leave-active
    transition: opacity 1s

.fade-enter, .fade-leave-to
    opacity: 0
</style>
