{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useUpdateEffect", 0, function (_v0, _v1) {
    let _v2 = (0, _v1.useRef)(!1),
      _v3 = (0, _v1.useRef)(!1);
    (0, _v1.useEffect)(() => {
      if (_v2.current && _v3.current) return _v0();
      _v3.current = !0;
    }, _v1), (0, _v1.useEffect)(() => (_v2.current = !0, () => {
      _v2.current = !1;
    }), []);
  }]);
}