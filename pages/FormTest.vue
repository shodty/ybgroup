<template>
  <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="ask-question">
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        :value="panelist"
        @input="ev => updatePanelist"
        :checked="panelist === currentPanelist"
        type="radio"
        name="panelist"
      >
      <span>{{ panelist }}</span>
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
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  },
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    }
  }
}
</script>
