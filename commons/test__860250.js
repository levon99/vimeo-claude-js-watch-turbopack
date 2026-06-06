{
  var _v3 = /^(?:0|[1-9]\d*)$/;
  _v1.exports = function (_v0, _v1) {
    var _v2 = typeof _v0;
    return !!(_v1 = null == _v1 ? 0 : _v1) && ("number" == _v2 || "symbol" != _v2 && _v3.test(_v0)) && _v0 > -1 && _v0 % 1 == 0 && _v0 < _v1;
  };
}