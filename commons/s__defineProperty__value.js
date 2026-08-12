{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.formatRequestEvent = _v2.parseJwt = _v2.getCookie = void 0, _v2.getCookie = function (_v0) {
    if ("u" < typeof document) return null;
    var _v1 = document.cookie.match(new RegExp("(;\\s)?".concat(_v0, "=")));
    if (!_v1 || 0 == _v1.length || void 0 === _v1.index) return null;
    var _v2 = document.cookie.indexOf(";", _v1.index + 1),
      _v3 = _v1.index + _v1[0].length;
    return decodeURIComponent(-1 === _v2 ? document.cookie.substr(_v3) : document.cookie.substring(_v3, _v2));
  }, _v2.parseJwt = function (_v0) {
    return JSON.parse(decodeURIComponent(atob(_v0.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")).split("").map(function (_v0) {
      return "%" + ("00" + _v0.charCodeAt(0).toString(16)).slice(-2);
    }).join("")));
  }, _v2.formatRequestEvent = function (_v0) {
    var _v1 = _v0.split(".");
    if (_v1.length <= 2) return _v0;
    var _v2 = _v1.pop();
    return "".concat(_v1.join("_"), ".").concat(_v2);
  };
}