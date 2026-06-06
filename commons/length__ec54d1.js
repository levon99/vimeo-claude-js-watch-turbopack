{
  _v1.exports = function (_v0, _v1, _v2, _v3) {
    for (var _v4 = _v0.length, _v5 = _v2 + (_v3 ? 1 : -1); _v3 ? _v5-- : ++_v5 < _v4;) if (_v1(_v0[_v5], _v5, _v0)) return _v5;
    return -1;
  };
}