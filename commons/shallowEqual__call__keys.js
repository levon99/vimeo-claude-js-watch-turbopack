{
  "use strict";

  _v0.s(["shallowEqual", 0, function (_v0, _v1, _v2, _v3) {
    let _v4 = _v2 ? _v2.call(_v3, _v0, _v1) : void 0;
    if (void 0 !== _v4) return !!_v4;
    if (_v0 === _v1) return !0;
    if ("object" != typeof _v0 || !_v0 || "object" != typeof _v1 || !_v1) return !1;
    let _v5 = Object.keys(_v0),
      _v6 = Object.keys(_v1);
    if (_v5.length !== _v6.length) return !1;
    let _v7 = Object.prototype.hasOwnProperty.bind(_v1);
    for (let _v0 = 0; _v0 < _v5.length; _v0++) {
      let _v0 = _v5[_v0];
      if (!_v7(_v0)) return !1;
      let _v1 = _v0[_v0],
        _v2 = _v1[_v0];
      if (!1 === (_v4 = _v2 ? _v2.call(_v3, _v1, _v2, _v0) : void 0) || void 0 === _v4 && _v1 !== _v2) return !1;
    }
    return !0;
  }]);
}