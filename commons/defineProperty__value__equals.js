{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.equals = void 0, _v2.equals = function (_v0, _v1) {
    return _v0 === _v1 || !!(Array.isArray(_v0) && Array.isArray(_v1)) && _v0.length === _v1.length && _v0.every(function (_v0, _v1) {
      return _v1[_v1] === _v0;
    });
  };
}