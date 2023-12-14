<template>
  <div>
    <div class="input-panel" :class="{ 'input-panel--visible': !hide }">
      <form action="" class="input-panel__form">
        <toggle-input :left-text="{ text: '€ EUR', value: EUR }" v-model:value="state.currency"
          :right-text="{ text: '$ USD', value: USD }" />
        <number-input :text="'Valor'" v-model:value="state.bill" :symbol="state.currency == 'EUR' ? '€' : '$'" />
        <slider-input :title="'Gorjeta'" v-model:value="state.tip_percentage" :min="10" :max="20" :is-percentage="true"
          class="input-panel__slider" />
        <slider-input :title="'Pessoas'" v-model:value="state.quantity_peaplo" :min="2" :max="16"
          class="input-panel__slider" :is-percentage="false" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { USD, EUR } from '@/helpers/enums'
import SliderInput from '@/components/SliderInput.vue'
import ToggleInput from '@/components/ToogleInput.vue'
import NumberInput from '@/components/NumberInput.vue'

import { useTipStore } from '@/stores/tip';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const tipStore = useTipStore()

const { state } = storeToRefs(tipStore)

watch(state.value, () => {
  tipStore.getBillBRL()
})

interface Props {
  hide: boolean,
}
const { hide } = defineProps<Props>()
</script>

<style scoped lang="scss">
@import '../../assets/css/variables.scss';
@import '../../assets/css/breakpoints.scss';

.input-panel {
  color: $purple-x11;
  display: none;
  position: relative;
  opacity: 1;
  transition: hidden 0s, opacity $transition;
  height: 100%;

  &--visible {
    display: flex;
    -webkit-animation: fadeIn 0.3s;
    animation: fadeIn 0.3s;
    justify-content: center;

    @include lg {
      display: flex;
    }
  }

  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    width: 380px;
  }

  @include lg {
    display: flex;
  }

}

@keyframes fadeIn {
  from {
    opacity: 0;
    right: 4em;
  }

  to {
    opacity: 1;
    right: 0;
  }
}
</style>
