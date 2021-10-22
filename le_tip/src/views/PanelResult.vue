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
    ...mapGetters(["acronymCurrency", "perPerson", "results"]),
    valueBRL: function () {
      let q;
      let pp = this.perPerson;
      if (this.quotes === undefined) q = [{ quote: 0 }, { quote: 0 }];
      else q = this.quotes;
      return this.tipEntry.boolCurrency
        ? pp * (q[0].quote / q[1].quote)
        : pp * q[0].quote;
    },
  },
  apollo: {
    quotes: {
      query: gql`
        query Convertion {
          latest(baseCurrency: "EUR", quoteCurrencies: ["BRL", "USD"]) {
            quoteCurrency
            quote
          }
        }
      `,
      update: (data) => data.latest,
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
