{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0).RegExp,
    _v5 = _v3(function () {
      var _v0 = _v4("a", "y");
      return _v0.lastIndex = 2, null !== _v0.exec("abcd");
    }),
    _v6 = _v5 || _v3(function () {
      return !_v4("a", "y").sticky;
    });
  _v1.exports = {
    BROKEN_CARET: _v5 || _v3(function () {
      var _v0 = _v4("^r", "gy");
      return _v0.lastIndex = 2, null !== _v0.exec("str");
    }),
    MISSED_STICKY: _v6,
    UNSUPPORTED_Y: _v5
  };
}