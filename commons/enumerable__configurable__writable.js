{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = TypeError,
    _v9 = Object.defineProperty,
    _v10 = Object.getOwnPropertyDescriptor,
    _v11 = "enumerable",
    _v12 = "configurable",
    _v13 = "writable";
  _v2.f = _v3 ? _v5 ? function (_v0, _v1, _v2) {
    if (_v6(_v0), _v1 = _v7(_v1), _v6(_v2), "function" == typeof _v0 && "prototype" === _v1 && "value" in _v2 && _v13 in _v2 && !_v2[_v13]) {
      var _v3 = _v10(_v0, _v1);
      _v3 && _v3[_v13] && (_v0[_v1] = _v2.value, _v2 = {
        configurable: _v12 in _v2 ? _v2[_v12] : _v3[_v12],
        enumerable: _v11 in _v2 ? _v2[_v11] : _v3[_v11],
        writable: !1
      });
    }
    return _v9(_v0, _v1, _v2);
  } : _v9 : function (_v0, _v1, _v2) {
    if (_v6(_v0), _v1 = _v7(_v1), _v6(_v2), _v4) try {
      return _v9(_v0, _v1, _v2);
    } catch (_v0) {}
    if ("get" in _v2 || "set" in _v2) throw new _v8("Accessors not supported");
    return "value" in _v2 && (_v0[_v1] = _v2.value), _v0;
  };
}