<template>
  <div class="slider">
    <label :for="`slider_${title}_value`" class="slider__wrapper">
      <div class="slider__wrapper__title">
        {{ title }}:
        <span class="slider__wrapper__title__value">{{ value }}
          <span class="slider__title__percentage" v-if="isPercentage">%</span>
        </span>
      </div>
      <div class="slider__wrapper__input">
        <div>
          {{ min }}<span class="slider__title__percentage" v-if="isPercentage">%</span>
        </div>
        <input type="range" :min="min" :max="max" @change="change($event.target.value)" :value="value"
          class="slider__wrapper__input__range" :id="`slider_${title}_value`">
        <div>
          {{ max }}<span class="slider__title__percentage" v-if="isPercentage">%</span>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number,
    min: Number,
    max: Number,
    isPercentage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(value) {
      this.$emit('change', parseFloat(value))
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
@import '../../assets/css/breakpoints.scss';

.slider {
  display: flex;
  justify-content: center;
  width: 100%;

  &__wrapper {
    display: flex;
    width: 100%;
    margin-top: 1em;
    flex-flow: column;
    font-weight: 800;
    font-size: $font-size-mobile;
    text-align: center;


    &__title {
      margin-bottom: 0.5em;

      &__value {
        color: $coin-color-contrast;
      }
    }

    &__input {
      display: flex;
      flex-flow: row;
      justify-content: center;
      height: 2vh;

      &__range {
        width: 20vw;
        height: 2vh;

        @include lg {
          width: 8vw;
          height: 2vh;
        }

      }

      accent-color: $coin-color;
    }
  }
}
</style>
