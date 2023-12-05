<template>
  <label for="money_value" class="money">
    <span>
      {{ text }}:
      {{ symbol }}
      <input data-cy="test" :value="value" id="money_value" type="text" min="0" @input="change($event.target.value)"
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
  methods: {
    change(value) {
      if (value === '') {
        this.$emit('change', 0)
      } else {
        this.$emit('change', parseFloat(value))
      }
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
    width: $width + 5;
    height: $height+1;
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
