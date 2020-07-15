
export const state = () => ({
})

export const actions = {
  async nuxtServerInit ({ commit }, { app }) {
    const shopCheckoutID = app.$cookies.get('shopCheckoutID')
    let checkout = {}
    if (shopCheckoutID) {
      checkout = await app.$shopifyClient.checkout.fetch(shopCheckoutID)
      if (checkout.completedAt) {
        checkout = await app.$shopifyClient.checkout.create()
      }
      checkout = await app.$shopifyClient.checkout.create()
    } else {
      checkout = await app.$shopifyClient.checkout.create()
    }

    const shop = {
      checkout: await checkout,
      products: await app.$shopifyClient.product.fetchAll(),
      shop: await app.$shopifyClient.shop.fetchInfo()
    }

    await app.$cookies.set('shopCheckoutID', shop.checkout.id)

    commit('shopify/initShop', shop)
  }
}
