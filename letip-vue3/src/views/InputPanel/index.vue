<template>
  <div>
    <div class="input-panel" :class="{ 'input-panel--visible': !hide }">
      <form action="" class="input-panel__form">
        <toggle-input :left-text="'€ EUR'" :right-text="'$ USD'" @change="changeCurrency($event)" />
        <number-input :text="'Valor'" :value="bill" @change="changeBill($event)" />
        <slider-input :title="'Gorjeta'" :value="tip_percentage" :min="10" :max="20" :is-percentage="true"
          class="input-panel__slider" @change="changePercentage($event)" style="margin-top: 2vh" />
        <slider-input :title="'Pessoas'" :value="quantity_peaplo" :min="2" :max="16" class="input-panel__slider"
          :is-percentage="false" @change="changePeaploQuantity($event)" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderInput from '@/components/SliderInput.vue'
import ToggleInput from '@/components/ToogleInput.vue'
import NumberInput from '@/components/NumberInput.vue'

import { ref, type Ref } from 'vue';

const bill: Ref<number> = ref<number>(0)
const tip_percentage: Ref<number> = ref<number>(10)
const quantity_peaplo: Ref<number> = ref<number>(2)

interface Props {
  hide: boolean,
}

const changeCurrency = (n: boolean) => {
  console.log(n)
}

const changeBill = (e: number) => {
  bill.value = e
}

const changePercentage = (e: number) => {
  tip_percentage.value = e
}

const changePeaploQuantity = (e: number) => {
  console.log(e)
  quantity_peaplo.value = e
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
  height: 36vh;

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
