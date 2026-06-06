{
  "use strict";

  _v2.__esModule = !0, _v2.default = function (_v0) {
    for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
    return _v0.reduce(function (_v0, _v1) {
      var _v2 = _v2.shift();
      return _v0 + (null == _v2 ? "" : _v2) + _v1;
    }).replace(/^\./, "");
  }, _v1.exports = _v2.default;
}