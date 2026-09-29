{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useElementVisibility", 0, function (_v0) {
    let [_v1, _v2] = (0, _v1.useState)(!1),
      _v3 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => (_v3.current || (_v3.current = new IntersectionObserver(([_v0]) => _v2(_v0.isIntersecting))), _v0.current && _v3.current.observe(_v0.current), () => _v3.current?.disconnect()), [_v0]), _v1;
  }]);
}