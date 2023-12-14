<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="main__header">
        <h1 class="main__title">
          Le Tip
          <font-awesome-icon class="app__icon" icon="fa-solid fa-coins" bounce />
        </h1>
        <h2 class="main__subtitle">Because tip should be easier</h2>
      </div>
      <div class="main__content">
        <input-panel class="main__content__panel" :hide="!view" />
        <result-panel class="main__content__panel" :hide="view" />
      </div>

      <button class="main__button" @click="() => view = !view">
        <font-awesome-icon icon="fa-solid fa-arrow-up"
          :class="view ? 'main__button__arrow-right' : 'main__button__arrow-left'" />
      </button>
      <footer class="app__footer">
        <img src="./assets/imgs/coin-stacked.gif" class="main__footer__image" />
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import InputPanel from "./views/InputPanel/index.vue"
import ResultPanel from "./views/ResultPanel/index.vue"

const view: Ref<boolean> = ref<boolean>(true)

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
@import './assets/css/variables.scss';
@import './assets/css/breakpoints.scss';



.main {
  box-shadow: 0px 4px 4px 0px #00000040, inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  height: 100vh;
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
    justify-content: space-between;
    gap: 4vw;
    align-items: center;
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
</style>
