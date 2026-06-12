{
  var _v3 = 1 / 0,
    _v4 = 0 / 0,
    _v5 = /^\s+|\s+$/g,
    _v6 = /\w*$/,
    _v7 = /^[-+]0x[0-9a-f]+$/i,
    _v8 = /^0b[01]+$/i,
    _v9 = /^0o[0-7]+$/i,
    _v10 = "\\ud800-\\udfff",
    _v11 = "\\u0300-\\u036f\\ufe20-\\ufe23",
    _v12 = "\\u20d0-\\u20f0",
    _v13 = "\\ufe0e\\ufe0f",
    _v14 = "[" + _v11 + _v12 + "]",
    _v15 = "\\ud83c[\\udffb-\\udfff]",
    _v16 = "[^" + _v10 + "]",
    _v17 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    _v18 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    _v19 = "\\u200d",
    _v20 = "(?:" + _v14 + "|" + _v15 + ")?",
    _v21 = "[" + _v13 + "]?",
    _v22 = "(?:" + _v19 + "(?:" + [_v16, _v17, _v18].join("|") + ")" + _v21 + _v20 + ")*",
    _v23 = RegExp(_v15 + "(?=" + _v15 + ")|" + ("(?:" + [_v16 + _v14 + "?", _v14, _v17, _v18, "[" + _v10 + "]"].join("|")) + ")" + (_v21 + _v20 + _v22), "g"),
    _v24 = RegExp("[" + _v19 + _v10 + _v11 + _v12 + _v13 + "]"),
    _v25 = parseInt,
    _v26 = _v0.g && _v0.g.Object === Object && _v0.g,
    _v27 = "object" == typeof self && self && self.Object === Object && self,
    _v28 = _v26 || _v27 || Function("return this")(),
    _v29 = _v2 && !_v2.nodeType && _v2,
    _v30 = _v29 && _v1 && !_v1.nodeType && _v1,
    _v31 = _v30 && _v30.exports === _v29 && _v26.process,
    _v32 = function () {
      try {
        return _v31 && _v31.binding("util");
      } catch (_v0) {}
    }(),
    _v33 = _v32 && _v32.isRegExp;
  function _v34(_v0) {
    return _v24.test(_v0);
  }
  var _v35 = Object.prototype.toString,
    _v36 = _v28.Symbol,
    _v37 = _v36 ? _v36.prototype : void 0,
    _v38 = _v37 ? _v37.toString : void 0;
  function _v39(_v0) {
    if ("string" == typeof _v0) return _v0;
    if (_v42(_v0)) return _v38 ? _v38.call(_v0) : "";
    var _v1 = _v0 + "";
    return "0" == _v1 && 1 / _v0 == -_v3 ? "-0" : _v1;
  }
  function _v40(_v0) {
    var _v1 = typeof _v0;
    return !!_v0 && ("object" == _v1 || "function" == _v1);
  }
  var _v41 = _v33 ? function (_v0) {
    return _v33(_v0);
  } : function (_v0) {
    return _v40(_v0) && "[object RegExp]" == _v35.call(_v0);
  };
  function _v42(_v0) {
    return "symbol" == typeof _v0 || !!_v0 && "object" == typeof _v0 && "[object Symbol]" == _v35.call(_v0);
  }
  function _v43(_v0) {
    return null == _v0 ? "" : _v39(_v0);
  }
  _v1.exports = function (_v0, _v1) {
    var _v2 = 30,
      _v3 = "...";
    if (_v40(_v1)) {
      var _v4,
        _v5,
        _v6,
        _v7 = "separator" in _v1 ? _v1.separator : _v7;
      _v2 = "length" in _v1 ? (_v6 = (_v5 = (_v4 = _v1.length) ? (_v4 = function (_v0) {
        if ("number" == typeof _v0) return _v0;
        if (_v42(_v0)) return _v4;
        if (_v40(_v0)) {
          var _v1 = "function" == typeof _v0.valueOf ? _v0.valueOf() : _v0;
          _v0 = _v40(_v1) ? _v1 + "" : _v1;
        }
        if ("string" != typeof _v0) return 0 === _v0 ? _v0 : +_v0;
        _v0 = _v0.replace(_v5, "");
        var _v2 = _v8.test(_v0);
        return _v2 || _v9.test(_v0) ? _v25(_v0.slice(2), _v2 ? 2 : 8) : _v7.test(_v0) ? _v4 : +_v0;
      }(_v4)) === _v3 || _v4 === -_v3 ? (_v4 < 0 ? -1 : 1) * 0 : _v4 == _v4 ? _v4 : 0 : 0 === _v4 ? _v4 : 0) % 1, _v5 == _v5 ? _v6 ? _v5 - _v6 : _v5 : 0) : _v2, _v3 = "omission" in _v1 ? _v39(_v1.omission) : _v3;
    }
    var _v8 = (_v0 = _v43(_v0)).length;
    if (_v34(_v0)) {
      var _v9,
        _v10 = _v34(_v9 = _v0) ? _v9.match(_v23) || [] : _v9.split("");
      _v8 = _v10.length;
    }
    if (_v2 >= _v8) return _v0;
    var _v11 = _v2 - (_v34(_v14 = _v3) ? function (_v0) {
      for (var _v1 = _v23.lastIndex = 0; _v23.test(_v0);) _v1++;
      return _v1;
    }(_v14) : null == (_v13 = _v14) ? void 0 : _v13.length);
    if (_v11 < 1) return _v3;
    var _v12 = _v10 ? (_v15 = _v10, _v16 = _v11, _v17 = _v15.length, (_v16 = void 0 === _v16 ? _v17 : _v16) >= _v17 ? _v15 : function (_v0, _v1, _v2) {
      var _v3 = -1,
        _v4 = _v0.length;
      _v1 < 0 && (_v1 = -_v1 > _v4 ? 0 : _v4 + _v1), (_v2 = _v2 > _v4 ? _v4 : _v2) < 0 && (_v2 += _v4), _v4 = _v1 > _v2 ? 0 : _v2 - _v1 >>> 0, _v1 >>>= 0;
      for (var _v5 = Array(_v4); ++_v3 < _v4;) _v5[_v3] = _v0[_v3 + _v1];
      return _v5;
    }(_v15, 0, _v16)).join("") : _v0.slice(0, _v11);
    if (void 0 === _v7) return _v12 + _v3;
    if (_v10 && (_v11 += _v12.length - _v11), _v41(_v7)) {
      if (_v0.slice(_v11).search(_v7)) {
        var _v13,
          _v14,
          _v15,
          _v16,
          _v17,
          _v18,
          _v19 = _v12;
        for (_v7.global || (_v7 = RegExp(_v7.source, _v43(_v6.exec(_v7)) + "g")), _v7.lastIndex = 0; _v18 = _v7.exec(_v19);) var _v20 = _v18.index;
        _v12 = _v12.slice(0, void 0 === _v20 ? _v11 : _v20);
      }
    } else if (_v0.indexOf(_v39(_v7), _v11) != _v11) {
      var _v21 = _v12.lastIndexOf(_v7);
      _v21 > -1 && (_v12 = _v12.slice(0, _v21));
    }
    return _v12 + _v3;
  };
}