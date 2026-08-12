{
  "use strict";

  function _v3(_v0, _v1) {
    let _v2 = Object.keys(_v0);
    if (_v2.length !== Object.keys(_v1).length) return !1;
    for (let _v0 = _v2.length; _v0--;) {
      let _v0 = _v2[_v0];
      if ("query" === _v0) {
        let _v0 = Object.keys(_v0.query);
        if (_v0.length !== Object.keys(_v1.query).length) return !1;
        for (let _v0 = _v0.length; _v0--;) {
          let _v0 = _v0[_v0];
          if (!_v1.query.hasOwnProperty(_v0) || _v0.query[_v0] !== _v1.query[_v0]) return !1;
        }
      } else if (!_v1.hasOwnProperty(_v0) || _v0[_v0] !== _v1[_v0]) return !1;
    }
    return !0;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "compareRouterStates", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}