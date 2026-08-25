{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["InfiniteLoadingZone", 0, ({
    onVisible: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v2.useRef)(null);
    return (0, _v2.useEffect)(() => {
      if (!window.IntersectionObserver) return;
      let _v0 = new IntersectionObserver(_v0 => {
        _v0.some(_v0 => _v0.isIntersecting) && (_v0(), _v0.disconnect());
      }, {
        rootMargin: "200px"
      });
      return _v2.current && _v0.observe(_v2.current), () => {
        _v0 && _v0.disconnect();
      };
    }, [_v0]), (0, _v1.jsx)(_v3.Box, {
      ref: _v2,
      width: "100%",
      height: (0, _v4.rem)(1),
      ..._v1
    });
  }]);
}