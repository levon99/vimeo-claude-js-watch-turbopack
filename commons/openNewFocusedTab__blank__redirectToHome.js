{
  "use strict";

  _v0.s(["openNewFocusedTab", 0, function (_v0) {
    window.open(_v0, "_blank")?.focus();
  }, "redirectToHome", 0, function () {
    window.location.href = "/";
  }]);
}