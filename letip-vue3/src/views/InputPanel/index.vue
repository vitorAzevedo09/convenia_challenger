<template>
  <div>
    <div class="input-panel" :class="{ 'input-panel--visible': !hide }">
      <form action="" class="input-panel__form">
        <toggle-input :left-text="'€ EUR'" :right-text="'$ USD'" />
        <number-input :text="'Valor'" :value="state.bill" />
        <slider-input :title="'Gorjeta'" :value="state.tip_percentage" :min="10" :max="20" :is-percentage="true"
          class="input-panel__slider" />
        <slider-input :title="'Pessoas'" :value="state.quantity_peaplo" :min="2" :max="16" class="input-panel__slider"
          :is-percentage="false" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderInput from '@/components/SliderInput.vue'
import ToggleInput from '@/components/ToogleInput.vue'
import NumberInput from '@/components/NumberInput.vue'

import { useTipStore } from '@/stores/tip';

const { state } = useTipStore()

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
  align-content: start;
  width: 100%;
  height: 45vh;

  &__slider {
    margin-top: 3vh
  }

  &--visible {
    display: block;
    -webkit-animation: fadeIn 0.3s;
    animation: fadeIn 0.3s;

    @include lg {
      display: inherit;
    }
  }

  &__form {
    width: 100%;
  }

  @include lg {
    display: inherit;
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
