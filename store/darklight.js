export const state = () => ({
  light: true,
  baseColor: '#000'
})

export const mutations = {
  darkLight: (state) => {
    state.light = !state.light
    if (state.light) { state.baseColor = '#000' } else { state.baseColor = '#FFF' }
  }
}

export const actions = {
  darkLight: (context) => {
    context.commit('darkLight')
  }
}
