{
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = -1,
      _v4 = _v0.length;
    _v1 < 0 && (_v1 = -_v1 > _v4 ? 0 : _v4 + _v1), (_v2 = _v2 > _v4 ? _v4 : _v2) < 0 && (_v2 += _v4), _v4 = _v1 > _v2 ? 0 : _v2 - _v1 >>> 0, _v1 >>>= 0;
    for (var _v5 = Array(_v4); ++_v3 < _v4;) _v5[_v3] = _v0[_v3 + _v1];
    return _v5;
  };
}