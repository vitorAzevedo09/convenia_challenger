<template>
  <label for="input-checkbox" class="toggle">
    <div class="toggle__text">{{ leftText }}</div>
    <input id="input-checkbox" type="checkbox" class="toggle__checkbox" @change="change($event.target.checked)" />
    <div class="toggle__control"></div>
    <div class="toggle__text">{{ rightText }}</div>
  </label>
</template>

<script>
export default {
  props: {
    leftText: {
      type: String,
      default: 'TEXT LEFT'
    },
    rightText: {
      type: String,
      default: 'TEXT RIGHT'
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(checked) {
      this.$emit('change', checked)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
@import '../../assets/css/breakpoints.scss';

.toggle {
  display: flex;
  justify-content: center;

  &__text {
    font-weight: 800;
    font-size: $font-size-mobile;
    text-align: center;
  }

  &__checkbox {
    display: none;

    // todo: a more SCSS way to handle this
    &:checked+.toggle__control {
      border-color: $color-checkbox-success;
      background-color: rgba(black, 0.06);

      &:after {
        left: $width / 2;
      }
    }
  }

  &__control {
    transition: $transition;
    margin: auto;
    margin-inline: 1vw;
    width: $width;
    height: $height;
    border: 2px solid $color-checkbox-success;
    border-radius: $height;
    background-color: rgba(black, 0.06);
    position: relative;

    &:after {
      transition: $transition;
      content: "";
      width: $width / 2;
      height: $height;
      background-color: $color-checkbox-success;
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(black, 0.4), 0 3px 2px rgba(black, 0.4);
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
