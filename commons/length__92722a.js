{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    var _v2 = -1,
      _v3 = _v4(_v0) ? Array(_v0.length) : [];
    return _v3(_v0, function (_v0, _v1, _v2) {
      _v3[++_v2] = _v1(_v0, _v1, _v2);
    }), _v3;
  };
}