<template>
  <label class="money">
    {{ text }}:
    {{ symbol }}
    <money class="money__input" data-cy="value" v-bind="money" v-model="price" />
  </label>
</template>

<script>
import { Money } from 'v-money'

export default {
  components: {
    Money
  },
  props: {
    text: {
      type: String,
      default: "TEXT"
    },
    value: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: "EUR"
    },
    symbol: {
      type: String,
      default: "€"
    }
  },
  data() {
    return {
      price: this.value,
      money: {
        precision: 2,
      }
    }
  },
  watch: {
    price() {
      if (this.price < 0) {
        this.price = 0
      }
      return this.$emit('change', this.price)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
@import "../../assets/css/breakpoints.scss";

.money {
  display: flex;
  font-size: $font-size;
  font-weight: 800;

  &__input {
    margin-left: 10px;
    font-weight: 800;
    font-size: 1rem;
    color: $coin-color-contrast;
    border: 2px solid $color-checkbox-success;
    border-radius: 25px;
    height: $height;

    &:after {
      border: 2px solid $color-checkbox-success;
    }

  }

}
</style>
