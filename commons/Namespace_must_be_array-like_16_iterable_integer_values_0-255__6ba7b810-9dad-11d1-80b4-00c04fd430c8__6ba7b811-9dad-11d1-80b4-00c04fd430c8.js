{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.URL = _v2.DNS = void 0, _v2.default = function (_v0, _v1, _v2) {
    function _v3(_v0, _v1, _v2, _v3) {
      var _v4;
      if ("string" == typeof _v0 && (_v0 = function (_v0) {
        _v0 = unescape(encodeURIComponent(_v0));
        let _v1 = [];
        for (let _v0 = 0; _v0 < _v0.length; ++_v0) _v1.push(_v0.charCodeAt(_v0));
        return _v1;
      }(_v0)), "string" == typeof _v1 && (_v1 = (0, _v5.default)(_v1)), (null == (_v4 = _v1) ? void 0 : _v4.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let _v5 = new Uint8Array(16 + _v0.length);
      if (_v5.set(_v1), _v5.set(_v0, _v1.length), (_v5 = _v2(_v5))[6] = 15 & _v5[6] | _v1, _v5[8] = 63 & _v5[8] | 128, _v2) {
        _v3 = _v3 || 0;
        for (let _v0 = 0; _v0 < 16; ++_v0) _v2[_v3 + _v0] = _v5[_v0];
        return _v2;
      }
      return (0, _v4.unsafeStringify)(_v5);
    }
    try {
      _v3.name = _v0;
    } catch (_v0) {}
    return _v3.DNS = _v6, _v3.URL = _v7, _v3;
  };
  var _v3,
    _v4 = _v0.r(0),
    _v5 = (_v3 = _v0.r(0)) && _v3.__esModule ? _v3 : {
      default: _v3
    };
  let _v6 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  _v2.DNS = _v6;
  let _v7 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  _v2.URL = _v7;
}