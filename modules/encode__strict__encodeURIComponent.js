{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1) {
    return _v1.encode ? _v1.strict ? _v3(_v0) : encodeURIComponent(_v0) : _v0;
  }
  _v2.extract = function (_v0) {
    return _v0.split("?")[1] || "";
  }, _v2.parse = function (_v0) {
    var _v1 = Object.create(null);
    return "string" == typeof _v0 && (_v0 = _v0.trim().replace(/^(\?|#|&)/, "")) && _v0.split("&").forEach(function (_v0) {
      var _v1 = _v0.replace(/\+/g, " ").split("="),
        _v2 = _v1.shift(),
        _v3 = _v1.length > 0 ? _v1.join("=") : void 0;
      _v2 = decodeURIComponent(_v2), _v3 = void 0 === _v3 ? null : decodeURIComponent(_v3), void 0 === _v1[_v2] ? _v1[_v2] = _v3 : Array.isArray(_v1[_v2]) ? _v1[_v2].push(_v3) : _v1[_v2] = [_v1[_v2], _v3];
    }), _v1;
  }, _v2.stringify = function (_v0, _v1) {
    return _v1 = _v4({
      encode: !0,
      strict: !0
    }, _v1), _v0 ? Object.keys(_v0).sort().map(function (_v0) {
      var _v1 = _v0[_v0];
      if (void 0 === _v1) return "";
      if (null === _v1) return _v5(_v0, _v1);
      if (Array.isArray(_v1)) {
        var _v2 = [];
        return _v1.slice().forEach(function (_v0) {
          void 0 !== _v0 && (null === _v0 ? _v2.push(_v5(_v0, _v1)) : _v2.push(_v5(_v0, _v1) + "=" + _v5(_v0, _v1)));
        }), _v2.join("&");
      }
      return _v5(_v0, _v1) + "=" + _v5(_v1, _v1);
    }).filter(function (_v0) {
      return _v0.length > 0;
    }).join("&") : "";
  };
}