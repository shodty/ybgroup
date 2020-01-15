<template lang="pug">
.svgContainer
  svg(xmlns='http://www.w3.org/2000/svg' :width='width' :height='height' viewBox='0 0 1920 144' :aria-labelledby='iconName' role='presentation')
    //title(:id='iconName' lang='en') {{iconName}}
    g(:fill='iconColor' class='transitional')
      slot
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style lang="stylus" scoped>
svg
  display: inline-block
  vertical-align: baseline
  margin-bottom: -2px

.transitional
  transition: all .8s ease

.svgContainer
  width: inherit
  height: inherit
</style>
