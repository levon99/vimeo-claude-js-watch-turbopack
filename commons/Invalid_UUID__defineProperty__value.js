{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = void 0;
  var _v3,
    _v4 = (_v3 = _v0.r(0)) && _v3.__esModule ? _v3 : {
      default: _v3
    };
  _v2.default = function (_v0) {
    let _v1;
    if (!(0, _v4.default)(_v0)) throw TypeError("Invalid UUID");
    let _v2 = new Uint8Array(16);
    return _v2[0] = (_v1 = parseInt(_v0.slice(0, 8), 16)) >>> 24, _v2[1] = _v1 >>> 16 & 255, _v2[2] = _v1 >>> 8 & 255, _v2[3] = 255 & _v1, _v2[4] = (_v1 = parseInt(_v0.slice(9, 13), 16)) >>> 8, _v2[5] = 255 & _v1, _v2[6] = (_v1 = parseInt(_v0.slice(14, 18), 16)) >>> 8, _v2[7] = 255 & _v1, _v2[8] = (_v1 = parseInt(_v0.slice(19, 23), 16)) >>> 8, _v2[9] = 255 & _v1, _v2[10] = (_v1 = parseInt(_v0.slice(24, 36), 16)) / 0 & 255, _v2[11] = _v1 / 0 & 255, _v2[12] = _v1 >>> 24 & 255, _v2[13] = _v1 >>> 16 & 255, _v2[14] = _v1 >>> 8 & 255, _v2[15] = 255 & _v1, _v2;
  };
}