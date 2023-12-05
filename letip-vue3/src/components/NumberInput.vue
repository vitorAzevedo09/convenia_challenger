<template>
  <label for="money_value" class="money">
    <span class="money__title">
      {{ text }}: {{ symbol }}
      <input data-cy="value" :value="value" id="money_value" type="number" min="0" @input="updateValue($event)"
        class="money__input">
    </span>
  </label>
</template>

<script setup lang="ts">

interface Props {
  text: string,
  symbol: string,
  value: number
}

const { text, value } = defineProps<Props>();

const emits = defineEmits<{
  (event: 'update:value', value: number): void
}>()

const updateValue = (e: Event): void => {
  const value = (e.target as HTMLInputElement).value
  emits('update:value', parseFloat(value))
}



</script>

<style scoped lang="scss">
@import "../assets/css/variables.scss";
@import "../assets/css/breakpoints.scss";

.money {
  display: flex;
  justify-content: center;
  margin-top: 3vh;
  font-size: $font-size-mobile;
  font-weight: 800;


  &__input {
    width: $width + 4;
    height: $height+1;
    font-weight: 800;
    font-size: $font-size-mobile;
    color: $coin-color-contrast;
    padding-left: 1vw;
    text-align: left;
    border: 2px solid $color-checkbox-success;
    border-radius: 2em;

    @include lg {
      font-size: $font-size-desktop;
      width: $width+5;
      height: $height;
    }

    &:after {
      border: 2px solid $color-checkbox-success;
    }

  }

  @include lg {
    font-size: $font-size-desktop;
  }

}
</style>
