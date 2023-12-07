<template>
  <div class="input-panel" :class="{ 'input-panel--visible': !hide }">
    <form id="form" name="form" action="" class="input-panel__form">
      <toggle-input :left-text="'€ EUR'" :right-text="'$ USD'" @change="setCurrency($event)" />
      <number-input :text="'Valor'" :value="bill" :currency="'EUR'" :symbol="boolToogle ? '$' : '€'"
        @change="changeBill($event)" />
      <slider :title="'Gorjeta'" :value="tip_percentage" :min="10" :max="20" :is-percentage="true"
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
      bill: 'bill/getBill',
      tip_percentage: 'bill/getTipPercentage',
      quantity_peaplo: 'bill/getQuantityPeaplo',
    })
  },
  methods: {
    ...mapMutations({
      changeBill: 'bill/SET_BILL',
      changePercentage: 'bill/SET_TIP_PERCENTAGE',
      changePeaploQuantity: 'bill/SET_PEAPLO_QUANTITY',
      changeCurrency: 'bill/SET_CURRENCY'
    }),
    setCurrency(value) {
      this.boolToogle = value
      this.changeCurrency(this.boolToogle ? "USD" : "EUR")
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

  &--visible {
    display: flex;
    -webkit-animation: fadeIn 0.3s;
    animation: fadeIn 0.3s;

    @include lg {
      display: inherit;
    }
  }

  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    max-width: 300px;

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
