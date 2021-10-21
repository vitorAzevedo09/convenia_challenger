<template>
  <div class="check_row">
    <div class="euro">EURO</div>
    <div class="button b2" id="check_button">
      <input type="checkbox" v-model="tipEntry.boolCurrency" class="checkbox" />
      <div class="knobs"></div>
      <div class="layer"></div>
    </div>
    <div class="dolar">DOLAR</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PanelEnterSwitch",
  computed: {
    ...mapState(["tipEntry"]),
  },
};
</script>

<style scoped lang="sass">
.euro
  position: relative
  left: 50%

.dolar
  color: #FF3FA4
  position: relative
  right: 50%

.check_row
  margin-top: 20%
  display: grid
  grid-template-areas: 'euro check_button dolar'

#check_button
  .knobs:before
    content: 'EUR'
    position: absolute
    top: 4px
    left: 4px
    width: 20px
    height: 10px
    color: #fff
    font-size: 10px
    font-weight: bold
    text-align: center
    line-height: 1
    padding: 9px 4px
    background-color: #A200FF
    border-radius: 2px
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15)

#check_button
  .checkbox:active + .knobs:before
    width: 46px

#check_button
  .checkbox:checked:active + .knobs:before
    margin-left: -26px

#check_button
  .checkbox:checked + .knobs:before
    content: 'USD'
    left: 42px
    background-color: #FF3FA4

#check_button
  .checkbox:checked ~ .layer
    background-color: #fcebeb

.button
  border-bottom: 2px solid #FF3FA4
  border-top: 2px solid #A200FF
  position: relative
  top: 50%
  width: 74px
  height: 36px
  margin: -20px auto 0 auto
  overflow: hidden

.button.r, .button.r .layer
  border-radius: 100px

.button.b2
  border-radius: 2px

.checkbox
  position: relative
  width: 100%
  height: 100%
  padding: 0
  margin: 0
  opacity: 0
  cursor: pointer
  z-index: 3

.knobs
  z-index: 2

.layer
  width: 100%
  background-color: #ebf7fc
  transition: 0.3s ease all
  z-index: 1
</style>
