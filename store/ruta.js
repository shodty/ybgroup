export const state = () => ({
  zindex: 0
})

export const mutations = {
  upZ: (state, index) => {
    state.zindex = index
  }
}

export const actions = {
  upZ: (context, index) => {
    context.commit('upZ', index)
  }
}
