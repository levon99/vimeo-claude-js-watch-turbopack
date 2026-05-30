{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0, _v1) {
    switch (_v1.type) {
      case "REQUEST":
        return {
          ..._v0,
          loading: !0,
          called: !0,
          callCount: _v0.callCount + 1,
          lastCalled: Date.now()
        };
      case "SUCCESS":
        return {
          ..._v0,
          loading: !1,
          error: null,
          data: _v1.payload
        };
      case "FAILURE":
        return {
          ..._v0,
          loading: !1,
          error: _v1.payload
        };
      default:
        return _v0;
    }
  }
  let _v3 = new WeakMap();
  _v0.s(["assignMswData", 0, function (_v0, _v1) {
    _v3.set(_v0, _v1);
  }, "serializeQuery", 0, function (_v0) {
    let _v1 = [];
    return ("object" != typeof _v0.query || Array.isArray(_v0.query) || _v1.push(Object.entries(_v0?.query ?? {}).filter(([, _v0]) => void 0 !== _v0).sort(([_v0], [_v1]) => _v0 < _v1 ? 1 : -1).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&")), Array.isArray(_v0.select) && _v1.push("fields=" + _v0.select.slice().sort().join(",")), _v1.length > 0) ? "?" + _v1.join("&") : "";
  }, "useInternalState", 0, function (_v0) {
    return (0, _v1.useReducer)(_v2, {
      loading: !1,
      error: null,
      data: _v0 ?? null,
      called: !1,
      callCount: 0,
      lastCalled: null
    });
  }]);
}