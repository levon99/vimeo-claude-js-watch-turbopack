{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v6("Object.prototype.toString"),
    _v10 = _v0.r(0)(),
    _v11 = "u" < typeof globalThis ? _v0.g : globalThis,
    _v12 = _v4(),
    _v13 = _v6("String.prototype.slice"),
    _v14 = _v6("Array.prototype.indexOf", !0) || function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v0.length; _v2 += 1) if (_v0[_v2] === _v1) return _v2;
      return -1;
    },
    _v15 = {
      __proto__: null
    };
  _v10 && _v7 && _v8 ? _v3(_v12, function (_v0) {
    var _v1 = new _v11[_v0]();
    if (Symbol.toStringTag in _v1 && _v8) {
      var _v2 = _v8(_v1),
        _v3 = _v7(_v2, Symbol.toStringTag);
      if (!_v3 && _v2 && (_v3 = _v7(_v8(_v2), Symbol.toStringTag)), _v3 && _v3.get) {
        var _v4 = _v5(_v3.get);
        _v15["$" + _v0] = _v4;
      }
    }
  }) : _v3(_v12, function (_v0) {
    var _v1 = new _v11[_v0](),
      _v2 = _v1.slice || _v1.set;
    if (_v2) {
      var _v3 = _v5(_v2);
      _v15["$" + _v0] = _v3;
    }
  });
  var _v16 = function (_v0) {
      var _v1 = !1;
      return _v3(_v15, function (_v0, _v1) {
        if (!_v1) try {
          "$" + _v0(_v0) === _v1 && (_v1 = _v13(_v1, 1));
        } catch (_v0) {}
      }), _v1;
    },
    _v17 = function (_v0) {
      var _v1 = !1;
      return _v3(_v15, function (_v0, _v1) {
        if (!_v1) try {
          _v0(_v0), _v1 = _v13(_v1, 1);
        } catch (_v0) {}
      }), _v1;
    };
  _v1.exports = function (_v0) {
    if (!_v0 || "object" != typeof _v0) return !1;
    if (!_v10) {
      var _v1 = _v13(_v9(_v0), 8, -1);
      return _v14(_v12, _v1) > -1 ? _v1 : "Object" === _v1 && _v17(_v0);
    }
    return _v7 ? _v16(_v0) : null;
  };
}