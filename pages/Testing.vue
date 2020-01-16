<template lang="pug">
#main
    form(name='form-test3' method='POST' data-netlify='true' data-netlify-honeypot='bot-field')
      input(type='hidden' name='form-name' value='form-test3')
      label First Name
        input(:value='firstname' type='text' required placeholder='Enter first name' name='firstname' key='1')
      button Submit
</template>
<script>
export default {
  name: 'FormTest3',
  data () {
    return {
      firstname: ''
    }
  }
/*   methods: {
    encode (data) {
        data.map(
            return Object.keys(data)
            .map(key => '${encodeURIComponent(key)}')
        )
    },
    handleSubmit () {
      fetch('/', {
        method: 'post',
        header: {
          'Content-Type': 'application/x-www-urlencoded'
        },
        body: this.encode({
          'form-name': 'form-test3',
          ...this.form
        })
      })
    }
  } */
}
</script>
