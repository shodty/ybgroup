<template lang="pug">
#mail-service
  .mail-service-wrapper
    #main-canvas
      //canvas(id="c" @click="stamp" :height='canvasHeight' :width='canvasWidth')
      //canvas(id="r" @click="stamp" :height='canvasHeight' :width='canvasWidth')
      img(v-show="false" src='../assets/mail_globe_og.png' id='0' width='50px')
      img(v-show="false" src='../assets/copyright.png' id='1' width='50px')
      img(v-show="false" src='../assets/ybg_mail_bxb.png' id='2' width='50px')
      img(v-show="false" src='../assets/air_mail_white.png' id='3' width='50px')
    img(:src=' light? getImgUrl("air_mail_black", ".png") : getImgUrl("air_mail_white", ".png")' class='headerimage')
    MailLogo
    transition(name='slide-fade')
      .success(v-if="success")
        img(src='../assets/submit_success.png' width='40%')
        br
        nuxt-link(to='/')
          button(class="success-btn black tanbackground") Home
        button(v-if="isItRaining" class="success-btn black whitebackground" @click="clear") Stop the Rain
        button(v-if="!isItRaining" class="success-btn black whitebackground" @click="firstRain") Start the Rain
        button(class="success-btn black redbackground" @click="reloadPage") Reset Form
    b-row(v-if="!success" align-h="center")
      b-col(cols=11 lg=4 class="description")
        p(class="infotext") YBG Mail Service is our way of showing our appreciation for you and sharing our love of physical media.
        p(class="big") It's simple!
        p(class="infotext") Sign up through the form below and get free stuff in the mail.
    b-row(v-if="!success" align-h="center")
      b-col(cols=11 md=8 lg=6)
        b-form(name='ybg-mail-service' method='post' id="mailserviceform" data-netlify="true" data-netlify-honeypot="bot-field" v-on:submit.prevent="handleSubmit")
          input(type='hidden' name='form-name' value='ybg-mail-service')
          b-row
              b-col(cols="4" sm="3" class="blackborder darkblue ")
                  p First Name
              b-col(class="nopadding")
                  b-form-input( name="firstname" type="text" required v-model="form.firstname" key='1')
          b-row
              b-col(cols="4" sm="3" class="blackborder darkblue ")
                  p Last Name
              b-col(class="nopadding")
                  b-form-input( name="lastname" type="text" required v-model="form.lastname" key='2')
          b-row
              b-col(cols="4" sm="3" class="blackborder darkblue")
                  p Email
              b-col(class="nopadding")
                  b-form-input( name="email" type="email" required v-model="form.email" key='3')
          b-row
              b-col(cols="4" sm="3" class="blackborder darkblue")
                  p Mailing Address
              b-col(class="nopadding")
                  b-form-input( name="address1" type="text" required v-model="form.address1" key='4')
          b-row
              b-col(cols="4" sm="3" class="blackborder darkblue")
                  p Apt/Unit/PO Box
              b-col(class="nopadding")
                  b-form-input( name="address2" type="text" v-model="form.address2" key='5')
          b-row
              b-col(cols="4" sm="3" class="blackborder darkblue")
                  p City
              b-col(class="nopadding")
                  b-form-input( name="city" type="text" required v-model="form.city" key='6')
          b-row
              b-col(cols="4" sm="3" class="blackborder darkblue")
                  p State
              b-col(cols="3" sm="2" class="nopadding")
                  b-form-input( name="state" type="text" required v-model="form.state" key='7')
              b-col(cols="2" sm="1" class="blackborder darkblue")
                  p Zip
              b-col(cols="3" sm="2" class="nopadding")
                  b-form-input( name="zip" type="text" required v-model="form.zip" key='8')
              b-col(cols="4" sm="1" class="nopadding")
                  b-button(type="reset" variant="primary" class="btn-block black redbackground" @click='clear') Reset
              b-col(cols="8" sm="3" class="nopadding")
                  b-button(type="submit" variant="primary" class="btn-block black tanbackground" @onSubmit='firstRain') Done?
    img(class='bxb' :src="light? getImgUrl('bxb', '.png') : getImgUrl('bxb_white', '.png')" @click='clear')
    .mailservicemobile.black.hide-on-desktop
      MobileQuadrantMenu(bg="black" text="white" :links="['design', 'work', 'info', 'home']")
</template>

<script>

import axios from 'axios'
import MailLogo from '../components/MailLogo.vue'
import MobileQuadrantMenu from '../components/MobileQuadrantMenu.vue'

export default {
  name: 'Mailservice',
  components: {
    MailLogo,
    MobileQuadrantMenu
  },
  data () {
    return {
      vueCanvas: null,
      intervalID: 0,
      canvasHeight: 0,
      canvasWidth: 0,
      success: false,
      isItRaining: false,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      },
      index: 0
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  mounted () {
    /* const c = document.getElementById('c')
    const ctx = c.getContext('2d')
    this.vueCanvas = ctx
    const r = document.getElementById('r')
    const rctx = r.getContext('2d')
    this.vueCanvasRain = rctx
    this.canvasHeight = screen.height
    this.canvasWidth = screen.width */
  },
  beforeDestroy () {
    clearInterval(this.intervalID)
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit () { // refer to netlify vue form handling docs for explanation
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post(
        '/',
        this.encode({
          'form-name': 'ybg-mail-service',
          ...this.form
        }),
        axiosConfig
      )
      this.success = true
      this.firstRain()
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    },
    stamp () {
      /* this.vueCanvas.save()
      this.index = Math.floor(Math.random() * 4)
      const img = document.getElementById(this.index.toString())
      this.vueCanvas.translate(event.clientX, event.clientY)
      this.vueCanvas.rotate(Math.floor(Math.random() * Math.floor(360)) * Math.PI / 180)
      if (this.index === 3) {
        this.vueCanvas.drawImage(img, -100, -46, 200, 92)
      } else {
        this.vueCanvas.drawImage(img, -50, -50, 100, 100)
      }
      this.vueCanvas.restore() */
    },
    firstRain () {

      /* const noOfDrops = 20
      const fallingDrops = []
      if (this.vueCanvasRain) {
        this.intervalID = setInterval(() => { this.raining(fallingDrops, noOfDrops) }, 6)
        for (let i = 0; i < noOfDrops; i++) {
          const fallingDr = {}
          fallingDr.image = new Image()
          fallingDr.image.src = this.getImgUrl('thanks_note', '.png')
          fallingDr.x = Math.random() * this.canvasWidth
          fallingDr.y = Math.random() - 250
          fallingDr.speed = 1 + Math.random() * 2
          fallingDrops.push(fallingDr)
        }
      } */
    },
    raining (fallingDrops, noOfDrops) {
      /*
      this.isItRaining = true
      this.clearRain()
      for (let i = 0; i < noOfDrops; i++) {
        this.vueCanvasRain.drawImage(fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y) // The rain drop

        fallingDrops[i].y += fallingDrops[i].speed // Set the falling speed
        if (fallingDrops[i].y > this.canvasHeight) { // Repeat the raindrop when it falls out of view
          fallingDrops[i].y = -250 // Account for the image size
          fallingDrops[i].x = Math.random() * this.canvasWidth // Make it appear randomly along the width
        }
      } */
    },
    clear () { /*
      this.isItRaining = false
      const c = document.getElementById('c')
      clearInterval(this.intervalID)
      this.vueCanvasRain.clearRect(0, 0, c.width, c.height)
      this.vueCanvas.clearRect(0, 0, c.width, c.height) */
    },
    clearRain () {
      /*
      const c = document.getElementById('r')
      this.vueCanvasRain.clearRect(0, 0, c.width, c.height) */
    },
    reloadPage () {
      window.location.reload(true)
    }
  }
}
</script>

<style scoped lang="stylus">

#mail-service
    position: relative
    width: 100vw
    height: 100vh
    overflow-y scroll
    background white
    padding-top: 60px
    background : white
    @media(max-width: 767px){
      overflow-y: scroll
    }

#mailserviceform
    padding-top: 3vh
    margin: 0 auto
    z-index: 2000
    position: relative

#c
  position: fixed;

#r
  position: fixed;
  z-index: 5

.mail-service-wrapper
    position: relative;
    top: 1vh;
    width: 100%;
    height: 95vh;
    @media(max-width: 767px) {
      .mail-service-wrapper  {
        width: 100%;
        height: 75%;
        overflow-y: scroll;
      }
  }
.description
  padding-top 2vw
  @media(max-width: 767px){
    padding-top 4vw
  }

.infotext
  text-align: center
  font-family: 'cardinal_grotesque_wideSBd', sans
  color: black
  @media(max-width: 767px){
    font-size .76em
  }

.big
  font-size 2em
  color: black
  text-align: center
  font-family: 'goopersemibold_italic', italic

.medium
  font-size 1.5em
*
  margin: 0px
  padding: 0px

#main-canvas
  position: absolute
  z-index: 100
  top 0
  left 0
  height: 100%
  width: 100%

.headerimage
  position: relative
  z-index : 0
  margin: 0 auto
  margin-top 2%
  text-align: center
  width: 30%
  display: block
  padding-bottom 4vh
  @media(max-width: 767px){
    width: 50%
  }

#mail-service input, #mail-service textarea

    color: black
    border: 1px solid black
    border-radius 0px
    font-family: 'goopersemibold_italic', italic
    letter-spacing: 1px
    font-size: 1em
    padding-left: 10px
    margin: 0;
    @media(max-width: 767px){
      padding-left: 4px
    }

.darkblue
    background-color:#47abc6

.blackborder
    border: 1px solid black

.darkblue p
  text-transform uppercase
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  font-size: 1em
  padding-left: 5px
  color: black
  vertical-align: middle
  @media(max-width: 767px){
    font-size: .7em
  }

.btn-block
  height: 100%

.success-btn
  display block
  margin 0 auto
  height: 100%
  width: 40%

.black
    color: black
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    font-size: 1em
    letter-spacing: 1px

.tanbackground
    background-color: #f1d591
    border: 1px solid black
    border-radius 0px

.tanbackground:hover
  background-color: #b59e6b

.redbackground
    background-color: #f25555
    border: 1px solid black
    border-radius 0px

.redbackground:hover
  background-color: #a52828

.whitebackground
    background-color: #ffffff
    border: 1px solid black
    border-radius 0px

.whitebackground:hover
  background-color: #cccccc

.blackbackground
    background-color: black

.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}

.form-control::-webkit-input-placeholder { color: black; }

.bxb
  padding 6vw 0
  margin 0 auto
  position relative
  display block
  z-index: 2000
  width 100px
  cursor: url("../assets/close3.png"), auto
  @media(max-width: 767px){
    width 50px
    padding-bottom: 200px;
  }

.success
  position relative
  margin 0 auto
  padding-top 2vw
  text-align center
  z-index: 2000

.success a
  text-decoration none

.success img
  padding-bottom 2vw

.slide-fade-enter-active
  transition: all 2s ease

.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(350px)
  opacity: 0

.mailservicemobile
  position: fixed
  height: 40px;
  bottom: 0%
  overflow hidden
  border-top 3px solid black
  width 100%
  border-bottom 3px solid black
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000
</style>
