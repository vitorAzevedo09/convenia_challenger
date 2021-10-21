<template>
  <div class="enter_panel">
    <div class="row">
      <PanelEnterSwitch />
    </div>
    <div class="row">
      <PanelEnterInput />
    </div>
    <div class="row">
      <PanelEnterSlider :title="'Gorjeta'" :range="{ min: 10, max: 20 }" />
    </div>
    <div class="row">
      <PanelEnterSlider :title="'Pessoas'" :range="{ min: 2, max: 16 }" />
    </div>
  </div>
</template>

<script>
import PanelEnterSwitch from "@/components/PanelEnterSwitch.vue";
import PanelEnterInput from "@/components/PanelEnterInput.vue";
import PanelEnterSlider from "@/components/PanelEnterSlider.vue";
export default {
  name: "PanelEnter",
  components: {
    PanelEnterSwitch,
    PanelEnterInput,
    PanelEnterSlider,
  },
};
</script>

<style scoped lang="sass">
.row
  margin-top: 15%

.enter_panel
  height: 100%
</style>
