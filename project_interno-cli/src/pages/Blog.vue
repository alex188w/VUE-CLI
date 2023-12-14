<template>
  <div class="top">
    <div class="banner-blog center">
      <div class="banner-blog__intro">
        <h2 class="banner-blog__intro__title">Articles & News</h2>
        <div class="banner-blog__intro__link">
          <router-link to="/" class="header__link">Home</router-link> /
          <router-link to="/blog" class="header__link">Blog</router-link>
        </div>
      </div>
    </div>
    <div class="latest center">
      <h2 class="latest__title">Latest Post</h2>
      <div class="latest__post">
        <img src="../assets/img/latest.png" alt="photo" class="latest__photo" />
        <div class="latest__content">
          <div class="latest__content__subcontent">
            <h2 class="latest__content__subcontent__title">
              Low Cost Latest Invented Interior Designing Ideas
            </h2>
            <p class="latest__content__subcontent__text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
            </p>
            <p class="latest__content__subcontent__text">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
          </div>
          <div class="latest__content__date">
            <div class="latest__content__date__text">26 December,2022</div>
            <router-link to="/blogdetails" class="latest__content__date_link"
              ><img src="../assets/img/direct1.svg" alt="direct"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="news center">
      <div class="news__heading">Articles & News</div>

      <div class="news__content">
        <div
          class="news__item"
          v-for="product in getListOfProducts"
          :key="product.id"
        >
          <div :id="`${product.id}`" class="news__item__content">
            <div class="news__item__teg">
              <div class="news__item__teg__text">{{ product.name }}</div>
            </div>
            <div class="news__img">
              <img :src="product.src" alt="blogImage" />
            </div>
            <div class="news__item__subcontent">
              <div class="news__item__subcontent__title">
                {{ product.title }}
              </div>
              <div class="news__item__subcontent__date">
                <div class="news__item__subcontent__date__text">
                  {{ product.date }}
                </div>
                <router-link
                  to="/blogdetails"
                  class="latest__content__date_link"
                  ><img src="../assets/img/direct1.svg" alt="direct"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Blog",

  computed: {
    ...mapGetters(["getListOfProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.top {
  max-width: 1920px;
  margin: 0 auto;
}

.header {
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

.banner-blog {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  height: 356px;
  background: url(@/assets/img/banner-blog.jpg);
  background-repeat: no-repeat;
  &__intro {
    position: absolute;
    display: flex;
    max-width: 503px;
    height: 178px;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
    &__title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
    }
    &__ink {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }
}
.latest {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 27px;
  margin-top: 200px;
  margin-bottom: 150px;
  &__title {
    width: 300px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__post {
    display: flex;
    max-width: 1157px;
    align-items: center;
    gap: 65px;
    flex-wrap: wrap;
  }
  &__content {
    display: flex;
    width: 489px;
    flex-direction: column;
    align-items: flex-start;
    gap: 41px;
    &__subcontent {
      display: flex;
      width: 469px;
      flex-direction: column;
      align-items: flex-start;
      gap: 22px;
      &__title {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
      }
      &__text {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
      }
    }
    &__date {
      display: flex;
      width: 489px;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.news {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  &__heading {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__content {
    max-width: 1201px;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
    padding-right: 0.5%;
    padding-left: 0.5%;
    display: flex;
    max-width: 1201px;
    flex-direction: row;
  }
  &__item {
    position: relative;
    max-width: 377px;
    display: flex;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    &__teg {
      position: absolute;
      width: 129px;
      height: 41px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 21px;
      margin-top: 225px;
      border-radius: 8px 8px 8px 0px;
      background: #fff;
    }
    &__content {
      display: flex;
      width: 340px;
      height: 479px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    &__subcontent {
      display: flex;
      width: 340px;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      &__title {
        width: 300px;
        padding-right: 12px;
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
      }
      &__date {
        display: flex;
        width: 340px;
        align-items: center;
        justify-content: space-between;
        &__text {
          color: #4d5053;
          font-family: Jost;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 24px */
          letter-spacing: 0.16px;
          text-transform: capitalize;
        }
      }
    }
    &:hover {
      background: #f4f0ec;
      transition: all 0.8s ease-out;
    }
  }
}
.project__subContent__button {
  background-image: url(@/assets/img/direct.svg);
  width: 52px;
  height: 52px;
  border: none;
  background: none;
}
</style>
