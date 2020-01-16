<template lang="pug">
#main
  Header(displayNavBar = false)

  MobileMenu
  DarkLight
  b-row(align-h="center")
    b-col(cols=5 md=5)
      b-form(name='ybg-mail-service' method='post' id="mailserviceform" @submit="onSubmit" data-netlify="true" data-netlify-honeypot="bot-field")
        input(type='hidden' name='form-name' value='ask-question')
        b-form-row( id="input-group-1"  label-for="input-1" )
            b-col(cols="3" class="blackborder" )
                p First Name
            b-col(class="nopadding")
                b-form-input(id="input-1" v-model="form.firstname" type="text" required placeholder="Enter first name")
        b-form-row( id="input-group-2"  label-for="input-2" )
            b-col(cols="3" class="blackborder")
                p Last Name
            b-col(class="nopadding")
                b-form-input(id="input-2" v-model="form.lastname" type="text" required placeholder="Enter last name")
        b-form-row( id="input-group-3"  label-for="input-3" )
            b-col(cols="3" class="blackborder")
                p Email
            b-col(class="nopadding")
                b-form-input(id="input-3" v-model="form.email" type="email" required placeholder="Enter email")
        b-form-row( id="input-group-4"  label-for="input-4" )
            b-col(cols="3" class="blackborder")
                p Mailing Address
            b-col(class="nopadding")
                b-form-input(id="input-4" v-model="form.address" type="text" required placeholder="Enter mailing address")
        b-form-row
            b-col(cols="10")
            b-col(cols="2" class="nopadding")
                b-button(type="submit" variant="primary" class="btn-block white tanbackground") Done?

</template>

<script>

import MobileMenu from '../components/MobileMenu.vue'
import DarkLight from '../components/DarkLight.vue'
import Header from '../components/Header.vue'

export default {
  name: 'Mailservice',
  components: {
    MobileMenu,
    DarkLight,
    Header
  },
  data () {
    return {
      activeLink: 'navigation',
      count: 0,
      form: {
        email: '',
        name: ''
      }
    }
  },
  computed: {
    light () {
      return this.$store.state.darklight.light
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped lang="stylus">

#mailserviceform
    padding-top: 60px
    margin: 0 auto

*
  margin: 0px
  padding: 0px

input, textarea
    background-color:#81cff3
    color: black
    border: 2px solid black
    border-radius 0px
    font-family: 'goopersemibold_italic', italic
    letter-spacing: 1px
    font-size: 1em

.blackborder
    border: 2px solid black

#main
    padding-top: 60px
    background : #81cff3
    min-height: 100%
    width: 100%
    top 0
    left 0
    position fixed

p
  text-transform uppercase
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  letter-spacing: 1px
  font-size: 1em
  vertical-align: middle
  @media(max-width: 767px){
    font-size: 1em
  }

.white
    color: black
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    font-size: 1em
    letter-spacing: 1px

.tanbackground
    background-color: #f1d591
    border: 2px solid black
    border-radius 0px

.blackbackground
    background-color: black

.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}

.form-control::-webkit-input-placeholder { color: black; }

</style>
