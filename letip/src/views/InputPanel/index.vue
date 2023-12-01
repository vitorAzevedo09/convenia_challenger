<template>
  <div class="input-panel" :class="{ 'input-panel--visible': !hide }">
    <form action="" class="input-panel__form">
      <toggle-input :left-text="'€ EUR'" :right-text="'$ USD'" :value="bill" @change="changeCurrency($event)" />
      <number-input :text="'Valor'" :value="bill" @change="changeBill($event)" />
      <slider :title="'Gorjeta'" style="margin-top: 2vh" :value="tip_percentage" :min="10" :max="20" :is-percentage="true"
        class="input-panel__slider" @change="changePercentage($event)" />
      <slider :title="'Pessoas'" :value="quantity_peaplo" :min="2" :max="16" class="input-panel__slider"
        @change="changePeaploQuantity($event)" />
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
  computed: {
    bill() {
      return this.$store.state.tip.bill
    },
    tip_percentage() {
      return this.$store.state.tip.tip_percentage
    },
    quantity_peaplo() {
      return this.$store.state.tip.quantity_peaplo
    }
  },
  methods: {
    changeBill(value) {
      this.$store.commit('tip/changeBill', value)
    },
    changeCurrency(value) {
      let currency = value ? 'USD' : 'EUR'
      this.$store.commit('tip/changeCurrency', currency)
    },
    changePercentage(value) {
      this.$store.commit('tip/changeTipPercentage', value)
    },
    changePeaploQuantity(value) {
      this.$store.commit('tip/changeQuantityPeaplo', value)
    },
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
  transition: hidden 0s, opacity 0.3s linear;
  align-content: start;
  width: 100%;
  height: 40vh;

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
