<template lang="pug">
#information-component
    //.centered
        p.email(:class="emailColor[count]") info@ybgroup.us
        p.est EST. 2018
    .container
      p.email Contact Us
      form(@submit.prevent="sendEmail")
        label.contact Name
        input(type='text' v-model='name' name='name' placeholder='Your Name')
        label.contact Email
        input(type='email' v-model='email' name='email' placeholder='Your Email')
        label.contact Message
        textarea(name='message' v-model='message' cols='30' rows='5' placeholder='Message')
        input(type='submit' value='Send')
</template>
<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactUs',
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
  },
  methods: {
    changeColor () {
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
        alert('Message Received!')
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
    font-size: 2em
    text-align: center
    line-height: 2
    @media(max-width: 767px) {
        font-size: 1em;
        line-height: 1
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
  padding: 20px;
  width: 50%;
  @media(max-width: 767px) {
    width: 90%;
    padding: 2%;
  }
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
  @media(max-width: 767px) {
    margin-top: 0px;
    padding: 4px;
  }
}

input[type=submit] {
  font-family goopersemibold_italic
  background-color: #f3b120;
  color: black;
  padding: 12px 20px 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media(max-width: 767px) {
    padding: 4px 20px 2px 20px
  }
}

input[type=submit]:hover {
  background-color: #0076bb;
}
</style>
