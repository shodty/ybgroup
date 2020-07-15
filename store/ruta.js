export const state = () => ({
  zindex: 0,
  layout: 'purchase',
  zstack: [],
  grid: false
})

export const mutations = {
  upZ: (state, index) => {
    state.zindex = index
  },
  changeLayout: (state, layout) => {
    state.layout = layout
  },
  addToZStack: (state, key) => {
    state.zstack.push(key)
  },
  clearZStack: (state) => {
    state.zstack = []
  },
  moveToTop: (state, key) => {
    state.zstack.push(state.zstack.splice(state.zstack.indexOf(key), 1)[0])
  },
  moveToBottom: (state, key) => {
    state.zstack.unshift(state.zstack.splice(state.zstack.indexOf(key), 1)[0])
  },
  removeFromZStack: (state, key) => {
    state.zstack.splice(state.zstack.indexOf(key), 1)
  },
  toggleGrid: (state, bool) => {
    state.grid = bool
  }
}

export const actions = {
  upZ: (context, index) => {
    context.commit('upZ', index)
  },
  changeLayout: (context, layout) => {
    context.commit('changeLayout', layout)
  },
  addToZStack: (context, key) => {
    context.commit('addToZStack', key)
  },
  clearZStack: (context) => {
    context.commit('clearZStack')
  },
  moveToTop: (context, key) => {
    context.commit('moveToTop', key)
  },
  moveToBottom: (context, key) => {
    context.commit('moveToBottom', key)
  },
  removeFromZStack: (context, key) => {
    context.commit('removeFromZStack', key)
  },
  toggleGrid: (context, bool) => {
    context.commit('toggleGrid', bool)
  }
}
