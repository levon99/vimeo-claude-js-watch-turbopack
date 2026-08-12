{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useInfiniteScroll", 0, function (_v0, _v1) {
    let [_v2, _v3] = (0, _v1.useState)(_v1 || 1),
      _v4 = (0, _v1.useRef)(null);
    return [_v2, (0, _v1.useCallback)(_v0 => {
      _v0 && (_v4.current && _v4.current.disconnect(), _v4.current = new IntersectionObserver(_v0 => {
        _v0[0].isIntersecting && _v0 && _v3(_v0 => _v0 + 1);
      }), _v0 && _v4.current.observe(_v0));
    }, [_v0]), _v3];
  }]);
}