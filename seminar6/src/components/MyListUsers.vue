<!-- Задание 1 (35 минут)
Создайте компонент "Список пользователей" (UserList), который 
будет отображать список пользователей из переданного массива. 
Каждый пользователь должен быть представлен в виде отдельного 
компонента "Пользователь" (User), принимающего пропсы с данными 
о пользователе (например, имя, фамилия и электронная почта). -->

<!-- Задание 2 (35 минут)
Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет 
отображать информацию о книге, такую как название, автор и год 
издания. Компонент "Книга" должен иметь возможность отображать 
дополнительные детали о книге по требованию пользователя. Также 
необходимо создать компонент "Список книг" (BookList), который 
будет отображать список книг из переданного массива. -->

<!-- Задание 3 (40 минут)
6. При клике на кнопку в дочернем компоненте "MovieInfo", передайте некоторую, (введенную в поле имя или фамилия) информацию о user обратно в родительский компонент.
7. В родительском компоненте отобразите информацию о user, которую вы 
получили от дочернего компонента. -->

<template>
  <div>
    <User v-for="user in ListUser" :key="user.phone" :userData="user" @upUser="upUser"/>
  </div>
</template>

<script>
import User from './User.vue';
export default {
  name: "MyListUsers",

  data() {
    return {
      ListUser: [
        {
          name: "Edward",
          surname: "Lara",
          phone: "(493) 363-1411",
          email: "leo.elementum@protonmail.net",
          address: "Ap #845-8065 Tincidunt Street",
        },
        {
          name: "Cherokee",
          surname: "Bishop",
          phone: "(965) 277-4967",
          email: "vel.nisl@aol.com",
          address: "P.O. Box 881, 1850 Augue Street",
        },
        {
          name: "Alvin",
          surname: "Schneider",
          phone: "(120) 842-4127",
          email: "eros@hotmail.edu",
          address: "Ap #471-9986 Quisque Ave",
        },
        {
          name: "Allegra",
          surname: "Wallace",
          phone: "(332) 499-6306",
          email: "nibh.phasellus@hotmail.com",
          address: "Ap #428-3604 Et Ave",
        },
        {
          name: "Signe",
          surname: "Clements",
          phone: "(285) 742-3654",
          email: "sit@aol.couk",
          address: "P.O. Box 718, 2240 Sed Ave",
        },
        {
          name: "Cooper",
          surname: "Olsen",
          phone: "(224) 634-4595",
          email: "felis.ullamcorper.viverra@icloud.org",
          address: "5008 Molestie St.",
        },
        {
          name: "Bruce",
          surname: "Rich",
          phone: "(773) 706-8496",
          email: "pharetra.nibh@icloud.edu",
          address: "Ap #732-4066 Sed Rd.",
        },
      ],
    };
  },

  methods: {
    upUser(userData) {
      const userNow = this.ListUser.find((user) => user === userData.user);
      if(userNow) {
        userNow.name = userData.name;
        userNow.surname = userData.surname;
      } else {
        alert('Пользователь не найден')
      }
    }
  },
  components: { User }
};
</script>

<style lang="scss" scoped></style>
