<template>
  <div class="home">
    <div class="container">
      <div class="title">
        <img src="@/assets/logo.png" /> <span class="title_text">Le Tips</span>
      </div>
      <div class="card">
        <div class="col"><PanelEnter /></div>
        <div class="col"><PanelResult /></div>
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
};
</script>
<style lang="sass" scoped>
img
  width: 10%

.col
  width: 50%

.title
  padding-top: 10%

.title_text
  color: #29345A
  font-size: 3rem
  position: relative
  top: -20%

.container
  background: white
  position: relative
  top: 10vh
  left: 20vw
  width: 60vw
  height: 80vh
  box-shadow: 0 0 300px rgba(0, 0, 0, .3)
  border-radius: 15px

.card
  background: white
</style>
