
export const state = () => ({
  cartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {}
})

export const mutations = {
  initShop (state, payload) {
    for (const item in payload) {
      state[item] = payload[item]
    }
  },
  updateCheckout (state, payload) {
    state.checkout = payload
  },
  openCart (state) {
    state.cartOpen = true
  },
  closeCart (state) {
    state.cartOpen = false
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { app }) {
    const shopCheckoutID = app.$cookies.get('shopCheckoutID')
    let checkout = {}
    if (shopCheckoutID) {
      checkout = await app.$shopify.checkout.fetch(shopCheckoutID)
      if (checkout.completedAt) {
        checkout = await app.$shopify.checkout.create()
      }
      checkout = await app.$shopify.checkout.create()
    } else {
      checkout = await app.$shopify.checkout.create()
    }

    const shop = {
      checkout: await checkout,
      products: await app.$shopify.product.fetchAll(),
      shop: await app.$shopify.shop.fetchInfo()
    }

    await app.$cookies.set('shopCheckoutID', shop.checkout.id)

    commit('initShop', shop)
  }
}
