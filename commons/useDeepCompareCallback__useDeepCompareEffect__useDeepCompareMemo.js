{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = Object.prototype.hasOwnProperty;
  function _v3(_v0, _v1, _v2) {
    for (_v2 of _v0.keys()) if (_v4(_v2, _v1)) return _v2;
  }
  function _v4(_v0, _v1) {
    var _v2, _v3, _v4;
    if (_v0 === _v1) return !0;
    if (_v0 && _v1 && (_v2 = _v0.constructor) === _v1.constructor) {
      if (_v2 === Date) return _v0.getTime() === _v1.getTime();
      if (_v2 === RegExp) return _v0.toString() === _v1.toString();
      if (_v2 === Array) {
        if ((_v3 = _v0.length) === _v1.length) for (; _v3-- && _v4(_v0[_v3], _v1[_v3]););
        return -1 === _v3;
      }
      if (_v2 === Set) {
        if (_v0.size !== _v1.size) return !1;
        for (_v3 of _v0) if ((_v4 = _v3) && "object" == typeof _v4 && !(_v4 = _v3(_v1, _v4)) || !_v1.has(_v4)) return !1;
        return !0;
      }
      if (_v2 === Map) {
        if (_v0.size !== _v1.size) return !1;
        for (_v3 of _v0) if ((_v4 = _v3[0]) && "object" == typeof _v4 && !(_v4 = _v3(_v1, _v4)) || !_v4(_v3[1], _v1.get(_v4))) return !1;
        return !0;
      }
      if (_v2 === ArrayBuffer) _v0 = new Uint8Array(_v0), _v1 = new Uint8Array(_v1);else if (_v2 === DataView) {
        if ((_v3 = _v0.byteLength) === _v1.byteLength) for (; _v3-- && _v0.getInt8(_v3) === _v1.getInt8(_v3););
        return -1 === _v3;
      }
      if (ArrayBuffer.isView(_v0)) {
        if ((_v3 = _v0.byteLength) === _v1.byteLength) for (; _v3-- && _v0[_v3] === _v1[_v3];);
        return -1 === _v3;
      }
      if (!_v2 || "object" == typeof _v0) {
        for (_v2 in _v3 = 0, _v0) if (_v2.call(_v0, _v2) && ++_v3 && !_v2.call(_v1, _v2) || !(_v2 in _v1) || !_v4(_v0[_v2], _v1[_v2])) return !1;
        return Object.keys(_v1).length === _v3;
      }
    }
    return _v0 != _v0 && _v1 != _v1;
  }
  function _v5(_v0) {
    let _v1 = _v1.default.useRef(_v0),
      _v2 = _v1.default.useRef(0);
    return _v4(_v0, _v1.current) || (_v1.current = _v0, _v2.current += 1), _v1.default.useMemo(() => _v1.current, [_v2.current]);
  }
  _v0.s(["useDeepCompareCallback", 0, function (_v0, _v1) {
    return _v1.default.useCallback(_v0, _v5(_v1));
  }, "useDeepCompareEffect", 0, function (_v0, _v1) {
    _v1.default.useEffect(_v0, _v5(_v1));
  }, "useDeepCompareMemo", 0, function (_v0, _v1) {
    return _v1.default.useMemo(_v0, _v5(_v1));
  }], 0);
}