{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v1.exports = function (_v0) {
    return function (_v0) {
      var _v1 = _v4(_v0 = _v6(_v0)) ? _v5(_v0) : void 0,
        _v2 = _v1 ? _v1[0] : _v0.charAt(0),
        _v3 = _v1 ? _v3(_v1, 1).join("") : _v0.slice(1);
      return _v2[_v0]() + _v3;
    };
  };
}