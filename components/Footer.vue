<template lang="pug">
#main-footer
  p(class='marquee hide-on-mobile')
    img(alt='logo marquee' :src="light? getImgUrl('img/logo_strip', '.png') : getImgUrl('img/logo_strip_white', '.png')" width='98%' id='YBG-footer')
    img(alt='logo marquee' :src="light? getImgUrl('img/logo_strip', '.png') : getImgUrl('img/logo_strip_white', '.png')" width='98%' id='YBG-footer')
    img(alt='logo marquee' :src="light? getImgUrl('img/logo_strip', '.png') : getImgUrl('img/logo_strip_white', '.png')" width='98%' id='YBG-footer')
  img(class='hide-on-desktop bxb' :src="light? getImgUrl('bxb', '.png') : getImgUrl('bxb_white', '.png')" width='14%')
</template>

<script>

export default {
  name: 'AppFooter',
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    }
  }
}

</script>

<style scoped lang="stylus">

.marquee
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    overflow-x: hidden
    white-space: nowrap;
    box-sizing: border-box;
    animation: marquee 20s linear infinite;

@keyframes marquee {
    0%   { text-indent: 0vw }
    100% { text-indent: -98vw }
}

#YBG-footer
  padding-top: 30px

.bxb
  padding 30px 0
</style>
