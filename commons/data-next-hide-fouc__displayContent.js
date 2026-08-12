{
  "use strict";

  function _v3() {
    return new Promise(_v0 => {
      var _v1;
      _v1 = function () {
        for (var _v0 = document.querySelectorAll("[data-next-hide-fouc]"), _v1 = _v0.length; _v1--;) _v0[_v1].parentNode.removeChild(_v0[_v1]);
        _v0();
      }, window.requestAnimationFrame && window.self === window.top ? window.requestAnimationFrame(_v1) : window.setTimeout(_v1);
    });
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "displayContent", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  }), ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}