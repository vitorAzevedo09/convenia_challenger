import Vue from 'vue'
import Vuex from 'vuex'
import tip from './modules/tip.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    tip
  },
  strict: debug,
})
