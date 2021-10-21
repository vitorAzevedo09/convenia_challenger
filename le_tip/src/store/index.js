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
    tip: state => {
      return state.tipEntry.payValue * (state.tipEntry.tipPercentage/100) 
    },
    value: state =>{
      return state.tipEntry.payValue;
    },
    total: (state) => {
      return (1*state.tipEntry.payValue) + (state.tipEntry.payValue * (state.tipEntry.tipPercentage/100)); 
    },
    perPerson: (state) => {
      return ((1*state.tipEntry.payValue) + (state.tipEntry.payValue * (state.tipEntry.tipPercentage/100)))/state.tipEntry.personsTable; 
    },
    results: (state, getters) => {
      return [ 
        { title: "Conta", value: getters.value},
        { title: "Gorjeta", value: getters.tip},
        { title: "Total", value: getters.total},
        { title: "por Pessoa", value: getters.perPerson},
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
