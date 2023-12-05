<template>
  <div class="input-panel" :class="{ 'input-panel--visible': !hide }">
    <form action="" class="input-panel__form">
      <toggle-input data-cy="checkbox" :left-text="'€ EUR'" :right-text="'$ USD'" @change="changeCurrency($event)" />
      <number-input data-cy="input" :text="'Valor'" :value="bill" :currency="'EUR'" :symbol="boolToogle ? '$' : '€'"
        @change="changeBill($event)" />
      <slider data-cy="slider-percentage" :title="'Gorjeta'" style="margin-top: 2vh" :value="tip_percentage" :min="10"
        :max="20" :is-percentage="true" class="input-panel__slider" @change="changePercentage($event)" />
      <slider data-cy="slider-quantity-peaplo" :title="'Pessoas'" :value="quantity_peaplo" :min="2" :max="16"
        class="input-panel__slider" @change="changePeaploQuantity($event)" />
    </form>
  </div>
</template>

<script>
import Slider from '../../components/SliderInput/index.vue'
import NumberInput from '../../components/NumberInput/index.vue'
import ToggleInput from '../../components/ToggleInput/index.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    hide: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      boolToogle: true
    }
  },
  components: {
    Slider,
    NumberInput,
    ToggleInput
  },
  computed: {
    ...mapGetters({
      bill: 'tip/getBill',
      tip_percentage: 'tip/getTipPercentage',
      quantity_peaplo: 'tip/getQuantityPeaplo',
    })
  },
  methods: {
    ...mapMutations({
      changeBill: 'tip/SET_BILL',
      changePercentage: 'tip/SET_TIP_PERCENTAGE',
      changePeaploQuantity: 'tip/SET_PEAPLO_QUANTITY',
    }),
    changeCurrency(value) {
      this.boolToogle = value
      let currency = value ? "USD" : "EUR"
      this.$store.commit('tip/SET_CURRENCY', currency)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
@import '../../assets/css/breakpoints.scss';

.input-panel {
  color: $purple-x11;
  display: none;
  position: relative;
  opacity: 1;
  transition: hidden 0s, opacity $transition;
  align-content: start;
  height: 60vh;

  &--visible {
    display: inherit;
    -webkit-animation: fadeIn 0.3s;
    animation: fadeIn 0.3s;

    @include lg {
      width: 50%;
      display: inherit;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    &:nth-child(n) {
      width: 100%;
    }
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
