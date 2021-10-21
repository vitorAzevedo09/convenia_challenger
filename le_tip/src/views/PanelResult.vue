<template>
  <div class="result_panel">
    <div v-for="(card, i) in results" :key="i" class="row">
      <PanelResultCard
        :title="card.title"
        :value="card.value"
        :currency="card.title === 'em R$' ? 'BRL' : acronymCurrency"
      />
    </div>
  </div>
</template>

<script>
import PanelResultCard from "@/components/PanelResultCard.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "PanelResult",
  components: {
    PanelResultCard,
  },
  computed: {
    ...mapState(["tipEntry"]),
    ...mapGetters(["acronymCurrency", "results"]),
  },
};
</script>

<style scoped lang="sass">
.row
  margin-top: 10%

.result_panel
  margin-top: 30%
  height: 100%
</style>
