<!-- Задание 3
Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет отображать информацию о книге, такую как название, автор и год издания. Компонент "Книга" должен иметь возможность отображать дополнительные детали о книге по требованию пользователя. Также необходимо создать компонент "Список книг" (BookList), который будет отображать список книг из переданного массива. -->
<!-- Вариант 2 -->
<template>
    <div>
        <div v-for="item in books" :key="item.id">
            <p>{{ item.bookName }}</p>
            <button @click="toogleDescription(item.id)">Show Description</button>
            <p v-if="showDesc.includes(item.id)">{{ item.desc }} {{ item.publicationYear }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoockComp',

    data() {
        return {
            books: [
                {
                    id: 1,
                    desc: 'Description 1',
                    bookName: 'Book 1',
                    publicationYear: '1997',
                },
                {
                    id: 2,
                    desc: 'Description 2',
                    bookName: 'Book 2',
                    publicationYear: '1999',
                }
            ],
            showDesc: []
        };
    },

    mounted() {
        
    },

    methods: {
        toogleDescription(id) {
            const findIndex = this.showDesc.indexOf(id);
            if (findIndex === -1) {
                this.showDesc.push(id)
            } else {
                this.showDesc.splice(findIndex, 1)
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>