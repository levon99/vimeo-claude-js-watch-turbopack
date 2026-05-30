{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "addPathPrefix", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = _v0.r(0);
  function _v4(_v0, _v1) {
    if (!_v0.startsWith("/") || !_v1) return _v0;
    let {
      pathname: _v2,
      query: _v3,
      hash: _v4
    } = (0, _v3.parsePath)(_v0);
    return `${_v1}${_v2}${_v3}${_v4}`;
  }
}