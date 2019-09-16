/* ============
 * State of common module
 * ============
 *
 * The initial state of the suggestion module.
 */
const state = () => ({
  step: '1',
  showPlans: false
})

/* ============
 * Getters for the common module
 * ============
 *
 * The getters that are available on the
 * user module.
 */
const getters = {
  step: state => { return state.step },
  showPlans: state => { return state.showPlans }
}

/* ============
 * Mutations for the common module
 * ============
 *
 * The mutations that are available on the
 * common module.
 */
const mutations = {
  setStep (state, payload) {
    state.step = payload
  },
  setShowPlans (state, payload) {
    state.showPlans = payload
  },
  clear (state) {
    state.step = '1'
    state.showPlans = false
  }
}

/* ============
 * Actions for the common module
 * ============
 *
 * The actions that are available on the
 * user module.
 */
const actions = {
  getDestinations () {
    return new Promise((resolve, reject) => {
      this.$axios.$get('destinos/')
        .then(res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  makeQuotation ({ commit }, item) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('cotizaciones/', item)
        .then(res => {
          if (res) {
            commit('setCodeSell', res.codigoVenta)
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

/* =============
 * Common Module
 * =============
 */
export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
