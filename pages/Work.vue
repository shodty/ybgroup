<template lang="pug">
#work
    .workquadrantwrapper
        .quadrant1(:class="q1Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready && previousQuadrant == 1")
        .quadrant2(:class="q2Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready && previousQuadrant == 2")
        .quadrant3(:class="q3Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready && currentQuadrant == 3 && (previousQuadrant == 0 || previousQuadrant == 4 || previousQuadrant == 3)")
        .quadrant4(:class="q4Class")
                transition(name="fade" mode="out-in" :duration="{ enter: 500, leave: 800 }")
                    WorkGrid(v-if="ready  && currentQuadrant == 4 && previousQuadrant == 3")
        .work3mobile.black.hide-on-desktop
          MobileQuadrantMenu.black(bg="black" text="white" :links="['design', 'marketing', 'info', 'home']")
</template>

<script>

import WorkGrid from '../components/WorkGrid.vue'
import MobileQuadrantMenu from '../components/MobileQuadrantMenu.vue'

export default {
  name: 'Work',
  components: {
    WorkGrid,
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
    if (this.currentQuadrant !== 3) { this.changeQuadrant(3) }
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
#work
    width: 100vw
    height: 100vh
    overflow hidden
    background black

.workquadrantwrapper {
    position: relative;
    top: 5vh;
    width: 97%;
    height: 95vh;
  }

  @media(max-width: 767px) {
    .workquadrantwrapper  {
      width: 100%;
      height: 75%;
      overflow: scroll;
    }
  }
  .workquadrantwrapper a {
    text-decoration: none;
    transition: all .5s ease;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  .workquadrantwrapper a:hover {
    color: white;
    text-decoration: none;
    text-shadow: 8px 10px 0px rgba(0, 0, 0, 1);
  }
  .work3mobile
    position: fixed
    height: 40px;
    bottom: 0%
    width 100%
    border-top 3px solid black
    border-bottom 3px solid black
    display: flex;
    justify-content: center;
    align-items: center;
</style>
