<template lang="pug">
#slidercounterdiv
    .icons
        .icon-table
            .icon-row
                .icon-cell(v-for="(slide, index) in slideObject.slideCount" :key='index'  @click="onClick(index+1)")
                    IconBase.iconbases(:icon-name='icon[index]' :icon-color="lit == index + 1? '#ec7625' : 'black'" width="30px" height="30px" )
                        component(:is="icon[index]")
</template>

<script>

import IconBase from './IconBase.vue'

export default {
  name: 'SliderCounter',
  components: {
    IconBase
  },
  props: {
    slideObject: { type: Object, default () { return {} } },
    lit: { type: Number, default: 1 },
    icon: { type: Array, default () { return [] } }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    onClick (index) {
      this.$bus.$emit('countchange', index)
    }
  }
}
</script>

<style scoped lang="stylus">
#slidercounterdiv
  color red

.icons
    display: inline-block

.icon-table
    display:table;
    table-layout:fixed;
    border-collapse: collapse;

.icon-cell
    padding-right: 5px
    display: table-cell

.icon-row
    display: table-row

.testred
    background red
    height: 100%
    width 100%
</style>
