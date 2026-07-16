{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.updateV7State = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = {};
  function _v6(_v0, _v1, _v2) {
    return _v0.msecs ??= -1 / 0, _v0.seq ??= 0, _v1 > _v0.msecs ? (_v0.seq = _v2[6] << 23 | _v2[7] << 16 | _v2[8] << 8 | _v2[9], _v0.msecs = _v1) : (_v0.seq = _v0.seq + 1 | 0, 0 === _v0.seq && _v0.msecs++), _v0;
  }
  function _v7(_v0, _v1, _v2, _v3, _v4 = 0) {
    if (_v0.length < 16) throw Error("Random bytes length must be >= 16");
    if (_v3) {
      if (_v4 < 0 || _v4 + 16 > _v3.length) throw RangeError(`UUID byte range ${_v4}:${_v4 + 15} is out of buffer bounds`);
    } else _v3 = new Uint8Array(16), _v4 = 0;
    return _v1 ??= Date.now(), _v2 ??= 127 * _v0[6] << 24 | _v0[7] << 16 | _v0[8] << 8 | _v0[9], _v3[_v4++] = _v1 / 0 & 255, _v3[_v4++] = _v1 / 0 & 255, _v3[_v4++] = _v1 / 0 & 255, _v3[_v4++] = _v1 / 0 & 255, _v3[_v4++] = _v1 / 256 & 255, _v3[_v4++] = 255 & _v1, _v3[_v4++] = 112 | _v2 >>> 28 & 15, _v3[_v4++] = _v2 >>> 20 & 255, _v3[_v4++] = 128 | _v2 >>> 14 & 63, _v3[_v4++] = _v2 >>> 6 & 255, _v3[_v4++] = _v2 << 2 & 255 | 3 & _v0[10], _v3[_v4++] = _v0[11], _v3[_v4++] = _v0[12], _v3[_v4++] = _v0[13], _v3[_v4++] = _v0[14], _v3[_v4++] = _v0[15], _v3;
  }
  _v2.updateV7State = _v6, _v2.default = function (_v0, _v1, _v2) {
    let _v3;
    if (_v0) _v3 = _v7(_v0.random ?? _v0.rng?.() ?? (0, _v3.default)(), _v0.msecs, _v0.seq, _v1, _v2);else {
      let _v0 = Date.now(),
        _v1 = (0, _v3.default)();
      _v6(_v5, _v0, _v1), _v3 = _v7(_v1, _v5.msecs, _v5.seq, _v1, _v2);
    }
    return _v1 ?? (0, _v4.unsafeStringify)(_v3);
  };
}