//State
export const state = () => ({
  theme: ""
})

//Actions
export const actions = {
  initTheme({
    commit
  }, payload) {
    commit('SET_THEME', payload)
  },
  changeTheme({
    commit,state
  }, payload) {
    if (state.theme == "light") {
      commit('SET_THEME', {
        theme: "dark"
      })
      localStorage.setItem('theme', "dark")
    } else {
      commit('SET_THEME', {
        theme: "light"
      })
      localStorage.setItem('theme', "light")
    }
  }
}

//Mutations
export const mutations = {
  SET_THEME(state, payload) {
    state.theme = payload.theme
  }
}

export const getters = {}
