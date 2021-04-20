<template lang="pug">
#mobilequadrantmenu
    .mobileworkmenu.hide-on-desktop(:class="bg")
        ul
          li(v-for='link in links')
            nuxt-link(:to='urls[link]' :class="textcolor" style='text-transform: uppercase;') {{link}}

</template>

<script>

export default {
  name: 'MobileQuadrantMenu',
  props: {
    bg: { type: String, default: 'black' },
    text: { type: String, default: 'white' },
    links: { type: Array, default () { return ['design', 'marketing', 'info', 'home'] } }
  },
  data () {
    return {
      urls: {
        design: 'design',
        marketing: 'marketing',
        info: 'info',
        work: 'work',
        home: '/'
      }
    }
  },
  computed: {
    textcolor () {
      return this.text + '-text'
    }
  }
}

</script>

<style scoped lang="stylus">
@import '../assets/styles/quadrants.css';

#mobilequadrantmenu
    width: 100%;
    height: 100%;
    z-index: 1000;

.mobileworkmenu ul
    padding-left: 10%
    padding-top 4%
.mobileworkmenu li
    font-family: cardinal_grotesque_wideSBd;
    font-size: 1.4em;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-left: 2%;
    list-style-type: none;
    cursor: pointer;
    transition: color 0.35s ease;

</style>
