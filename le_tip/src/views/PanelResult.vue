<template>
  <div class="result_panel">
    <div v-for="(card, i) in results" :key="i" class="row">
      <PanelResultCard
        :title="card.title"
        :value="card.value"
        :currency="acronymCurrency"
      />
    </div>
    <div class="row">
      <PanelResultCard :title="'em R$'" :value="valueBRL" :currency="'BRL'" />
    </div>
  </div>
</template>

<script>
import PanelResultCard from "@/components/PanelResultCard.vue";
import { mapState, mapGetters } from "vuex";
import gql from "graphql-tag";

export default {
  name: "PanelResult",
  components: {
    PanelResultCard,
  },
  computed: {
    ...mapState(["tipEntry"]),
    ...mapGetters(["acronymCurrency", "results"]),
    valueBRL: function () {
      return this.quote;
    },
  },
  apollo: {
    quote: {
      query: gql`
        query Convertion($baseCurrency: String!) {
          latest(baseCurrency: $baseCurrency, quoteCurrencies: ["BRL"]) {
            quote
          }
        }
      `,
      variables() {
        return {
          baseCurrency: this.acronymCurrency,
        };
      },
    },
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
