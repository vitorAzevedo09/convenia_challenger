<template>
  <div class="card">
    <div class="title">{{ title }}:</div>
    <div class="value">{{ money }}</div>
  </div>
</template>

<script>
export default {
  name: "PanelResultCard",
  props: ["title", "value"],
  computed: {
    money: function () {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this.value);
    },
  },
};
</script>

<style scoped lang="sass">
.card
  color: #FF3FA4

.title
  font-size: 1.2rem
  text-align: left
</style>
