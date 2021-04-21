<template lang="pug">
#design-images
    transition(name="fade" mode="out-in")
        video(v-if='design == "overview"'  playsinline autoplay muted loop key=1)
          source( src="../../assets/vid/ybg_launch02.mp4")
        img(v-else-if='design == "branding"' src="../../assets/img/test/vpp01.png" key=2)
        video(v-else-if='design == "motion"' poster="../../assets/cases/wjs/poster/1.jpg" playsinline autoplay muted key=3)
          source(src="../../assets/cases/wjs/1.mp4")
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
    object-fit: cover
    overflow: hidden
    height: 100%
    width: 100%
</style>
