{
  "use strict";

  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0).f,
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v5("".slice),
    _v14 = Math.min,
    _v15 = _v11("startsWith");
  _v4({
    target: "String",
    proto: !0,
    forced: !(!_v12 && !_v15 && (_v3 = _v6(String.prototype, "startsWith")) && !_v3.writable) && !_v15
  }, {
    startsWith: function (_v0) {
      var _v1 = _v8(_v10(this));
      _v9(_v0);
      var _v2 = _v8(_v0),
        _v3 = _v7(_v14(arguments.length > 1 ? arguments[1] : void 0, _v1.length));
      return _v13(_v1, _v3, _v3 + _v2.length) === _v2;
    }
  });
}