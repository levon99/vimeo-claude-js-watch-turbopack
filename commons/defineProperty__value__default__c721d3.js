{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  _v2.default = function (_v0, _v1, _v2) {
    _v0 ??= {}, _v2 ??= 0;
    let _v3 = (0, _v4.default)({
      ..._v0,
      _v6: !0
    }, new Uint8Array(16));
    if (_v3 = (0, _v5.default)(_v3), _v1) {
      for (let _v0 = 0; _v0 < 16; _v0++) _v1[_v2 + _v0] = _v3[_v0];
      return _v1;
    }
    return (0, _v3.unsafeStringify)(_v3);
  };
}