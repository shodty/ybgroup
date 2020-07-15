<template lang='pug'>
ul.line-items
  li.item(v-for='item in this.$store.state.shopify.checkout.lineItems' :key='item.id')
    .image
      img(:src='item.variant.image.src' :alt='`${item.title} product shot`' v-if='item.variant.image')
    .content
      .row
        //.variant-title {{ item.variant.title }}
        span.title {{ item.title }}
      .row
        .quantity-container
          button.quantity-update(@click='changeQuantity(item.id, item.quantity - 1)') -
          span.quantity {{ item.quantity }}
          button.quantity-update(@click='changeQuantity(item.id, item.quantity + 1)') +
        span.price ${{ (item.quantity * item.variant.price).toFixed(2) }}
        button.remove(@click='removeItem(item.id)') ×

</template>

<script>
export default {
  methods: {
    changeQuantity (lineItemId, quantity) {
      const checkoutId = this.$store.state.shopify.checkout.id
      const lineItemsToUpdate = [
        { id: lineItemId, quantity: parseInt(quantity, 10) }
      ]

      this.$shopifyClient.checkout
        .updateLineItems(checkoutId, lineItemsToUpdate)
        .then((res) => {
          this.$store.commit('shopify/updateCheckout', res)
        })
    },
    removeItem (lineItemId) {
      const checkoutId = this.$store.state.shopify.checkout.id

      this.$shopifyClient.checkout
        .removeLineItems(checkoutId, [lineItemId])
        .then((res) => {
          this.$store.commit('shopify/updateCheckout', res)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
html {
  font-size: 65%;
}

.line-items {
  flex: 1 0 auto;
  margin: 0;
  padding: 20px;
}

.item {
  margin-bottom: 20px;
  overflow: hidden;
  backface-visibility: visible;
  min-height: 65px;
  position: relative;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
.image {
  width: 65px;
  height: 65px;
  border-radius: 3px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #e5e5e5;
  position: absolute;
}

.content {
  width: 100%;
  padding-left: 75px;
}

.row {
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
  position: relative;
}

.variant-title {
  float: right;
  font-weight: bold;
  font-size: 11px;
  line-height: 17px;
  color: #767676;
}

.title {
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  font-weight: 1000
  color: #000;
  font-size: 15px;
  font-weight: 400;
  margin-left 8%
}

.price {
  line-height: 23px;
  float: right;
  font-weight: bold;
  font-size: 15px;
  margin-right: 40px;
}

.quantity-container {
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  color #767676
  border: 1px solid #767676;
  float: left;
  border-radius: 3px;
  margin-left 8%
}

.quantity-update {
  color: #767676;
  display: block;
  float: left;
  height: 21px;
  line-height: 16px;
  font-family: monospace;
  width: 25px;
  padding: 0;
  border: none;
  background: transparent;
  box-shadow: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
}

.quantity {
  color: #212529;
  width: 38px;
  height: 21px;
  line-height: 23px;
  font-size: 15px;
  border: none;
  text-align: center;
  -moz-appearance: textfield;
  background: transparent;
  border-left: 1px solid #767676;
  border-right: 1px solid #767676;
  display: block;
  float: left;
  padding: 0;
  border-radius: 0;
}

.remove {
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  background: 0;
  font-size: 20px;
  top: -4px;
  opacity: 0.5;
}

.remove:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
