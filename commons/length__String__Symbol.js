{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0).CONFIGURABLE,
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v10.enforce,
    _v12 = _v10.get,
    _v13 = String,
    _v14 = Object.defineProperty,
    _v15 = _v3("".slice),
    _v16 = _v3("".replace),
    _v17 = _v3([].join),
    _v18 = _v7 && !_v4(function () {
      return 8 !== _v14(function () {}, "length", {
        value: 8
      }).length;
    }),
    _v19 = String(String).split("String"),
    _v20 = _v1.exports = function (_v0, _v1, _v2) {
      "Symbol(" === _v15(_v13(_v1), 0, 7) && (_v1 = "[" + _v16(_v13(_v1), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), _v2 && _v2.getter && (_v1 = "get " + _v1), _v2 && _v2.setter && (_v1 = "set " + _v1), (!_v6(_v0, "name") || _v8 && _v0.name !== _v1) && (_v7 ? _v14(_v0, "name", {
        value: _v1,
        configurable: !0
      }) : _v0.name = _v1), _v18 && _v2 && _v6(_v2, "arity") && _v0.length !== _v2.arity && _v14(_v0, "length", {
        value: _v2.arity
      });
      try {
        _v2 && _v6(_v2, "constructor") && _v2.constructor ? _v7 && _v14(_v0, "prototype", {
          writable: !1
        }) : _v0.prototype && (_v0.prototype = void 0);
      } catch (_v0) {}
      var _v3 = _v11(_v0);
      return _v6(_v3, "source") || (_v3.source = _v17(_v19, "string" == typeof _v1 ? _v1 : "")), _v0;
    };
  Function.prototype.toString = _v20(function () {
    return _v5(this) && _v12(this).source || _v9(this);
  }, "toString");
}