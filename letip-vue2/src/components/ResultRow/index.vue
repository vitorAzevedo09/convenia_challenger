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
  font-size: $font-size-mobile;
  position: relative;
  top: -2.5vh;

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
      width: 100%;
    }
  }

  @include lg {
    font-size: ($font-size-desktop)-0.5;
  }
}
</style>
