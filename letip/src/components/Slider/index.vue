<template>
  <div class="slider">
    <label :for="`slider_${title}_value`" class="slider__wrapper">
      <div class="slider__wrapper__title">
        {{ title }}:
        {{ currentValue }}
        <span class="slider__title__percentage" v-if="isPercentage">%</span>
      </div>
      <div class="slider__wrapper__input">
        <div>
          {{ min }}<span class="slider__title__percentage" v-if="isPercentage">%</span>
        </div>
        <input type="range" :min="min" :max="max" :value="currentValue" class="slider__range"
          :id="`slider_${title}_value`">
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
    currentValue: Number,
    min: Number,
    max: Number,
    isPercentage: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

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
    font-size: 1.2em;
    text-align: center;


    &__title {
      margin-bottom: 0.5em;
    }

    &__input {
      display: flex;
      flex-flow: row;
      justify-content: center;
      width: 100%;
    }
  }
}

input[type="range"] {
  accent-color: $eucalyptus-color;
}
</style>
