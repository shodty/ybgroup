<template lang="pug">
#info
    .quadrantwrapper
        .quadrant1(:class="q1Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    InfoComponent(v-if="ready && previousQuadrant == 1")
        .quadrant2(:class="q2Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    InfoComponent(v-if="ready && previousQuadrant == 2")
        .quadrant3(:class="q3Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    InfoComponent(v-if="ready && previousQuadrant == 3")
        .quadrant4(:class="q4Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    InfoComponent(v-if="ready  && (previousQuadrant == 0 || previousQuadrant == 3)")
</template>

<script>

import InfoComponent from '../components/quadrants/InfoComponent.vue'

export default {
  name: 'Info',
  components: {
    InfoComponent
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
