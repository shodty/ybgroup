<template lang="pug">
#work
    .quadrantwrapper
        .quadrant1(:class="q1Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready && previousQuadrant == 1")
        .quadrant2(:class="q2Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready && previousQuadrant == 2")
        .quadrant3(:class="q3Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready && (previousQuadrant == 0 || previousQuadrant == 4)")
        .quadrant4(:class="q4Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready  && previousQuadrant == 4")
</template>

<script>

import WorkGrid from '../components/WorkGrid.vue'

export default {
  name: 'Work',
  components: {
    WorkGrid
  },
  data () {
    return {
    }
  },
  computed: {
    currentQuadrant () {
      return this.$store.state.quadrants.currentQuadrant
    },
    previousQuadrant () {
      return this.$store.state.quadrants.previousQuadrant
    },
    ready () {
      return this.$store.state.quadrants.ready
    },
    q1Class () {
      return this.$store.state.quadrants.q1Class
    },
    q2Class () {
      return this.$store.state.quadrants.q2Class
    },
    q3Class () {
      return this.$store.state.quadrants.q3Class
    },
    q4Class () {
      return this.$store.state.quadrants.q4Class
    }
  }
}

</script>

<style scoped lang="stylus">
@import '../assets/styles/quadrants.css';
</style>
