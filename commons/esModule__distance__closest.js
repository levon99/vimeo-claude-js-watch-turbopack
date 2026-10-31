{
  "use strict";

  _v2.__esModule = !0, _v2.distance = _v2.closest = void 0;
  var _v3 = new Uint32Array(0),
    _v4 = function (_v0, _v1) {
      for (var _v2 = _v0.length, _v3 = _v1.length, _v4 = 1 << _v2 - 1, _v5 = -1, _v6 = 0, _v7 = _v2, _v8 = _v2; _v8--;) _v3[_v0.charCodeAt(_v8)] |= 1 << _v8;
      for (_v8 = 0; _v8 < _v3; _v8++) {
        var _v9 = _v3[_v1.charCodeAt(_v8)],
          _v10 = _v9 | _v6;
        _v9 |= (_v9 & _v5) + _v5 ^ _v5, _v6 |= ~(_v9 | _v5), _v5 &= _v9, _v6 & _v4 && _v7++, _v5 & _v4 && _v7--, _v5 = _v5 << 1 | ~(_v10 | (_v6 = _v6 << 1 | 1)), _v6 &= _v10;
      }
      for (_v8 = _v2; _v8--;) _v3[_v0.charCodeAt(_v8)] = 0;
      return _v7;
    },
    _v5 = function (_v0, _v1) {
      for (var _v2 = _v1.length, _v3 = _v0.length, _v4 = [], _v5 = [], _v6 = Math.ceil(_v2 / 32), _v7 = Math.ceil(_v3 / 32), _v8 = 0; _v8 < _v6; _v8++) _v5[_v8] = -1, _v4[_v8] = 0;
      for (var _v9 = 0; _v9 < _v7 - 1; _v9++) {
        for (var _v10 = 0, _v11 = -1, _v12 = 32 * _v9, _v13 = Math.min(32, _v3) + _v12, _v14 = _v12; _v14 < _v13; _v14++) _v3[_v0.charCodeAt(_v14)] |= 1 << _v14;
        for (var _v8 = 0; _v8 < _v2; _v8++) {
          var _v15 = _v3[_v1.charCodeAt(_v8)],
            _v16 = _v5[_v8 / 32 | 0] >>> _v8 & 1,
            _v17 = _v4[_v8 / 32 | 0] >>> _v8 & 1,
            _v18 = _v15 | _v10,
            _v19 = ((_v15 | _v17) & _v11) + _v11 ^ _v11 | _v15 | _v17,
            _v20 = _v10 | ~(_v19 | _v11),
            _v21 = _v11 & _v19;
          _v20 >>> 31 ^ _v16 && (_v5[_v8 / 32 | 0] ^= 1 << _v8), _v21 >>> 31 ^ _v17 && (_v4[_v8 / 32 | 0] ^= 1 << _v8), _v20 = _v20 << 1 | _v16, _v11 = (_v21 = _v21 << 1 | _v17) | ~(_v18 | _v20), _v10 = _v20 & _v18;
        }
        for (var _v14 = _v12; _v14 < _v13; _v14++) _v3[_v0.charCodeAt(_v14)] = 0;
      }
      for (var _v22 = 0, _v23 = -1, _v24 = 32 * _v9, _v25 = Math.min(32, _v3 - _v24) + _v24, _v14 = _v24; _v14 < _v25; _v14++) _v3[_v0.charCodeAt(_v14)] |= 1 << _v14;
      for (var _v26 = _v3, _v8 = 0; _v8 < _v2; _v8++) {
        var _v15 = _v3[_v1.charCodeAt(_v8)],
          _v16 = _v5[_v8 / 32 | 0] >>> _v8 & 1,
          _v17 = _v4[_v8 / 32 | 0] >>> _v8 & 1,
          _v18 = _v15 | _v22,
          _v19 = ((_v15 | _v17) & _v23) + _v23 ^ _v23 | _v15 | _v17,
          _v20 = _v22 | ~(_v19 | _v23),
          _v21 = _v23 & _v19;
        _v26 += _v20 >>> _v3 - 1 & 1, _v26 -= _v21 >>> _v3 - 1 & 1, _v20 >>> 31 ^ _v16 && (_v5[_v8 / 32 | 0] ^= 1 << _v8), _v21 >>> 31 ^ _v17 && (_v4[_v8 / 32 | 0] ^= 1 << _v8), _v20 = _v20 << 1 | _v16, _v23 = (_v21 = _v21 << 1 | _v17) | ~(_v18 | _v20), _v22 = _v20 & _v18;
      }
      for (var _v14 = _v24; _v14 < _v25; _v14++) _v3[_v0.charCodeAt(_v14)] = 0;
      return _v26;
    },
    _v6 = function (_v0, _v1) {
      if (_v0.length < _v1.length) {
        var _v2 = _v1;
        _v1 = _v0, _v0 = _v2;
      }
      return 0 === _v1.length ? _v0.length : _v0.length <= 32 ? _v4(_v0, _v1) : _v5(_v0, _v1);
    };
  _v2.distance = _v6, _v2.closest = function (_v0, _v1) {
    for (var _v2 = 1 / 0, _v3 = 0, _v4 = 0; _v4 < _v1.length; _v4++) {
      var _v5 = _v6(_v0, _v1[_v4]);
      _v5 < _v2 && (_v2 = _v5, _v3 = _v4);
    }
    return _v1[_v3];
  };
}