<!-- Задание 1 (тайминг 30 минут)
1. Создание базового хранилища: Создайте новое Vuexхранилище, определите в нем состояние (state) и несколько базовых мутаций (mutations). Подключите хранилище к вашему 
приложению Vue.js и используйте его для управления состоянием приложения.
2. Создайте счетчик который хранит состояние count
3. Создайте две мутации, которые увеличивают и уменьшают значение счетчика 
4. Создайте компонент счетчик -->
<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "VUEJSCodeMyCounter",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    increment() {
        this.INCREMENT();
    //   this.$store.commit("INCREMENT");
    },
    decrement() {
        this.DECREMENT();
    //   this.$store.commit("DECREMENT");
    },
  },

  mounted() {
    console.log(this.$store);
  },

  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style lang="scss" scoped></style>
