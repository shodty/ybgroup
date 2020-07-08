<template lang="pug">
#tester-div
    p {{text}}
</template>

<script>

export default {
  name: 'Tester',

  data () {
    return {
      text: 'Yo!'
    }
  }
}

</script>

<style scoped lang="stylus">

#tester-div
    width 100px
    height 100px
    background red
    color white
</style>
