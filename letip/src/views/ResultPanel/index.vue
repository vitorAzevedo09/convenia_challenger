<template>
  <div class="result__panel" :class="show ? '' : 'hidden'">
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
    show: {
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

.result__panel {
  display: none;
  opacity: 1;
  transition: hidden 0s, opacity 0.5s linear;
  width: 100%;

  @include lg {

    width: 100%;
    display: flex;
    flex-flow: column;
    align-content: baseline;
  }

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.hidden {
  display: block;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;

  @include lg {
    display: inherit;
  }
}
</style>
