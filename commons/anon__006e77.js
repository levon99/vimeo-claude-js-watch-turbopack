{
  var _v3 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    if (_v0 !== _v1) {
      var _v2 = void 0 !== _v0,
        _v3 = null === _v0,
        _v4 = _v0 == _v0,
        _v5 = _v3(_v0),
        _v6 = void 0 !== _v1,
        _v7 = null === _v1,
        _v8 = _v1 == _v1,
        _v9 = _v3(_v1);
      if (!_v7 && !_v9 && !_v5 && _v0 > _v1 || _v5 && _v6 && _v8 && !_v7 && !_v9 || _v3 && _v6 && _v8 || !_v2 && _v8 || !_v4) return 1;
      if (!_v3 && !_v5 && !_v9 && _v0 < _v1 || _v9 && _v2 && _v4 && !_v3 && !_v5 || _v7 && _v2 && _v4 || !_v6 && _v4 || !_v8) return -1;
    }
    return 0;
  };
}