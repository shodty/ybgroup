<template>
  <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="ask-question">
    <label>
      <input
        value="panelist"
        type="radio"
        name="panelist"
      >
      <span> Man </span>
    </label>
    <label>
      <input
        value="panelist"
        type="radio"
        name="panelist"
      >
      <span> WoMan </span>
    </label>
    ...
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  name: 'QAForm',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
