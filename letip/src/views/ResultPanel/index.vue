<template>
  <div class="result-panel" :class="{ 'result-panel--visible': !hide }">
    <result-row :title="'Conta'" :money="bill" />
    <result-row :title="'Gorjeta'" :money="tip" />
    <result-row :title="'Total'" :money="total_bill" />
    <result-row :title="'Por Pessoa'" :money="per_person" />
    <result-row :title="'Em R$'" :money="bill_BRL" />
  </div>
</template>

<script>
import ResultRow from '../../components/ResultRow/index.vue'
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
    symbol() {
      if (this.$store.state.tip.currency === 'EUR')
        return '€'
      return '$'
    },
    bill() {
      return this.$store.getters['tip/billMoney']
    },
    tip() {
      return this.$store.getters['tip/tipCurrency']
    },
    total_bill() {
      return this.$store.getters['tip/billTotalCurrency']
    },
    per_person() {
      return this.$store.getters['tip/billEachPersonCurrency']
    },
    bill_BRL() {
      return this.$store.getters['tip/billTotalBRL']
    }
  },
  created() {
    this.$store.dispatch('tip/getQuoteBRL')
  },
  watch: {
    total_bill() {
      this.$store.dispatch('tip/getQuoteBRL')
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
  height: 60vh;
  opacity: 1;
  gap: 3vh;
  transition: hidden 0s, opacity $transition;
  flex-direction: column;
  justify-content: start;

  @include lg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &--visible {
    display: flex;

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
