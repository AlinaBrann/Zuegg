<template>
  <div class="tabs">
    <ul class="tabs__header-mob visible-xs" v-if="linksMobile">
      <li
        class="tabs__header-mob-item"
        v-for="(link, index) in linksMobile"
        :key="index"
      >
        <router-link
          class="tabs__header-mob-link"
          active-class="tabs__header-mob-link--active"
          :to="link.href"
        >
          {{ link.value }}
        </router-link>
      </li>
    </ul>
    <ul class="tabs__header">
      <li class="tabs__header-item" v-for="(link, index) in links" :key="index">
        <router-link
          class="tabs__header-link"
          active-class="tabs__header-link--active"
          :to="link.href"
        >
          {{ link.value }}
        </router-link>
      </li>
    </ul>

    <div class="tabs__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["links", "linksMobile"],
};
</script>

<style lang="scss" scoped>
.tabs {
  padding: 25px 25px 0px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
  }

  &__header-item {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }

  &__header-link {
    position: relative;
    min-width: 220px;
    height: 36px;
    display: flex;
    justify-content: center;
    padding-top: 3px;
    font-size: 20px;
    line-height: 36px;
    color: #a8a8a8;
    z-index: 1;
    &:before {
      content: "";
      position: absolute;
      top: 0px;
      left: 50%;
      height: 100%;
      width: 100%;
      background: url("../assets/images/tabs-nav-bg.png") no-repeat center;
      background-size: contain;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  &__header-link--active {
    position: relative;
    color: #fff;

    &:before {
      background-image: url("../assets/images/tabs-nav-bg-active.png");
    }
  }

  &__header-mob {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    &-item {
      &:first-of-type {
        transform: rotate(90deg);
      }
      &:last-of-type {
        transform: rotate(-90deg);
      }
    }
    &-link {
      display: block;
      font-size: 0;
      width: 26px;
      height: 13px;
      background: url("../assets/images/select_arrow-2.svg") no-repeat center;
      background-size: contain;

      &--active {
        position: relative;
        min-width: 200px;
        flex-grow: 0;
        flex-shrink: 0;
        height: 36px;
        display: flex;
        justify-content: center;
        padding-top: 3px;
        font-size: 16px;
        line-height: 36px;
        color: #fff;
        z-index: 1;
        &:before {
          content: "";
          position: absolute;
          top: 0px;
          left: 50%;
          height: 100%;
          width: 100%;
          background: url("../assets/images/tabs-nav-bg-active.png") no-repeat
            center;
          background-size: contain;
          transform: translateX(-50%);
          z-index: -1;
        }
      }
    }
  }

  &__content {
    position: relative;
    min-height: 300px;

    padding: 35px 35px 45px;
  }

  @media (max-width: 1023px) {
    &__header-link {
      min-width: 190px;
      font-size: 20px;
      padding-bottom: 13px;
      padding: 2px 20px 0px;
    }
  }
  @media (max-width: 768px) {
    .tabs__header-mob {
      display: none;
    }
  }
  @media (max-width: 650px) {
    .tabs__header-mob {
      display: flex;
    }
    &__header-link {
      width: 12px;
      height: 12px;
      min-width: auto;
      margin-bottom: 0;
      font-size: 0;
      padding: 0;
      border: 1px solid #cecece;
      border-radius: 50%;
      &::before {
        display: none;
      }
      &--active {
        background: #912982;
        border-color: #912982;
      }
    }
  }
  @media (max-width: 440px) {
    &__header-link {
      text-align: center;
    }

    &__content {
      padding: 18px 0;
    }
  }
}
</style>
