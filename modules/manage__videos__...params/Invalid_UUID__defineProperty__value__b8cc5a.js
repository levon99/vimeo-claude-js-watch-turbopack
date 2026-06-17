{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0);
  _v2.default = function (_v0) {
    let _v1;
    if (!(0, _v3.default)(_v0)) throw TypeError("Invalid UUID");
    return Uint8Array.of((_v1 = parseInt(_v0.slice(0, 8), 16)) >>> 24, _v1 >>> 16 & 255, _v1 >>> 8 & 255, 255 & _v1, (_v1 = parseInt(_v0.slice(9, 13), 16)) >>> 8, 255 & _v1, (_v1 = parseInt(_v0.slice(14, 18), 16)) >>> 8, 255 & _v1, (_v1 = parseInt(_v0.slice(19, 23), 16)) >>> 8, 255 & _v1, (_v1 = parseInt(_v0.slice(24, 36), 16)) / 0 & 255, _v1 / 0 & 255, _v1 >>> 24 & 255, _v1 >>> 16 & 255, _v1 >>> 8 & 255, 255 & _v1);
  };
}