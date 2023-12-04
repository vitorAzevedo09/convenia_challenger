<template>
  <div class="result-panel" :class="{ 'result-panel--visible': !hide }">
    <result-row :title="'Conta'" :money="bill_currency_format" />
    <result-row :title="'Gorjeta'" v-model:money="tip_money_currency_format" />
    <result-row :title="'Total'" v-model:money="total_bill_currency_format" />
    <result-row :title="'Por Pessoa'" v-model:money="per_person_currency_format" />
    <result-row :title="'Em R$'" :money="'R$ 0.00'" />
  </div>
</template>

<script setup lang="ts">
import ResultRow from '@/components/ResultRow.vue'
import { useTipStore } from '@/stores/tip';
import { storeToRefs } from 'pinia';

const tipStore = useTipStore()

const {
  tip_money_currency_format,
  bill_currency_format,
  total_bill_currency_format,
  per_person_currency_format
} = storeToRefs(tipStore)

interface Props {
  hide: boolean
}

const { hide } = defineProps<Props>()
</script>

<style scoped lang="scss">
@import '../../assets/css/breakpoints.scss';
@import '../../assets/css/variables.scss';

.result-panel {
  color: $purple-x11;
  display: none;
  position: relative;
  top: -2vh;
  opacity: 1;
  transition: hidden 0s, opacity $transition;
  height: 45vh;

  @include lg {
    display: flex;
    flex-flow: column;
  }

  &--visible {
    display: block;

    @include lg {
      display: inherit;
    }

    -webkit-animation: fadeIn 0.3s;
    animation: fadeIn 0.3s;
  }


}

@keyframes fadeIn {
  from {
    opacity: 0;
    left: 4em;
  }

  to {
    opacity: 1;
    left: 0;
  }
}
</style>
