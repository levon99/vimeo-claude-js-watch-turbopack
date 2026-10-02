{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = TypeError,
    _v10 = _v8("toPrimitive");
  _v1.exports = function (_v0, _v1) {
    if (!_v4(_v0) || _v5(_v0)) return _v0;
    var _v2,
      _v3 = _v6(_v0, _v10);
    if (_v3) {
      if (void 0 === _v1 && (_v1 = "default"), !_v4(_v2 = _v3(_v3, _v0, _v1)) || _v5(_v2)) return _v2;
      throw new _v9("Can't convert object to primitive value");
    }
    return void 0 === _v1 && (_v1 = "number"), _v7(_v0, _v1);
  };
}