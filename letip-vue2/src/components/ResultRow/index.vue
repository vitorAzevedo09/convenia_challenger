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

<script>
export default {
  props: {
    money: String,
    symbol: String,
    title: String,
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
@import "../../assets/css/breakpoints.scss";

.result {
  width: 100%;
  display: flex;
  margin-bottom: 1vh;

  &__wrapper {
    display: flex;
    width: 100%;
    margin-top: 0.5vh;
    flex-flow: column;
    font-size: $font-size-mobile;
    align-items: center;

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
      width: 100%;
    }
  }
}
</style>
