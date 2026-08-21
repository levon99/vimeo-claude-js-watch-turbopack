{
  var _v3 = 1 / 0,
    _v4 = 0 / 0,
    _v5 = /^\s+|\s+$/g,
    _v6 = /^[-+]0x[0-9a-f]+$/i,
    _v7 = /^0b[01]+$/i,
    _v8 = /^0o[0-7]+$/i,
    _v9 = /^(?:0|[1-9]\d*)$/,
    _v10 = parseInt,
    _v11 = Object.prototype.toString;
  function _v12(_v0) {
    var _v1 = typeof _v0;
    return !!_v0 && ("object" == _v1 || "function" == _v1);
  }
  function _v13(_v0) {
    var _v1,
      _v2 = (_v1 = _v0) ? (_v1 = function (_v0) {
        if ("number" == typeof _v0) return _v0;
        if ("symbol" == typeof (_v1 = _v0) || _v1 && "object" == typeof _v1 && "[object Symbol]" == _v11.call(_v1)) return _v4;
        if (_v12(_v0)) {
          var _v1,
            _v2 = "function" == typeof _v0.valueOf ? _v0.valueOf() : _v0;
          _v0 = _v12(_v2) ? _v2 + "" : _v2;
        }
        if ("string" != typeof _v0) return 0 === _v0 ? _v0 : +_v0;
        _v0 = _v0.replace(_v5, "");
        var _v3 = _v7.test(_v0);
        return _v3 || _v8.test(_v0) ? _v10(_v0.slice(2), _v3 ? 2 : 8) : _v6.test(_v0) ? _v4 : +_v0;
      }(_v1)) === _v3 || _v1 === -_v3 ? (_v1 < 0 ? -1 : 1) * 0 : _v1 == _v1 ? _v1 : 0 : 0 === _v1 ? _v1 : 0,
      _v3 = _v2 % 1;
    return _v2 == _v2 ? _v3 ? _v2 - _v3 : _v2 : 0;
  }
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = _v0 ? _v0.length : 0;
    if (!_v3) return [];
    _v2 && "number" != typeof _v2 && function (_v0, _v1, _v2) {
      if (!_v12(_v2)) return !1;
      var _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10 = typeof _v1;
      return ("number" == _v10 ? !!(null != (_v3 = _v2) && "number" == typeof (_v4 = _v3.length) && _v4 > -1 && _v4 % 1 == 0 && _v4 <= 0 && "[object Function]" != (_v6 = _v12(_v5 = _v3) ? _v11.call(_v5) : "") && "[object GeneratorFunction]" != _v6 && (_v9 = null == (_v9 = _v2.length) ? 0 : _v9) && ("number" == typeof _v1 || _v9.test(_v1)) && _v1 > -1 && _v1 % 1 == 0 && _v1 < _v9) : "string" == _v10 && _v1 in _v2) && (_v7 = _v2[_v1], _v7 === (_v8 = _v0) || _v7 != _v7 && _v8 != _v8);
    }(_v0, _v1, _v2) ? (_v1 = 0, _v2 = _v3) : (_v1 = null == _v1 ? 0 : _v13(_v1), _v2 = void 0 === _v2 ? _v3 : _v13(_v2));
    var _v4 = _v1,
      _v5 = _v2,
      _v6 = -1,
      _v7 = _v0.length;
    _v4 < 0 && (_v4 = -_v4 > _v7 ? 0 : _v7 + _v4), (_v5 = _v5 > _v7 ? _v7 : _v5) < 0 && (_v5 += _v7), _v7 = _v4 > _v5 ? 0 : _v5 - _v4 >>> 0, _v4 >>>= 0;
    for (var _v8 = Array(_v7); ++_v6 < _v7;) _v8[_v6] = _v0[_v6 + _v4];
    return _v8;
  };
}