{
  var _v3 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    return function (_v0, _v1) {
      if (null == _v0) return _v0;
      if (!_v3(_v0)) return _v0(_v0, _v1);
      for (var _v2 = _v0.length, _v3 = _v1 ? _v2 : -1, _v4 = Object(_v0); (_v1 ? _v3-- : ++_v3 < _v2) && !1 !== _v1(_v4[_v3], _v3, _v4););
      return _v0;
    };
  };
}