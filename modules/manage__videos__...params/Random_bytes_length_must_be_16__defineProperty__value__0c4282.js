{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  _v2.default = function (_v0, _v1, _v2) {
    if (_v3.default.randomUUID && !_v1 && !_v0) return _v3.default.randomUUID();
    let _v3 = (_v0 = _v0 || {}).random ?? _v0.rng?.() ?? (0, _v4.default)();
    if (_v3.length < 16) throw Error("Random bytes length must be >= 16");
    if (_v3[6] = 15 & _v3[6] | 64, _v3[8] = 63 & _v3[8] | 128, _v1) {
      if ((_v2 = _v2 || 0) < 0 || _v2 + 16 > _v1.length) throw RangeError(`UUID byte range ${_v2}:${_v2 + 15} is out of buffer bounds`);
      for (let _v0 = 0; _v0 < 16; ++_v0) _v1[_v2 + _v0] = _v3[_v0];
      return _v1;
    }
    return (0, _v5.unsafeStringify)(_v3);
  };
}