<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style scoped lang="sass">
$font-stack: 'Avenir', Helvetica, Arial, sans-serif
$primary-color: #9D11F4

#app
  position: absolute
  left: 0px
  top: -9vh
  font-family: $font-stack
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background: $primary-color
  margin-top: 60px
  width: 100vw
  height: 100vh
</style>
