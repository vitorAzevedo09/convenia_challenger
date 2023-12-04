<template>
  <div class="result">
    <div class="result__wrapper">
      <div class="result__wrapper__title">
        {{ title }}
      </div>
      <div class="result__wrapper__money">
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
  money: string
}

const { title, money } = defineProps<Props>();

</script>

<style scoped lang="scss">
@import "../assets/css/variables.scss";
@import "../assets/css/breakpoints.scss";

.result {
  display: flex;
  margin-bottom: 1vh;
  font-size: ($font-size-mobile)-0.5;

  &__wrapper {
    display: flex;
    width: 100%;
    margin-top: 0.5vh;
    flex-flow: column;
    align-items: center;


    &__title {
      margin-bottom: 0.5em;
      font-weight: 800;
    }

    &__money {
      color: $coin-color-contrast;
      display: flex;
      flex-flow: row;
      justify-content: center;
    }
  }

  @include lg {
    font-size: ($font-size-desktop)-0.4;
  }
}
</style>
