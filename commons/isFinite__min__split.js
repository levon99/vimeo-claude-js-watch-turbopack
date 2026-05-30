{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v3.isFinite,
    _v8 = Math.min;
  _v1.exports = function (_v0) {
    var _v1 = Math[_v0];
    return function (_v0, _v1) {
      if (_v0 = _v5(_v0), (_v1 = null == _v1 ? 0 : _v8(_v4(_v1), 292)) && _v7(_v0)) {
        var _v2 = (_v6(_v0) + "e").split("e");
        return +((_v2 = (_v6(_v1(_v2[0] + "e" + (+_v2[1] + _v1))) + "e").split("e"))[0] + "e" + (_v2[1] - _v1));
      }
      return _v1(_v0);
    };
  };
}