import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTipStore = defineStore('tip', () => {
  
const bill: Ref<number> = ref<number>(0)
const currency: Ref<string> = ref<string>("EUR")
const tip_percentage: Ref<number> = ref<number>(10)
const quantity_peaplo: Ref<number> = ref<number>(2)
const tip_money: Ref<number> = computed(() => (tip_percentage.value/100)*bill.value)
const total_bill: Ref<number> = computed(() => (tip_money.value+bill.value))
const per_person: Ref<number> = computed(() => (total_bill.value / quantity_peaplo.value))
                                         

  return { bill, tip_percentage, quantity_peaplo, tip_money, total_bill, per_person, currency}
})
