{
  "use strict";

  _v0.s(["default", 0, () => {
    let _v0 = "u" > typeof navigator ? navigator.userAgent : "";
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_v0) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_v0) ? "mobile" : "desktop";
  }]);
}