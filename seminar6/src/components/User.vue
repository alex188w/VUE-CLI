<template>
  <div>
    <!-- Для задания 1, 2
        <div>имя: {{ userData.name }}</div>
        <div>фамилия: {{ userData.surname }}</div> -->
    <div>Новое имя: {{ userData.name }}</div>
    <label for="name">имя: <input id="name" v-model="name" /></label>
    <label for="surname"
      >фамилия: <input id="surname" v-model="surname"
    /></label>
    <div>телефон: {{ userData.phone }}</div>
    <button @click="toggleInfo">Show More Details</button>
    <div v-if="showMore">
      <div>адрес: {{ userData.address }}</div>
      <div>E-mail: {{ userData.email }}</div>
    </div>
    <button @click="saveData">Сохранить</button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["userData"],

  data() {
    return {
      showMore: false,
      name: "",
      surname: "",
    };
  },

  created() {
    this.name = this.userData.name;
    this.surname = this.userData.surname;
  },
  methods: {
    toggleInfo() {
      this.showMore = !this.showMore;
    },
    saveData() {
      const updatedUser = {
        user: this.userData,
        name: this.name,
        surname: this.surname,
      };
      this.$emit("upUser", updatedUser);
    },
  },
};
</script>

<style lang="scss" scoped></style>
