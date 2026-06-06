{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "resolveParamValue", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1, _v2, _v3, _v4) {
    switch (_v1) {
      case "catchall":
      case "optional-catchall":
      case "catchall-intercepted-(..)(..)":
      case "catchall-intercepted-(.)":
      case "catchall-intercepted-(..)":
      case "catchall-intercepted-(...)":
        let _v0 = [];
        for (let _v0 = _v2; _v0 < _v3.segments.length; _v0++) {
          let _v0 = _v3.segments[_v0];
          if ("static" === _v0.type) {
            let _v0 = _v0.name,
              _v1 = (0, _v4.interceptionPrefixFromParamType)(_v1);
            _v1 && _v0 === _v2 && _v1 === _v0.interceptionMarker && (_v0 = _v0.replace(_v0.interceptionMarker, "")), _v0.push(_v0);
          } else {
            if (!_v4.hasOwnProperty(_v0.param.paramName)) {
              if ("optional-catchall" === _v0.param.paramType) break;
              return;
            }
            let _v0 = _v4[_v0.param.paramName];
            Array.isArray(_v0) ? _v0.push(..._v0) : _v0.push(_v0);
          }
        }
        if (_v0.length > 0) return _v0;
        if ("optional-catchall" === _v1) return;
        throw Object.defineProperty(new _v3.InvariantError(`Unexpected empty path segments match for a route "${_v3.pathname}" with param "${_v0}" of type "${_v1}"`), "__NEXT_ERROR_CODE", {
          value: "E931",
          enumerable: !1,
          configurable: !0
        });
      case "dynamic":
      case "dynamic-intercepted-(..)(..)":
      case "dynamic-intercepted-(.)":
      case "dynamic-intercepted-(..)":
      case "dynamic-intercepted-(...)":
        if (_v2 < _v3.segments.length) {
          let _v0 = _v3.segments[_v2];
          if ("dynamic" === _v0.type && !_v4.hasOwnProperty(_v0.param.paramName)) return;
          return "dynamic" === _v0.type ? _v4[_v0.param.paramName] : (0, _v4.interceptionPrefixFromParamType)(_v1) === _v0.interceptionMarker ? _v0.name.replace(_v0.interceptionMarker, "") : _v0.name;
        }
        return;
    }
  }
}