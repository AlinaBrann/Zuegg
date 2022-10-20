import Vue from "vue";
import App from "./App.vue";
import "jquery";

import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/styles/main.scss";
import VModal from "vue-js-modal";

import typograf from "./utils/filters";
import VueScrollactive from "vue-scrollactive";
import vSelect from "vue-select";
import "vue-select/src/scss/vue-select.scss";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VTooltip from "v-tooltip";
import VueSmoothScroll from "vue2-smooth-scroll";
import Vuelidate from "vuelidate";
import VueTheMask from "vue-the-mask";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/dist/fullpage.css";
import LoadScript from "vue-plugin-load-script";
import VueGtm from "@gtm-support/vue2-gtm";
Vue.use(LoadScript);
Vue.use(VueFullPage);
Vue.use(VueScrollactive);
Vue.component("v-select", vSelect);
Vue.use(VTooltip);
Vue.filter("text", typograf);
Vue.use(VueSmoothScroll);
Vue.use(VueTheMask);
Vue.use(VModal);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    gtmEvent: (label, action, category) => {
      window.dataLayer?.push({
        event: "gaEvent",
        event_category: category || "",
        event_action: action || "",
        event_label: label || "",
      });
    },
    rememberSoc(item) {
      localStorage.socialName = item;
    },
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueGtm, {
  id: "GTM-KC6T87B", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']

  defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
  compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
  nonce: "2726c7f26c", // Will add `nonce` to the script tag
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
});
