{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useOnScreen", 0, (_v0, _v1) => {
    let [_v2, _v3] = (0, _v1.useState)(!1),
      {
        root: _v4,
        rootMargin: _v5,
        threshold: _v6
      } = _v1 || {};
    return (0, _v1.useEffect)(() => {
      let _v0 = _v0.current;
      if (!window.IntersectionObserver || !_v0) return;
      let _v1 = new IntersectionObserver(([_v0]) => {
        _v3(_v0.isIntersecting);
      }, {
        root: _v4,
        rootMargin: _v5,
        threshold: _v6
      });
      return _v0 && _v1.observe(_v0), () => {
        _v0 && _v1.unobserve(_v0);
      };
    }, [_v0, _v4, _v5, _v6]), _v2;
  }]);
}