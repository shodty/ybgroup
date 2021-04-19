<template lang="pug">
#info
    .infoquadrantwrapper
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
    MobileQuadrantMenu(bg="black" text="white" :links="['design', 'marketing', 'info', 'home']")
</template>

<script>

import InfoComponent from '../components/quadrants/InfoComponent.vue'
import MobileQuadrantMenu from '../components/MobileQuadrantMenu.vue'

export default {
  name: 'Info',
  components: {
    InfoComponent,
    MobileQuadrantMenu
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
  },
  mounted () {
    if (this.currentQuadrant !== 4) { this.changeQuadrant(4) }
  },
  methods: {
    changeQuadrant (newQuadrant) {
      this.$store.dispatch('quadrants/changeQuadrant', newQuadrant)
    }
  }
}

</script>

<style scoped lang="stylus">
@import '../assets/styles/quadrants.css';

.infoquadrantwrapper {
    position: relative;
    top: 5vh;
    width: 97%;
    height: 95vh;
  }

  @media(max-width: 767px) {
    .infoquadrantwrapper  {
      width: 100%;
      height: 75vh;
      overflow: scroll;
    }
  }
  .infoquadrantwrapper a {
    text-decoration: none;
    transition: all .5s ease;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  .infoquadrantwrapper a:hover {
    color: white;
    text-decoration: none;
    text-shadow: 8px 10px 0px rgba(0, 0, 0, 1);
  }

</style>
