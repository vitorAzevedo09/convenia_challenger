<template>
  <div class="result-panel" :class="{ 'result-panel--visible': !hide }">
    <result-row :title="'Conta'" :money="bill" />
    <result-row :title="'Gorjeta'" :money="tip" />
    <result-row :title="'Total'" :money="total_bill" />
    <result-row :title="'Por Pessoa'" :money="per_person" />
    <result-row :title="'Em R$'" :money="'57.56'" />
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/breakpoints.scss';
@import '../../assets/css/variables.scss';

.result-panel {
  font-size: $font-size;
  position: relative;
  display: none;
  opacity: 1;
  transition: hidden 0s, opacity 0.3s linear;
  width: 100%;
  height: 40vh;

  @include lg {
    width: 70%;
    display: flex;
    flex-flow: column;
    align-content: baseline;
  }

  &--visible {
    display: block;

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
