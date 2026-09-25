{
  "use strict";

  function _v1(_v0, _v1) {
    if (_v0 === _v1) return !0;
    if (!_v0 || !_v1) return !1;
    let _v2 = _v0.length;
    if (_v1.length !== _v2) return !1;
    for (let _v0 = 0; _v0 < _v2; _v0++) if (_v0[_v0] !== _v1[_v0]) return !1;
    return !0;
  }
  function _v2(_v0, _v1) {
    if (_v0 === _v1) return !0;
    if (!_v0 || !_v1) return !1;
    let _v2 = Object.keys(_v0),
      _v3 = Object.keys(_v1),
      _v4 = _v2.length;
    if (_v3.length !== _v4) return !1;
    for (let _v0 = 0; _v0 < _v4; _v0++) {
      let _v0 = _v2[_v0];
      if (_v0[_v0] !== _v1[_v0] || !Object.prototype.hasOwnProperty.call(_v1, _v0)) return !1;
    }
    return !0;
  }
  _v0.s(["shallowEqual", 0, function (_v0, _v1) {
    let _v2 = Array.isArray(_v0),
      _v3 = Array.isArray(_v1);
    return _v2 === _v3 && (_v2 && _v3 ? _v1(_v0, _v1) : _v2(_v0, _v1));
  }, "shallowEqualArrays", 0, _v1, "shallowEqualObjects", 0, _v2]);
}