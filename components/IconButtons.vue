<template lang="pug">
#icon-buttons
    .mobile.hide-on-desktop
        DarkLight(:darkmode='darkmode')
        nuxt-link(to='/')
            HomeButton
        .hide-on-desktop
            CartButton
    .desktop.hide-on-mobile
        DarkLight(:darkmode='darkmode')
        nuxt-link(to='/')
            HomeButton
        CartButton
</template>

<script>

import DarkLight from './DarkLight.vue'
import HomeButton from './HomeButton.vue'
import CartButton from './CartButton.vue'

export default {
  name: 'IconButtons',
  components: {
    DarkLight,
    HomeButton,
    CartButton
  },
  props: {
    darkmode: { type: Boolean, default: true }
  }
}

</script>

<style scoped lang="stylus">

*
    margin: 0px

#icon-buttons
    position: fixed
    top: 0
    left: 0
    z-index 5950

.mobile
    margin-left: 3vw
    margin-top: 3vw

.desktop
    margin-left: .75vw
    margin-top: .75vw
</style>
