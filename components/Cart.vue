<template lang='pug'>
aside.cart(:class='{ open: $store.state.shopify.cartOpen }')
  header
    h2 Your Cart
    button.close(@click="$store.commit('shopify/closeCart')") ×
  LineItems
  footer
      .info
        .info__total.info--small Subtotal
        .info__pricing
          span.pricing {{ $store.state.shopify.checkout.subtotalPrice }}
      .info
        .info__total.info--small Taxes
        .info__pricing
          span.pricing {{ $store.state.shopify.checkout.totalTax }}
      .info
        .info__total.info--small Total
        .info__pricing
          span.pricing {{ $store.state.shopify.checkout.totalPrice }}
      a.checkout.button(:href='$store.state.shopify.checkout.webUrl') Checkout
</template>

<script>
import LineItems from '~/components/LineItems'

export default {
  components: {
    LineItems
  }
}
</script>

<style lang="stylus" scoped>
html {
  font-size: 65%;
}

.cart {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  font-size: 65%
  width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e5e5e5;
  transform: translateX(100%);
  transition: transform 0.15s ease-in-out;
  z-index 100000
  &.open {
    transform: translateX(0);
  }
}

.close {
  position: absolute;
  right: 9px;
  top: 8px;
  font-size: 35px;
  color: #999;
  border: none;
  background: transparent;
  transition: transform 100ms ease;
  cursor: pointer;
}

header {
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  flex: 0 0 auto;
  display: inline-block;
}

footer {
  padding: 20px;
  border-top: 1px solid #e5e5e5;
  flex: 0 0 auto;
}

.info {
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  padding: 15px 20px 10px;

  &__total {
    float: left;
    text-transform: uppercase;
  }

  &__pricing {
    float: right;
  }

  &--small {
    font-size: 11px;
  }
}

.pricing {
  margin-left: 5px;
  font-size: 16px;
  color: black;
}

.checkout {
  font-family: Helvetica, Arial, sans-serif
  font-weight: 400
  margin-top: 20px;
  display: block;
  width: 100%;
  text-decoration none
  &:hover,
  &:focus {
    color: #fff;
  }
}

h2
  font-family: 'cardinal_grotesque_wideSBd', sans-serif
  color #000
</style>
