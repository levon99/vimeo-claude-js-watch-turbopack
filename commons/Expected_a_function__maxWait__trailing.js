{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = Math.max,
    _v7 = Math.min;
  _v1.exports = function (_v0, _v1, _v2) {
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
    if ("function" != typeof _v0) throw TypeError("Expected a function");
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
        _v3 = _v4();
      if (_v14(_v3)) return _v16(_v3);
      _v7 = setTimeout(_v15, (_v0 = _v3 - _v8, _v1 = _v3 - _v9, _v2 = _v1 - _v0, _v11 ? _v7(_v2, _v5 - _v1) : _v2));
    }
    function _v16(_v0) {
      return (_v7 = void 0, _v12 && _v3) ? _v13(_v0) : (_v3 = _v4 = void 0, _v6);
    }
    function _v17() {
      var _v0,
        _v1 = _v4(),
        _v2 = _v14(_v1);
      if (_v3 = arguments, _v4 = this, _v8 = _v1, _v2) {
        if (void 0 === _v7) return _v9 = _v0 = _v8, _v7 = setTimeout(_v15, _v1), _v10 ? _v13(_v0) : _v6;
        if (_v11) return clearTimeout(_v7), _v7 = setTimeout(_v15, _v1), _v13(_v8);
      }
      return void 0 === _v7 && (_v7 = setTimeout(_v15, _v1)), _v6;
    }
    return _v1 = _v5(_v1) || 0, _v3(_v2) && (_v10 = !!_v2.leading, _v5 = (_v11 = "maxWait" in _v2) ? _v6(_v5(_v2.maxWait) || 0, _v1) : _v5, _v12 = "trailing" in _v2 ? !!_v2.trailing : _v12), _v17.cancel = function () {
      void 0 !== _v7 && clearTimeout(_v7), _v9 = 0, _v3 = _v8 = _v4 = _v7 = void 0;
    }, _v17.flush = function () {
      return void 0 === _v7 ? _v6 : _v16(_v4());
    }, _v17;
  };
}