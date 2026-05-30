{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "isDynamicRoute", {
    enumerable: !0,
    get: function () {
      return _v6;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/,
    _v5 = /\/\[[^/]+\](?=\/|$)/;
  function _v6(_v0, _v1 = !0) {
    return ((0, _v3.isInterceptionRouteAppPath)(_v0) && (_v0 = (0, _v3.extractInterceptionRouteInformation)(_v0).interceptedRoute), _v1) ? _v5.test(_v0) : _v4.test(_v0);
  }
}