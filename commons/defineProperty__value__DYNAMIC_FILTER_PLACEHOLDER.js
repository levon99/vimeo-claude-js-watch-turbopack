{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    DYNAMIC_FILTER_PLACEHOLDER: function () {
      return _v5;
    },
    hasDynamicFilterCandidate: function () {
      return _v6;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = "[]";
  function _v6(_v0, _v1, _v2) {
    let _v3 = _v0.split("/"),
      _v4 = _v1.split("/"),
      _v5 = _v3[_v3.length - 1] ?? "";
    if (!(_v5.startsWith("[...") || _v5.startsWith("[[...")) && _v3.length !== _v4.length) return !1;
    let _v6 = [];
    for (let _v0 = 1; _v0 < _v4.length; _v0++) {
      if ("" === _v4[_v0]) continue;
      let _v0 = _v3[_v0];
      (void 0 === _v0 || _v0.startsWith("[")) && _v6.push(_v0);
    }
    if (0 === _v6.length || _v6.length > 8) return !1;
    let _v7 = (1 << _v6.length) - 1;
    for (let _v0 = 0; _v0 < _v7; _v0++) {
      let _v0 = _v4.slice();
      for (let _v0 = 0; _v0 < _v6.length; _v0++) (_v0 & 1 << _v0) == 0 && (_v0[_v6[_v0]] = _v5);
      if (_v2(_v0.join("/"))) return !0;
    }
    return !1;
  }
}