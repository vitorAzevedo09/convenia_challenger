<template>
  <div class="slider_row">
    <div class="title">
      {{ title }}: {{ value }} <span v-if="boolPercentage">%</span>
    </div>
    <div>
      {{ range.min }}
      <input
        type="range"
        :min="range.min"
        :max="range.max"
        v-model="value"
        class="slider"
        id="myRange"
      />
      {{ range.max }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PanelEnterSlider",
  props: ["title", "range", "boolPercentage"],
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    value: function () {
      this.$emit("updateValue", this.value);
    },
  },
  computed: {
    ...mapState(["tipEntry"]),
  },
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
