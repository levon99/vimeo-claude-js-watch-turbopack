{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.unsafeStringify = void 0;
  let _v3 = _v0.r(0),
    _v4 = [];
  for (let _v0 = 0; _v0 < 256; ++_v0) _v4.push((_v0 + 256).toString(16).slice(1));
  function _v5(_v0, _v1 = 0) {
    return (_v4[_v0[_v1 + 0]] + _v4[_v0[_v1 + 1]] + _v4[_v0[_v1 + 2]] + _v4[_v0[_v1 + 3]] + "-" + _v4[_v0[_v1 + 4]] + _v4[_v0[_v1 + 5]] + "-" + _v4[_v0[_v1 + 6]] + _v4[_v0[_v1 + 7]] + "-" + _v4[_v0[_v1 + 8]] + _v4[_v0[_v1 + 9]] + "-" + _v4[_v0[_v1 + 10]] + _v4[_v0[_v1 + 11]] + _v4[_v0[_v1 + 12]] + _v4[_v0[_v1 + 13]] + _v4[_v0[_v1 + 14]] + _v4[_v0[_v1 + 15]]).toLowerCase();
  }
  _v2.unsafeStringify = _v5, _v2.default = function (_v0, _v1 = 0) {
    let _v2 = _v5(_v0, _v1);
    if (!(0, _v3.default)(_v2)) throw TypeError("Stringified UUID is invalid");
    return _v2;
  };
}