<template>
  <div id="app" class="app">
    <div class="app__wrapper">
      <div class="app__header">
        <h1 class="app__title">Le Tip
          <font-awesome-icon icon="fa-solid fa-coins" bounce />
        </h1>
        <h3 class="app__subtitle">Because tip should be easier</h3>
      </div>

      <div class="app__content--mobile" v-if="isMobile">
        <transition name="slide-fade">
          <input-panel v-if="view" class="panel" />
          <result-panel v-else class="panel" />
        </transition>
      </div>
      <div class="app__content--desktop" v-else>
        <input-panel class="panel" />
        <result-panel class="panel" />
      </div>

      <button class="button" @click="() => view = !view">View {{ view ? 'Results' : 'Calculator'
      }}</button>
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
    windowWidth: 0
  }),
  created() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.windowWidth = window.innerWidth
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992 ? true : false
    }
  }
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
    height: 100%;
    justify-content: center;
    align-items: center;

    &--mobile {

      display: inherit;

      @include lg {
        display: none;
      }
    }

    &--desktop {

      display: none;
      width: 100%;

      @include lg {
        display: inherit;
      }
    }
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
  background-color: $eucalyptus-color;
  color: white;
  padding: 0.4em;
  border: 2px solid $eucalyptus-color;
  border-radius: 1em;
  text-align: center;
  display: inline-block;
  font-size: 1em;
  margin: auto;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: $eucalyptus-color;
    color: white;
  }

  @include lg {
    display: none
  }
}


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .4s ease;
}

.slide-fade-leave-active {
  transition: all .2s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
