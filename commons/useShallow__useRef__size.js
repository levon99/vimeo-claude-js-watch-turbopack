{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useShallow", 0, function (_v0) {
    let _v1 = (0, _v1.useRef)();
    return _v0 => {
      let _v1 = _v0(_v0);
      return !function (_v0, _v1) {
        if (Object.is(_v0, _v1)) return !0;
        if ("object" != typeof _v0 || null === _v0 || "object" != typeof _v1 || null === _v1) return !1;
        if (_v0 instanceof Map && _v1 instanceof Map) {
          if (_v0.size !== _v1.size) return !1;
          for (let [_v0, _v1] of _v0) if (!Object.is(_v1, _v1.get(_v0))) return !1;
          return !0;
        }
        if (_v0 instanceof Set && _v1 instanceof Set) {
          if (_v0.size !== _v1.size) return !1;
          for (let _v0 of _v0) if (!_v1.has(_v0)) return !1;
          return !0;
        }
        let _v2 = Object.keys(_v0);
        if (_v2.length !== Object.keys(_v1).length) return !1;
        for (let _v0 = 0; _v0 < _v2.length; _v0++) if (!Object.prototype.hasOwnProperty.call(_v1, _v2[_v0]) || !Object.is(_v0[_v2[_v0]], _v1[_v2[_v0]])) return !1;
        return !0;
      }(_v1.current, _v1) ? _v1.current = _v1 : _v1.current;
    };
  }]);
}