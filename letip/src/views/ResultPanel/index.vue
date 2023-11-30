<template>
  <div class="result__panel" :class="hide ? 'hide' : ''">
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
      default: false
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

  width: 100%;

  @include lg {

    width: 40%;
    display: flex;
    flex-flow: column;
    align-content: baseline;
  }

}
</style>
