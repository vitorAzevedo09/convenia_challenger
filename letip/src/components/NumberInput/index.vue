<template>
  <label class="money">
    <span>
      {{ text }}:
      {{ symbol }}
      <money class="money__input" data-cy="price" v-bind="money" v-model="price" />
    </span>
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
  justify-content: center;
  margin-top: 3vh;
  font-size: $font-size-mobile;
  font-weight: 800;


  &__input {
    width: $width + 15;
    height: $height+1;
    font-weight: 800;
    font-size: $font-size-mobile;
    color: $coin-color-contrast;
    text-align: left;
    border: 2px solid $color-checkbox-success;
    border-radius: 2em;

    @include lg {
      font-size: ($font-size-desktop)-1;
      width: $width + 8;
      height: ($height);
    }

    &:after {
      border: 2px solid $color-checkbox-success;
    }

  }

  @include lg {
    font-size: $font-size-desktop;
  }

}
</style>
