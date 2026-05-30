{
  "use strict";

  let _v3, _v4;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = void 0;
  var _v5,
    _v6 = (_v5 = _v0.r(0)) && _v5.__esModule ? _v5 : {
      default: _v5
    },
    _v7 = _v0.r(0);
  let _v8 = 0,
    _v9 = 0;
  _v2.default = function (_v0, _v1, _v2) {
    let _v3 = _v1 && _v2 || 0,
      _v4 = _v1 || Array(16),
      _v5 = (_v0 = _v0 || {}).node || _v3,
      _v6 = void 0 !== _v0.clockseq ? _v0.clockseq : _v4;
    if (null == _v5 || null == _v6) {
      let _v0 = _v0.random || (_v0.rng || _v6.default)();
      null == _v5 && (_v5 = _v3 = [1 | _v0[0], _v0[1], _v0[2], _v0[3], _v0[4], _v0[5]]), null == _v6 && (_v6 = _v4 = (_v0[6] << 8 | _v0[7]) & 0);
    }
    let _v7 = void 0 !== _v0.msecs ? _v0.msecs : Date.now(),
      _v8 = void 0 !== _v0.nsecs ? _v0.nsecs : _v9 + 1,
      _v9 = _v7 - _v8 + (_v8 - _v9) / 0;
    if (_v9 < 0 && void 0 === _v0.clockseq && (_v6 = _v6 + 1 & 0), (_v9 < 0 || _v7 > _v8) && void 0 === _v0.nsecs && (_v8 = 0), _v8 >= 0) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _v8 = _v7, _v9 = _v8, _v4 = _v6;
    let _v10 = ((0 & (_v7 += 0)) * 0 + _v8) % 0;
    _v4[_v3++] = _v10 >>> 24 & 255, _v4[_v3++] = _v10 >>> 16 & 255, _v4[_v3++] = _v10 >>> 8 & 255, _v4[_v3++] = 255 & _v10;
    let _v11 = _v7 / 0 * 0 & 0;
    _v4[_v3++] = _v11 >>> 8 & 255, _v4[_v3++] = 255 & _v11, _v4[_v3++] = _v11 >>> 24 & 15 | 16, _v4[_v3++] = _v11 >>> 16 & 255, _v4[_v3++] = _v6 >>> 8 | 128, _v4[_v3++] = 255 & _v6;
    for (let _v0 = 0; _v0 < 6; ++_v0) _v4[_v3 + _v0] = _v5[_v0];
    return _v1 || (0, _v7.unsafeStringify)(_v4);
  };
}