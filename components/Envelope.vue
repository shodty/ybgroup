<template lang="pug">
#envelope-container
    .mail-icon(v-if="!show")
        img(:src=' light? getImgUrl("mail_globe", ".png") : getImgUrl("mail_globe_white", ".png")' @click='showEnvelope')
    .envelope(v-if="show" @mouseenter="bgcChange(true, '#f1d591')"  @mouseleave="bgcChange(false, '#ffffff')")
        .inner(:class="sliding? null : 'shaking' ")
            transition(name="letterslide" enter-active-class="slidein rotatein")
              .letter-container(v-if="sliding" )
                nuxt-link(to="/mailservice")
                  img( src="../assets/letter.png" id="letter-image")
        .inner(:class="sliding? null : 'shaking'" @mouseenter="slideOut")
            nuxt-link(to="/mailservice")
              img(src="../assets/envelope.png" id="envelope-image" )
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
      show: true,
      sliding: false
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
      this.sliding = false
      this.bgcChange('#ffffff')
    },
    bgcChange (entered, color) {
      const white = 'white'
      this.$store.dispatch('backgroundchange/backgroundChange', color)
      this.$store.dispatch('facechange/faceColor', { entered, white })
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    },
    slideOut () {
      this.sliding = !this.sliding
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
        margin-top: 26vh
        padding-right: 16vw
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

.envelope
    @media(max-width: 767px) {
        width 12vw
        margin-right: 2vw
        margin-top: 2vw
    }

.envelope img
    transform: rotate(-15deg)

#envelope-image
    width: 8vw
    @media(max-width: 767px) {
        width 14vw
    }

.letter-container
    position: absolute

#letter-image
    width: 7vw

    @media(max-width: 767px) {
        width 12vw
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
    -webkit-animation: shaking 4s ease infinite alternate;
    -moz-animation: shaking 4s ease infinite alternate;
    -ms-animation: shaking 4s ease infinite alternate;
    -o-animation: shaking 4s ease infinite alternate;
    animation: shaking 4s ease infinite alternate;
}

@keyframes slidein {
  0% {
     transform: translate(0, 0)
  }
  1% {
    transform: translate(-33%, -85%)
    @media(max-width: 767px) {
        transform: translate(-33%, -165%)
    }
  }
  99% {
    transform: translate(-33%, -85%)
    @media(max-width: 767px) {
        transform: translate(-33%, -165%)
    }
  }
}

@keyframes rotatein {
  0% {
     transform: rotate(0deg)
  }
  1% {
     transform: rotate(-15deg)
  }
  99% {
     transform: rotate(-15deg)
  }
}

.slidein
  animation: slidein 45s linear both

.rotatein
  animation: slidein 45s linear both

</style>
