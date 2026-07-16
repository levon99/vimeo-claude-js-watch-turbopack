{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    _v6 = /^\w*$/;
  _v1.exports = function (_v0, _v1) {
    if (_v3(_v0)) return !1;
    var _v2 = typeof _v0;
    return !!("number" == _v2 || "symbol" == _v2 || "boolean" == _v2 || null == _v0 || _v4(_v0)) || _v6.test(_v0) || !_v5.test(_v0) || null != _v1 && _v0 in Object(_v1);
  };
}