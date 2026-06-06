{
  "use strict";

  function _v3(_v0, _v1) {
    var _v2 = 1 / 0;
    return _v0.some(function (_v0, _v1) {
      if (-1 !== _v1.path.indexOf(_v0)) return _v2 = _v1, !0;
    }), _v2;
  }
  _v2.__esModule = !0, _v2.default = function (_v0) {
    var _v1 = Object.keys(_v0);
    return function (_v0, _v1) {
      return _v3(_v1, _v0) - _v3(_v1, _v1);
    };
  }, _v1.exports = _v2.default;
}