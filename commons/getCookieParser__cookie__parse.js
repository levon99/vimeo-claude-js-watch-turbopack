{
  "use strict";

  function _v3(_v0) {
    return function () {
      let {
        cookie: _v0
      } = _v0;
      if (!_v0) return {};
      let {
        parse: _v1
      } = _v0.r(0);
      return _v1(Array.isArray(_v0) ? _v0.join("; ") : _v0);
    };
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "getCookieParser", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}