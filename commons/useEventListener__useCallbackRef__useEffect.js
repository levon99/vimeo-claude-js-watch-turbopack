{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useEventListener", 0, function (_v0, _v1, _v2, _v3) {
    let _v4 = (0, _v2.useCallbackRef)(_v2);
    return (0, _v1.useEffect)(() => {
      let _v0 = "function" == typeof _v0 ? _v0() : null != _v0 ? _v0 : document;
      if (_v2 && _v0) return _v0.addEventListener(_v1, _v4, _v3), () => {
        _v0.removeEventListener(_v1, _v4, _v3);
      };
    }, [_v1, _v0, _v3, _v4, _v2]), () => {
      let _v0 = "function" == typeof _v0 ? _v0() : null != _v0 ? _v0 : document;
      null == _v0 || _v0.removeEventListener(_v1, _v4, _v3);
    };
  }]);
}