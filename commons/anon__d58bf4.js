{
  var _v3 = _v0.r(0),
    _v4 = 1 / 0;
  _v1.exports = function (_v0) {
    if ("string" == typeof _v0 || _v3(_v0)) return _v0;
    var _v1 = _v0 + "";
    return "0" == _v1 && 1 / _v0 == -_v4 ? "-0" : _v1;
  };
}