export const state = () => ({
  bgc: 'white'

})

export const mutations = {
  backgroundChange: (state, color) => {
    state.bgc = color
  }
}

export const actions = {
  backgroundChange: (context, color) => {
    context.commit('backgroundChange', color)
  }
}
