<template>
  <div id="app">
    <!-- <MyCounter /> -->
    <MyCart />
  </div>
</template>

<script>
import MyCart from './components/MyCart.vue';
import MyCounter from './components/MyCounter.vue';

export default {
  name: 'App',
  components: {
    MyCounter,
    MyCart

}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
