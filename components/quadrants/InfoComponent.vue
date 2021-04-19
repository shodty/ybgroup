<template lang="pug">
#information-component
    .centered
        p.contact Contact Us
        p.email(:class="emailColor[count]") info@ybgroup.us
        p.est EST. 2018
</template>
<script>
export default {
  data () {
    return {
      emailColor: ['pink-text', 'red-text', 'blue-text', 'green-text', 'yellow-text', 'orange-text'],
      count: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.count = setInterval(() => {
        this.count++
        if (this.count > 5) { this.count = 0 }
      }, 1500)
    }
  }
}
</script>

<style lang="stylus">
#information-component
    width 100%
    height 100%
    display: flex
    flex-wrap: wrap;
    justify-content: center
    align-items: center
    overflow: hidden
.centered
    height 30%
.contact
    flex-basis: 100%;
    font-family: goopersuperbold_italic
    font-size: 7em
    text-align: center
    line-height: 50%
    @media(max-width: 767px) {
        font-size: 2em;
    }
.email
  width: 100%;
  font-family cardinal_grotesque_wideSBd
  text-align: center
  line-height 1.5
  font-size 5em
  @media(max-width: 767px) {
    font-size: 2em;
  }
.est
  width: 100%;
  font-family goopersemibold_italic
  line-height .5
  letter-spacing 6px
  text-align: center
  font-size 3em
  @media(max-width: 767px) {
    font-size: 1em;
  }
</style>
