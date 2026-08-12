{
  var _v3 = Math.ceil,
    _v4 = Math.max;
  _v1.exports = function (_v0, _v1, _v2, _v3) {
    for (var _v4 = -1, _v5 = _v4(_v3((_v1 - _v0) / (_v2 || 1)), 0), _v6 = Array(_v5); _v5--;) _v6[_v3 ? _v5 : ++_v4] = _v0, _v0 += _v2;
    return _v6;
  };
}