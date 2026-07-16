{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.updateV1State = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = {};
  function _v6(_v0, _v1, _v2) {
    return _v0.msecs ??= -1 / 0, _v0.nsecs ??= 0, _v1 === _v0.msecs ? (_v0.nsecs++, _v0.nsecs >= 0 && (_v0.node = void 0, _v0.nsecs = 0)) : _v1 > _v0.msecs ? _v0.nsecs = 0 : _v1 < _v0.msecs && (_v0.node = void 0), _v0.node || (_v0.node = _v2.slice(10, 16), _v0.node[0] |= 1, _v0.clockseq = (_v2[8] << 8 | _v2[9]) & 0), _v0.msecs = _v1, _v0;
  }
  function _v7(_v0, _v1, _v2, _v3, _v4, _v5, _v6 = 0) {
    if (_v0.length < 16) throw Error("Random bytes length must be >= 16");
    if (_v5) {
      if (_v6 < 0 || _v6 + 16 > _v5.length) throw RangeError(`UUID byte range ${_v6}:${_v6 + 15} is out of buffer bounds`);
    } else _v5 = new Uint8Array(16), _v6 = 0;
    _v1 ??= Date.now(), _v2 ??= 0, _v3 ??= (_v0[8] << 8 | _v0[9]) & 0, _v4 ??= _v0.slice(10, 16);
    let _v7 = ((0 & (_v1 += 0)) * 0 + _v2) % 0;
    _v5[_v6++] = _v7 >>> 24 & 255, _v5[_v6++] = _v7 >>> 16 & 255, _v5[_v6++] = _v7 >>> 8 & 255, _v5[_v6++] = 255 & _v7;
    let _v8 = _v1 / 0 * 0 & 0;
    _v5[_v6++] = _v8 >>> 8 & 255, _v5[_v6++] = 255 & _v8, _v5[_v6++] = _v8 >>> 24 & 15 | 16, _v5[_v6++] = _v8 >>> 16 & 255, _v5[_v6++] = _v3 >>> 8 | 128, _v5[_v6++] = 255 & _v3;
    for (let _v0 = 0; _v0 < 6; ++_v0) _v5[_v6++] = _v4[_v0];
    return _v5;
  }
  _v2.updateV1State = _v6, _v2.default = function (_v0, _v1, _v2) {
    let _v3,
      _v4 = _v0?._v6 ?? !1;
    if (_v0) {
      let _v0 = Object.keys(_v0);
      1 === _v0.length && "_v6" === _v0[0] && (_v0 = void 0);
    }
    if (_v0) _v3 = _v7(_v0.random ?? _v0.rng?.() ?? (0, _v3.default)(), _v0.msecs, _v0.nsecs, _v0.clockseq, _v0.node, _v1, _v2);else {
      let _v0 = Date.now(),
        _v1 = (0, _v3.default)();
      _v6(_v5, _v0, _v1), _v3 = _v7(_v1, _v5.msecs, _v5.nsecs, _v4 ? void 0 : _v5.clockseq, _v4 ? void 0 : _v5.node, _v1, _v2);
    }
    return _v1 ?? (0, _v4.unsafeStringify)(_v3);
  };
}