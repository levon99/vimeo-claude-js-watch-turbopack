{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2, _v3) {
    var _v4 = !_v2;
    _v2 || (_v2 = {});
    for (var _v5 = -1, _v6 = _v1.length; ++_v5 < _v6;) {
      var _v7 = _v1[_v5],
        _v8 = _v3 ? _v3(_v2[_v7], _v0[_v7], _v7, _v2, _v0) : void 0;
      void 0 === _v8 && (_v8 = _v0[_v7]), _v4 ? _v4(_v2, _v7, _v8) : _v3(_v2, _v7, _v8);
    }
    return _v2;
  };
}