<template>
  <div>
    <HeaderBlog />
    <div class="banner-projectDetails"></div>
    <div v-for="info in getProjectInfo" class="project-details center">
      <div class="project-details__text-block">
        <h2 class="project-details__heading">{{ info.heading }}</h2>
        <p class="project-details__text">{{ info.firstparagraph }}</p>
        <p class="project-details__text">{{ info.secondparagraph }}</p>
      </div>
      <carousel
        class="project-details__slideshow-block"
        :per-page="1"
        :mouse-drag="false"
      >
        <slide
          v-for="(image, index) in getSliderPictures"
          :key="index"
          :data-index="index"
        >
          <img :src="image.url" @click="open" class="zoom" />
        </slide>
      </carousel>
    </div>
    <FooterBlog />
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
// Для установки модуля: npm install -S vue-carousel
import fancyBox from "vue-fancybox";
// Для установки модуля: npm install vue-fancybox --save
import { mapGetters } from "vuex";
export default {
  name: "PtojectDetails",
  components: {
    Carousel,
    Slide,
  },

  data() {
    return {};
  },

  methods: {
    open(e) {
      fancyBox(e.target, this.imageList);
    },
  },
  computed: mapGetters(["getProjectInfo", "getSliderPictures"]),
};
</script>

<style lang="scss" scoped>
.banner-projectDetails {
  max-width: 1920px;
  height: 351px;
  background: url(../assets/img/banner-projectDetails.jpg);
  margin-bottom: 200px;
}

.project-details {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 200px;

  &__text-block {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 658px;
  }

  &__heading {
    color: #292f36;
    font-family: "DM Serif Display";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 11px;
  }

  &__text {
    color: #4d5053;
    font-family: "Jost";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 100px;
  }
}
</style>
