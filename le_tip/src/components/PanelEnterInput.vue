<template>
  <div class="valor">
    Valor: $ <input type="number" v-model="tipEntry.payValue" />
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
