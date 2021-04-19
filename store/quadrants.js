export const state = () => ({
  previousQuadrant: 0,
  currentQuadrant: 0,
  design: 'overview',
  market: 'overview',
  q1Class: ['hw50', 'blue'],
  q2Class: ['hw50', 'yellow'],
  q3Class: ['hw50', 'pink'],
  q4Class: ['hw50', 'green'],
  ready: true
})

export const mutations = {
  changeQuadrant: (state, newQuadrant) => {
    state.previousQuadrant = state.currentQuadrant
    state.currentQuadrant = newQuadrant
  },
  changeReady (state, truth) {
    state.ready = truth
  },
  changeQ1Class (state, newQ1Class) {
    state.q1Class = newQ1Class
  },
  changeQ2Class (state, newQ2Class) {
    state.q2Class = newQ2Class
  },
  changeQ3Class (state, newQ3Class) {
    state.q3Class = newQ3Class
  },
  changeQ4Class (state, newQ4Class) {
    state.q4Class = newQ4Class
  }
}

export const actions = {
  changeQuadrant: ({ dispatch, commit }, newQuadrant) => {
    commit('changeQuadrant', newQuadrant)
    dispatch('q1Class')
    dispatch('q2Class')
    dispatch('q3Class')
    dispatch('q4Class')
    dispatch('changeReady', false)
    setTimeout(() => {
      dispatch('changeReady', true)
    }, 1500)
  },
  changeReady ({ commit }, truth) {
    commit('changeReady', truth)
  },
  q1Class ({ state, commit }) {
    if (state.currentQuadrant === 0) {
      commit('changeQ1Class', ['hw50', 'blue'])
    } else if (state.currentQuadrant === 1) {
      commit('changeQ1Class', ['h100', 'green'])
    } else if (state.currentQuadrant === 2) {
      commit('changeQ1Class', ['hw50', 'yellow'])
    } else if (state.currentQuadrant === 3 && state.previousQuadrant === 1) {
      commit('changeQ1Class', ['hw100', 'blue', 'z1000 '])
    } else if (state.currentQuadrant === 4 && state.previousQuadrant === 1) {
      commit('changeQ1Class', ['hw100', 'white', 'z1000 '])
    } else if ((state.currentQuadrant === 3 || state.currentQuadrant === 4) && state.previousQuadrant === 0) {
      commit('changeQ1Class', 'o0')
    } else { commit('changeQ1Class', 'blue') }
  },
  q2Class ({ state, commit }) {
    if (state.currentQuadrant === 0) {
      commit('changeQ2Class', ['hw50', 'yellow'])
    } else if (state.currentQuadrant === 1) {
      commit('changeQ2Class', ['hw50', 'blue'])
    } else if (state.currentQuadrant === 2) {
      commit('changeQ2Class', ['h100', 'blue'])
    } else if (state.currentQuadrant === 3 && state.previousQuadrant === 2) {
      commit('changeQ2Class', ['hw100', 'yellow', 'z1000 '])
    } else if (state.currentQuadrant === 4 && state.previousQuadrant === 2) {
      commit('changeQ2Class', ['hw100', 'white', 'z1000 '])
    } else if ((state.currentQuadrant === 3 || state.currentQuadrant === 4) && state.previousQuadrant === 0) {
      commit('changeQ2Class', 'o0')
    } else { commit('changeQ2Class', 'yellow') }
  },
  q3Class ({ state, commit }) {
    if (state.currentQuadrant === 0) {
      commit('changeQ3Class', ['hw50', 'pink'])
    } else if (state.currentQuadrant === 1) {
      commit('changeQ3Class', ['h0', 'pink'])
    } else if (state.currentQuadrant === 2) {
      commit('changeQ3Class', ['hw50', 'pink', 'black-text'])
    } else if (state.currentQuadrant === 3 && state.previousQuadrant === 0) {
      commit('changeQ3Class', ['hw100', 'pink', 'z1000 '])
    } else if (state.currentQuadrant === 3 && (state.previousQuadrant === 4 || state.previousQuadrant === 3)) {
      commit('changeQ3Class', ['hw100', 'white', 'z1000 '])
    } else { commit('changeQ3Class', ['o0', 'pink']) }
  },
  q4Class ({ state, commit }) {
    if (state.currentQuadrant === 0) {
      commit('changeQ4Class', ['hw50', 'green'])
    } else if (state.currentQuadrant === 1) {
      commit('changeQ4Class', ['hw50', 'red'])
    } else if (state.currentQuadrant === 2) {
      commit('changeQ4Class', ['h0', 'green'])
    } else if (state.currentQuadrant === 4 && state.previousQuadrant === 0) {
      commit('changeQ4Class', ['hw100', 'white', 'z1000 '])
    } else if (state.currentQuadrant === 4 && state.previousQuadrant === 3) {
      commit('changeQ4Class', ['hw100', 'white', 'z1000 '])
    } else { commit('changeQ4Class', ['o0', 'green']) }
  }
}
