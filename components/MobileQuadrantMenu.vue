<template lang="pug">
#mobilequadrantmenu
    .mobileworkmenu.hide-on-desktop(:class="bg")
        ul
          li(v-for='link in staticlinks')
            nuxt-link(:to='urls[link]' :class="textcolor" style='text-transform: uppercase;') {{link}}

</template>

<script>

export default {
  name: 'MobileQuadrantMenu',
  props: {
    bg: { type: String, default: 'black' },
    text: { type: String, default: 'white' },
    links: { type: Array, default () { return ['design', 'marketing', 'contact', 'home'] } }
  },
  data () {
    return {
      urls: {
        design: 'design',
        marketing: 'marketing',
        contact: 'info',
        work: 'work',
        home: '/'
      },
      staticlinks: ['design', 'marketing', 'work', 'contact']
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
    display: flex;
    align-items: stretch; /* Default */
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 1.5% 4%;
.mobileworkmenu li
    font-family: cardinal_grotesque_wideSBd;
    font-size: 4vw;
    flex: 0 1 auto;
    float: left;
    overflow: hidden;
    list-style-type: none;
    cursor: pointer;
    transition: color 0.35s ease;
    text-align center
.mobileworkmenu li a {
  display: block;
}

</style>
