{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0),
    _v18 = _v0.r(0),
    _v19 = _v0.r(0),
    _v20 = _v0.r(0),
    _v21 = _v0.r(0),
    _v22 = _v0.r(0),
    _v23 = _v0.r(0),
    _v24 = _v0.r(0),
    _v25 = "[object Arguments]",
    _v26 = "[object Function]",
    _v27 = "[object Object]",
    _v28 = {};
  _v28[_v25] = _v28["[object Array]"] = _v28["[object ArrayBuffer]"] = _v28["[object DataView]"] = _v28["[object Boolean]"] = _v28["[object Date]"] = _v28["[object Float32Array]"] = _v28["[object Float64Array]"] = _v28["[object Int8Array]"] = _v28["[object Int16Array]"] = _v28["[object Int32Array]"] = _v28["[object Map]"] = _v28["[object Number]"] = _v28[_v27] = _v28["[object RegExp]"] = _v28["[object Set]"] = _v28["[object String]"] = _v28["[object Symbol]"] = _v28["[object Uint8Array]"] = _v28["[object Uint8ClampedArray]"] = _v28["[object Uint16Array]"] = _v28["[object Uint32Array]"] = !0, _v28["[object Error]"] = _v28[_v26] = _v28["[object WeakMap]"] = !1, _v1.exports = function _v0(_v1, _v2, _v3, _v4, _v5, _v6) {
    var _v7,
      _v8 = 1 & _v2,
      _v9 = 2 & _v2,
      _v10 = 4 & _v2;
    if (_v3 && (_v7 = _v5 ? _v3(_v1, _v4, _v5, _v6) : _v3(_v1)), void 0 !== _v7) return _v7;
    if (!_v21(_v1)) return _v1;
    var _v11 = _v18(_v1);
    if (_v11) {
      if (_v7 = _v15(_v1), !_v8) return _v9(_v1, _v7);
    } else {
      var _v12 = _v14(_v1),
        _v13 = _v12 == _v26 || "[object GeneratorFunction]" == _v12;
      if (_v19(_v1)) return _v8(_v1, _v8);
      if (_v12 == _v27 || _v12 == _v25 || _v13 && !_v5) {
        if (_v7 = _v9 || _v13 ? {} : _v17(_v1), !_v8) return _v9 ? _v11(_v1, _v7(_v7, _v1)) : _v10(_v1, _v6(_v7, _v1));
      } else {
        if (!_v28[_v12]) return _v5 ? _v1 : {};
        _v7 = _v16(_v1, _v12, _v8);
      }
    }
    _v6 || (_v6 = new _v3());
    var _v14 = _v6.get(_v1);
    if (_v14) return _v14;
    _v6.set(_v1, _v7), _v22(_v1) ? _v1.forEach(function (_v0) {
      _v7.add(_v0(_v0, _v2, _v3, _v0, _v1, _v6));
    }) : _v20(_v1) && _v1.forEach(function (_v0, _v1) {
      _v7.set(_v1, _v0(_v0, _v2, _v3, _v1, _v1, _v6));
    });
    var _v15 = _v10 ? _v9 ? _v13 : _v12 : _v9 ? _v24 : _v23,
      _v16 = _v11 ? void 0 : _v15(_v1);
    return _v4(_v16 || _v1, function (_v0, _v1) {
      _v16 && (_v0 = _v1[_v1 = _v0]), _v5(_v7, _v1, _v0(_v0, _v2, _v3, _v1, _v1, _v6));
    }), _v7;
  };
}