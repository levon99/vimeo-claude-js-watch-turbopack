{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0).f,
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    var _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7 = _v0.target,
      _v8 = _v0.global,
      _v9 = _v0.stat;
    if (_v2 = _v8 ? _v3 : _v9 ? _v3[_v7] || _v7(_v7, {}) : _v3[_v7] && _v3[_v7].prototype) for (_v3 in _v1) {
      if (_v5 = _v1[_v3], _v4 = _v0.dontCallGetSet ? (_v6 = _v4(_v2, _v3)) && _v6.value : _v2[_v3], !_v9(_v8 ? _v3 : _v7 + (_v9 ? "." : "#") + _v3, _v0.forced) && void 0 !== _v4) {
        if (typeof _v5 == typeof _v4) continue;
        _v8(_v5, _v4);
      }
      (_v0.sham || _v4 && _v4.sham) && _v5(_v5, "sham", !0), _v6(_v2, _v3, _v5, _v0);
    }
  };
}