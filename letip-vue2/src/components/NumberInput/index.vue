<template>
  <label for="money_value" class="money">
    <span>
      {{ text }}:
      {{ symbol }}
      <input :value="mask_money" id="money_value" type="number" min="0" @change="change($event.target.value)"
        class="money__input">
    </span>
  </label>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "TEXT"
    },
    value: {
      type: Number,
      default: 0
    },
    symbol: {
      type: String,
      default: ""
    }
  },
  computed: {
    mask_money() {
      return this.value
    },
  },
  methods: {
    change(value) {
      this.$emit('change', parseFloat(value))
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

  &__title {
    margin: auto;
  }

  &__input {
    width: $width + 10;
    height: $height+1;
    margin: auto;
    font-weight: 800;
    font-size: $font-size-mobile;
    color: $coin-color-contrast;
    text-align: left;
    border: 2px solid $color-checkbox-success;
    border-radius: 2em;

    @include lg {
      font-size: $font-size-desktop;
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
