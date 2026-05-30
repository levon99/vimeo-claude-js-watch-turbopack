{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useCallbackRef", 0, function (_v0, _v1 = []) {
    let _v2 = (0, _v1.useRef)(_v0);
    return (0, _v1.useEffect)(() => {
      _v2.current = _v0;
    }), (0, _v1.useCallback)((..._v0) => {
      var _v1;
      return null == (_v1 = _v2.current) ? void 0 : _v1.call(_v2, ..._v0);
    }, _v1);
  }]);
}