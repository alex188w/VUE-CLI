<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="text">Lorem ipsum dolor sit amet.</p>
    <p>counter {{ counter }}</p>
    <button @click="increase">+1</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    reset() {
      this.counter = 0;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
