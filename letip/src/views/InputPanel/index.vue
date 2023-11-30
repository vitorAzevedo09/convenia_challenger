<template>
  <div class="input_panel">
    <form action="">
      <label for="input__checkbox" class="toggle">
        <div class="toggle_text">EUR</div><input id="input__checkbox" type="checkbox" class="toggle-input" />
        <div class="toggle-control"></div>
        <div class="toggle_text">USD</div>
      </label>
      <label for="money_value" class="money">
        <span class="money__title">Value: $ <input id="money_value" type="number" class="money__input"></span>
      </label>
      <slider :title="'Gorjeta'" style="margin-top: 2em" :current-value="13" :min="10" :max="20" :is-percentage="true" />
      <slider :title="'Pessoas'" :current-value="10" :min="2" :max="16" />
    </form>
  </div>
</template>

<script>
import Slider from '../../components/Slider/index.vue'
export default {
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
@import '../../assets/css/breakpoints.scss';

form {
  width: 100%;
}

.input_panel {
  align-content: start;
  width: 100%;

  @include sm {
    width: 50%;
  }
}

.money {
  display: flex;
  margin: auto;
  justify-content: center;

  &__title {
    font-weight: 800;
    font-size: 1.2em;
    text-align: center;

  }

  &__input {
    width: $width*2;
    height: $height;
    border: 2px solid $color_checkbox_success;
    border-radius: 2em;

    &:after {
      border: 2px solid $color_checkbox_success;
    }
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
  }

  .toggle-control {
    transition: $transition;
    width: $width;
    height: $height;
    border: 2px solid $color_checkbox_success;
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
