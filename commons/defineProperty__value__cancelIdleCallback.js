{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    cancelIdleCallback: function () {
      return _v6;
    },
    requestIdleCallback: function () {
      return _v5;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (_v0) {
      let _v1 = Date.now();
      return self.setTimeout(function () {
        _v0({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - _v1));
          }
        });
      }, 1);
    },
    _v6 = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (_v0) {
      return clearTimeout(_v0);
    };
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}