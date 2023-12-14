<template>
  <div id="app">
    <ProductDetails />
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';

export default {
  name: 'App',
  components: {
    ProductDetails
  }
}
</script>

<style lang="scss">
#app {
  margin: 0 auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
