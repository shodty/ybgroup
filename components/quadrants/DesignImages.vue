<template lang="pug">
#design-images
    transition(name="fade" mode="out-in")
        video(v-if='design == "overview"' src="../../assets/img/cases/ybg/ybg_launch02.mp4" autoplay muted loop key=1)
        img(v-else-if='design == "branding"' src="../../assets/img/test/vpp01.png" key=2)
        video(v-else-if='design == "motion"' src="../../assets/img/test/wjs1.mp4" autoplay muted key=3)
        img(v-else-if='design == "packaging"' src="../../assets/img/test/fr03.jpg" key=4)

</template>

<script>

export default {
  props: {
    design: { type: String, default: 'overview' }
  }
}
</script>

<style lang="stylus">

#design-images
    width 100%
    height 100%
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    z-index 1000
#design-images img, #design-images video
    flex-shrink: 0
    min-width: 100%
    min-height: 100%

</style>
