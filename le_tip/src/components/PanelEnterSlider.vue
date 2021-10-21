<template>
  <div class="slider_row">
    <div class="title">{{ title }}: 13%</div>
    <div>
      10
      <input
        type="range"
        :min="range.min"
        :max="range.max"
        value="50"
        class="slider"
        id="myRange"
      />
      20
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelEnterSlider",
  props: ["title", "range"],
};
</script>

<style scoped lang="sass">
input
  margin-bottom: -1%

.slider_row
  width: 90%
  margin-left: 5%

.title
  text-align: left
  padding-left: 20%

.slider
  height: 10%
  width: 40%
  border-radius: 25px
  background-color: #FF3FA4
  background: #A200FF
  opacity: 0.7
</style>
