import Vue from 'vue'
import Vuex from 'vuex'
import bill from './modules/bill.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    bill
  },
  strict: debug,
})
