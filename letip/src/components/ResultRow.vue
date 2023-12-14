<template>
  <div class="result">
    <div class="result__wrapper">
      <div class="result__wrapper__title">
        {{ title }}
      </div>
      <div data-cy="result" class="result__wrapper__money">
        <div>
          {{ money }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  money: string,
}

const { title, money } = defineProps<Props>();

</script>

<style scoped lang="scss">
@import "../assets/css/variables.scss";
@import "../assets/css/breakpoints.scss";

.result {
  display: flex;
  font-size: $font-size;

  &__wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    &__title {
      font-weight: 800;
    }

    &__money {
      color: $coin-color-contrast;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }
  }

}
</style>
