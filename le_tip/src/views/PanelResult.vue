<template>
  <div class="result_panel">
    <div v-for="(card, i) in results_cards" :key="i" class="row">
      <PanelResultCard :title="card.title" :value="card.value" />
    </div>
  </div>
</template>

<script>
import PanelResultCard from "@/components/PanelResultCard.vue";
export default {
  name: "PanelResult",
  components: {
    PanelResultCard,
  },
  data: () => {
    return {
      results_cards: [
        { title: "Conta", value: 7.23 },
        { title: "Gorjeta", value: 9.2 },
        { title: "em R$", value: 57.56 },
        { title: "por Pessoa", value: 8.28 },
        { title: "em R$", value: 57.56 },
      ],
    };
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
