{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.default = function (_v0) {
    var _v1;
    let _v2 = (_v1 = "string" == typeof _v0 ? (0, _v3.default)(_v0) : _v0, Uint8Array.of((15 & _v1[6]) << 4 | _v1[7] >> 4 & 15, (15 & _v1[7]) << 4 | (240 & _v1[4]) >> 4, (15 & _v1[4]) << 4 | (240 & _v1[5]) >> 4, (15 & _v1[5]) << 4 | (240 & _v1[0]) >> 4, (15 & _v1[0]) << 4 | (240 & _v1[1]) >> 4, (15 & _v1[1]) << 4 | (240 & _v1[2]) >> 4, 96 | 15 & _v1[2], _v1[3], _v1[8], _v1[9], _v1[10], _v1[11], _v1[12], _v1[13], _v1[14], _v1[15]));
    return "string" == typeof _v0 ? (0, _v4.unsafeStringify)(_v2) : _v2;
  };
}