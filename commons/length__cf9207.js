{
  _v1.exports = function (_v0, _v1, _v2, _v3) {
    var _v4 = -1,
      _v5 = null == _v0 ? 0 : _v0.length;
    for (_v3 && _v5 && (_v2 = _v0[++_v4]); ++_v4 < _v5;) _v2 = _v1(_v2, _v0[_v4], _v4, _v0);
    return _v2;
  };
}