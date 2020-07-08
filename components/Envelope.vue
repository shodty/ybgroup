<template lang="pug">
#envelope-container
    nuxt-link(to="/mailservice")
      .mail-icon(class='hide-on-mobile')
          img(:src=' light? getImgUrl("mail_globe2", ".png") : getImgUrl("mail_globe_white2", ".png")' @mouseenter="rotating = true"  @mouseleave="rotating = false" :class="rotating? 'rotating' : null ")
    //.envelope(v-if="!show" @mouseenter="bgcChange(true, '#f1d591')"  @mouseleave="bgcChange(false, '#ffffff')" class='hide-on-mobile')
        .inner(:class="sliding? null : 'shaking' ")
            .letter-container(v-if="sliding" :class="sliding? 'slidein' : null")
              nuxt-link(to="/mailservice")
                img( src="../assets/letter.png" id="letter-image" @click="bgcChange(false, '#ffffff')")
        .inner(:class="sliding? null : 'shaking'" @mouseenter="slideOut(true)")
            nuxt-link(to="/mailservice")
              img(src="../assets/envelope.png" id="envelope-image" @click="bgcChange(false, '#ffffff')")
            .closer
                img(src="../assets/close4.png" @click='showEnvelope')
    .mobile-mail(class='hide-on-desktop')
      .mail-icon
        nuxt-link(to="/mailservice")
          img(:src=' light? getImgUrl("mail_globe2", ".png") : getImgUrl("mail_globe_white2", ".png")')
</template>

<script>

export default {
  name: 'AppHeader',
  components: {
  },
  data () {
    return {
      show: true,
      sliding: false,
      rotating: false
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
      this.bgcChange(false, '#ffffff')
    },
    bgcChange (entered, color) {
      // const white = '#FFFFFF'
      this.$store.dispatch('backgroundchange/backgroundChange', color)
      this.faceChange(entered, '#000')
    },
    faceChange (entered, color) {
      if (this.light) {
        this.$store.dispatch('facechange/faceColor', { entered, color })
      } else {
        color = '#81cff3'
        this.$store.dispatch('facechange/faceColor', { entered, color })
      }
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    },
    slideOut (slideboolean) {
      this.sliding = slideboolean
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
    top: 5vh
    right: 0
    padding 2vw
    @media(max-width: 767px) {
      top: 7.5vw
    }
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
    cursor: -webkit-grab
    cursor: grab

.letter-container
    position: absolute

#letter-image
    width: 7vw
    cursor: -webkit-grabbing
    cursor: grabbing

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
    cursor: not-allowed

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

@-webkit-keyframes slidein {
  0% {
     transform: translate(0, 0)
  }
  100% {
    transform: translate(-33%, -85%)
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotating {
    -webkit-animation: rotating 16s linear infinite;
    -moz-animation: rotating 16s linear infinite;
    -ms-animation: rotating 16s linear infinite;
    -o-animation: rotating 16s linear infinite;
    animation: rotating 16s linear infinite;
}

.slidein
  -webkit-animation-name: slidein;
  -webkit-animation-duration: 2s;
  -webkit-animation-fill-mode: forwards;

</style>
