<template>
  <div class="result-panel" :class="{ 'result-panel--visible': !hide }">
    <result-row data-cy="bill" :title="'Conta'" :money="bill" />
    <result-row data-cy="tip" :title="'Gorjeta'" :money="tip" />
    <result-row data-cy="total-bill" :title="'Total'" :money="total_bill" />
    <result-row data-cy="per-person" :title="'Por Pessoa'" :money="per_person" />
    <result-row data-cy="bill-BRL" :title="'Em R$'" :money="bill_BRL" />
  </div>
</template>

<script>
import ResultRow from '../../components/ResultRow/index.vue'
import { mapGetters } from 'vuex'
export default {
  props: {
    hide: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ResultRow
  },

  computed: {
    ...mapGetters({
      bill: 'bill/billMoney',
      tip: 'bill/tipCurrency',
      bill_BRL: 'bill/billTotalBRL',
      total_bill: 'bill/billTotalCurrency',
      per_person: 'bill/billEachPersonCurrency',
    }),
    symbol() {
      if (this.$store.state.bill.currency === 'EUR')
        return '€'
      return '$'
    },
  },
  watch: {
    total_bill() {
      this.$store.dispatch('bill/getQuoteBRL')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/breakpoints.scss';
@import '../../assets/css/variables.scss';

.result-panel {
  color: $purple-x11;
  position: relative;
  display: none;
  opacity: 1;
  transition: hidden 0s, opacity $transition;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  gap: 15px;
  height: 100%;

  @include lg {
    display: flex;
  }

  &--visible {
    display: flex;
    justify-content: center;
    gap: 10px;

    @include lg {
      display: inherit;
    }

    -webkit-animation: fadeIn 0.3s;
    animation: fadeIn 0.3s;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    left: 4em;
  }

  to {
    opacity: 1;
    left: 0;
  }
}
</style>
