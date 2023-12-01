<template>
  <label for="money_value" class="money">
    <span class="money__title">
      {{ text }}:
    </span>
    $<input :value="value" id="money_value" type="number" @change="change($event.target.value)" class="money__input">
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
  margin: auto;
  justify-content: center;
  padding-left: 1vw;
  padding-right: 1vw;

  font-weight: 800;
  font-size: $font-size;

  &__title {
    text-align: center;
  }

  &__input {
    width: $width + 2;
    height: $height;
    font-weight: 800;
    font-size: ($font-size)-0.5;
    color: $eucalyptus-color;
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

@include lg {
  width: 90%;
  display: flex;
  flex-flow: column;
}
</style>
