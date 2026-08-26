{
  var _v3 = 1 / 0,
    _v4 = "\\ud800-\\udfff",
    _v5 = "\\u0300-\\u036f\\ufe20-\\ufe23",
    _v6 = "\\u20d0-\\u20f0",
    _v7 = "\\ufe0e\\ufe0f",
    _v8 = "[" + _v5 + _v6 + "]",
    _v9 = "\\ud83c[\\udffb-\\udfff]",
    _v10 = "[^" + _v4 + "]",
    _v11 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    _v12 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    _v13 = "\\u200d",
    _v14 = "(?:" + _v8 + "|" + _v9 + ")?",
    _v15 = "[" + _v7 + "]?",
    _v16 = "(?:" + _v13 + "(?:" + [_v10, _v11, _v12].join("|") + ")" + _v15 + _v14 + ")*",
    _v17 = RegExp(_v9 + "(?=" + _v9 + ")|" + ("(?:" + [_v10 + _v8 + "?", _v8, _v11, _v12, "[" + _v4 + "]"].join("|")) + ")" + (_v15 + _v14 + _v16), "g"),
    _v18 = RegExp("[" + _v13 + _v4 + _v5 + _v6 + _v7 + "]"),
    _v19 = _v0.g && _v0.g.Object === Object && _v0.g,
    _v20 = "object" == typeof self && self && self.Object === Object && self,
    _v21 = _v19 || _v20 || Function("return this")(),
    _v22 = Object.prototype.toString,
    _v23 = _v21.Symbol,
    _v24 = _v23 ? _v23.prototype : void 0,
    _v25 = _v24 ? _v24.toString : void 0;
  function _v26(_v0) {
    return null == _v0 ? "" : function (_v0) {
      if ("string" == typeof _v0) return _v0;
      if (function (_v0) {
        return "symbol" == typeof _v0 || !!_v0 && "object" == typeof _v0 && "[object Symbol]" == _v22.call(_v0);
      }(_v0)) return _v25 ? _v25.call(_v0) : "";
      var _v1 = _v0 + "";
      return "0" == _v1 && 1 / _v0 == -_v3 ? "-0" : _v1;
    }(_v0);
  }
  var _v27 = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4 = (_v1 = _v0 = _v26(_v0), _v18.test(_v1)) ? function (_v0) {
        return _v18.test(_v0) ? _v0.match(_v17) || [] : _v0.split("");
      }(_v0) : void 0,
      _v5 = _v4 ? _v4[0] : _v0.charAt(0),
      _v6 = _v4 ? (_v3 = _v4.length, function (_v0, _v1, _v2) {
        var _v3 = -1,
          _v4 = _v0.length;
        _v1 < 0 && (_v1 = -_v1 > _v4 ? 0 : _v4 + _v1), (_v2 = _v2 > _v4 ? _v4 : _v2) < 0 && (_v2 += _v4), _v4 = _v1 > _v2 ? 0 : _v2 - _v1 >>> 0, _v1 >>>= 0;
        for (var _v5 = Array(_v4); ++_v3 < _v4;) _v5[_v3] = _v0[_v3 + _v1];
        return _v5;
      }(_v4, 1, _v2 = void 0 === _v2 ? _v3 : _v2)).join("") : _v0.slice(1);
    return _v5.toUpperCase() + _v6;
  };
  _v1.exports = function (_v0) {
    return _v27(_v26(_v0).toLowerCase());
  };
}