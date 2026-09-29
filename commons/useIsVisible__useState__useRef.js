{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useIsVisible", 0, _v0 => {
    let [_v1, _v2] = (0, _v1.useState)(!1),
      _v3 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      let _v0 = new IntersectionObserver(([_v0]) => {
          _v2(_v0.isIntersecting);
        }, _v0),
        _v1 = _v3.current;
      return _v1 && _v0.observe(_v1), () => {
        _v1 && _v0.unobserve(_v1);
      };
    }, [_v3, _v0]), [_v3, _v1];
  }]);
}