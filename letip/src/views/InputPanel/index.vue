<template>
  <div class="input__panel" :class="{ 'input__panel--visible': !hide }">
    <form action="" class="input-panel__form">
      <label for="input__checkbox" class="input__panel__toggle">
        <div class="input__panel__toggle__text">€ EUR</div>
        <input id="toogle__input" type="checkbox" class="input__panel__toggle__checkbox" />
        <div class="input__panel__toggle__control"></div>
        <div class="input__panel__toggle__text">$ USD</div>
      </label>
      <label for="money_value" class="input__panel__money">
        <span class="input__panel__money__title">
          Value:
        </span>
        $<input id="money_value" type="number" class="input__panel__money__input">
      </label>
      <slider :title="'Gorjeta'" style="margin-top: 2em" :current-value="13" :min="10" :max="20" :is-percentage="true"
        class="input-panel__slider" />
      <slider :title="'Pessoas'" :current-value="10" :min="2" :max="16" class="input-panel__slider" />
    </form>
  </div>
</template>

<script>
import Slider from '../../components/Slider/index.vue'
export default {
  props: {
    hide: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
@import '../../assets/css/breakpoints.scss';


.input__panel {
  display: none;
  position: relative;
  opacity: 1;
  transition: hidden 0s, opacity 0.5s linear;
  align-content: start;
  width: 100%;
  height: 40vh;


  &--visible {
    display: block;
    -webkit-animation: fadeIn 2s;
    animation: fadeIn 2s;

    @include lg {
      display: inherit;
    }
  }

  &__form {
    width: 100%;
  }

  &__toggle {
    display: flex;
    margin: 1.5em;
    padding-right: 15%;
    padding-left: 15%;

    &__text {
      font-weight: 800;
      font-size: $font-size;
      text-align: center;
      margin: auto;
    }

    &__checkbox {
      display: none;

      &:checked+.toggle__control {
        border-color: $color-checkbox-success;
        background-color: $color-checkbox-success;

        &:after {
          left: $width / 2;
        }
      }
    }

    &__control {
      transition: $transition;
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
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(black, 0.4), 0 3px 2px rgba(black, 0.4);
        position: absolute;
        top: 0;
        left: 0;
      }

    }



  }


  &__money {
    display: flex;
    margin: auto;
    justify-content: center;

    font-weight: 800;
    font-size: $font-size;

    &__title {
      text-align: center;
      margin-right: 4vw;
    }

    &__input {
      width: $width + 2;
      height: $height;
      margin-left: 1vw;
      padding-right: 1em;
      padding-left: 1em;
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
