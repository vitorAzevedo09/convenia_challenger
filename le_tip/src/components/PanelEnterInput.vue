<template>
  <div class="valor">
    Valor: <span v-if="tipEntry.boolCurrency">$ </span> <span v-else>€ </span
    ><input type="number" v-model="tipEntry.payValue" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PanelEnterInput",
  computed: {
    ...mapState(["tipEntry"]),
  },
};
</script>

<style scoped lang="sass">
input
  border-color: #A200FF
  border-radius: 25px
  width: 35%
</style>
