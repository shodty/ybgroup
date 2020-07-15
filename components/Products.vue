<template lang='pug'>
.product-wrapper
  product(v-for='product in $store.state.shopify.products' :key='product.id' :product='product').
</template>

<script>
import Product from '~/components/Product.vue'

export default {
  components: {
    Product
  }
}
</script>

<style lang="stylus" scoped>
.product-wrapper {
  max-width: 900px;
  margin: 40px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
