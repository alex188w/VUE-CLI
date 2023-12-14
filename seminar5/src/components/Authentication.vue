<!-- Задание 1. Создайте компонент "Аутентификация" (Authentication), 
который будет отображать форму входа или сообщение об 
успешной аутентификации в зависимости от переданного 
пропса isAuthenticated. Используйте директиву v-if для 
условного отображения разных элементов в шаблоне 
компонента. -->

<template>
    <div>
        <form v-if="!isAuthenticated" action="#">
            <label for="login">Login</label>
            <input type="text" id='login' v-model="userLogin" />
            <label for="password">Password</label>
            <input type="password" id="password" v-model="userPassword" />
            <button @click="formCheck">Отправить</button>
        </form>
        <h2 v-else >Авторизация успешна</h2>
    </div>
</template>

<script>
export default {
    name: 'AuthenticComp',

    data() {
        return {
            isAuthenticated: false,
            userLogin: '',
            userPassword: ''
        };
    },

    mounted() {
        
    },

    methods: {
        formCheck() {
            if (this.userLogin && this.userPassword) {
                this.isAuthenticated = true
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>