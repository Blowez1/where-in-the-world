//State
export const state = () => ({
  theme: "",
  countries: [],
  country: {},
  loading: false,
  error: false
})

//Actions
export const actions = {

  initTheme({
    commit
  }, payload) {
    commit('SET_THEME', payload)
  },
  async getAllCountries({
    commit
  }) {
    commit('SET_LOAD', {
      load: true
    })
    const countries = await this.$axios.$get('https://restcountries.com/v3.1/all').then((data) => {
      commit('SET_LOAD', {
        load: false
      })
      commit('SET_COUNTRIES', {
        countries: data
      })
    })
  },
  changeTheme({
    commit,
    state
  }) {
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
  },
  async filterByRegion({
    commit
  }, payload) {
    if (payload.regionSelect == 0) {
      return false
    } else {
      commit('SET_LOAD', {
        load: true
      })
      const filteredCountries = await this.$axios.$get('https://restcountries.com/v3.1/region/' + payload.regionSelect).then((data) => {
        commit('SET_LOAD', {
          load: false
        })
        commit('SET_COUNTRIES', {
          countries: data
        })
      })
    }
  },
  async search({
    commit
  }, payload) {
    if (payload.searchInput == '') {
      return false
    } else {
      if (payload.searchInput.length <= 2) {
        alert('Please write character more than 2!!!!')
      } else {
        commit('SET_LOAD', {
          load: true
        })

        const query = await this.$axios.$get('https://restcountries.com/v3.1/name/' + payload.searchInput)
          .catch((err) => {
            if (err) {
              commit('SET_ERROR', {
                error: true
              })
            }
          })
          .then((data) => {
            commit('SET_LOAD', {
              load: false
            })
            commit('SET_COUNTRIES', {
              countries: data
            })

            if (data) {
              commit('SET_ERROR', {
                error: false
              })
            }
          })
      }
    }
  },
  async getCountryByCode({
    commit
  }, payload) {
  
    commit('SET_LOAD', {
      load: true
    })

    const query = await this.$axios.$get('https://restcountries.com/v2/alpha?codes=' + payload.code).catch((err) => {
      if (err) {

        commit('SET_ERROR', {
          error: true
        })
      }
    }).then((data) => {
      commit('SET_LOAD', {
        load: false
      })

      commit('SET_COUNTRY', {
        country: data[0]
      })

      if (data) {
        commit('SET_ERROR', {
          error: false
        })
      }
    })
  }
}

//Mutations
export const mutations = {
  SET_THEME(state, payload) {
    state.theme = payload.theme
  },
  SET_COUNTRIES(state, payload) {
    state.countries = payload.countries
  },
  SET_COUNTRY(state, payload) {
    state.country = payload.country
  },
  SET_LOAD(state, payload) {
    state.loading = payload.load
  },
  SET_ERROR(state, payload) {
    state.error = payload.error
  }
}

export const getters = {
  checkTheme(state) {
    if (state.theme == 'dark')
      return 'dark'
  },
  checkLoading(state) {
    if (state.loading == false) {
      return 'done'
    }
  }
}


