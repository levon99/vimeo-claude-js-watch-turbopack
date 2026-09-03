{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = Date.prototype,
    _v6 = "Invalid Date",
    _v7 = "toString",
    _v8 = _v3(_v5[_v7]),
    _v9 = _v3(_v5.getTime);
  String(new Date(NaN)) !== _v6 && _v4(_v5, _v7, function () {
    var _v0 = _v9(this);
    return _v0 == _v0 ? _v8(this) : _v6;
  });
}