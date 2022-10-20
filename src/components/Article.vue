<template>
  <div class="article-preview" :class="{ _big: big }">
    <div class="article-preview__img-wrapper">
      <img
        :src="require(`../assets/images/about/${article.img}`)"
        alt=""
        class="article-preview__img"
      />
    </div>
    <div class="article-preview__content">
      <div class="article-preview__category">{{ article.category }}</div>
      <div class="article-preview__title">{{ article.title | typograf }}</div>
      <div class="article-preview__descr">
        {{ article.text }}
      </div>
      <router-link
        v-if="!big"
        class="article-preview__btn btn btn--bordered"
        :to="`/articles/${article.id}`"
      >
        <span class="shadow"></span>
        открыть
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article", "big"],
  methods: {},
};
</script>

<style lang="scss" scoped>
.article-preview {
  position: relative;
  display: flex;
  height: rem(274px);
  overflow: hidden;
  border-radius: rem(20px);
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.6) -3.12%,
          rgba(0, 0, 0, 0.2) 100%
        );
      }
    }
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: rem(26px) rem(40px);
    color: #fff;
    ._big & {
      padding-right: rem(70px);
    }
  }
  &__category {
    display: inline-block;
    height: rem(36px);
    padding: rem(9px) rem(17px);
    margin-bottom: rem(16px);
    border-radius: rem(30px);
    background: $blue;
    font-family: "CeraProBold";
    font-size: rem(12px);
  }
  &__title {
    margin-bottom: rem(8px);
    font-family: "CeraProBlack";
    text-transform: uppercase;
    font-size: rem(20px);
    line-height: rem(26px);
    ._big & {
      font-size: rem(30px);
      line-height: rem(39px);
    }
  }
  &__descr {
    font-size: rem(14px);
    line-height: rem(22px);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &__btn {
    margin-top: auto;
  }
}
</style>
