<template>
  <div class="articles-slider-wrapper">
    <VueSlickCarousel ref="c1" v-bind="settings" class="articles-slider-all">
      <Article v-for="(item, idx) in articles" :key="idx" :article="item" />
    </VueSlickCarousel>
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
    settings: {
      arrows: true,
      dots: false,
      slidesToShow: 2,
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
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style lang="scss">
.articles-slider {
  &-all {
    max-width: calc(100% + #{rem(16px)});
    margin: 0 rem(-8px);
    .slick-slide {
      padding: 0 rem(8px);
    }
  }
  &-wrapper {
    position: relative;
    margin-bottom: rem(16px);
  }
}
</style>
