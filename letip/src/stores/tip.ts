import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import currencyFormater from '../helpers/currency'
import { getCurrentCurrencyQuote } from '@/api'
import { useToastStore } from './toasts'
import type { ApolloError } from '@apollo/client'


export const useTipStore = defineStore('tip', () => {
  const toastStore = useToastStore()

  const state = reactive({
    bill: 0,
    currency: "EUR",
    tip_percentage: 10,
    quantity_peaplo: 2,
    quote_BRL: 0
  })

  const tip_money = computed(() => (state.tip_percentage / 100) * state.bill)
  const total_bill = computed(() => (tip_money.value + state.bill))
  const per_person = computed(() => (total_bill.value / state.quantity_peaplo))

  const tip_money_currency_format = computed(() => currencyFormater(state.currency, tip_money.value))
  const bill_currency_format = computed(() => currencyFormater(state.currency, state.bill))
  const total_bill_currency_format = computed(() => currencyFormater(state.currency, total_bill.value))
  const per_person_currency_format = computed(() => currencyFormater(state.currency, per_person.value))
  const total_bill_BRL = computed(() => currencyFormater(state.currency, total_bill.value * state.quote_BRL))

  const getBillBRL = async (): Promise<void> => {
    try {
      state.quote_BRL = await getCurrentCurrencyQuote(state.currency)
    } catch (e) {
      const error = e as ApolloError
      toastStore.addToast({
        type: "error",
        title: error.name,
        message: error.message
      })
    }
  }

  return {
    state,
    tip_money,
    total_bill,
    per_person,
    tip_money_currency_format,
    bill_currency_format,
    total_bill_currency_format,
    per_person_currency_format,
    getBillBRL,
    total_bill_BRL
  }
})
