{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0, _v1, _v2) {
    let _v3 = (0, _v1.useRef)(null);
    return (0, _v1.useCallback)(_v0 => {
      _v1.current = _v0;
      let _v1 = _v3.current;
      _v1 && (_v2().unobserve(_v1), _v3.current = null), _v0 && _v0 && (_v3.current = _v0, _v2().observe(_v0));
    }, [_v0, _v1, _v2]);
  }
  _v0.s(["useInfiniteScroll", 0, function (_v0, _v1) {
    let [_v2, _v3] = (0, _v1.useState)(_v1 || 1),
      _v4 = (0, _v1.useRef)(null),
      _v5 = (0, _v1.useRef)(_v0);
    (0, _v1.useEffect)(() => () => {
      _v4.current?.disconnect(), _v4.current = null;
    }, []);
    let _v6 = (0, _v1.useCallback)(() => {
      let _v0 = _v4.current;
      return _v0 || (_v4.current = _v0 = new IntersectionObserver(_v0 => {
        _v5.current && _v0.some(_v0 => _v0.isIntersecting) && _v3(_v0 => _v0 + 1);
      })), _v0;
    }, []);
    return [_v2, _v2(_v0, _v5, _v6), _v3, _v2(_v0, _v5, _v6)];
  }]);
}