{
  "use strict";

  var _v3 = Object.prototype.toString,
    _v4 = Math.max,
    _v5 = function (_v0, _v1) {
      for (var _v2 = [], _v3 = 0; _v3 < _v0.length; _v3 += 1) _v2[_v3] = _v0[_v3];
      for (var _v4 = 0; _v4 < _v1.length; _v4 += 1) _v2[_v4 + _v0.length] = _v1[_v4];
      return _v2;
    },
    _v6 = function (_v0, _v1) {
      for (var _v2 = [], _v3 = _v1 || 0, _v4 = 0; _v3 < _v0.length; _v3 += 1, _v4 += 1) _v2[_v4] = _v0[_v3];
      return _v2;
    },
    _v7 = function (_v0, _v1) {
      for (var _v2 = "", _v3 = 0; _v3 < _v0.length; _v3 += 1) _v2 += _v0[_v3], _v3 + 1 < _v0.length && (_v2 += _v1);
      return _v2;
    };
  _v1.exports = function (_v0) {
    var _v1,
      _v2 = this;
    if ("function" != typeof _v2 || "[object Function]" !== _v3.apply(_v2)) throw TypeError("Function.prototype.bind called on incompatible " + _v2);
    for (var _v3 = _v6(arguments, 1), _v4 = _v4(0, _v2.length - _v3.length), _v5 = [], _v6 = 0; _v6 < _v4; _v6++) _v5[_v6] = "$" + _v6;
    if (_v1 = Function("binder", "return function (" + _v7(_v5, ",") + "){ return binder.apply(this,arguments); }")(function () {
      if (this instanceof _v1) {
        var _v0 = _v2.apply(this, _v5(_v3, arguments));
        return Object(_v0) === _v0 ? _v0 : this;
      }
      return _v2.apply(_v0, _v5(_v3, arguments));
    }), _v2.prototype) {
      var _v7 = function () {};
      _v7.prototype = _v2.prototype, _v1.prototype = new _v7(), _v7.prototype = null;
    }
    return _v1;
  };
}