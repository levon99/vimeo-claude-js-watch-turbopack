{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = void 0;
  var _v3 = _v6(_v0.r(0)),
    _v4 = _v6(_v0.r(0)),
    _v5 = _v0.r(0);
  function _v6(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  _v2.default = function (_v0, _v1, _v2) {
    if (_v3.default.randomUUID && !_v1 && !_v0) return _v3.default.randomUUID();
    let _v3 = (_v0 = _v0 || {}).random || (_v0.rng || _v4.default)();
    if (_v3[6] = 15 & _v3[6] | 64, _v3[8] = 63 & _v3[8] | 128, _v1) {
      _v2 = _v2 || 0;
      for (let _v0 = 0; _v0 < 16; ++_v0) _v1[_v2 + _v0] = _v3[_v0];
      return _v1;
    }
    return (0, _v5.unsafeStringify)(_v3);
  };
}