<template>
  <div class="articles-slider-wrapper">
    <VueSlickCarousel
      ref="c1"
      :focusOnSelect="true"
      @afterChange="afterPageChange"
      v-bind="settings"
      class="articles-slider"
    >
      <Article
        v-for="(item, idx) in articles"
        :key="idx"
        :article="item"
        :big="true"
      />
    </VueSlickCarousel>
    <div class="articles-slider-counter">
      {{ currentPage }} из {{ articles.length }}
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import Article from "./Article.vue";
export default {
  props: ["articles"],
  components: {
    VueSlickCarousel,
    Article,
  },
  data: () => ({
    sliderPageIndex: 0,
    settings: {
      arrows: false,
      dots: true,
      slidesToShow: 1,
      autoplay: true,
      fade: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade: true,
            dots: false,
          },
        },
      ],
    },
  }),
  methods: {
    afterPageChange(page) {
      this.sliderPageIndex = page;
    },
  },
  computed: {
    currentPage() {
      if (this.sliderPageIndex == 0) {
        return 1;
      } else {
        return this.sliderPageIndex / this.settings.slidesToScroll + 1;
      }
    },
  },
  mounted() {
    const dotsWidth = document.querySelector(".slick-dots").clientWidth;
    const counter = document.querySelector(".articles-slider-counter");
    counter.style.left = dotsWidth + 50 + "px";
  },
};
</script>

<style lang="scss" scoped>
.articles-slider {
  height: rem(274px);
  &-wrapper {
    position: relative;
    margin-bottom: rem(16px);
  }
  &-counter {
    position: absolute;
    bottom: rem(30px);
    color: #fff;
    line-height: 1;
    font-size: rem(14px);
  }
}
</style>
