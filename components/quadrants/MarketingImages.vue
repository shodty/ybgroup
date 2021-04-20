<template lang="pug">
#marketing-images
    transition(name="fade" mode="out-in")
        img(v-if='market == "overview"' src="../../assets/img/ruta01.jpg" key=10)
        img(v-else-if='market == "lifestyle"' src="../../assets/img/test/friendo01.jpg" key=11)
        video(v-else-if='market == "content"' poster="../../assets/img/test/burn.jpg" autoplay loop muted controls key=12)
          source(src="../../assets/img/test/burn01.mp4")
        img(v-else-if='market == "activation"' src="../../assets/img/test/Jump-60.jpg" key=13)

</template>

<script>

export default {
  props: {
    market: { type: String, default: 'overview' }
  }
}
</script>

<style lang="stylus">

#marketing-images
    width 100%
    height 100%
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden

#marketing-images img, #marketing-images video
    object-fit: cover
    overflow: hidden
    height: 100%
    width: 100%
</style>
