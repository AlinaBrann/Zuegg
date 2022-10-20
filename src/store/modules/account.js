import {
  getProfile,
  subscribe,
} from "../../api/user";
import { getToken, setToken, removeToken } from "../../utils/auth";


/* eslint-disable */

const account = {
  state: {
    token: getToken(),
    user: null,
    guid: null,
    login: null,
    vkStatus: null,
    checks: null,
    garant: null,
    agree: false,
  },
  mutations: {
    SET_LOGIN: (state, o) => {
      state.login = o;
    },

    SET_USER: (state, user) => {
      state.user = user;
    },

    
  },

  actions: {
    Subscribe({
      commit
    }, data) {
      return (async () => subscribe(data))();
    },

    GetProfile({commit}) {
      return new Promise((resolve, reject) => {
        getProfile()
          .then((response) => {

            if (response.result) {
              commit('SET_USER', response.data);
              const rules1 = response.data.profile.rules1 === 1 ? true : false;
              commit("SET_AGREE", rules1);

            }

            resolve(response);
          });
         
      });
      
    },
  }
};

export default account;