{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = Object.prototype.toString,
    _v5 = Object.prototype.hasOwnProperty,
    _v6 = function (_v0, _v1, _v2) {
      for (var _v3 = 0, _v4 = _v0.length; _v3 < _v4; _v3++) _v5.call(_v0, _v3) && (null == _v2 ? _v1(_v0[_v3], _v3, _v0) : _v1.call(_v2, _v0[_v3], _v3, _v0));
    },
    _v7 = function (_v0, _v1, _v2) {
      for (var _v3 = 0, _v4 = _v0.length; _v3 < _v4; _v3++) null == _v2 ? _v1(_v0.charAt(_v3), _v3, _v0) : _v1.call(_v2, _v0.charAt(_v3), _v3, _v0);
    },
    _v8 = function (_v0, _v1, _v2) {
      for (var _v3 in _v0) _v5.call(_v0, _v3) && (null == _v2 ? _v1(_v0[_v3], _v3, _v0) : _v1.call(_v2, _v0[_v3], _v3, _v0));
    };
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3;
    if (!_v3(_v1)) throw TypeError("iterator must be a function");
    (arguments.length >= 3 && (_v3 = _v2), "[object Array]" === _v4.call(_v0)) ? _v6(_v0, _v1, _v3) : "string" == typeof _v0 ? _v7(_v0, _v1, _v3) : _v8(_v0, _v1, _v3);
  };
}