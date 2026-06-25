{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useDebounce", 0, (_v0, _v1, _v2) => {
    let [_v3, _v4] = (0, _v1.useState)(),
      _v5 = (0, _v1.useRef)(void 0),
      _v6 = (0, _v1.useRef)(_v2);
    return (0, _v1.useEffect)(() => {
      _v6.current = _v2;
    }, [_v2]), (0, _v1.useEffect)(() => {
      if (void 0 === _v3 || _v3 === _v5.current) return;
      _v5.current = _v3;
      let _v0 = setTimeout(() => {
        _v6.current(_v3);
      }, _v0);
      return () => {
        clearTimeout(_v0);
      };
    }, [_v0, _v3]), (0, _v1.useEffect)(() => {
      void 0 === _v3 && _v1 && (_v4(_v1), _v5.current = _v1);
    }, [_v1, _v3]), [_v3, _v4];
  }]);
}