{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useOnClickOutside", 0, (_v0, _v1, _v2 = !1) => {
    (0, _v1.useEffect)(() => {
      let _v0 = _v0 => {
        !_v0.current || _v0.current.contains(_v0.target) || _v1(_v0);
      };
      return document.body.addEventListener("mousedown", _v0, _v2), document.body.addEventListener("touchstart", _v0, _v2), () => {
        document.body.removeEventListener("mousedown", _v0, _v2), document.body.removeEventListener("touchstart", _v0, _v2);
      };
    }, [_v0, _v1, _v2]);
  }]);
}