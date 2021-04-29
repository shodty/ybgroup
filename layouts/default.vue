<template lang='pug'>
.default-wrapper
  nuxt
  //MobileMenu
  .siteheader
    .icon-container
        IconTwo(icon-name="yellow brick group" width="100vw" height="2.5vh" icon-color='black')
            component(is="yellow-brick-group")
        nuxt-link.home-click-box(to='/' event="disabled" @click.native="goHome($event, 0)")
  .sidemenu.hide-on-mobile
    .menubox.blue.white-text.pointer
        nuxt-link(to='design' event="disabled" @click.native="goToLink($event, 1)") DESIGN
    .menubox.yellow.white-text.pointer
        nuxt-link(to='marketing' event="disabled" @click.native="goToLink($event, 2)") MARKETING
    .menubox.red.white-text.pointer
        nuxt-link(to='work' event="disabled" @click.native="goToLinkAlt($event, 3)") WORK
    .menubox.green.white-text.pointer
        nuxt-link(to='info' event="disabled" @click.native="goToLinkAlt($event, 4)") CONTACT
    .menubox.orange.white-text.pointer
        a(href='https://www.ybgroupshop.us/') STORE
  transition(name="fade" mode="out-in")
    .loadercontainer(v-if="!ready")
        .icongif
          img(v-if="!ready" src='../assets/img/icon_colorgif.gif')
  IconHeader
  //.information
    span Current Quadrant: {{currentQuadrant}}
    span Previous Quadrant: {{previousQuadrant}}
    span Ready: {{ready}}
</template>

<script>
import IconTwo from '~/components/IconTwo.vue'
import IconHeader from '~/components/IconHeader.vue'
import MobileMenu from '~/components/MobileMenu.vue'

export default {
  components: {
    MobileMenu,
    IconTwo,
    IconHeader
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
    goHome (event, quadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', quadrant)
      setTimeout(() => {
        this.$router.push(event.target.pathname)
      }, 1000)
    },
    goToLink (event, quadrant) {
      if (this.currentQuadrant !== quadrant) {
        this.$store.dispatch('quadrants/changeQuadrant', quadrant)
        setTimeout(() => {
          this.$router.push(event.target.pathname)
        }, 1000)
      }
    },
    goToLinkAlt (event, quadrant) {
      if (this.currentQuadrant === 3 || this.currentQuadrant === 4) {
        this.$store.dispatch('quadrants/changeReady', false)
        setTimeout(() => {
          this.$router.push(event.target.pathname)
          this.$store.dispatch('quadrants/changeReady', true)
        }, 1000)
      } else if (this.currentQuadrant !== quadrant) {
        this.$store.dispatch('quadrants/changeQuadrant', quadrant)
        setTimeout(() => {
          this.$router.push(event.target.pathname)
        }, 1000)
      }
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
