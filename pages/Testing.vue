<template lang="pug">
#main
    form(name='form-test3' method='post' data-netlify='true' data-netlify-honeypot='bot-field')
      input(type='hidden' name='form-test3' value='form-test3')
      label
        input(:value='firstname' type='text' required placeholder='Enter first name' name='firstname')
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
}
</script>
