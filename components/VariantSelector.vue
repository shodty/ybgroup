<template>
  <select
    :name="option.name"
    @input="$emit('input', $event.target.value)"
    class="option"
  >
    <option
      v-for="selection in option.values"
      :value="selection.value"
      :key="`${option.id}-${selection.value}`"
    >
      {{ selection.value }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default () {
        return { name: 'default', values: ['None'] }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.option {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
</style>
