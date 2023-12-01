<template>
  <div class="result-panel" :class="{ 'result-panel--visible': !hide }">
    <result-row :title="'Conta'" :symbol="'$'" :money="73.23" />
    <result-row :title="'Gorjeta'" :symbol="'$'" :money="9.52" />
    <result-row :title="'Total'" :symbol="'$'" :money="82.75" />
    <result-row :title="'Por Pessoa'" :symbol="'$'" :money="8.28" />
    <result-row :title="'Em R$'" :symbol="'R$'" :money="57.56" />
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
  }
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
  transition: hidden 0s, opacity 0.5s linear;
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

    -webkit-animation: fadeIn 2s;
    animation: fadeIn 2s;
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
