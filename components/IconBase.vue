<template lang="pug">
.svgContainer
  svg(xmlns='http://www.w3.org/2000/svg' :width='width' :height='height' viewBox='0 0 400 400' :aria-labelledby='iconName' role='presentation')
    title(:id='iconName' lang='en') {{iconName}}
    g(:fill='iconColor' class='transitional' :stroke='iconStroke' :stroke-width='strokeWeight')
      slot
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: '22vw'
    },
    height: {
      type: [Number, String],
      default: '22vw'
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    iconStroke: {
      type: String,
      default: 'rgb(0,0,0,0)'
    },
    strokeWeight: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
svg
  display: inline-block
  //vertical-align: baseline
  //margin-bottom: -2px

.transitional
  transition: all .8s ease

.svgContainer
  width: inherit
  height: inherit
</style>
