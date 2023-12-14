export default {
    state: {
        products: [
            {
              id: 1,
              src: "./img/content1.png",
              name: "Kitchan Design",
              title: "Let’s Get Solution For Building Construction Work",
              date: "26 December,2022",
            },
            {
              id: "2",
              src: "./img/content2.png",
              name: "Living Design",
              title: "Low Cost Latest Invented Interior Designing Ideas.",
              date: "22 December,2022",
            },
            {
              id: 3,
              src: "./img/content3.png",
              name: "Interior Design",
              title: "Best For Any Office & Business Interior Solution",
              date: "25 December,2022",
            },
            {
              id: 4,
              src: "./img/content4.png",
              name: "Kitchan Design",
              title: "Let’s Get Solution For Building Construction Work",
              date: "26 December,2022",
            },
            {
              id: 5,
              src: "./img/content5.png",
              name: "Living Design",
              title: "Low Cost Latest Invented Interior Designing Ideas.",
              date: "22 December,2022",
            },
            {
              id: 6,
              src: "./img/content6.png",
              name: "Interior Design",
              title: "Best For Any Office & Business Interior Solution",
              date: "25 December,2022",
            },
          ],
    },
    getters: {
        getListOfProducts(state) {
            return state.products;
        },
    },
}