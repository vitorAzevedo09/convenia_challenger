<template>
  <div class="input-panel" :class="{ 'input-panel--visible': !hide }">
    <form action="" class="input-panel__form">
      <toggle-input :left-text="'€ EUR'" :right-text="'$ USD'" v-model="currency" />
      <number-input :text="'Valor'" v-model="money" />
      <slider :title="'Gorjeta'" style="margin-top: 2vh" v-model="tipPercentage" :min="10" :max="20" :is-percentage="true"
        class="input-panel__slider" />
      <slider :title="'Pessoas'" v-model="quantityPeaplo" :min="2" :max="16" class="input-panel__slider" />
    </form>
  </div>
</template>

<script>
import Slider from '../../components/SliderInput/index.vue'
import NumberInput from '../../components/NumberInput/index.vue'
import ToggleInput from '../../components/ToggleInput/index.vue'
export default {
  props: {
    hide: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      money: 0,
      currency: "EUR",
      tipPercentage: 10,
      quantityPeaplo: 2,
    }
  },
  components: {
    Slider,
    NumberInput,
    ToggleInput
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
@import '../../assets/css/breakpoints.scss';

.input-panel {
  display: none;
  position: relative;
  opacity: 1;
  transition: hidden 0s, opacity 0.5s linear;
  align-content: start;
  width: 100%;
  height: 40vh;

  &--visible {
    display: block;
    -webkit-animation: fadeIn 2s;
    animation: fadeIn 2s;

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
