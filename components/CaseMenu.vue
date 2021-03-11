<template lang="pug">
#casemenu
    .case-menu
        .casestudy-menu-container
            .casebox.white.black-text.pointer
                nuxt-link(to='friendo' event="disabled" @click.native="goToLink($event, 1)") FRIENDO
            .casebox.white.black-text.pointer
                nuxt-link(to='marketing' event="disabled" @click.native="goToLink($event, 2)") DO YOUR BEST
            .casebox.white.black-text.pointer
                nuxt-link(to='work' event="disabled" @click.native="goToLink($event, 3)") DROPPING PINS
            .casebox.white.black-text.pointer
                nuxt-link(to='info' event="disabled" @click.native="goToLink($event, 4)") ACR
            .casebox.white.black-text.pointer
                nuxt-link(to='friendo' event="disabled" @click.native="goToLink($event, 1)") JUMP
            .casebox.white.black-text.pointer
                nuxt-link(to='marketing' event="disabled" @click.native="goToLink($event, 2)") DEPT. OF SOUND
            .casebox.white.black-text.pointer
                nuxt-link(to='work' event="disabled" @click.native="goToLink($event, 3)") RUTA 23
            .casebox.white.black-text.pointer
                nuxt-link(to='info' event="disabled" @click.native="goToLink($event, 4)") VISIT MODESTO
            .casebox.white.black-text.pointer
                nuxt-link(to='friendo' event="disabled" @click.native="goToLink($event, 1)") ALIENLABS
            .casebox.white.black-text.pointer
                nuxt-link(to='marketing' event="disabled" @click.native="goToLink($event, 2)") THC
            .casebox.white.black-text.pointer
                nuxt-link(to='work' event="disabled" @click.native="goToLink($event, 3)") VOTE
            .casebox.white.black-text.pointer
                nuxt-link(to='info' event="disabled" @click.native="goToLink($event, 4)") BLASPHEMY
            .casebox.white.black-text.pointer
                nuxt-link(to='friendo' event="disabled" @click.native="goToLink($event, 1)") OUR STREET
            .casebox.white.black-text.pointer
                nuxt-link(to='marketing' event="disabled" @click.native="goToLink($event, 2)") SHANGRI LA
            .casebox.white.black-text.pointer
                nuxt-link(to='work' event="disabled" @click.native="goToLink($event, 3)") WJS
            .casebox.white.black-text.pointer
                nuxt-link(to='info' event="disabled" @click.native="goToLink($event, 4)") EXTRACTS ACADEMY
</template>
<script>
export default {
  methods: {
    goToLink (event, quadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', quadrant)
      setTimeout(() => {
        this.$router.push(event.target.pathname)
      }, 1000)
    }
  }
}
</script>
<style lang="stylus">
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

.casestudy-menu-container
    position absolute
    bottom 100%
    height 32px
    overflow hidden
    transition height 1s ease

.casestudy-menu-container:hover
    height: 512px

.casebox
    display: flex
    font-family cardinal_grotesque_wideSBd
    font-size 1em
    width 165px
    border 3px solid black
    height 32px;
    text-align center
    justify-content: center
    align-items: center
    overflow hidden
    transition: background .3s ease;

.casebox:hover
    background: #0076BB;

</style>
