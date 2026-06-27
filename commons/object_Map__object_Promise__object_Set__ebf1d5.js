{
  var _v3,
    _v4,
    _v5,
    _v6 = "[object Map]",
    _v7 = "[object Promise]",
    _v8 = "[object Set]",
    _v9 = "[object WeakMap]",
    _v10 = "[object DataView]",
    _v11 = /^\[object .+?Constructor\]$/,
    _v12 = _v0.g && _v0.g.Object === Object && _v0.g,
    _v13 = "object" == typeof self && self && self.Object === Object && self,
    _v14 = _v12 || _v13 || Function("return this")(),
    _v15 = _v2 && !_v2.nodeType && _v2,
    _v16 = _v15 && _v1 && !_v1.nodeType && _v1,
    _v17 = _v16 && _v16.exports === _v15,
    _v18 = Function.prototype,
    _v19 = Object.prototype,
    _v20 = _v14["__core-js_shared__"],
    _v21 = (_v3 = /[^.]+$/.exec(_v20 && _v20.keys && _v20.keys.IE_PROTO || "")) ? "Symbol(src)_1." + _v3 : "",
    _v22 = _v18.toString,
    _v23 = _v19.hasOwnProperty,
    _v24 = _v19.toString,
    _v25 = RegExp("^" + _v22.call(_v23).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    _v26 = _v17 ? _v14.Buffer : void 0,
    _v27 = _v19.propertyIsEnumerable,
    _v28 = _v26 ? _v26.isBuffer : void 0,
    _v29 = (_v4 = Object.keys, _v5 = Object, function (_v0) {
      return _v4(_v5(_v0));
    }),
    _v30 = _v41(_v14, "DataView"),
    _v31 = _v41(_v14, "Map"),
    _v32 = _v41(_v14, "Promise"),
    _v33 = _v41(_v14, "Set"),
    _v34 = _v41(_v14, "WeakMap"),
    _v35 = !_v27.call({
      valueOf: 1
    }, "valueOf"),
    _v36 = _v43(_v30),
    _v37 = _v43(_v31),
    _v38 = _v43(_v32),
    _v39 = _v43(_v33),
    _v40 = _v43(_v34);
  function _v41(_v0, _v1) {
    var _v2,
      _v3 = null == _v0 ? void 0 : _v0[_v1];
    return !(!_v48(_v3) || (_v2 = _v3, _v21 && _v21 in _v2)) && (_v47(_v3) || function (_v0) {
      var _v1 = !1;
      if (null != _v0 && "function" != typeof _v0.toString) try {
        _v1 = !!(_v0 + "");
      } catch (_v0) {}
      return _v1;
    }(_v3) ? _v25 : _v11).test(_v43(_v3)) ? _v3 : void 0;
  }
  var _v42 = function (_v0) {
    return _v24.call(_v0);
  };
  function _v43(_v0) {
    if (null != _v0) {
      try {
        return _v22.call(_v0);
      } catch (_v0) {}
      try {
        return _v0 + "";
      } catch (_v0) {}
    }
    return "";
  }
  (_v30 && _v42(new _v30(new ArrayBuffer(1))) != _v10 || _v31 && _v42(new _v31()) != _v6 || _v32 && _v42(_v32.resolve()) != _v7 || _v33 && _v42(new _v33()) != _v8 || _v34 && _v42(new _v34()) != _v9) && (_v42 = function (_v0) {
    var _v1 = _v24.call(_v0),
      _v2 = "[object Object]" == _v1 ? _v0.constructor : void 0,
      _v3 = _v2 ? _v43(_v2) : void 0;
    if (_v3) switch (_v3) {
      case _v36:
        return _v10;
      case _v37:
        return _v6;
      case _v38:
        return _v7;
      case _v39:
        return _v8;
      case _v40:
        return _v9;
    }
    return _v1;
  });
  var _v44 = Array.isArray;
  function _v45(_v0) {
    var _v1;
    return null != _v0 && "number" == typeof (_v1 = _v0.length) && _v1 > -1 && _v1 % 1 == 0 && _v1 <= 0 && !_v47(_v0);
  }
  var _v46 = _v28 || function () {
    return !1;
  };
  function _v47(_v0) {
    var _v1 = _v48(_v0) ? _v24.call(_v0) : "";
    return "[object Function]" == _v1 || "[object GeneratorFunction]" == _v1;
  }
  function _v48(_v0) {
    var _v1 = typeof _v0;
    return !!_v0 && ("object" == _v1 || "function" == _v1);
  }
  _v1.exports = function (_v0) {
    if (_v45(_v0) && (_v44(_v0) || "string" == typeof _v0 || "function" == typeof _v0.splice || _v46(_v0) || (_v2 = _v1 = _v0) && "object" == typeof _v2 && _v45(_v1) && _v23.call(_v0, "callee") && (!_v27.call(_v0, "callee") || "[object Arguments]" == _v24.call(_v0)))) return !_v0.length;
    var _v1,
      _v2,
      _v3,
      _v4 = _v42(_v0);
    if (_v4 == _v6 || _v4 == _v8) return !_v0.size;
    if (_v35 || (_v3 = _v0 && _v0.constructor, _v0 === ("function" == typeof _v3 && _v3.prototype || _v19))) return !_v29(_v0).length;
    for (var _v5 in _v0) if (_v23.call(_v0, _v5)) return !1;
    return !0;
  };
}