{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useClientRect", 0, function (_v0 = [], _v1) {
    let [_v2, _v3] = (0, _v2.useState)(null),
      _v4 = (0, _v2.useRef)(null),
      _v5 = (0, _v2.useCallback)(_v0 => {
        null !== _v0 && (_v4.current = _v0, _v3(_v0.getBoundingClientRect()));
      }, _v1 || []);
    return (0, _v2.useEffect)(() => {
      if (null === _v0) return;
      let _v0 = (0, _v1.default)(function () {
        _v3(_v0 => {
          if (_v4.current) {
            var _v1, _v2, _v3;
            let _v0 = _v4.current.getBoundingClientRect();
            return (_v1 = _v0, _v2 = _v0, null !== (_v3 = _v0) && (0 === _v3.length ? _v1 !== _v2 : null === _v1 ? _v2 : _v3.some(_v0 => _v1[_v0] !== _v2[_v0]))) ? _v0 : _v0;
          }
          return _v0;
        });
      }, 50);
      return window.addEventListener("resize", _v0), window.addEventListener("scroll", _v0), () => {
        window.removeEventListener("resize", _v0), window.removeEventListener("scroll", _v0);
      };
    }, []), [_v2, _v5];
  }]);
}