{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = Object.assign,
    _v13 = Object.defineProperty,
    _v14 = _v4([].concat);
  _v1.exports = !_v12 || _v6(function () {
    if (_v3 && 1 !== _v12({
      b: 1
    }, _v12(_v13({}, "a", {
      enumerable: !0,
      get: function () {
        _v13(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b) return !0;
    var _v0 = {},
      _v1 = {},
      _v2 = Symbol("assign detection"),
      _v3 = "abcdefghijklmnopqrst";
    return _v0[_v2] = 7, _v3.split("").forEach(function (_v0) {
      _v1[_v0] = _v0;
    }), 7 !== _v12({}, _v0)[_v2] || _v7(_v12({}, _v1)).join("") !== _v3;
  }) ? function (_v0, _v1) {
    for (var _v2 = _v10(_v0), _v3 = arguments.length, _v4 = 1, _v5 = _v8.f, _v6 = _v9.f; _v3 > _v4;) for (var _v7, _v8 = _v11(arguments[_v4++]), _v9 = _v5 ? _v14(_v7(_v8), _v5(_v8)) : _v7(_v8), _v10 = _v9.length, _v11 = 0; _v10 > _v11;) _v7 = _v9[_v11++], (!_v3 || _v5(_v6, _v8, _v7)) && (_v2[_v7] = _v8[_v7]);
    return _v2;
  } : _v12;
}