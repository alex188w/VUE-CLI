<!-- Задание Vue

Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.
Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->

<template>
    <div class="product-display center">
        <div class="product-item" v-for="(product, index) in products" :key="product.id">
            <div class="product-container">
                <h1>{{ product.name }}</h1>
                <div class="product-image">
                    <img :src="product.image" alt="basket">
                </div>
                <div class="product-info">
                    <h2 v-if="product.available">Available</h2>
                    <h2 v-else>Out of Stock</h2>
                    <p>Price: <span>{{ formattedPrice[index] }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Basket 1',
                    price: '99.99',
                    available: true,
                    image: require('../assets/img/image1.webp')
                },
                {
                    id: 2,
                    name: 'Basket 2',
                    price: '99.99',
                    available: false,
                    image: require('../assets/img/image2.webp')
                },
                {
                    id: 3,
                    name: 'Basket 3',
                    price: '99.99',
                    available: true,
                    image: require('../assets/img/image3.webp')
                }
            ]

        }
    },

    computed: {
        formattedPrice: function () {
            return this.products.map(function (product) {
                return `$ ${product.price}`
            })
        }
    }
}
</script>

<style lang="scss" scoped>
body {
    margin: 0px;
    font-family: 'Times New Roman', Times, serif;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.product-display {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
    background-color: #f2f2f2;

}

.product-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    background-color: #e6e2e2;
    border-radius: 15px;

}

h1 {
    font-size: 50px;
    color: rgb(201, 183, 135);
}

h2 {
    font-size: 25px;
    margin: 0;
    margin-bottom: 20px;
}

p {
    font-size: 22px;
    margin: 0;
    margin-bottom: 20px;
}

img {
    border: 2px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    padding: 15px;
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    flex-wrap: nowrap;
}

img {
    width: 250 px;
    height: 200px;
}

span {
    color: red;
}
</style>