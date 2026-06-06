{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.URL = _v2.DNS = _v2.stringToBytes = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0) {
    let _v1 = new Uint8Array((_v0 = unescape(encodeURIComponent(_v0))).length);
    for (let _v0 = 0; _v0 < _v0.length; ++_v0) _v1[_v0] = _v0.charCodeAt(_v0);
    return _v1;
  }
  _v2.stringToBytes = _v5, _v2.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", _v2.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", _v2.default = function (_v0, _v1, _v2, _v3, _v4, _v5) {
    let _v6 = "string" == typeof _v2 ? _v5(_v2) : _v2,
      _v7 = "string" == typeof _v3 ? (0, _v3.default)(_v3) : _v3;
    if ("string" == typeof _v3 && (_v3 = (0, _v3.default)(_v3)), _v3?.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let _v8 = new Uint8Array(16 + _v6.length);
    if (_v8.set(_v7), _v8.set(_v6, _v7.length), (_v8 = _v1(_v8))[6] = 15 & _v8[6] | _v0, _v8[8] = 63 & _v8[8] | 128, _v4) {
      _v5 = _v5 || 0;
      for (let _v0 = 0; _v0 < 16; ++_v0) _v4[_v5 + _v0] = _v8[_v0];
      return _v4;
    }
    return (0, _v4.unsafeStringify)(_v8);
  };
}