{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = function _v0(_v1, _v2, _v3, _v4, _v5) {
    var _v6 = -1,
      _v7 = _v1.length;
    for (_v3 || (_v3 = _v4), _v5 || (_v5 = []); ++_v6 < _v7;) {
      var _v8 = _v1[_v6];
      _v2 > 0 && _v3(_v8) ? _v2 > 1 ? _v0(_v8, _v2 - 1, _v3, _v4, _v5) : _v3(_v5, _v8) : _v4 || (_v5[_v5.length] = _v8);
    }
    return _v5;
  };
}