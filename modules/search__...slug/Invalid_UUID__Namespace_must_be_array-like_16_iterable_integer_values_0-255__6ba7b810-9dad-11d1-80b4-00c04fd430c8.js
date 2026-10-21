{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = function (_v0) {
    if (!(0, _v2.default)(_v0)) throw TypeError("Invalid UUID");
    var _v1,
      _v2 = new Uint8Array(16);
    return _v2[0] = (_v1 = parseInt(_v0.slice(0, 8), 16)) >>> 24, _v2[1] = _v1 >>> 16 & 255, _v2[2] = _v1 >>> 8 & 255, _v2[3] = 255 & _v1, _v2[4] = (_v1 = parseInt(_v0.slice(9, 13), 16)) >>> 8, _v2[5] = 255 & _v1, _v2[6] = (_v1 = parseInt(_v0.slice(14, 18), 16)) >>> 8, _v2[7] = 255 & _v1, _v2[8] = (_v1 = parseInt(_v0.slice(19, 23), 16)) >>> 8, _v2[9] = 255 & _v1, _v2[10] = (_v1 = parseInt(_v0.slice(24, 36), 16)) / 0 & 255, _v2[11] = _v1 / 0 & 255, _v2[12] = _v1 >>> 24 & 255, _v2[13] = _v1 >>> 16 & 255, _v2[14] = _v1 >>> 8 & 255, _v2[15] = 255 & _v1, _v2;
  };
  function _v4(_v0, _v1, _v2) {
    function _v3(_v0, _v1, _v2, _v3) {
      if ("string" == typeof _v0 && (_v0 = function (_v0) {
        _v0 = unescape(encodeURIComponent(_v0));
        for (var _v1 = [], _v2 = 0; _v2 < _v0.length; ++_v2) _v1.push(_v0.charCodeAt(_v2));
        return _v1;
      }(_v0)), "string" == typeof _v1 && (_v1 = _v3(_v1)), 16 !== _v1.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      var _v4 = new Uint8Array(16 + _v0.length);
      if (_v4.set(_v1), _v4.set(_v0, _v1.length), (_v4 = _v2(_v4))[6] = 15 & _v4[6] | _v1, _v4[8] = 63 & _v4[8] | 128, _v2) {
        _v3 = _v3 || 0;
        for (var _v5 = 0; _v5 < 16; ++_v5) _v2[_v3 + _v5] = _v4[_v5];
        return _v2;
      }
      return (0, _v1.default)(_v4);
    }
    try {
      _v3.name = _v0;
    } catch (_v0) {}
    return _v3.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", _v3.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", _v3;
  }
  function _v5(_v0, _v1) {
    return _v0 << _v1 | _v0 >>> 32 - _v1;
  }
  _v0.s(["default", 0, _v3], 0), _v0.s(["default", 0, _v4], 0);
  var _v6 = _v4("v5", 80, function (_v0) {
    var _v1 = [0, 0, 0, 0],
      _v2 = [0, 0, 0, 0, 0];
    if ("string" == typeof _v0) {
      var _v3 = unescape(encodeURIComponent(_v0));
      _v0 = [];
      for (var _v4 = 0; _v4 < _v3.length; ++_v4) _v0.push(_v3.charCodeAt(_v4));
    } else Array.isArray(_v0) || (_v0 = Array.prototype.slice.call(_v0));
    _v0.push(128);
    for (var _v5 = Math.ceil((_v0.length / 4 + 2) / 16), _v6 = Array(_v5), _v7 = 0; _v7 < _v5; ++_v7) {
      for (var _v8 = new Uint32Array(16), _v9 = 0; _v9 < 16; ++_v9) _v8[_v9] = _v0[64 * _v7 + 4 * _v9] << 24 | _v0[64 * _v7 + 4 * _v9 + 1] << 16 | _v0[64 * _v7 + 4 * _v9 + 2] << 8 | _v0[64 * _v7 + 4 * _v9 + 3];
      _v6[_v7] = _v8;
    }
    _v6[_v5 - 1][14] = (_v0.length - 1) * 8 / 0, _v6[_v5 - 1][14] = Math.floor(_v6[_v5 - 1][14]), _v6[_v5 - 1][15] = (_v0.length - 1) * 8 | 0;
    for (var _v10 = 0; _v10 < _v5; ++_v10) {
      for (var _v11 = new Uint32Array(80), _v12 = 0; _v12 < 16; ++_v12) _v11[_v12] = _v6[_v10][_v12];
      for (var _v13 = 16; _v13 < 80; ++_v13) _v11[_v13] = _v5(_v11[_v13 - 3] ^ _v11[_v13 - 8] ^ _v11[_v13 - 14] ^ _v11[_v13 - 16], 1);
      for (var _v14 = _v2[0], _v15 = _v2[1], _v16 = _v2[2], _v17 = _v2[3], _v18 = _v2[4], _v19 = 0; _v19 < 80; ++_v19) {
        var _v20 = Math.floor(_v19 / 20),
          _v21 = _v5(_v14, 5) + function (_v0, _v1, _v2, _v3) {
            switch (_v0) {
              case 0:
                return _v1 & _v2 ^ ~_v1 & _v3;
              case 1:
              case 3:
                return _v1 ^ _v2 ^ _v3;
              case 2:
                return _v1 & _v2 ^ _v1 & _v3 ^ _v2 & _v3;
            }
          }(_v20, _v15, _v16, _v17) + _v18 + _v1[_v20] + _v11[_v19] >>> 0;
        _v18 = _v17, _v17 = _v16, _v16 = _v5(_v15, 30) >>> 0, _v15 = _v14, _v14 = _v21;
      }
      _v2[0] = _v2[0] + _v14 >>> 0, _v2[1] = _v2[1] + _v15 >>> 0, _v2[2] = _v2[2] + _v16 >>> 0, _v2[3] = _v2[3] + _v17 >>> 0, _v2[4] = _v2[4] + _v18 >>> 0;
    }
    return [_v2[0] >> 24 & 255, _v2[0] >> 16 & 255, _v2[0] >> 8 & 255, 255 & _v2[0], _v2[1] >> 24 & 255, _v2[1] >> 16 & 255, _v2[1] >> 8 & 255, 255 & _v2[1], _v2[2] >> 24 & 255, _v2[2] >> 16 & 255, _v2[2] >> 8 & 255, 255 & _v2[2], _v2[3] >> 24 & 255, _v2[3] >> 16 & 255, _v2[3] >> 8 & 255, 255 & _v2[3], _v2[4] >> 24 & 255, _v2[4] >> 16 & 255, _v2[4] >> 8 & 255, 255 & _v2[4]];
  });
  _v0.s(["default", 0, _v6], 0);
}