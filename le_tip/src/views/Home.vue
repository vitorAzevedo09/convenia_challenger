<template>
  <div class="home">
    <div class="container" :style="display ? '' : 'width: 90vw; left: 5%'">
      <div class="title">
        <img src="@/assets/logo.png" />
        <strong class="title_text">Le Tips</strong>
      </div>
      <div class="card" v-if="display">
        <div class="enter_panel"><PanelEnter /></div>
        <div class="result_panel"><PanelResult /></div>
      </div>
      <div v-else>
        <div v-if="true" class="enter_panel">
          <PanelEnter />
        </div>
        <div v-else class="result_panel"><PanelResult /></div>
      </div>
    </div>
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
  computed: {
    display: function () {
      return window.innerWidth > 760 ? true : false;
    },
  },
};
</script>
<style scoped lang="sass" >
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap')

$tablet-width: 768px
$desktop-width: 1024px

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
</style>
