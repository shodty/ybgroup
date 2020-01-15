export const state = () => ({
  faceColor: '',
  cubeHovered: false,
  cubeFace: 'showFront'

})

export const mutations = {
  faceChange: (state, face) => {
    state.cubeFace = face
  },
  faceColor: (state, { entered, color }) => {
    if (entered) {
      state.faceColor = color
      state.cubeHovered = true
    } else {
      state.cubeHovered = false
    }
  }
}

export const actions = {
  faceChange: (context, face) => {
    context.commit('faceChange', face)
  },
  faceColor: (context, { entered, color }) => {
    context.commit('faceColor', { entered, color })
  }
}
