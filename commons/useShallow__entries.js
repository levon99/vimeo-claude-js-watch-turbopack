{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1) => {
    let _v2 = _v0 instanceof Map ? _v0 : new Map(_v0.entries()),
      _v3 = _v1 instanceof Map ? _v1 : new Map(_v1.entries());
    if (_v2.size !== _v3.size) return !1;
    for (let [_v0, _v1] of _v2) if (!_v3.has(_v0) || !Object.is(_v1, _v3.get(_v0))) return !1;
    return !0;
  };
  _v0.s(["useShallow", 0, function (_v0) {
    let _v1 = _v1.default.useRef(void 0);
    return _v0 => {
      let _v1 = _v0(_v0);
      return !function (_v0, _v1) {
        if (Object.is(_v0, _v1)) return !0;
        if ("object" != typeof _v0 || null === _v0 || "object" != typeof _v1 || null === _v1 || Object.getPrototypeOf(_v0) !== Object.getPrototypeOf(_v1)) return !1;
        if (Symbol.iterator in _v0 && Symbol.iterator in _v1) {
          if ("entries" in _v0 && "entries" in _v1) return _v2(_v0, _v1);
          let _v0 = _v0[Symbol.iterator](),
            _v1 = _v1[Symbol.iterator](),
            _v2 = _v0.next(),
            _v3 = _v1.next();
          for (; !_v2.done && !_v3.done;) {
            if (!Object.is(_v2.value, _v3.value)) return !1;
            _v2 = _v0.next(), _v3 = _v1.next();
          }
          return !!_v2.done && !!_v3.done;
        }
        return _v2({
          entries: () => Object.entries(_v0)
        }, {
          entries: () => Object.entries(_v1)
        });
      }(_v1.current, _v1) ? _v1.current = _v1 : _v1.current;
    };
  }], 0);
}