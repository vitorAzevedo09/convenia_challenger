<template>
  <div class="result-panel" :class="{ 'result-panel--visible': !hide }">
    <result-row :title="'Conta'" :money="bill" />
    <result-row :title="'Gorjeta'" :money="tip" />
    <result-row :title="'Total'" :money="total_bill" />
    <result-row :title="'Por Pessoa'" :money="per_person" />
    <result-row :title="'Em R$'" :money="bill_BRL" />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import ResultRow from '@/components/ResultRow.vue'

const bill: Ref<string> = ref<string>('R$ 0.00')
const tip: Ref<string> = ref<string>('R$ 0.00')
const total_bill: Ref<string> = ref<string>('R$ 0.00')
const per_person: Ref<string> = ref<string>('R$ 0.00')
const bill_BRL: Ref<string> = ref<string>('R$ 0.00')

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
