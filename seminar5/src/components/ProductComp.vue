<!-- Задание 2 (30 минут)
Разработать интерфейс корзины товаров, в котором пользователь 
может изменять количество товаров в корзине и видеть общую сумму 
покупки. Каждый товар представлен в виде блока, содержащего поле 
ввода для изменения количества товара и отображение его цены. При 
изменении количества товаров в поле ввода, необходимо 
автоматически пересчитывать стоимость каждого товара и обновлять 
общую сумму покупки. -->
<template>
    <div>
        <div v-for="item in products" :key="item.id">
            <input type="number" v-model="item.productCount">
            <p>{{ item.prodName }}</p>
            <p>{{ item.prodPrice }}</p>
            <p> Цена товара: {{ item.productCount * item.prodPrice }}</p>
        </div>
        <p>Полная стоимость товаров {{ totalPrice }}</p>

    </div>
</template>

<script>
export default {
    name: 'ProductComp',

    data() {
        return {
            products: [
                {
                    id: 1,
                    prodName: 'product 2',
                    prodPrice: 10,
                    productCount: 5
                },
                {
                    id: 2,
                    prodName: 'product 1',
                    prodPrice: 10,
                    productCount: 5
                }
            ]
        }
    },

    methods: {

    },

    computed: {
        totalPrice() {
            return this.products.reduce((sum, cur) => sum + cur.prodPrice * cur.productCount, 0)
        }
    }
};
</script>

<style lang="scss" scoped></style>
