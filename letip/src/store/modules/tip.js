import currencyFormat from '../../helpers/currencyFormat.js'
import gql from 'graphql-tag'
import apolloClient from '../../api/vue-apollo.js'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  bill: 10,
  tip_percentage: 10,
  quantity_peaplo: 2,
  currency: "EUR",
  quote_BRL: 0
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
  billTotalBRL: (state,getters) => {
    return currencyFormat("BRL",getters.billTotalMoney*state.quote_BRL)
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
  SET_BILL(state, newBill){
    state.bill = newBill
  },
  SET_QUOTE_BRL(state, newQuoteBRL){
    state.quote_BRL = newQuoteBRL
  },
  SET_CURRENCY(state, newCurrency){
    state.currency = newCurrency
  },
  SET_TIP_PERCENTAGE(state, newTipPercentage){
    state.tip_percentage = newTipPercentage
  },
  SET_PEAPLO_QUANTITY(state, newQuantityPeaplo){
    state.quantity_peaplo = newQuantityPeaplo
  }
}

// actions
const actions = {
    async getQuoteBRL({ commit, state } ) {

    // Please upgrade your account to perform the request EUR -> BRL and you'll be able to run this code version
    // const response = await apolloClient.query({
    //   query: gql`
    //     query LatestEuro {
    //       latest(baseCurrency: "${state.currency}", quoteCurrencies: ["BRL"]) {
    //         quote
    //       }
    //     }
    //   `
    // })
       
     const response = await apolloClient.query({
       query: gql`
         query {
           latest(baseCurrency: "EUR", quoteCurrencies: ["BRL", "USD"]) {
             quote
           }
         }
       `
     })

      let quote = 0
      if(state.currency === "EUR"){
        quote = response.data.latest[0].quote
      } 
      if (state.currency === "USD"){
        quote = (1/response.data.latest[1].quote) * response.data.latest[0].quote
      }
        console.log(quote)
    commit('SET_QUOTE_BRL', quote)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
