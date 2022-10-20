<template>
  <div id="app">
    <Header v-if="showHeader" :headerModified="headerModified" />
    <div class="app-content">
      <router-view />
    </div>
    <CommonError />
    <CommonSuccess />
    <TemporarilyUnavailable />
  </div>
</template>
<script>
import CommonSuccess from "./components/modals/commonSuccess.vue";
import Header from "@/components/AppHeader.vue";
import TemporarilyUnavailable from "@/components/modals/temporarilyUnavailable.vue";

//import UploadCheck from "@/components/modals/uploadCheck.vue";
import CommonError from "@/components/modals/commonError.vue";
export default {
  components: {
    Header,
    CommonError,
    TemporarilyUnavailable,
    CommonSuccess,
  },
  data: function () {
    return {
      showHeader: true,
      showFooter: true,
      headerModified: true,
    };
  },
  methods: {
    setHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
    showModal(name) {
      this.$modal.show(name);
    },

    /* eslint-enable */
  },
  mounted() {
    this.setHeight();

    window.addEventListener("resize", this.setHeight);
    this.$root.$on("onLogined", function () {});
  },

  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || "";
      },
      immediate: true,
    },

    "$route.path"(value) {
      let navs = document.querySelectorAll(".header__nav-link");
      if (value != "/") {
        navs.forEach((nav) => {
          nav.classList.remove("active");
        });
      }
    },
  },
};
</script>

<style lang="scss">
.app-content {
  flex: 1;
  z-index: 1;
  @media (min-width: 640px) {
    display: flex;

    & > div {
      flex: 1;
      max-width: 100%;
    }
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  position: relative;
  min-width: 320px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0%;
    height: 100vh;
    width: 100%;
    display: block;
    background: linear-gradient(
      128.47deg,
      #c4c4c4 -35.58%,
      rgba(196, 196, 196, 0) 39.55%
    );
    transform: rotate(-180deg);
    opacity: 0.3;
    pointer-events: none;
  }
  @media (min-width: $md) {
    &::after {
      width: 30%;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
