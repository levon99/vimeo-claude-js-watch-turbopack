{
  var _v3 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    for (var _v3 = -1, _v4 = _v0.criteria, _v5 = _v1.criteria, _v6 = _v4.length, _v7 = _v2.length; ++_v3 < _v6;) {
      var _v8 = _v3(_v4[_v3], _v5[_v3]);
      if (_v8) {
        if (_v3 >= _v7) return _v8;
        return _v8 * ("desc" == _v2[_v3] ? -1 : 1);
      }
    }
    return _v0.index - _v1.index;
  };
}