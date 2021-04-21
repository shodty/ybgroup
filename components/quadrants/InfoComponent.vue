<template lang="pug">
#information-component
    //.centered
        p.contact Contact Us
        p.email(:class="emailColor[count]") info@ybgroup.us
        p.est EST. 2018
    .container
      form
        label Name
        input(type='text' v-model='name' name='name' placeholder='Your Name')
        label Email
        input(type='email' v-model='email' name='email' placeholder='Your Email')
        label Message
        textarea(name='message' v-model='message' cols='30' rows='5' placeholder='Message')
        input(type='submit' value='Send')
</template>
<script>
import emailjs from 'emailjs-com'

export default {
  components: {
    emailjs
  },
  data () {
    return {
      emailColor: ['pink-text', 'red-text', 'blue-text', 'green-text', 'yellow-text', 'orange-text'],
      count: 0,
      name: '',
      email: '',
      message: ''
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
    },
    sendEmail (e) {
      try {
        emailjs.sendForm('service_296hcep', 'template_cu44pdv', e.target,
          'user_XC8lCOdBkcQkQpUs4QkTs', {
            name: this.name,
            email: this.email,
            message: this.message
          })
      } catch (error) {
        console.log({ error })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
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

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
