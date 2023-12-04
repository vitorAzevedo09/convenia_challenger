import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTipStore = defineStore('tip', () => {
  
  const state = reactive({
    bill: 0,
    currency: "EUR",
    tip_percentage: 10,
    quantity_peaplo: 2
  })
  
const tip_money: Ref<number> = computed(() => (state.tip_percentage/100)*state.bill)
const total_bill: Ref<number> = computed(() => (state.tip_money+state.bill))
const per_person: Ref<number> = computed(() => (state.total_bill / state.quantity_peaplo))
                                         

  return { 
    state,
    tip_money,
    total_bill,
    per_person,
  }
})
