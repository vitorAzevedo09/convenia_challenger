<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style scoped lang="sass">
$font-stack: 'Avenir', Helvetica, Arial, sans-serif
$primary-color: #A200FF
$secondary-color: #FF3FA4

#app
  position: relative
  width: 99.5vw
  height: 120vh
  left: -1vw
  top: -10vh
  color: $primary-color
  font-family: $font-stack
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background: $primary-color
  margin-top: 60px
</style>
