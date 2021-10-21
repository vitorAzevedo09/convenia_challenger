<template>
  <div class="enter_panel">
    <div class="row">
      <PanelEnterSwitch />
    </div>
    <div class="row">
      <PanelEnterInput />
    </div>
    <div class="row">
      <PanelEnterSlider
        @updateValue="tipEntry.tipPercentage = $event"
        :title="'Gorjeta'"
        :boolPercentage="true"
        :range="{ min: 10, max: 20 }"
      />
    </div>
    <div class="row">
      <PanelEnterSlider
        @updateValue="tipEntry.personsTable = $event"
        :title="'Pessoas'"
        :range="{ min: 2, max: 16 }"
      />
    </div>
  </div>
</template>

<script>
import PanelEnterSwitch from "@/components/PanelEnterSwitch.vue";
import PanelEnterInput from "@/components/PanelEnterInput.vue";
import PanelEnterSlider from "@/components/PanelEnterSlider.vue";
import { mapState } from "vuex";

export default {
  name: "PanelEnter",
  components: {
    PanelEnterSwitch,
    PanelEnterInput,
    PanelEnterSlider,
  },
  computed: {
    ...mapState(["tipEntry"]),
  },
};
</script>

<style scoped lang="sass">
.row
  margin-top: 15%

.enter_panel
  height: 100%
</style>
