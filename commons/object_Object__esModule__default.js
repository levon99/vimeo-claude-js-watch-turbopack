{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = function _v0(_v1, _v2) {
    for (var _v3 in _v2) if ((0, _v4.default)(_v2, _v3)) {
      var _v4 = _v1[_v3],
        _v5 = _v2[_v3];
      if (void 0 === _v5) continue;
      (0, _v5.default)(_v5) ? _v1[_v3] = (0, _v5.default)(_v4) ? _v4.concat(_v5) : _v5 : _v6(_v5) ? _v1[_v3] = _v6(_v4) ? _v0(_v4, _v5) : _v5 : Array.isArray(_v5) ? _v1[_v3] = Array.isArray(_v4) ? _v4.concat(_v5) : _v5 : _v1[_v3] = _v2[_v3];
    }
    return _v1;
  };
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0)),
    _v6 = function (_v0) {
      return "[object Object]" === Object.prototype.toString.call(_v0);
    };
  _v1.exports = _v2.default;
}