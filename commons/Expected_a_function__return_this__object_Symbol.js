{
  var _v3 = "Expected a function",
    _v4 = 0 / 0,
    _v5 = /^\s+|\s+$/g,
    _v6 = /^[-+]0x[0-9a-f]+$/i,
    _v7 = /^0b[01]+$/i,
    _v8 = /^0o[0-7]+$/i,
    _v9 = parseInt,
    _v10 = _v0.g && _v0.g.Object === Object && _v0.g,
    _v11 = "object" == typeof self && self && self.Object === Object && self,
    _v12 = _v10 || _v11 || Function("return this")(),
    _v13 = Object.prototype.toString,
    _v14 = Math.max,
    _v15 = Math.min,
    _v16 = function () {
      return _v12.Date.now();
    };
  function _v17(_v0) {
    var _v1 = typeof _v0;
    return !!_v0 && ("object" == _v1 || "function" == _v1);
  }
  function _v18(_v0) {
    if ("number" == typeof _v0) return _v0;
    if ("symbol" == typeof (_v1 = _v0) || _v1 && "object" == typeof _v1 && "[object Symbol]" == _v13.call(_v1)) return _v4;
    if (_v17(_v0)) {
      var _v1,
        _v2 = "function" == typeof _v0.valueOf ? _v0.valueOf() : _v0;
      _v0 = _v17(_v2) ? _v2 + "" : _v2;
    }
    if ("string" != typeof _v0) return 0 === _v0 ? _v0 : +_v0;
    _v0 = _v0.replace(_v5, "");
    var _v3 = _v7.test(_v0);
    return _v3 || _v8.test(_v0) ? _v9(_v0.slice(2), _v3 ? 2 : 8) : _v6.test(_v0) ? _v4 : +_v0;
  }
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = !0,
      _v4 = !0;
    if ("function" != typeof _v0) throw TypeError(_v3);
    return _v17(_v2) && (_v3 = "leading" in _v2 ? !!_v2.leading : _v3, _v4 = "trailing" in _v2 ? !!_v2.trailing : _v4), function (_v0, _v1, _v2) {
      var _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9 = 0,
        _v10 = !1,
        _v11 = !1,
        _v12 = !0;
      if ("function" != typeof _v0) throw TypeError(_v3);
      function _v13(_v0) {
        var _v1 = _v3,
          _v2 = _v4;
        return _v3 = _v4 = void 0, _v9 = _v0, _v6 = _v0.apply(_v2, _v1);
      }
      function _v14(_v0) {
        var _v1 = _v0 - _v8,
          _v2 = _v0 - _v9;
        return void 0 === _v8 || _v1 >= _v1 || _v1 < 0 || _v11 && _v2 >= _v5;
      }
      function _v15() {
        var _v0,
          _v1,
          _v2,
          _v3 = _v16();
        if (_v14(_v3)) return _v16(_v3);
        _v7 = setTimeout(_v15, (_v0 = _v3 - _v8, _v1 = _v3 - _v9, _v2 = _v1 - _v0, _v11 ? _v15(_v2, _v5 - _v1) : _v2));
      }
      function _v16(_v0) {
        return (_v7 = void 0, _v12 && _v3) ? _v13(_v0) : (_v3 = _v4 = void 0, _v6);
      }
      function _v17() {
        var _v0,
          _v1 = _v16(),
          _v2 = _v14(_v1);
        if (_v3 = arguments, _v4 = this, _v8 = _v1, _v2) {
          if (void 0 === _v7) return _v9 = _v0 = _v8, _v7 = setTimeout(_v15, _v1), _v10 ? _v13(_v0) : _v6;
          if (_v11) return _v7 = setTimeout(_v15, _v1), _v13(_v8);
        }
        return void 0 === _v7 && (_v7 = setTimeout(_v15, _v1)), _v6;
      }
      return _v1 = _v18(_v1) || 0, _v17(_v2) && (_v10 = !!_v2.leading, _v5 = (_v11 = "maxWait" in _v2) ? _v14(_v18(_v2.maxWait) || 0, _v1) : _v5, _v12 = "trailing" in _v2 ? !!_v2.trailing : _v12), _v17.cancel = function () {
        void 0 !== _v7 && clearTimeout(_v7), _v9 = 0, _v3 = _v8 = _v4 = _v7 = void 0;
      }, _v17.flush = function () {
        return void 0 === _v7 ? _v6 : _v16(_v16());
      }, _v17;
    }(_v0, _v1, {
      leading: _v3,
      maxWait: _v1,
      trailing: _v4
    });
  };
}