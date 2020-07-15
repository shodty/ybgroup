<template lang='pug'>
.product
  img(:src='selectedVariant ? selectedVariant.image.src : product.images[0].src' :alt='`${product.title} product shot`' v-if='product.images')
  h5.title {{ product.title }}
  span.price(v-if='selectedVariant') ${{ selectedVariant.price }}
  variantselector(v-for='option in product.options' :key='option.id' :option='option' v-model='selectedOptions[option.name]')
  label.option Quantity
      input.quantity(v-model='quantity' min='1' type='number')
  button.buy.button(@click='addToCart' v-if='selectedVariant') Add to cart
  button.button(v-else disabled) Unavailable

</template>

<script>
import VariantSelector from '~/components/VariantSelector'

export default {
  components: {
    VariantSelector
  },
  props: {
    product: { type: Object, required: true }
  },
  data () {
    return {
      selectedOptions: this.product.options.reduce(
        (acc, cur) => ({ ...acc, [cur.name]: cur.values[0].value }),
        {}
      ),
      quantity: 1
    }
  },
  computed: {
    selectedVariant () {
      return this.$shopifyClient.product.helpers.variantForOptions(
        this.product,
        this.selectedOptions
      )
    }
  },
  methods: {
    addToCart () {
      this.$store.commit('shopify/openCart')

      const checkoutId = this.$store.state.shopify.checkout.id
      const lineItemsToAdd = [
        {
          variantId: this.selectedVariant.id,
          quantity: parseInt(this.quantity, 10)
        }
      ]

      this.$shopifyClient.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((res) => {
          this.$store.commit('shopify/updateCheckout', res)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
.product {
  flex: 0 1 31%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 3%;
}

.title {
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  opacity: 0.7;
}

.price {
  display: block;
  font-size: 1.1rem;
  opacity: 0.5;
  margin-bottom: 0.4rem;
}

.option {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.quantity {
  display: block;
  width: 15%;
  margin-bottom: 10px;
}

.buy.button {
  font-size: 85%
}
</style>
