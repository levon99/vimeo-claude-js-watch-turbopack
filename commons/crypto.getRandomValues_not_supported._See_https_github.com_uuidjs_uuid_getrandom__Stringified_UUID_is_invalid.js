{
  "use strict";

  var _v1,
    _v2 = new Uint8Array(16);
  function _v3() {
    if (!_v1 && !(_v1 = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "u" > typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return _v1(_v2);
  }
  _v0.s(["default", 0, _v3], 0);
  let _v4 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
    _v5 = function (_v0) {
      return "string" == typeof _v0 && _v4.test(_v0);
    };
  _v0.s(["default", 0, _v5], 0);
  for (var _v6 = [], _v7 = 0; _v7 < 256; ++_v7) _v6.push((_v7 + 256).toString(16).substr(1));
  let _v8 = function (_v0) {
    var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      _v2 = (_v6[_v0[_v1 + 0]] + _v6[_v0[_v1 + 1]] + _v6[_v0[_v1 + 2]] + _v6[_v0[_v1 + 3]] + "-" + _v6[_v0[_v1 + 4]] + _v6[_v0[_v1 + 5]] + "-" + _v6[_v0[_v1 + 6]] + _v6[_v0[_v1 + 7]] + "-" + _v6[_v0[_v1 + 8]] + _v6[_v0[_v1 + 9]] + "-" + _v6[_v0[_v1 + 10]] + _v6[_v0[_v1 + 11]] + _v6[_v0[_v1 + 12]] + _v6[_v0[_v1 + 13]] + _v6[_v0[_v1 + 14]] + _v6[_v0[_v1 + 15]]).toLowerCase();
    if (!_v5(_v2)) throw TypeError("Stringified UUID is invalid");
    return _v2;
  };
  _v0.s(["default", 0, _v8], 0), _v0.s(["default", 0, function (_v0, _v1, _v2) {
    var _v3 = (_v0 = _v0 || {}).random || (_v0.rng || _v3)();
    if (_v3[6] = 15 & _v3[6] | 64, _v3[8] = 63 & _v3[8] | 128, _v1) {
      _v2 = _v2 || 0;
      for (var _v4 = 0; _v4 < 16; ++_v4) _v1[_v2 + _v4] = _v3[_v4];
      return _v1;
    }
    return _v8(_v3);
  }], 0);
}