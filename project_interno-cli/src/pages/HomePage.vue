<template>
  <div class="top">
    <div class="banner center">
      <img src="@/assets/img/banner.png" alt="photo" class="banner__photo" />
      <div class="banner__intro">
        <h2 class="banner__intro__heading">Let Your Home Be Unique</h2>
        <p class="banner__intro__text">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <router-link to="/blog"
          ><button class="banner__intro__button">
            Get Started<svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg></button
        ></router-link>
      </div>
    </div>
    <div class="project center">
      <div class="project__heading">
        <div class="project__heading__title">Follow Our Projects</div>
        <div class="project__heading__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </div>
      </div>
      <div class="project__content">
        <div class="project__item">
          <div class="project__left">
            <img src="@/assets/img/Image1-1.png" alt="project" />
            <div class="project__text">
              <div class="project__subContent">
                <div class="project__subContent__heading">Modern Kitchan</div>
                <div class="project__subContent__desc">
                  Decor / Artchitecture
                </div>
              </div>
              <router-link to="/blog" class="project__subContent__button"
                ><img src="@/assets/img/direct.svg" alt="direct"
              /></router-link>
            </div>
          </div>
          <div class="project__right">
            <img src="@/assets/img/Image1-2.png" alt="project" />
            <div class="project__text">
              <div class="project__subContent">
                <div class="project__subContent__heading">Modern Kitchan</div>
                <div class="project__subContent__desc">
                  Decor / Artchitecture
                </div>
              </div>
              <router-link to="/blog" class="project__subContent__button"
                ><img src="@/assets/img/direct.svg" alt="direct"
              /></router-link>
            </div>
          </div>
        </div>
        <div class="project__item">
          <div class="project__left">
            <img src="@/assets/img/Image2-1.png" alt="project" />
            <div class="project__text">
              <div class="project__subContent">
                <div class="project__subContent__heading">Modern Kitchan</div>
                <div class="project__subContent__desc">
                  Decor / Artchitecture
                </div>
              </div>
              <router-link to="/blog" class="project__subContent__button"
                ><img src="@/assets/img/direct.svg" alt="direct"
              /></router-link>
            </div>
          </div>
          <div class="project__right">
            <img src="@/assets/img/Image2-2.png" alt="project" />
            <div class="project__text">
              <div class="project__subContent">
                <div class="project__subContent__heading">Modern Kitchan</div>
                <div class="project__subContent__desc">
                  Decor / Artchitecture
                </div>
              </div>
              <router-link to="/blog" class="project__subContent__button"
                ><img src="@/assets/img/direct.svg" alt="direct"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="counter center">
      <div class="counter__content">
        <div class="counter__item">
          <div class="counter__item__desc">
            <div class="counter__item__desc__count">12</div>
            <div class="counter__item__desc__text">Years Of Experiance</div>
          </div>
          <div class="counter__item__vertical"></div>
        </div>
        <div class="counter__item">
          <div class="counter__item__desc">
            <div class="counter__item__desc__count">85</div>
            <div class="counter__item__desc__text">Success Project</div>
          </div>
          <div class="counter__item__vertical"></div>
        </div>
        <div class="counter__item">
          <div class="counter__item__desc">
            <div class="counter__item__desc__count">15</div>
            <div class="counter__item__desc__text">Active Project</div>
          </div>
          <div class="counter__item__vertical"></div>
        </div>
        <div class="counter__item">
          <div class="counter__item__desc">
            <div class="counter__item__desc__count">95</div>
            <div class="counter__item__desc__text">Happy CUstomers</div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog center">
      <div class="blog__heading">
        <h2 class="blog__title">Articles & News</h2>
        <p class="blog__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div class="blog__content">
        <div class="blog__item">
          <div class="blog__item__content">
            <div class="blog__item__teg">
              <div class="blog__item__teg__text">Kitchan Design</div>
            </div>
            <div class="blog__img">
              <img src="@/assets/img/blogImage1.png" alt="blogImage" />
            </div>
            <div class="blog__item__subcontent">
              <div class="blog__item__subcontent__title">
                Let’s Get Solution For Building Construction Work
              </div>
              <div class="blog__item__subcontent__date">
                <div class="blog__item__subcontent__date__text">
                  26 December,2022
                </div>
                <router-link to="/blog" class="project__subContent__button"
                  ><img src="@/assets/img/direct.svg" alt="direct"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
        <div id="other" class="blog__item">
          <div class="blog__item__content">
            <div class="blog__item__teg">
              <div class="blog__item__teg__text">Living Design</div>
            </div>
            <div class="blog__img">
              <img src="@/assets/img/blogImage2.png" alt="blogImage" />
            </div>
            <div class="blog__item__subcontent">
              <div class="blog__item__subcontent__title">
                Low Cost Latest Invented Interior Designing Ideas.
              </div>
              <div class="blog__item__subcontent__date">
                <div class="blog__item__subcontent__date__text">
                  22 December,2022
                </div>
                <router-link to="/blog" class="project__subContent__button"
                  ><img src="@/assets/img/direct.svg" alt="direct"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="blog__item">
          <div class="blog__item__content">
            <div class="blog__item__teg">
              <div class="blog__item__teg__text">Interior Design</div>
            </div>
            <div class="blog__img">
              <img src="@/assets/img/blogImage3.png" alt="blogImage" />
            </div>
            <div class="blog__item__subcontent">
              <div class="blog__item__subcontent__title">
                Best For Any Office & Business Interior Solution
              </div>
              <div class="blog__item__subcontent__date">
                <div class="blog__item__subcontent__date__text">
                  25 December,2022
                </div>
                <router-link to="/blog" class="project__subContent__button"
                  ><img src="@/assets/img/direct.svg" alt="direct"
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
export default {
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
.top {
  max-width: 1920px;
  margin: 0 auto;
}

.banner {
  display: flex;
  max-width: 12011px;
  max-height: 758px;
}

.banner__photo {
  position: relative;
}

.banner__intro {
  position: absolute;
  display: flex;
  margin-left: 52px;
  margin-top: 208px;
  justify-content: center;
  align-items: center;
  max-width: 434px;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
}

.banner__intro__heading {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 81.25px */
}

.banner__intro__text {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.banner__intro__button {
  cursor: pointer;
  display: flex;
  padding: 26px 54px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  color: #fff;
  text-align: center;
  font-family: "Jost";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  &:hover {
    background-color: #cda274;
    transition: all 0.8s ease-out;
  }
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
}

.project__heading {
  display: flex;
  max-width: 737px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.project__heading__title {
  color: #292f36;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

.project__heading__text {
  color: #4d5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.project__content {
  margin-top: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
}

.project__item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 87px;
}

.project__left {
  display: flex;
  flex-direction: column;
  max-width: 470px;
  align-items: flex-start;
  gap: 24px;
}

.project__right {
  display: flex;
  flex-direction: column;
  max-width: 475px;
  align-items: flex-start;
  gap: 24px;
}

.project__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 260px;
}

.project__subContent {
  display: flex;
  width: 217px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.project__subContent__heading {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.project__subContent__desc {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.project__subContent__button {
  background-image: url("@/assets/img/direct.svg");
  width: 52px;
  height: 52px;
  border: none;
  background: none;
}

.counter {
  margin-top: 96px;
  padding-top: 151px;
  padding-bottom: 151px;
  background: #f4f0ec;
  display: flex;
  justify-content: center;
}

.counter__content {
  display: flex;
  max-width: 1082px;
  gap: 76px;
}

.counter__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 246px;
}

.counter__item__desc {
  display: flex;
  max-width: 192px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.counter__item__desc__count {
  width: 77px;
  color: #cda274;
  font-family: DM Serif Display;
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 106.25px */
  letter-spacing: 1.7px;
}

.counter__item__desc__text {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.counter__item__vertical {
  border-right: 1px solid #cda274;
  height: 130px;
}

.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  margin-top: 96px;
}

.blog__heading {
  display: flex;
  width: 811px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.blog__title {
  color: #292f36;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

.blog__text {
  color: #4d5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.blog__content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 27px;
}

.blog #other {
  background: #f4f0ec;
}

.blog__item {
  position: relative;
  width: 382px;
  padding: 21px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.blog__item #other {
  background: #f4f0ec;
}

.blog__item__teg {
  position: absolute;
  width: 129px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 41px;
  top: 250px;
  border-radius: 8px 8px 8px 0px;
  background: #fff;
}

.blog__item__teg__text {
  color: #4d5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.blog__item__content {
  display: flex;
  width: 340px;
  height: 479px;
  flex-direction: column;
  align-items: center;
  gap: 21px;
}

.blog__item__subcontent {
  display: flex;
  width: 340px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}

.blog__item__subcontent__title {
  display: flex;
  width: 305px;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.blog__item__subcontent__date {
  display: flex;
  width: 340px;
  align-items: center;
  justify-content: space-between;
}

.blog__item__subcontent__date__text {
  color: #4d5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

// .pagination {
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 20px;
//   margin-top: 51px;
//   margin-bottom: 200px;
// }
// .pagination__item {
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 52px;
//   height: 52px;
// }
// .pagination__counter {
//   position: absolute;
// }

// .footer {
//   display: flex;
//   gap: 134px;
//   margin-top: 96px;
//   margin-bottom: 134px;
// }
// .footer__content {
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   flex-wrap: wrap;
//   max-width: 1199px;
//   align-items: flex-start;
//   gap: 101px;
// }
// .footer__interno {
//   display: flex;
//   width: 393px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 31px;
// }
// .footer__interno__text {
//   color: #4d5053;
//   font-family: Jost;
//   font-size: 22px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 150%; /* 33px */
//   letter-spacing: 0.22px;
// }
// .footer__interno__icons {
//   display: flex;
//   width: 225px;
//   align-items: center;
//   gap: 54px;
// }
// .footer__pages {
//   display: flex;
//   width: 125px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 9px;
// }
// .footer__pages__title {
//   color: #292f36;
//   font-family: DM Serif Display;
//   font-size: 25px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 125%; /* 31.25px */
// }
// .footer__pages__link {
//   color: #4d5053;
//   font-family: Jost;
//   font-size: 22px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 300%; /* 66px */
//   letter-spacing: 0.22px;
// }
// .footer__services {
//   display: flex;
//   width: 120px;
//   height: 66px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 9px;
// }
// .footer__contact {
//   display: flex;
//   width: 258px;
//   height: 272px;
//   flex-direction: column;
//   align-items: stretch;
//   gap: 26px;
//   flex-shrink: 0;
// }
// .footer__contact__contact {
//   color: #292f36;
//   font-family: DM Serif Display;
//   font-size: 25px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 125%; /* 31.25px */
// }
// .footer__contact__desc {
//   flex-direction: column;
//   color: #4d5053;
//   font-family: Jost;
//   font-size: 22px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 150%; /* 33px */
//   letter-spacing: 0.22px;
// }
</style>
