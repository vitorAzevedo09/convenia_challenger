<template>
  <div id="app" class="app">
    <div class="app__wrapper">
      <div class="app__header">
        <h1 class="app__title">Le Tip
          <font-awesome-icon icon="fa-solid fa-coins" bounce />
        </h1>
        <h3 class="app__subtitle">Because tip should be easier</h3>
      </div>
      <div class="app__content">
        <input-panel />
        <result-panel />
      </div>
    </div>
  </div>
</template>

<script>
import InputPanel from "./views/InputPanel"
import ResultPanel from "./views/ResultPanel"
export default {
  name: 'App',
  components: {
    InputPanel,
    ResultPanel
  }
}
</script>

<style lang="scss">
@import '../node_modules/typeface-roboto/index.css';
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
@import './assets/css/variables.scss';


body {
  background: url("./assets/imgs/coin-rain-slower.gif") 0 0;
  background-color: $purple-x11;
  background-size: 20%;
  overflow: hidden;
  font-family: "Roboto";
  color: $main-brand-color;
  width: 100vw;
  height: 100vh;
}

* {
  margin: 0px;
  padding: 0px;
}

.app {
  box-shadow: 0px 4px 4px 0px #00000040, inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    background-color: $white;
    padding: 2%;
    display: flex;
    align-items: center;
    height: 70%;
    width: 50%;
    border-radius: 5%;
    align-items: center;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  &__header {
    text-align: center;
    font-family: 'Cedarville Cursive', cursive;
  }

  &__content {
    display: flex;
    height: 100%;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  }

}

.title__icon {
  color: #e1b530;
}
</style>
