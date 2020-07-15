
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
      checkout = await app.$shopifyClient.checkout.fetch(shopCheckoutID)
      checkout = await app.$shopifyClient.checkout.create()
    }

    const shop = {
      checkout: await checkout,
      products: await app.$shopifyClient.product.fetchAll(),
      shop: await app.$shopifyClient.shop.fetchInfo()
    }

    await app.$cookies.set('shopCheckoutID', shop.checkout.id)

    commit('initShop', shop)
  }
}
