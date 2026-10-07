{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useIntersectionVisibility", 0, _v0 => {
    let [_v1, _v2] = (0, _v1.useState)(!0),
      _v3 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      if (!_v3.current) return;
      let _v0 = _v3.current,
        _v1 = new IntersectionObserver(([_v0]) => {
          _v2(_v0.isIntersecting);
        }, {
          root: null,
          rootMargin: `-${_v0}px`,
          threshold: [0, 1]
        });
      return _v1.observe(_v0), () => {
        _v1.unobserve(_v0);
      };
    }, [_v0]), {
      isVisible: _v1,
      elementRef: _v3
    };
  }]);
}