<template lang="pug">
#draggable-container(ref="draggableContainer"  @mouseenter='showControls=true' @mouseleave='showControls=false')
  #control-div(:style='[ showControls? {"opacity" : 100 } : {"opacity" : 0} ]')
    #draggable-header(@mousedown="dragMouseDown")
      img.drag(src="../assets/drag.png" width="30px")
    slot(name="controls")
  slot(name="main" id="mainslot")
  slot(name="footer")
</template>

<script>

import MobileMenu from '../components/MobileMenu.vue'
import DarkLight from '../components/DarkLight.vue'

export default {
  name: 'DraggableDiv',
  components: {
    MobileMenu,
    DarkLight
  },
  data () {
    return {
      activeLink: 'navigation',
      count: 0,
      showControls: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      }
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    dragMouseDown (event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}
</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding: 0px

#draggable-container
  position: absolute
  left 10%
  top 20%
  z-index: 9
  width: 80%

#draggable-header
  position relative
  margin-right 12px
  cursor: move
  z-index: 15
  display inline-block

#control-div
  position relative
  height: 35px
  z-index: 20
  transition background .2s ease, opacity .5s ease

#mainslot
  z-index: 0

.bg
  position fixed
  background : black
  min-height: 100%;
  transition 1s
  width: 100%

.editable
  outline: 0

.controls
  display inline-block !important

.drag
  top 0

</style>
