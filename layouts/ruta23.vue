<template lang='pug'>
div
  //IconButtons
  nuxt
  //MobileMenu
  .siteheader
    .icon-container
        IconTwo(icon-name="yellow brick group" width="100vw" height="2.5vh" icon-color='black')
            component(is="yellow-brick-group")
        nuxt-link(to='/')
          .click-box(@click="changeQuadrant(0)")
  .case-sidemenu.hide-on-mobile
    .menubox.white.black-text.pointer.designmobile
      nuxt-link(to='design' event="disabled" @click.native="goToLink($event, 1)") DESIGN
    .menubox.white.black-text.pointer.marketingmobile
        nuxt-link(to='marketing' event="disabled" @click.native="goToLink($event, 2)") MARKETING
    .menubox.white.black-text.pointer.workmobile
        nuxt-link(to='work' event="disabled" @click.native="goToLink($event, 3)") WORK
    .menubox.white.black-text.pointer.infomobile
        nuxt-link(to='info' event="disabled" @click.native="goToLink($event, 4)") INFO
    .menubox.white.black-text.pointer.storemobile
        a(href='https://www.ybgroupshop.us/') STORE
  transition(name="fade" mode="out-in")
    .loadercontainer(v-if="!ready")
        .icongif
          img(v-if="!ready" src='../assets/img/icon_colorgif.gif')
  nuxt-link.backbtn(to='work' event="disabled" @click.native="goBack($event)") BACK

  //.information
    span Current Quadrant: {{currentQuadrant}}
    span Previous Quadrant: {{previousQuadrant}}
    span Ready: {{ready}}
</template>

<script>
import IconTwo from '~/components/IconTwo.vue'
import MobileMenu from '~/components/MobileMenu.vue'
import IconButtons from '~/components/IconButtons.vue'
import CaseMenu from '~/components/CaseMenu.vue'

export default {
  components: {
    MobileMenu,
    IconButtons,
    IconTwo,
    CaseMenu
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
    goBack (event) {
      this.$store.dispatch('quadrants/changeReady', false)
      setTimeout(() => {
        this.$router.push(event.target.pathname)
        setTimeout(() => {
          this.$store.dispatch('quadrants/changeReady', true)
        }, 1000)
      }, 1000)
    },
    changeQuadrant (quadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', quadrant)
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/default.css';
</style>
