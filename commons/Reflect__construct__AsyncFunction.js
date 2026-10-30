{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = function () {},
    _v10 = _v7("Reflect", "construct"),
    _v11 = /^\s*(?:class|function)\b/,
    _v12 = _v3(_v11.exec),
    _v13 = !_v11.test(_v9),
    _v14 = function (_v0) {
      if (!_v5(_v0)) return !1;
      try {
        return _v10(_v9, [], _v0), !0;
      } catch (_v0) {
        return !1;
      }
    },
    _v15 = function (_v0) {
      if (!_v5(_v0)) return !1;
      switch (_v6(_v0)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return _v13 || !!_v12(_v11, _v8(_v0));
      } catch (_v0) {
        return !0;
      }
    };
  _v15.sham = !0, _v1.exports = !_v10 || _v4(function () {
    var _v0;
    return _v14(_v14.call) || !_v14(Object) || !_v14(function () {
      _v0 = !0;
    }) || _v0;
  }) ? _v15 : _v14;
}