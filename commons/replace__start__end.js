{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v3("".replace),
    _v8 = RegExp("^[" + _v6 + "]+"),
    _v9 = RegExp("(^|[^" + _v6 + "])[" + _v6 + "]+$"),
    _v10 = function (_v0) {
      return function (_v0) {
        var _v1 = _v5(_v4(_v0));
        return 1 & _v0 && (_v1 = _v7(_v1, _v8, "")), 2 & _v0 && (_v1 = _v7(_v1, _v9, "$1")), _v1;
      };
    };
  _v1.exports = {
    start: _v10(1),
    end: _v10(2),
    trim: _v10(3)
  };
}