{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = function () {
      return !!_v3;
    };
  _v4.hasArrayLengthDefineBug = function () {
    if (!_v3) return null;
    try {
      return 1 !== _v3([], "length", {
        value: 1
      }).length;
    } catch (_v0) {
      return !0;
    }
  }, _v1.exports = _v4;
}