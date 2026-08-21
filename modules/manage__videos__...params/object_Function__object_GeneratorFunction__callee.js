{
  var _v3,
    _v4 = /^(?:0|[1-9]\d*)$/;
  function _v5(_v0, _v1, _v2) {
    switch (_v2.length) {
      case 0:
        return _v0.call(_v1);
      case 1:
        return _v0.call(_v1, _v2[0]);
      case 2:
        return _v0.call(_v1, _v2[0], _v2[1]);
      case 3:
        return _v0.call(_v1, _v2[0], _v2[1], _v2[2]);
    }
    return _v0.apply(_v1, _v2);
  }
  var _v6 = Object.prototype,
    _v7 = _v6.hasOwnProperty,
    _v8 = _v6.toString,
    _v9 = _v6.propertyIsEnumerable,
    _v10 = Math.max;
  function _v11(_v0, _v1, _v2, _v3) {
    return void 0 === _v0 || _v14(_v0, _v6[_v2]) && !_v7.call(_v3, _v2) ? _v1 : _v0;
  }
  function _v12(_v0, _v1) {
    return _v1 = _v10(void 0 === _v1 ? _v0.length - 1 : _v1, 0), function () {
      for (var _v0 = arguments, _v1 = -1, _v2 = _v10(_v0.length - _v1, 0), _v3 = Array(_v2); ++_v1 < _v2;) _v3[_v1] = _v0[_v1 + _v1];
      _v1 = -1;
      for (var _v4 = Array(_v1 + 1); ++_v1 < _v1;) _v4[_v1] = _v0[_v1];
      return _v4[_v1] = _v3, _v5(_v0, this, _v4);
    };
  }
  function _v13(_v0, _v1) {
    return !!(_v1 = null == _v1 ? 0 : _v1) && ("number" == typeof _v0 || _v4.test(_v0)) && _v0 > -1 && _v0 % 1 == 0 && _v0 < _v1;
  }
  function _v14(_v0, _v1) {
    return _v0 === _v1 || _v0 != _v0 && _v1 != _v1;
  }
  var _v15 = Array.isArray;
  function _v16(_v0) {
    var _v1, _v2, _v3;
    return null != _v0 && "number" == typeof (_v1 = _v0.length) && _v1 > -1 && _v1 % 1 == 0 && _v1 <= 0 && "[object Function]" != (_v3 = _v17(_v2 = _v0) ? _v8.call(_v2) : "") && "[object GeneratorFunction]" != _v3;
  }
  function _v17(_v0) {
    var _v1 = typeof _v0;
    return !!_v0 && ("object" == _v1 || "function" == _v1);
  }
  var _v18 = (_v3 = function (_v0, _v1, _v2, _v3) {
    var _v4;
    !function (_v0, _v1, _v2, _v3) {
      _v2 || (_v2 = {});
      for (var _v4 = -1, _v5 = _v1.length; ++_v4 < _v5;) {
        var _v6 = _v1[_v4],
          _v7 = _v3 ? _v3(_v2[_v6], _v0[_v6], _v6, _v2, _v0) : void 0;
        !function (_v0, _v1, _v2) {
          var _v3 = _v0[_v1];
          _v7.call(_v0, _v1) && _v14(_v3, _v2) && (void 0 !== _v2 || _v1 in _v0) || (_v0[_v1] = _v2);
        }(_v2, _v6, void 0 === _v7 ? _v0[_v6] : _v7);
      }
    }(_v1, _v16(_v4 = _v1) ? function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5 = _v15(_v0) || (_v4 = _v3 = _v2 = _v0) && "object" == typeof _v4 && _v16(_v3) && _v7.call(_v2, "callee") && (!_v9.call(_v2, "callee") || "[object Arguments]" == _v8.call(_v2)) ? function (_v0, _v1) {
          for (var _v2 = -1, _v3 = Array(_v0); ++_v2 < _v0;) _v3[_v2] = _v1(_v2);
          return _v3;
        }(_v0.length, String) : [],
        _v6 = _v5.length,
        _v7 = !!_v6;
      for (var _v8 in _v0) (_v1 || _v7.call(_v0, _v8)) && !(_v7 && ("length" == _v8 || _v13(_v8, _v6))) && _v5.push(_v8);
      return _v5;
    }(_v4, !0) : function (_v0) {
      if (!_v17(_v0)) {
        var _v1,
          _v2,
          _v3 = _v0,
          _v4 = [];
        if (null != _v3) for (var _v5 in Object(_v3)) _v4.push(_v5);
        return _v4;
      }
      var _v6 = (_v2 = (_v1 = _v0) && _v1.constructor, _v1 === ("function" == typeof _v2 && _v2.prototype || _v6)),
        _v7 = [];
      for (var _v8 in _v0) "constructor" == _v8 && (_v6 || !_v7.call(_v0, _v8)) || _v7.push(_v8);
      return _v7;
    }(_v4), _v0, _v3);
  }, _v12(function (_v0, _v1) {
    var _v2 = -1,
      _v3 = _v1.length,
      _v4 = _v3 > 1 ? _v1[_v3 - 1] : void 0,
      _v5 = _v3 > 2 ? _v1[2] : void 0;
    for (_v4 = _v3.length > 3 && "function" == typeof _v4 ? (_v3--, _v4) : void 0, _v5 && function (_v0, _v1, _v2) {
      if (!_v17(_v2)) return !1;
      var _v3 = typeof _v1;
      return ("number" == _v3 ? !!(_v16(_v2) && _v13(_v1, _v2.length)) : "string" == _v3 && _v1 in _v2) && _v14(_v2[_v1], _v0);
    }(_v1[0], _v1[1], _v5) && (_v4 = _v3 < 3 ? void 0 : _v4, _v3 = 1), _v0 = Object(_v0); ++_v2 < _v3;) {
      var _v6 = _v1[_v2];
      _v6 && _v3(_v0, _v6, _v2, _v4);
    }
    return _v0;
  }));
  _v1.exports = _v12(function (_v0) {
    return _v0.push(void 0, _v11), _v5(_v18, void 0, _v0);
  });
}