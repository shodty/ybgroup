<template lang="pug">
#envelope-container
    .mail-icon(v-if="!show")
        img(:src=' light? getImgUrl("mail_globe", ".png") : getImgUrl("mail_globe_white", ".png")' @click='showEnvelope')
    .envelope(v-if="show" @mouseenter="bgcChange(true, '#81cff3')"  @mouseleave="bgcChange(false, '#ffffff')")
        .inner(class="shaking")
            img(src="../assets/letter.png" class="letter-image")
        .inner(class="shaking")
            nuxt-link(to="mailservice")
                img(src="../assets/envelope.png" class="envelope-image")
            .closer
                img(src="../assets/close2.png" @click='showEnvelope')

</template>

<script>

export default {
  name: 'AppHeader',
  components: {
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    showEnvelope () {
      this.show = !this.show
      this.bgcChange('#ffffff')
    },
    bgcChange (entered, color) {
      const white = 'white'
      this.$store.dispatch('backgroundchange/backgroundChange', color)
      this.$store.dispatch('facechange/faceColor', { entered, white })
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    }
  }
}
</script>

<style scoped lang="stylus">
#envelope-container
    position: fixed
    top: 12vw
    right: 0
    padding-right: 18vw
    z-index: 1000
    @media(max-width: 767px) {
        margin-top: 44vw
        padding-right: 22vw
    }

.mail-icon
    z-index : 1300
    position: fixed
    top: 5%
    right: 0
    padding 2vw

.mail-icon img {
    cursor: url('../assets/hand.png'), auto
    @media(max-width: 767px) {
        width 13vw
        margin-right: 1.5vw
        margin-top: 2vw
    }
    @media(min-width: 768px) {
        width 4vw
    }
}

.envelope img
    transform: rotate(-15deg)

.envelope-image
    width: 8vw
    @media(max-width: 767px) {
        width 14vw
        margin-right: 2vw
        margin-top: 2vw
    }

.letter-image
    width: 6vw
    @media(max-width: 767px) {
        width 12vw
        margin-right: 2vw
        margin-top: 2vw
    }

.closer
    position absolute
    top 15%
    right 20%
    z-index: 2000
    @media(max-width: 767px) {
        top 15%
        right 32%
    }

.closer img
    width 1vw
    cursor: url('../assets/hand.png'), auto

.inner
    position: absolute

@keyframes shaking {
  0% {
    transform: rotate(-12deg);
  }

  10% {
    transform: rotate(5deg);
  }

  20% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.shaking {
    -webkit-animation: shaking 5s ease infinite alternate;
    -moz-animation: shaking 5s ease infinite alternate;
    -ms-animation: shaking 5s ease infinite alternate;
    -o-animation: shaking 5s ease infinite alternate;
    animation: shaking 5s ease infinite alternate;
}

</style>
