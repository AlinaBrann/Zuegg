const getters = {
  isPortrait: (state) => state.app.isPortrait,
  isMobile: (state) => state.app.isMobile,
  showMobileNav: (state) => state.app.showMobileNav,
  windowWidth: (state) => state.app.windowWidth,
  scrollY: (state) => state.app.scrollY,
  token: (state) => state.account.token,
  user: (state) => state.account.user,
  checks: (state) => state.account.checks,
  garant: (state) => state.account.garant,
  login: (state) => state.account.login,
  winners: (state) => state.app.winners,
  popup: (state) => state.app.popup,
  signupSocId: (state) => state.app.signupSocId,
  agree: (state) => state.account.agree,
};

export default getters;
