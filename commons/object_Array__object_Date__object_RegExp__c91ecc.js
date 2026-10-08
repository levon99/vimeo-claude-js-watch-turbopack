{
  "use strict";

  function _v3(_v0) {
    return _v0.replace(/[_.-](\w|$)/g, function (_v0, _v1) {
      return _v1.toUpperCase();
    });
  }
  _v1.exports = function (_v0) {
    return "string" == typeof _v0 ? _v3(_v0) : function _v0(_v1) {
      return !_v1 || "object" != typeof _v1 || _v5(_v1) || _v6(_v1) ? _v1 : _v4(_v1) ? function (_v0, _v1) {
        if (_v0.map) return _v0.map(_v1);
        for (var _v2 = [], _v3 = 0; _v3 < _v0.length; _v3++) _v2.push(_v1(_v0[_v3], _v3));
        return _v2;
      }(_v1, _v0) : function (_v0, _v1, _v2) {
        if (_v0.reduce) return _v0.reduce(_v1, _v2);
        for (var _v3 = 0; _v3 < _v0.length; _v3++) _v2 = _v1(_v2, _v0[_v3], _v3);
        return _v2;
      }(_v8(_v1), function (_v0, _v1) {
        return _v0[_v3(_v1)] = _v0(_v1[_v1]), _v0;
      }, {});
    }(_v0);
  };
  var _v4 = Array.isArray || function (_v0) {
      return "[object Array]" === Object.prototype.toString.call(_v0);
    },
    _v5 = function (_v0) {
      return "[object Date]" === Object.prototype.toString.call(_v0);
    },
    _v6 = function (_v0) {
      return "[object RegExp]" === Object.prototype.toString.call(_v0);
    },
    _v7 = Object.prototype.hasOwnProperty,
    _v8 = Object.keys || function (_v0) {
      var _v1 = [];
      for (var _v2 in _v0) _v7.call(_v0, _v2) && _v1.push(_v2);
      return _v1;
    };
}