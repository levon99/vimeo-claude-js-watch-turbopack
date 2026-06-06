{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    getParamProperties: function () {
      return _v8;
    },
    getSegmentParam: function () {
      return _v6;
    },
    isCatchAll: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0);
  function _v6(_v0) {
    let _v1 = _v5.INTERCEPTION_ROUTE_MARKERS.find(_v0 => _v0.startsWith(_v0));
    return (_v1 && (_v0 = _v0.slice(_v1.length)), _v0.startsWith("[[...") && _v0.endsWith("]]")) ? {
      paramType: "optional-catchall",
      paramName: _v0.slice(5, -2)
    } : _v0.startsWith("[...") && _v0.endsWith("]") ? {
      paramType: _v1 ? `catchall-intercepted-${_v1}` : "catchall",
      paramName: _v0.slice(4, -1)
    } : _v0.startsWith("[") && _v0.endsWith("]") ? {
      paramType: _v1 ? `dynamic-intercepted-${_v1}` : "dynamic",
      paramName: _v0.slice(1, -1)
    } : null;
  }
  function _v7(_v0) {
    return "catchall" === _v0 || "catchall-intercepted-(..)(..)" === _v0 || "catchall-intercepted-(.)" === _v0 || "catchall-intercepted-(..)" === _v0 || "catchall-intercepted-(...)" === _v0 || "optional-catchall" === _v0;
  }
  function _v8(_v0) {
    let _v1 = !1,
      _v2 = !1;
    switch (_v0) {
      case "catchall":
      case "catchall-intercepted-(..)(..)":
      case "catchall-intercepted-(.)":
      case "catchall-intercepted-(..)":
      case "catchall-intercepted-(...)":
        _v1 = !0;
        break;
      case "optional-catchall":
        _v1 = !0, _v2 = !0;
    }
    return {
      repeat: _v1,
      optional: _v2
    };
  }
}