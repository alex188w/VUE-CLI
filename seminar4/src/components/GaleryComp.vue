<template>
    <div>
        <div>
            <img :src="currentImgUrl" alt="img" class="img-big">
        </div>
        <div>
            <img class="img" v-for="(img, index) in imgList" :key="index" :src="img.url" alt="img" @click="imgSelectIndex(index)">
        </div>
    </div>
</template>

<script>
export default {
  name: 'GaleryComp',

  data () {
    return {
      currentImgIndex: 0,
      imgList: [{
        url: 'http://www.mobeloostrov.ru/uploads/posts/2022-07/1657269499_dji-0301-hdr-edit_jpg_b60d29950901e9947566c4789bd1860b.jpg'
      },
      {
        url: 'https://korona-severa.ru/wp-content/uploads/e/b/1/eb108b655e40cf5f7967ef67ea66ef15.jpeg'
      },
      {
        url: 'https://static.tildacdn.com/tild3464-3461-4733-b039-326462346239/158.jpg'
      }
      ]

    }
  },
  computed: {
    currentImgUrl () {
      return this.imgList[this.currentImgIndex].url
    }
  },

  mounted () {

  },

  methods: {
    imgSelectIndex (i) {
      this.currentImgIndex = i
    }
  }
}
</script>

<style lang="scss" scoped></style>
