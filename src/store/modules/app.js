/* eslint-disable */

import Vue from 'vue';

const app = {
  state: {
    isPortrait: null,
    isMobile: null,
    showMobileNav: null,
    windowWidth: null,
    scrollY: null,
    popup: {
      opened: null,
      openedPopupContent: null,
      currentPopup: null,
      className: null,
      disabled: null,
      message: {
        head: null,
        body: null,
        btn: null,
      },
      data: null,
    },
    signupSocId: null,
  },
  mutations: {

  	SIGNUP_SOC_ID: (state, data) => {
  		state.signupSocId = data;
  	},

    SHOW_POPUP_CONTENT: (state, open) => {
      state.popup.openedPopupContent = open;
      state.popup.opened = open;

      if (open) {
      	document.body.classList.add("modal-open");
      } else {
      	document.body.classList.remove("modal-open");
      }
    },

    SHOW_POPUP: (state, obj) => {
      state.popup.opened = obj.opened;
      state.popup.currentPopup = obj.currentPopup;
      state.popup.message = obj.message;
      state.popup.data = obj.data;
      state.popup.className = obj.className;
      state.popup.disabled = obj.disabled;

      state.popup.openedPopupContent = obj.opened;

      if (obj.opened)
	      document.body.classList.add("modal-open");
	  else
  	  	document.body.classList.remove("modal-open");
    },

    CHANGE_POPUP_CLASSNAME: (state, name) => {
      state.popup.className = name;
    },

    UPDATE_IS_MOBILE: (state, isMobile) => {
      state.isMobile = isMobile;
    },

    SHOW_MOBILE_NAV: (state, show) => {
      state.showMobileNav = show;
    },

    UPDATE_IS_PORTRAIT: (state, isPortrait) => {
      state.isPortrait = isPortrait;
    },

    UPDATE_WINDOW_WIDTH(state, width) {
      state.windowWidth = width;
    },

    UPDATE_WINDOW_SCROLL_Y(state, val) {
      state.scrollY = val;
    },
  },
  actions: {
  }
};

export default app;
