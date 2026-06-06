{
  var _v3 = _v0.r(0),
    _v4 = Math.max;
  _v1.exports = function (_v0, _v1, _v2) {
    return _v1 = _v4(void 0 === _v1 ? _v0.length - 1 : _v1, 0), function () {
      for (var _v0 = arguments, _v1 = -1, _v2 = _v4(_v0.length - _v1, 0), _v3 = Array(_v2); ++_v1 < _v2;) _v3[_v1] = _v0[_v1 + _v1];
      _v1 = -1;
      for (var _v4 = Array(_v1 + 1); ++_v1 < _v1;) _v4[_v1] = _v0[_v1];
      return _v4[_v1] = _v2(_v3), _v3(_v0, this, _v4);
    };
  };
}