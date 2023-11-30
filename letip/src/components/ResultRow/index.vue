<template>
  <div class="result">
    <div class="result__wrapper">
      <div class="result__wrapper__title">
        {{ title }}
      </div>
      <div class="result__wrapper__money">
        <div>
          <span class="result__wrapper__money__symbol">{{ symbol }}</span> {{ money }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    money: Number,
    symbol: String,
    title: String,
  }
}
</script>

<style lang="scss" scoped>
.result {
  width: 100%;
  display: flex;
  margin-bottom: 1em;

  &__wrapper {
    display: flex;
    width: 100%;
    margin-top: 0.5em;
    flex-flow: column;
    font-size: 1.2em;
    align-items: center;


    &__title {
      margin-bottom: 0.5em;
    }

    &__money{
      display: flex;
      font-weight: 800;
      flex-flow: row;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
