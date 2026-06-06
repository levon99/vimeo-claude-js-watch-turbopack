{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["usePicoEffect", 0, function (_v0, _v1, _v2) {
    let _v3 = (0, _v1.useRef)(_v0);
    _v3.current = _v0;
    let _v4 = _v2?.once ?? !1,
      _v5 = (0, _v1.useRef)(!1);
    (0, _v1.useEffect)(() => {
      if (_v4 && _v5.current) return;
      let _v0 = _v3.current();
      _v4 && !1 !== _v0 && (_v5.current = !0);
    }, [..._v1]);
  }]);
}