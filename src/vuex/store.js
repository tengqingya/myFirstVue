import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from "./state"
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

const getters = {
  // radio: (state) => {
  //   console.log("compute store")
  //   return state.isCheck
  // }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
})
