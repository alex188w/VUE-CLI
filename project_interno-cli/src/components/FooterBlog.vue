<template>
  <div class="footer center">
    <div class="footer__content">
      <div class="footer__interno">
        <div class="footer__logo">
          <a href="home.html"
            ><img src="../assets/img/Logo.png" alt="logo"
          /></a>
        </div>
        <div class="footer__interno__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </div>
        <div class="footer__interno__icons">
          <img src="../assets/img/icon1.svg" alt="icon" />
          <img src="../assets/img/icon2.svg" alt="" />
        </div>
      </div>
      <div class="footer__pages">
        <h3 class="footer__pages__title">Pages</h3>
        <a href="home.html" class="footer__pages__link">Home</a>
        <a href="index.html" class="footer__pages__link">Project</a>
        <a href="blog.html" class="footer__pages__link">Blog</a>
      </div>
      <div class="footer__services"></div>
      <div class="footer__contact">
        <div class="footer__contact__contact">Contact</div>
        <div class="footer__contact__desc">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </div>
        <div class="footer__contact__desc">contact@interno.com</div>
        <div class="footer__contact__desc">(123) 456 - 7890</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBlog",
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  // width: 1920px;
  gap: 134px;
  margin-top: 96px;
  margin-bottom: 134px;

  &__logo {
    max-width: 177px;
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1199px;
    align-items: flex-start;
    gap: 101px;
  }

  &__interno {
    display: flex;
    width: 393px;
    flex-direction: column;
    align-items: flex-start;
    gap: 31px;

    &__text {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      /* 33px */
      letter-spacing: 0.22px;
    }

    &__icons {
      display: flex;
      width: 225px;
      align-items: center;
      gap: 54px;
    }
  }

  &__pages {
    display: flex;
    width: 125px;
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;

    &__title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      /* 31.25px */
    }

    &__link {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 300%;
      /* 66px */
      letter-spacing: 0.22px;
    }
  }

  &__services {
    display: flex;
    width: 120px;
    height: 66px;
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
  }

  &__contact {
    display: flex;
    width: 258px;
    height: 272px;
    flex-direction: column;
    align-items: stretch;
    gap: 26px;
    flex-shrink: 0;

    &__contact {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      /* 31.25px */
    }

    &__desc {
      flex-direction: column;
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      /* 33px */
      letter-spacing: 0.22px;
    }
  }
}
</style>
