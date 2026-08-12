{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = 0 / 0,
    _v7 = /^[-+]0x[0-9a-f]+$/i,
    _v8 = /^0b[01]+$/i,
    _v9 = /^0o[0-7]+$/i,
    _v10 = parseInt;
  _v1.exports = function (_v0) {
    if ("number" == typeof _v0) return _v0;
    if (_v5(_v0)) return _v6;
    if (_v4(_v0)) {
      var _v1 = "function" == typeof _v0.valueOf ? _v0.valueOf() : _v0;
      _v0 = _v4(_v1) ? _v1 + "" : _v1;
    }
    if ("string" != typeof _v0) return 0 === _v0 ? _v0 : +_v0;
    _v0 = _v3(_v0);
    var _v2 = _v8.test(_v0);
    return _v2 || _v9.test(_v0) ? _v10(_v0.slice(2), _v2 ? 2 : 8) : _v7.test(_v0) ? _v6 : +_v0;
  };
}