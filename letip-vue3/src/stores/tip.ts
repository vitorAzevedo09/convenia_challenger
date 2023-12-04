import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTipStore = defineStore('tip', () => {
  
  const state = reactive({
    bill: 0,
    currency: "EUR",
    tip_percentage: 10,
    quantity_peaplo: 2
  })
  
const tip_money: Ref<number> = computed(() => (tip_percentage.value/100)*bill.value)
const total_bill: Ref<number> = computed(() => (tip_money.value+bill.value))
const per_person: Ref<number> = computed(() => (total_bill.value / quantity_peaplo.value))
                                         

  return { 
    state,
    tip_money,
    total_bill,
    per_person,
  }
})
