import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Subscribe from "../views/Subscribe.vue";
import ComingSoon from "../views/ComingSoon.vue";

Vue.use(VueRouter);

const titlePrefix = "Zuegg — ";
const store = require("../store");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: titlePrefix + "Главная",
    },
  },
  {
    path: "/articles/:id",
    name: "Article",
    component: Article,
    props: true,
    meta: {
      title: titlePrefix + "Статья",
    },
  },
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
    meta: {
      title: titlePrefix + "Акция начнется 1 октября 2021 г.",
    },
  },
  {
    path: "/subscribe",
    name: "Subscribe",
    component: Subscribe,
    meta: {
      title: titlePrefix + "Тем, кто интересуется здоровым питанием",
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: Home },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
        offset: {
          y: 0,
        },
      };
    }
    return { x: 0, y: 0 }; // Go to the top of the page if no hash
  },
});

export default router;
