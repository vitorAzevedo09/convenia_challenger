import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tipEntry:{
      boolCurrency: false,
      payValue: 0,
      tipPercentage: 10,
      personsTable: 2,
      valueBRL: 0,
    },
  },
  getters:{
    acronymCurrency: state => {
      return state.tipEntry.boolCurrency ? 'USD' : 'EUR'
    },
    results: state => {
      return [ 
        { title: "Conta", value: state.tipEntry.payValue },
        { title: "Gorjeta", value: state.tipEntry.payValue }
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
