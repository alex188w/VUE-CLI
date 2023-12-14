<template>
  <div>
     <input type="text" v-model="date" placeholder="data" />
    <input type="text" v-model="category" placeholder="category" />
    <input type="text" v-model="value" placeholder="value" />   
    <button @click="onSaveClick">Save!</button>
  </div>
</template>

<script>
export default {
  name: "AddList",

  data() {
    return {
      category: "",
      value: "",
      date: ""
    };
  },

  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },

  methods: {
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPay", data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
