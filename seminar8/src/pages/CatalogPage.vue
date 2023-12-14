<template>
  <div>
    <div v-for="product of paginatedCatalog" :key="product.id">
      <br />
      <div>Name: {{ product.name }}</div>
      <div>Price: {{ product.price }}</div>
    </div>
    <div>
      <router-link
        v-for="page in totalPages"
        :key="`page${page}`"
        :to="`/catalog/${page}`"
      >
        {{ page }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogPage",
  data() {
    return {
      perPage: 5,
      // currentPage: 1,
      products: [
        {
          id: 1,
          name: "Product1",
          price: 5110,
        },
        {
          id: 2,
          name: "Product2",
          price: 590,
        },
        {
          id: 3,
          name: "Product3",
          price: 750,
        },
        {
          id: 4,
          name: "Product4",
          price: 510,
        },
        {
          id: 5,
          name: "Product5",
          price: 150,
        },
        {
          id: 6,
          name: "Product6",
          price: 250,
        },
        {
          id: 7,
          name: "Product7",
          price: 70,
        },
        {
          id: 8,
          name: "Product8",
          price: 90,
        },
        {
          id: 9,
          name: "Product9",
          price: 70,
        },
        {
          id: 10,
          name: "Product10",
          price: 60,
        },
      ],
    };
  },

  methods: {},
  computed: {
    currentPage() {
      const page = this.$route.params.page;
      return page || 1;
    },
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
    paginatedCatalog() {
      const { currentPage, perPage } = this;
      const startIndex = (currentPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      return this.products.slice(startIndex, endIndex);
    },
  },

  // Перейти на страницу 2 при mounted (или через 3 сек)
  // console.log(this.$route.push({path: '/', param: {page: 2}}));
  // mounted() {
  //   console.log(this.$route);

  //   if (page) this.currentPage = +page;
  // },
};
</script>

<style lang="scss" scoped></style>
