<template>
  <div>
    <div class="banner-project center">
      <div class="banner-project__intro">
        <h2 class="banner-project__intro__title">Our Project</h2>
        <div class="banner-project__intro__link">
          <router-link to="/" class="header__link">Home</router-link> /
          <router-link to="/blog" class="header__link">Blog</router-link>
        </div>
      </div>
    </div>
    <div class="projects center">
      <div class="projects__content">
        <div class="categories">
          <div class="categories__content">
            <button
              v-for="button in listOfButtons"
              :key="button.id"
              @click="changeProject(button.id)"
              type="button"
              :class="[
                'categories__btn',
                button.id === buttonIsActive ? 'categories__btn_active' : false,
              ]"
            >
              {{ button.title }}
            </button>
          </div>
        </div>
        <div class="projects__items">
          <ProjectComponent
            v-for="project in currentCategoryList"
            :key="project.id"
            :projectData="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from "@/components/ProjectComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProjectsPage",

  data() {
    return {
      currentPage: 1,
      limitOfCardsPerPage: 8,
      currentCategoryList: [
        {
          id: "9",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom0.png"),
          alt: "bedroom one",
          firstparagraph: "Minimal Bedroom",
          secondparagraph: "Decor / Artchitecture",
        },
        {
          id: "10",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom1.png"),
          alt: "bedroom two",
          firstparagraph: "Classic Minimal Bedroom",
          secondparagraph: "Decor / Artchitecture",
        },
        {
          id: "11",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom2.png"),
          alt: "bedroom three",
          firstparagraph: "Minimal Bedroom Table",
          secondparagraph: "Decor / Artchitecture",
        },
        {
          id: "12",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom3.png"),
          alt: "bedroom four",
          firstparagraph: "Modern Bedroom",
          secondparagraph: "Decor / Artchitecture",
        },
        {
          id: "13",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom4.png"),
          alt: "bedroom five",
          firstparagraph: "Minimal Bedroom",
          secondparagraph: "Decor / Artchitecture",
        },
        {
          id: "14",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom5.png"),
          alt: "bedroom six",
          firstparagraph: "Modern Bedroom",
          secondparagraph: "Decor / Artchitecture",
        },
        {
          id: "15",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom6.png"),
          alt: "bedroom seven",
          firstparagraph: "System Bedroom Table",
          secondparagraph: "Decor / Artchitecture",
        },
        {
          id: "16",
          tag: "bedroom",
          src: require("@/assets/img/project-bedRoom7.png"),
          alt: "bedroom eight",
          firstparagraph: "Modern Bedroom",
          secondparagraph: "Decor / Artchitecture",
        },
      ],

      listOfButtons: [
        { id: "bathroom", title: "Bathroom" },
        { id: "bedroom", title: "Bedroom" },
        { id: "kitchen", title: "Kitchen" },
        { id: "livingroom", title: "LivingArea" },
      ],

      buttonIsActive: "bedroom",
    };
  },

  methods: {
    changeProject(id) {
      const buttonId = id;
      this.currentCategoryList = [];
      this.buttonIsActive = id;
      this.getAllCategoriesList.forEach((project) => {
        if (project.tag === buttonId) {
          this.buttonIsActive = id;
          this.currentCategoryList.push(project);
        }
      });
      return this.currentCategoryList;
    },
  },
  computed: {
    ...mapGetters(["getAllCategoriesList"]),
  },

  components: { ProjectComponent },
};
</script>
<style lang="scss" scoped>
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

.banner-project {
  max-width: 1920px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  height: 356px;
  background: url(../assets/img/banner-project.jpg);
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
      line-height: 125%;
      /* 62.5px */
    }

    &__link {
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

.categories {
  margin-bottom: 61px;

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 18px;
    border: 1px solid #e7e7e7;
    margin-left: 140px;
    margin-right: 140px;
  }

  &__btn {
    text-align: center;
    letter-spacing: 0.36px;
    border: none;
    border-radius: 18px;
    background-color: #ffffff;
    padding: 26px 66px;
    width: 230px;
    color: #292f36;
    font-family: "Jost", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 1.25;
    transition: all 0.5s ease-out;

    &:hover {
      background-color: #cda274;
      transition: all 0.8s ease-out;
    }

    &:focus {
      color: #ffffff;
      background-color: #292f36;
      transition: all 0.8s ease-out;
    }
  }

  &__btn_active {
    color: #ffffff;
    background-color: #292f36;
  }
}

.projects {
  margin-top: 175px;

  &__items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
    max-height: 3230px;
    margin-bottom: 61px;
  }

  &__item {
    position: relative;
  }
}
</style>
