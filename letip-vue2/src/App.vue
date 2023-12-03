<template>
  <div id="app" class="app">
    <div class="app__wrapper">
      <div class="app__header">
        <h1 class="app__title">
          Le Tip
          <font-awesome-icon class="app__icon" icon="fa-solid fa-coins" bounce />
        </h1>
        <h2 class="app__subtitle">Because tip should be easier</h2>
      </div>
      <div class="app__content">
        <input-panel class="panel" :hide="!view" />
        <result-panel class="panel" :hide="view" />
      </div>

      <button class="app__button" @click="() => view = !view">
        <font-awesome-icon icon="fa-solid fa-arrow-up"
          :class="view ? 'app__button__arrow-right' : 'app__button__arrow-left'" />
      </button>
      <footer class="app__footer">
        <img src="./assets/imgs/coin-stacked.gif" class="app__footer__image" />
      </footer>
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
  },
  data: () => ({
    view: true,
  }),
}
</script>

<style lang="scss">
@import '../node_modules/typeface-roboto/index.css';
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
@import './assets/css/variables.scss';
@import './assets/css/breakpoints.scss';


body {
  background: url("./assets/imgs/coin-rain-slower.gif") 0 0;
  background-color: $purple-x11;
  background-size: 20%;
  overflow: hidden;
  font-family: "Roboto";
  color: $main-brand-color;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
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
    width: 80%;
    border-radius: 5%;
    align-items: center;
    flex-flow: column;
    justify-content: center;

    @include lg {
      width: 40%;
    }
  }

  &__header {
    text-align: center;
    font-family: 'Cedarville Cursive', cursive;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &__button {
    display: inline-flex;
    position: relative;
    width: 40px;
    height: 40px;
    background: $purple-x11;
    border: 1px solid $coin-color;
    border-radius: 50%;
    margin-left: 60%;
    color: white;
    text-align: center;
    justify-content: center;
    align-content: center;
    font-size: $font-size-mobile;
    z-index: 100;
    box-shadow: 0 10px 25px -5px rgba(44, 179, 240, 0.6);
    cursor: pointer;


    &__arrow-right,
    &__arrow-left {
      margin: auto;
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transition: transform 400ms ease !important;
    }

    &__arrow-left {
      transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
    }

    @include lg {
      display: none;
    }
  }

  &__footer {

    display: flex;
    flex-flow: column;

    &__image {
      height: 5vh;

      @include lg {
        height: 6vh;
      }
    }
  }
}

@include lg {
  display: none;
}
</style>
