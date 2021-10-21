<template>
  <div class="home">
    <div class="container" :style="display ? '' : 'width: 90vw; left: 5%'">
      <div class="title">
        <img src="@/assets/logo.png" />
        <strong class="title_text">Le Tip</strong>
      </div>
      <div class="card" v-if="display">
        <div class="enter_panel"><PanelEnter /></div>
        <div class="result_panel"><PanelResult /></div>
      </div>
      <div v-else>
        <transition name="slide-right">
          <div v-show="panel" class="enter_panel">
            <PanelEnter />
          </div>
        </transition>

        <transition name="slide-left">
          <div v-show="!panel" class="result_panel" style="margin-left: 30%">
            <PanelResult />
          </div>
        </transition>
      </div>
    </div>
    <footer>
      <button v-show="!display" @click="panel = !panel">
        <transition name="slide-right">
          <img v-show="panel" src="@/assets/arrow-right.svg" />
        </transition>
        <transition name="slide-left">
          <img v-show="!panel" src="@/assets/arrow-left.svg" />
        </transition>
      </button>
    </footer>
  </div>
</template>

<script>
import PanelEnter from "@/views/PanelEnter.vue";
import PanelResult from "@/views/PanelResult.vue";
export default {
  name: "Home",
  components: {
    PanelEnter,
    PanelResult,
  },
  data() {
    return {
      panel: true,
    };
  },
  computed: {
    display: function () {
      return window.innerWidth > 760 ? true : false;
    },
  },
};
</script>
<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap')

$tablet-width: 768px
$desktop-width: 1024px

button
  background: #fafafa
  float: right
  position: absolute
  top: 65%
  right: 50px
  width: 40px
  height: 40px
  border-radius: 100px
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)
  width: 56px
  height: 56px
  border: none
  cursor: pointer
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  -moz-appearance: none
  -webkit-appearance: none
  overflow: hidden
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)

  img
    color: white
    width: 40px

.col
  width: 50%
  height: 100%

.title
  padding-top: 2%
  font-family: 'Festive'

.title_text
  color: #A200FF
  font-size: 3rem

.container
  background: white
  background-opacity: 0.1
  background-image: url("https://thumbs.gfycat.com/AdoredEnragedAmbushbug-small.gif")
  background-repeat: no-repeat
  background-size: 250px
  background-position: center bottom
  position: relative
  top: 5vh
  left: 25vw
  width: 50vw
  height: 90vh
  box-shadow: 0 0 300px rgba(0, 0, 0, .3)
  border-radius: 15px

.card
  background: transparent
  display: grid
  grid-template-areas: 'enter_panel result_panel'

img
  width: 3rem
  position: relative
  top: 16%

.slide-right-enter-active,
  transition: 500ms

.slide-right-enter-to
  position: relative
  left: 0

.slide-right-enter,
  left: -100vw
  position: absolute

.slide-left-enter-active,
  transition: 500ms

.slide-left-enter-to
  position: relative
  left: 0

.slide-left-enter,
  left: +100vw
  position: absolute
</style>
