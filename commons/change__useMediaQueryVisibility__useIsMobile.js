{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => {
    let [_v1, _v2] = (0, _v2.useState)(!1);
    return (0, _v2.useEffect)(() => {
      let _v0 = _v0 => {
          _v2(_v0.matches);
        },
        _v1 = window.matchMedia(_v0);
      return (_v2(_v1.matches), "function" == typeof _v1.addEventListener) ? (_v1.addEventListener("change", _v0), () => {
        _v1.removeEventListener("change", _v0);
      }) : "function" == typeof _v1.addListener ? (_v1.addListener(_v0), () => {
        _v1.removeListener(_v0);
      }) : void 0;
    }, []), _v1;
  };
  _v0.s(["useMediaQueryVisibility", 0, _v3], 474), _v0.s(["useIsMobile", 0, (_v0 = !1) => {
    let _v1 = `screen and (max-width: ${_v1.bokehTheme.breakpoints.md})`;
    return _v3(_v1 += _v0 ? " and (orientation: portrait)" : "");
  }], 0);
}