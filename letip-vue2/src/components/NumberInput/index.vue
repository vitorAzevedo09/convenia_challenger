<template>
  <label for="money_value" class="money">
    <span class="money__title">
      {{ text }}:
    </span>
    $<input :value="value" id="money_value" type="number" min="0" @change="change($event.target.value)"
      class="money__input">
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
    }
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

  font-weight: 800;
  font-size: $font-size-mobile;

  @include lg {
    font-size: $font-size-desktop;
  }

  &__title {
    text-align: end;
  }

  &__input {
    width: $width + 4;
    height: ($height)-1;
    font-weight: 800;
    font-size: ($font-size-mobile)-0.5;
    color: $coin-color-contrast;
    margin-left: 1vw;
    padding-right: 0.5vw;
    padding-left: 0.5vw;
    text-align: right;
    border: 2px solid $color-checkbox-success;
    border-radius: 2em;

    &:after {
      border: 2px solid $color-checkbox-success;
    }
  }

}
</style>
