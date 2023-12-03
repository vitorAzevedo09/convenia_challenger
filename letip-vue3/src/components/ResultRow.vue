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
  justify-content: center;
  margin-bottom: 1vh;

  &__wrapper {
    display: flex;
    margin-top: 0.5vh;
    flex-flow: column;
    font-size: $font-size-mobile;
    align-items: center;
    justify-content: center;

    @include lg {
      font-size: $font-size-desktop;
    }

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

}
</style>
