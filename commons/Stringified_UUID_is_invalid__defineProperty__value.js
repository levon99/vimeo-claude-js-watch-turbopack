{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = void 0, _v2.unsafeStringify = _v6;
  var _v3,
    _v4 = (_v3 = _v0.r(0)) && _v3.__esModule ? _v3 : {
      default: _v3
    };
  let _v5 = [];
  for (let _v0 = 0; _v0 < 256; ++_v0) _v5.push((_v0 + 256).toString(16).slice(1));
  function _v6(_v0, _v1 = 0) {
    return _v5[_v0[_v1 + 0]] + _v5[_v0[_v1 + 1]] + _v5[_v0[_v1 + 2]] + _v5[_v0[_v1 + 3]] + "-" + _v5[_v0[_v1 + 4]] + _v5[_v0[_v1 + 5]] + "-" + _v5[_v0[_v1 + 6]] + _v5[_v0[_v1 + 7]] + "-" + _v5[_v0[_v1 + 8]] + _v5[_v0[_v1 + 9]] + "-" + _v5[_v0[_v1 + 10]] + _v5[_v0[_v1 + 11]] + _v5[_v0[_v1 + 12]] + _v5[_v0[_v1 + 13]] + _v5[_v0[_v1 + 14]] + _v5[_v0[_v1 + 15]];
  }
  _v2.default = function (_v0, _v1 = 0) {
    let _v2 = _v6(_v0, _v1);
    if (!(0, _v4.default)(_v2)) throw TypeError("Stringified UUID is invalid");
    return _v2;
  };
}