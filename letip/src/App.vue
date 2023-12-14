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
    <Toasts :toasts="toasts" />
  </main>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import InputPanel from "./views/InputPanel/index.vue"
import ResultPanel from "./views/ResultPanel/index.vue"
import Toasts from '@/components/Toasts.vue'
import { useToastStore } from './stores/toasts';

const view: Ref<boolean> = ref<boolean>(true)
const { toasts } = useToastStore()

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
@import '@/assets/css/breakpoints.scss';



.main {
  box-shadow: 0px 4px 4px 0px #00000040, inset 0 0 0 5000px rgba(0, 0, 0, 0.3);
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: center;

  &__wrapper {
    background-color: $white;
    display: flex;
    align-items: baseline;
    min-width: 360px;
    border-radius: 25px;
    align-items: center;
    flex-flow: column;
    justify-content: space-between;
    height: 600px;

    @include lg {
      min-width: 800px;
      height: 700px;
    }
  }

  &__header {
    text-align: center;
    font-family: 'Cedarville Cursive', cursive;
    margin: 0px;
    padding: 0px;

    g &__subtitle {
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
    bottom: 25px;
    left: 100px;
    width: 50px;
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
    flex-flow: column;
    display: none;

    @include lg {
      display: flex;
    }

    &__image {
      height: 5rem;

      @include lg {
        height: 6rem;
      }
    }
  }
}
</style>
