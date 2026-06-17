{
  "use strict";

  function _v3(_v0, _v1) {
    return _v0 << _v1 | _v0 >>> 32 - _v1;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function (_v0) {
    let _v1 = [0, 0, 0, 0],
      _v2 = [0, 0, 0, 0, 0],
      _v3 = new Uint8Array(_v0.length + 1);
    _v3.set(_v0), _v3[_v0.length] = 128;
    let _v4 = Math.ceil(((_v0 = _v3).length / 4 + 2) / 16),
      _v5 = Array(_v4);
    for (let _v0 = 0; _v0 < _v4; ++_v0) {
      let _v0 = new Uint32Array(16);
      for (let _v0 = 0; _v0 < 16; ++_v0) _v0[_v0] = _v0[64 * _v0 + 4 * _v0] << 24 | _v0[64 * _v0 + 4 * _v0 + 1] << 16 | _v0[64 * _v0 + 4 * _v0 + 2] << 8 | _v0[64 * _v0 + 4 * _v0 + 3];
      _v5[_v0] = _v0;
    }
    _v5[_v4 - 1][14] = (_v0.length - 1) * 8 / 0, _v5[_v4 - 1][14] = Math.floor(_v5[_v4 - 1][14]), _v5[_v4 - 1][15] = (_v0.length - 1) * 8 | 0;
    for (let _v0 = 0; _v0 < _v4; ++_v0) {
      let _v0 = new Uint32Array(80);
      for (let _v0 = 0; _v0 < 16; ++_v0) _v0[_v0] = _v5[_v0][_v0];
      for (let _v0 = 16; _v0 < 80; ++_v0) _v0[_v0] = _v3(_v0[_v0 - 3] ^ _v0[_v0 - 8] ^ _v0[_v0 - 14] ^ _v0[_v0 - 16], 1);
      let _v1 = _v2[0],
        _v2 = _v2[1],
        _v3 = _v2[2],
        _v4 = _v2[3],
        _v5 = _v2[4];
      for (let _v0 = 0; _v0 < 80; ++_v0) {
        let _v0 = Math.floor(_v0 / 20),
          _v1 = _v3(_v1, 5) + function (_v0, _v1, _v2, _v3) {
            switch (_v0) {
              case 0:
                return _v1 & _v2 ^ ~_v1 & _v3;
              case 1:
              case 3:
                return _v1 ^ _v2 ^ _v3;
              case 2:
                return _v1 & _v2 ^ _v1 & _v3 ^ _v2 & _v3;
            }
          }(_v0, _v2, _v3, _v4) + _v5 + _v1[_v0] + _v0[_v0] >>> 0;
        _v5 = _v4, _v4 = _v3, _v3 = _v3(_v2, 30) >>> 0, _v2 = _v1, _v1 = _v1;
      }
      _v2[0] = _v2[0] + _v1 >>> 0, _v2[1] = _v2[1] + _v2 >>> 0, _v2[2] = _v2[2] + _v3 >>> 0, _v2[3] = _v2[3] + _v4 >>> 0, _v2[4] = _v2[4] + _v5 >>> 0;
    }
    return Uint8Array.of(_v2[0] >> 24, _v2[0] >> 16, _v2[0] >> 8, _v2[0], _v2[1] >> 24, _v2[1] >> 16, _v2[1] >> 8, _v2[1], _v2[2] >> 24, _v2[2] >> 16, _v2[2] >> 8, _v2[2], _v2[3] >> 24, _v2[3] >> 16, _v2[3] >> 8, _v2[3], _v2[4] >> 24, _v2[4] >> 16, _v2[4] >> 8, _v2[4]);
  };
}