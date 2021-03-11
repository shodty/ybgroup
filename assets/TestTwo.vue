
<template lang="pug">
#testtwo
    .half.yellow
        p.ctrtxt Services
    .half.pink
        p.ctrtxt Work
    .half.blue
        p.ctrtxt Store
    .half.green
        p.ctrtxt Type

</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="stylus">
#testtwo
    width: 100vw
    height: 100vh

.half
  display: flex
  justify-content: center
  align-items: center
  height: 50%
  width 50%
  border: 3px solid black
  float left
.pink
    background: #E2A0C7
    color: #0076BB
.green
    background: #235D39
    color: #F3B120
.yellow
    background: #F3B120
    color: #E43E30
.blue
    background: #0076BB
    color: #E2A0C7

.ctrtxt
    font-family: goopersuperbold_italic
    font-size: 9em
    text-align: center
    line-height: 50%
</style>
