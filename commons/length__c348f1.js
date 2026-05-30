{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    _v1 = _v3(_v1, _v0);
    for (var _v3 = -1, _v4 = _v1.length, _v5 = !1; ++_v3 < _v4;) {
      var _v6 = _v8(_v1[_v3]);
      if (!(_v5 = null != _v0 && _v2(_v0, _v6))) break;
      _v0 = _v0[_v6];
    }
    return _v5 || ++_v3 != _v4 ? _v5 : !!(_v4 = null == _v0 ? 0 : _v0.length) && _v7(_v4) && _v6(_v6, _v4) && (_v5(_v0) || _v4(_v0));
  };
}