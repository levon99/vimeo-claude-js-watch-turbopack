{
  "use strict";

  var _v3 = _v0.r(0);
  function _v4(_v0) {
    return encodeURIComponent(_v0).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  _v1.exports = function (_v0, _v1, _v2) {
    if (!_v1) return _v0;
    if (_v2) _v3 = _v2(_v1);else if (_v3.isURLSearchParams(_v1)) _v3 = _v1.toString();else {
      var _v3,
        _v4 = [];
      _v3.forEach(_v1, function (_v0, _v1) {
        null != _v0 && (_v3.isArray(_v0) ? _v1 += "[]" : _v0 = [_v0], _v3.forEach(_v0, function (_v0) {
          _v3.isDate(_v0) ? _v0 = _v0.toISOString() : _v3.isObject(_v0) && (_v0 = JSON.stringify(_v0)), _v4.push(_v4(_v1) + "=" + _v4(_v0));
        }));
      }), _v3 = _v4.join("&");
    }
    if (_v3) {
      var _v5 = _v0.indexOf("#");
      -1 !== _v5 && (_v0 = _v0.slice(0, _v5)), _v0 += (-1 === _v0.indexOf("?") ? "?" : "&") + _v3;
    }
    return _v0;
  };
}