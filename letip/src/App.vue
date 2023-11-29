<template>
  <div id="app" class="app">
    <div class="app__wrapper">
      <div class="app__title">
        <h1>Le Tip
          <link rel="icon" type="image/x-icon" href="../public/favicon.ico">
        </h1>
        <h6>Making tipping easier</h6>
      </div>
      <div class="app__content">
        TESTE
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import '../node_modules/typeface-roboto/index.css';

// Split-Complementary Palette Gold Coin Color: HEX #E1B530 / RGB (225, 181, 48)

$coin-color: #E1B530;
$eucalyptus-color: #30E1B5;
$purple-x11: #B530E1;

$main-brand-color: $coin-color;

body,
* {
  font-family: "Roboto";
  color: $main-brand-color;
  margin: 0px;
  padding: 0px;
}

.app {
  display: flex;
  justify-content: center;

  &__wrapper {
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  &__title {
    text-align: center;
  }

}
</style>
