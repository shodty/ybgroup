<template lang="pug">
.svgContainer
  svg(xmlns='http://www.w3.org/2000/svg' :width='width' :height='height' viewBox='0 0 400 400' :aria-labelledby='iconName' role='presentation' :class="rotate? 'rotating' : null")
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
    },
    rotate: {
      type: Boolean,
      default: false
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
  transition: all .5s ease

.svgContainer
  width: inherit
  height: inherit

@keyframes rotating {
    from {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}
@-webkit-keyframes rotating {
    from {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}
.rotating {
    -webkit-animation: rotating 9s linear infinite;
    -moz-animation: rotating 9s linear infinite;
    -ms-animation: rotating 9s linear infinite;
    -o-animation: rotating 9s linear infinite;
    animation: rotating 9s linear infinite;
}
</style>
