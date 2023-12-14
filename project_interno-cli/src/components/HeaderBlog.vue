<template>
  <header class="header center">
    <div class="header__left">
      <a href="home.html"><img src="../assets/img/Logo.png" alt="logo" /></a>
    </div>
    <div class="header__right">
      <router-link to="/" class="header__link">Home</router-link>
      <router-link to="/blog" class="header__link">Blog</router-link>
      <router-link to="/project" class="header__link">Project</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 53px;
  margin-bottom: 53px;

  &__left {
    max-width: 177px;
    display: flex;
    align-items: center;
    padding-left: 1%;
  }

  &__right {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    padding-right: 1%;
  }

  &__link {
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
}
</style>
