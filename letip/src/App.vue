<template>
  <div id="app" class="app">
    <div class="app__wrapper">
      <div class="app__header">
        <h1 class="app__header__title">
          Le Tip
          <font-awesome-icon class="app__header__title__icon" icon="fa-solid fa-coins" bounce />
        </h1>
        <h2 class="app__header__subtitle">Because tip should be easier</h2>
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
@import './assets/css/variables.scss';
@import './assets/css/breakpoints.scss';



.app {
  box-shadow: 0px 4px 4px 0px #00000040, inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    background-color: $white;
    display: flex;
    align-items: baseline;
    width: 400px;
    border-radius: 25px;
    align-items: center;
    flex-flow: column;
    justify-content: space-between;
    height: 600px;

    @include lg {
      width: 800px;
      height: 700px;
    }
  }

  &__header {
    text-align: center;
    font-family: 'Cedarville Cursive', cursive;
    margin: 0px;
    padding: 0px;

    &__title {
      height: 10px;
    }

    &__subtitle {
      display: none;

      @include lg {
        display: inherit;
      }
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    height: 100%;

    &__panel {
      width: 50%;
    }

    @include lg {
      width: 100%;
    }
  }

  &__button {
    position: relative;
    bottom: 0px;
    left: 100px;
    width: 55px;
    height: 80px;
    background: $purple-x11;
    border: 1px solid $coin-color;
    border-radius: 50px;
    color: white;
    text-align: center;
    justify-content: center;
    align-content: center;
    font-size: 40px;
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
      height: 5rem;

      @include lg {
        height: 6rem;
      }
    }
  }
}
</style>
