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
        <div class="slider__wrapper__input__min">
          {{ min }}<span class="slider__wrapper__input__percentage" v-if="isPercentage">%</span>
        </div>
        <input type="range" data-cy="slider" :min="min" :max="max" @input="change($event.target.value)" :value="value"
          class="slider__wrapper__input__range" :id="`slider_${title}_value`">
        <div class="slider__wrapper__input__max">
          {{ max }}<span class="slider__wrapper__input__percentage" v-if="isPercentage">%</span>
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
  font-size: $font-size;

  &__wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    font-weight: 800;
    text-align: center;
    gap: 5px;


    &__title {
      text-align: left;

      &__value {
        color: $coin-color-contrast;
      }


    }

    &__input {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      &__min,
      &__max {
        width: 75px;
      }


      &__range {
        cursor: pointer;
        width: 100%;
        height: 2vh;
      }

      accent-color: $coin-color;
    }
  }

}
</style>
