<template>
  <label for="input-checkbox" class="toggle">
    <div class="toggle__text">{{ leftText.text }}</div>
    <input id="input-checkbox" type="checkbox" class="toggle__checkbox" @change="change($event)" />
    <div class="toggle__control"></div>
    <div class="toggle__text">{{ rightText.text }}</div>
  </label>
</template>

<script setup lang="ts">
interface Props {
  leftText: {
    text: string,
    value: string
  },
  rightText: {
    text: string,
    value: string
  }

const { leftText, rightText } = defineProps<Props>();

const emit = defineEmits<{
  (event: 'update:value', value: string): string,
}
>()

const change = (e: Event): void => {
  const value = (e.target as HTMLInputElement).checked
  emit('update:value', value ? rightText.value : leftText.value)
}

</script>

<style scoped lang="scss">
@import '../assets/css/variables.scss';

.toggle {
  display: flex;

  &__text {
    font-weight: 800;
    font-size: $font-size-mobile;
    text-align: center;
    margin: auto;
  }

  &__checkbox {
    display: none;

    // todo: a more SCSS way to handle this
    &:checked+.toggle__control {
      border-color: $color-checkbox-success;
      background-color: rgba(black, 0.06);

      &:after {
        left: calc($width / 2);
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
      width: calc($width / 2);
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
