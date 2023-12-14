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
  if (value == "") {
    emits('update:value', 0.0)
  } else {
    emits('update:value', parseFloat(value))
  }
}



</script>

<style scoped lang="scss">
@import "../assets/css/variables.scss";
@import "../assets/css/breakpoints.scss";

.money {
  display: flex;
  font-size: $font-size;
  font-weight: 800;
  justify-content: center;
  align-items: center;

  &__input {
    margin-left: 10px;
    max-width: 60px;
    font-weight: 800;
    font-size: 1rem;
    color: $coin-color-contrast;
    border: 2px solid $color-checkbox-success;
    border-radius: 25px;
    height: $height;

    &:after {
      border: 2px solid $color-checkbox-success;
    }

  }

}
</style>
