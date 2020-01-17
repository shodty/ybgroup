<template lang="pug">
#canvas-main
  #main
    canvas(id="c" @click="main" :height='canvasHeight' :width='canvasWidth')
  .testdiv
    p love
    p lorem loremloremloremloremloremloremloremloremloremlorem
    button(@click='clear') clear
    img(v-show="false" src="../assets/copyright.png" id='scream' width='50px')
</template>
<script>
export default {
  name: 'Canvas',
  data () {
    return {
      vueCanvas: null,
      rectWidth: 200,
      canvasHeight: 0,
      canvasWidth: 0
    }
  },
  mounted () {
    const c = document.getElementById('c')
    const ctx = c.getContext('2d')
    this.vueCanvas = ctx
    this.canvasHeight = screen.height
    this.canvasWidth = screen.width
  },
  methods: {
    main () {
      const img = document.getElementById('scream')
      // this.vueCanvas.fillStyle = 'red'
      // this.vueCanvas.fillRect(event.clientX - 25, event.clientY - 25, 50, 50)
      this.vueCanvas.drawImage(img, event.clientX - 50, event.clientY - 50, 100, 100)
    },
    clear () {
      const c = document.getElementById('c')
      this.vueCanvas.clearRect(0, 0, c.width, c.height)
    }
  }
}
</script>

<style lang="stylus">
#main
  position: absolute
  z-index: 0
  top 0
  left 0
  height: 100%
  width: 100%

#c
  position: fixed;
  border: 1px solid black;

.testdiv
  position: relative
  z-index: 100
  font-size: 54px

</style>
