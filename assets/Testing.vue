<template lang="pug">
#canvas-main
  #main
    canvas(id="c" @click="firstRain" :height='canvasHeight' :width='canvasWidth')
  .testdiv
    p love
    p lorem loremloremloremloremloremloremloremloremloremlorem
    button(@click="clear") clear
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
    firstRain () {
      const noOfDrops = 25
      const fallingDrops = []
      if (this.vueCanvas) {
        setInterval(() => { this.raining(fallingDrops, noOfDrops) }, 6)
        for (let i = 0; i < noOfDrops; i++) {
          const fallingDr = {}
          fallingDr.image = new Image()
          fallingDr.image.src = this.getImgUrl('thanks_note', '.png')

          fallingDr.x = Math.random() * this.canvasWidth
          fallingDr.y = Math.random() - 250
          fallingDr.speed = 2 + Math.random()
          fallingDrops.push(fallingDr)
        }
      }
    },
    raining (fallingDrops, noOfDrops) {
      this.clear()
      for (let i = 0; i < noOfDrops; i++) {
        this.vueCanvas.drawImage(fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y) // The rain drop

        fallingDrops[i].y += fallingDrops[i].speed // Set the falling speed
        if (fallingDrops[i].y > this.canvasHeight) { // Repeat the raindrop when it falls out of view
          fallingDrops[i].y = -250 // Account for the image size
          fallingDrops[i].x = Math.random() * this.canvasWidth // Make it appear randomly along the width
        }
      }
    },
    clear () {
      const c = document.getElementById('c')
      this.vueCanvas.clearRect(0, 0, c.width, c.height)
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
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
