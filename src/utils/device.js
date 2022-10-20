export const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

export const isTouch = "ontouchstart" in window || navigator.maxTouchPoints;

export const isPortrait = () =>
  window.matchMedia("(orientation: portrait)").matches;

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export const getOffset = (element, horizontal = false) => {
  if (!element) return 0;
  return (
    getOffset(element.offsetParent, horizontal) +
    (horizontal ? element.offsetLeft : element.offsetTop)
  );
};

export const iOS = () =>
  [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
  ].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  (navigator.userAgent.includes("Mac") && "ontouchend" in document);

export default {
  isIE11,
  isTouch,
  isPortrait,
  isMobile,
  iOS,
  getOffset,
};
