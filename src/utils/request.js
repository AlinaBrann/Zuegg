import axios from "axios";
import Vue from "vue";
import VueNoty from "vuejs-noty";
import { getToken } from "./auth";

Vue.use(VueNoty);

const store = require("../store");

const BASE_API = "https://zuegg-promo.ru/backend/api/";

const service = axios.create({
  baseURL: BASE_API,
  timeout: 15000,
});

[service].forEach((item) => {
  item.interceptors.request.use(
    (config) => {
      const conf = config;
      conf.headers["Content-Type"] = "application/x-www-form-urlencoded";

      if (store.default.getters.token) {
        conf.headers["X-Auth-Token"] = getToken();
      }

      // conf.headers["guid"] = store.default.getters.user.participant.guid;

      return conf;
    },
    (error) => {
      if (!window.PRERENDER_INJECTED) {
        Vue.noty.error(
          `<b>Упс. Что-то пошло не так, повторите позже.</b> <div>${error}</div>`
        );
      }

      Promise.reject(error);
    }
  );

  item.interceptors.response.use(
    (response) => {
      const res = response.data;
      // if (res.error === 404) {
      //   // токен не валиден
      //   if (!window.PRERENDER_INJECTED) {
      //     Vue.noty.error(
      //       `<b>Упс. Что-то пошло не так, повторите позже.</b> <div>${res.message}</div>`
      //     );
      //   }

      //   store.default.dispatch("LogOut");

      //   return Promise.reject(new Error("error"));
      // }
      return res;
    },
    (error) => {
      // if (!window.PRERENDER_INJECTED) {
      //   Vue.noty.error(
      //     `<b>Упс. Что-то пошло не так, повторите позже.</b> <div>${error}</div>`
      //   );
      // }

      return Promise.reject(error);
    }
  );
});

export { BASE_API };

export default service;
