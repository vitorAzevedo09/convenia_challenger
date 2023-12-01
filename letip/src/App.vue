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
        <input-panel class="panel" :show="!view" />
        <result-panel class="panel" :show="view" />
      </div>

      <button class="button" @click="() => view = !view">
        <font-awesome-icon icon="fa-solid fa-arrow-up" :class="view ? 'arrow-right' : 'arrow-left'" />
      </button>
      <footer class=" footer">
        <img src="./assets/imgs/coin-stacked.gif" class="footer__image" />
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
    width: 80%;
    border-radius: 5%;
    align-items: center;
    flex-flow: column;
    align-items: center;
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

}

.title__icon {
  color: #e1b530;
}

.footer {
  display: flex;
  flex-flow: column;

  &__image {
    height: 6vh;

    @include lg {
      height: 6em;
    }
  }
}

.button {
  display: inline-flex;
  position: relative;
  width: 40px;
  height: 40px;
  background: $eucalyptus-color;
  border: 1px solid $eucalyptus-color;
  border-radius: 50%;
  margin-left: 60%;
  color: white;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding-top: 0.3em;
  font-size: 1.5em;
  z-index: 100;
  box-shadow: 0 10px 25px -5px rgba(44, 179, 240, 0.6);
  cursor: pointer;

  @include lg {
    display: none;
  }
}

@include lg {
  display: none
}

.arrow-right {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transition: transform 400ms ease !important;
}

.arrow-left {
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transition: transform 400ms ease !important;
}
</style>
