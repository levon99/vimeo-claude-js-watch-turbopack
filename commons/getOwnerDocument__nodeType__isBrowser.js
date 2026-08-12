{
  "use strict";

  var _v1 = !!("u" > typeof window && window.document && window.document.createElement);
  _v0.s(["getOwnerDocument", 0, function (_v0) {
    var _v1;
    return null != _v0 && "object" == typeof _v0 && "nodeType" in _v0 && _v0.nodeType === Node.ELEMENT_NODE && null != (_v1 = _v0.ownerDocument) ? _v1 : document;
  }, "isBrowser", 0, _v1], 0);
  var _v2 = _v0.i(0),
    _v3 = _v1 ? _v2.useLayoutEffect : _v2.useEffect;
  _v0.s(["useCallbackRef", 0, function (_v0, _v1 = []) {
    let _v2 = (0, _v2.useRef)(_v0);
    return _v3(() => {
      _v2.current = _v0;
    }), (0, _v2.useCallback)((..._v0) => {
      var _v1;
      return null == (_v1 = _v2.current) ? void 0 : _v1.call(_v2, ..._v0);
    }, _v1);
  }], 0);
}