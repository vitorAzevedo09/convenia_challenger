import currencyFormat from '../../helpers/currencyFormat.js'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  bill: 10,
  tip_percentage: 10,
  quantity_peaplo: 2,
  currency: "EUR"
})

// getters
const getters = {
  billMoney: (state) => {
    return currencyFormat(state.currency,state.bill)
  },
  tipMoney: (state) => {
    return (state.tip_percentage/100) * state.bill
  },
  tipCurrency: (state, getters) => {
    return currencyFormat(state.currency, getters.tipMoney)
  },
  billTotalMoney: (state, getters) => {
    return state.bill + getters.tipMoney
  },
  billTotalCurrency: (state, getters) => {
    return currencyFormat(state.currency, getters.billTotalMoney)
  },
  billEachPerson: (state, getters) => {
    return getters.billTotalMoney / state.quantity_peaplo
  },
  billEachPersonCurrency: (state, getters) => {
    return currencyFormat(state.currency, getters.billEachPerson)
  }
}

// mutations
const mutations = {
  changeBill(state, newBill){
    state.bill = newBill
  },
  changeCurrency(state, newCurrency){
    state.currency = newCurrency
  },
  changeTipPercentage(state, newTipPercentage){
    state.tip_percentage = newTipPercentage
  },
  changeQuantityPeaplo(state, newQuantityPeaplo){
    state.quantity_peaplo = newQuantityPeaplo
  }
}

// actions
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
