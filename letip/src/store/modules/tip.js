
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
  tipMoney: (state) => {
    return ((state.tip_percentage/100) * state.bill)
  },
  billTotalPrice: (state, getters) => {
    return state.bill + getters.tipMoney
  },
  billEachPerson: (state, getters) => {
    return getters.billTotalPrice / state.quantity_peaplo
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
