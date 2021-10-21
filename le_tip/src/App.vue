<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style scoped lang="sass">
$font-stack: 'Avenir', Helvetica, Arial, sans-serif
$primary-color: #A200FF

#app
  position: absolute
  left: 0px
  top: -9vh
  color: $primary-color
  font-family: $font-stack
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background: $primary-color
  margin-top: 60px
  width: 100vw
  height: 100vh
</style>
