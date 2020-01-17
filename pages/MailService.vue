<template lang="pug">
#main
  #main-canvas
    canvas(id="c" @click="stamp" :height='canvasHeight' :width='canvasWidth')
    img(v-show="false" src='../assets/mail_globe_og.png' id='0' width='50px')
    img(v-show="false" src='../assets/copyright.png' id='1' width='50px')
    img(v-show="false" src='../assets/ybg_mail_bxb.png' id='2' width='50px')
    img(v-show="false" src='../assets/air_mail_white.png' id='3' width='50px')
  img(:src=' light? getImgUrl("air_mail_black", ".png") : getImgUrl("air_mail_white", ".png")' class='headerimage')
  MobileMenu
  DarkLight
  MailLogo
  b-row(align-h="center")
    b-col(cols=10 md=8 lg=6)
      b-form(name='ybg-mail-service' method='post' id="mailserviceform" data-netlify="true" data-netlify-honeypot="bot-field")
        input(type='hidden' name='form-name' value='ybg-mail-service')
        b-row
            b-col(cols="4" sm="3" class="blackborder darkblue" )
                p First Name
            b-col(class="nopadding")
                b-form-input( name="First Name" type="text" required placeholder="Enter first name" :value="firstname" key='1')
        b-row
            b-col(cols="4" sm="3" class="blackborder darkblue")
                p Last Name
            b-col(class="nopadding")
                b-form-input( name="Last Name" type="text" required placeholder="Enter last name" :value="lastname" key='2')
        b-row
            b-col(cols="4" sm="3" class="blackborder darkblue")
                p Email
            b-col(class="nopadding")
                b-form-input( name="Email" type="email" required placeholder="Enter email" :value="email" key='3')
        b-row
            b-col(cols="4" sm="3" class="blackborder darkblue")
                p Address 1
            b-col(class="nopadding")
                b-form-input( name="Address 1" type="text" required placeholder="Enter mailing address" :value="address1" key='4')
        b-row
            b-col(cols="4" sm="3" class="blackborder darkblue")
                p Address 2
            b-col(class="nopadding")
                b-form-input( name="Address 2" type="text" placeholder="Apartment/Unit/P.O. Box" :value="address2" key='5')
        b-row
            b-col(cols="4" sm="3" class="blackborder darkblue")
                p City
            b-col(class="nopadding")
                b-form-input( name="City" type="text" placeholder="City" :value="city" key='6')
        b-row
            b-col(cols="4" sm="3" class="blackborder darkblue")
                p State
            b-col(cols="3" sm="2" class="nopadding")
                b-form-input( name="State" type="text" required placeholder="State" :value="state" key='7')
            b-col(cols="2" sm="1" class="blackborder darkblue")
                p Zip
            b-col(cols="3" sm="2" class="nopadding")
                b-form-input( name="Zip" type="text" required placeholder="5 digit zip" :value="zip" key='8')
            b-col(cols="4" sm="1" class="nopadding")
                b-button(type="reset" variant="primary" class="btn-block black redbackground" @click='clear') Reset
            b-col(cols="8" sm="3" class="nopadding")
                b-button(type="submit" variant="primary" class="btn-block black tanbackground") Done?
  b-modal(ref='my-modal' hide-footer title='YBG MAIL SERVICE')
    .d-block.text-center
      h3 Thank you for your submission!
    b-button.mt-3(variant='outline-danger' block @click='hideModal') Close
    b-button.mt-2(variant='outline-warning' block)
      nuxt-link(to="/") YBG Home
  b-row
    img(class='bxb' :src="light? getImgUrl('bxb', '.png') : getImgUrl('bxb_white', '.png')" @click='clear')
</template>

<script>

import MobileMenu from '../components/MobileMenu.vue'
import MailLogo from '../components/MailLogo.vue'
import DarkLight from '../components/DarkLight.vue'
import Header from '../components/Header.vue'

export default {
  name: 'Mailservice',
  components: {
    MobileMenu,
    MailLogo,
    DarkLight,
    Header
  },
  data () {
    return {
      vueCanvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      email: '',
      firstname: '',
      lastname: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      index: 0
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  mounted () {
    const c = document.getElementById('c')
    const ctx = c.getContext('2d')
    this.vueCanvas = ctx
    this.canvasHeight = screen.height
    this.canvasWidth = screen.width
  },
  methods: {
    onSubmit () {
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    getImgUrl (pic, ext) {
      return require('../assets/' + pic + ext)
    },
    stamp () {
      this.vueCanvas.save()
      this.index = Math.floor(Math.random() * 4)
      const img = document.getElementById(this.index.toString())
      this.vueCanvas.translate(event.clientX, event.clientY)
      this.vueCanvas.rotate(Math.floor(Math.random() * Math.floor(360)) * Math.PI / 180)
      if (this.index === 3) {
        this.vueCanvas.drawImage(img, -100, -46, 200, 92)
      } else {
        this.vueCanvas.drawImage(img, -50, -50, 100, 100)
      }
      this.vueCanvas.restore()
    },
    clear () {
      const c = document.getElementById('c')
      this.vueCanvas.clearRect(0, 0, c.width, c.height)
    }
  }
}
</script>

<style scoped lang="stylus">

#mailserviceform
    padding-top: 3vh
    margin: 0 auto
    z-index: 2000
    position: relative
#c
  position: fixed;
  border: 1px solid black;

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
  text-align: center
  width: 30%
  display: block
  padding-bottom 4vh
  @media(max-width: 767px){
    width: 50%
  }

input, textarea
    background-color:#81cff3
    color: black
    border: 2px solid black
    border-radius 0px
    font-family: 'goopersemibold_italic', italic
    letter-spacing: 1px
    font-size: 1em
    padding-left: 10px
    @media(max-width: 767px){
      padding-left: 4px
    }

.darkblue
    background-color:#47abc6

.blackborder
    border: 2px solid black

#main
    padding-top: 60px
    background : #81cff3
    min-height: 100%
    width: 100%
    top 0
    left 0
    position absolute
p
  text-transform uppercase
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  font-size: 1em
  padding-left: 5px
  color: black
  vertical-align: middle
  @media(max-width: 767px){
    font-size: 1em
  }

.btn-block
  height: 100%

.black
    color: black
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    font-size: 1em
    letter-spacing: 1px

.tanbackground
    background-color: #f1d591
    border: 2px solid black
    border-radius 0px

.redbackground
    background-color: #f25555
    border: 2px solid black
    border-radius 0px

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
  align-items: flex-start
  z-index: 2000
  width 100px
  @media(max-width: 767px){
    width 50px
  }

</style>
