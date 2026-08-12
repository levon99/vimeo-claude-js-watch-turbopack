{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = function (_v0) {
    return _v3(function (_v0, _v1) {
      var _v2 = -1,
        _v3 = _v1.length,
        _v4 = _v3 > 1 ? _v1[_v3 - 1] : void 0,
        _v5 = _v3 > 2 ? _v1[2] : void 0;
      for (_v4 = _v0.length > 3 && "function" == typeof _v4 ? (_v3--, _v4) : void 0, _v5 && _v4(_v1[0], _v1[1], _v5) && (_v4 = _v3 < 3 ? void 0 : _v4, _v3 = 1), _v0 = Object(_v0); ++_v2 < _v3;) {
        var _v6 = _v1[_v2];
        _v6 && _v0(_v0, _v6, _v2, _v4);
      }
      return _v0;
    });
  };
}