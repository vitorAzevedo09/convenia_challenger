<template>
  <div>
    <form action="">
      <label for="input__checkbox" class="toggle">
        <div class="toggle_text">EUR</div><input id="input__checkbox" type="checkbox" class="toggle-input" />
        <div class="toggle-control"></div>
        <div class="toggle_text">USD</div>
      </label>
      <label for="input_value" class="money">
        <span class="money__title">Value: $ <input type="number" class="money__input"></span>
      </label>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.money {
  display: flex;

  &__title {
    font-weight: 800;
    font-size: 1.2em;
    text-align: center;
    margin: auto;
    padding-right: 1em;
    padding-left: 1em;
  }

  &__input {
    width: $width*2;
    height: $height+0.3;
    border-radius: 2em;
  }

}

.toggle {
  display: flex;
  margin: 1.5em;

  .toggle_text {
    font-weight: 800;
    font-size: 1.2em;
    text-align: center;
    margin: auto;
    padding-right: 1em;
    padding-left: 1em;
  }

  .toggle-control {
    transition: $transition;
    width: $width;
    height: $height;
    border: 2px solid $color_checkbox_default;
    border-radius: $height;
    background-color: rgba(black, .06);
    position: relative;

    &:after {
      transition: $transition;
      content: "";
      width: $width/2;
      height: $height;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(black, .4), 0 3px 2px rgba(black, .4);
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  input {
    display: none;

    &:checked+.toggle-control {
      border-color: $color_checkbox_success;
      background-color: $color_checkbox_success;

      &:after {
        left: $width/2;
      }
    }
  }

}
</style>
