<template>
  <div id="app"> 
    <!-- <AuthenticComp /> -->
    <!-- <ProductComp /> -->
    <!-- <BoockComp /> -->
    <IpotecCalc />
  </div>
</template>

<script>
// import AuthenticComp from './components/Authentication.vue';
// import ProductComp from './components/ProductComp.vue';
// import BoockComp from './components/BoockComp.vue';
import IpotecCalc from './components/IpotecCalc.vue';

export default {
  name: 'App',
  components: {
    // BoockComp,
    IpotecCalc
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
