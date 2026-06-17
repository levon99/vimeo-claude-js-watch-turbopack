{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0);
  _v2.default = function (_v0) {
    if (!(0, _v3.default)(_v0)) throw TypeError("Invalid UUID");
    return parseInt(_v0.slice(14, 15), 16);
  };
}