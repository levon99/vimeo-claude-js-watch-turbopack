{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    INTERCEPTION_ROUTE_MARKERS: function () {
      return _v6;
    },
    extractInterceptionRouteInformation: function () {
      return _v8;
    },
    isInterceptionRouteAppPath: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = ["(..)(..)", "(.)", "(..)", "(...)"];
  function _v7(_v0) {
    return void 0 !== _v0.split("/").find(_v0 => _v6.find(_v0 => _v0.startsWith(_v0)));
  }
  function _v8(_v0) {
    let _v1, _v2, _v3;
    for (let _v0 of _v0.split("/")) if (_v2 = _v6.find(_v0 => _v0.startsWith(_v0))) {
      [_v1, _v3] = _v0.split(_v2, 2);
      break;
    }
    if (!_v1 || !_v2 || !_v3) throw Object.defineProperty(Error(`Invalid interception route: ${_v0}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
      value: "E269",
      enumerable: !1,
      configurable: !0
    });
    switch (_v1 = (0, _v5.normalizeAppPath)(_v1), _v2) {
      case "(.)":
        _v3 = "/" === _v1 ? `/${_v3}` : _v1 + "/" + _v3;
        break;
      case "(..)":
        if ("/" === _v1) throw Object.defineProperty(Error(`Invalid interception route: ${_v0}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
          value: "E207",
          enumerable: !1,
          configurable: !0
        });
        _v3 = _v1.split("/").slice(0, -1).concat(_v3).join("/");
        break;
      case "(...)":
        _v3 = "/" + _v3;
        break;
      case "(..)(..)":
        let _v0 = _v1.split("/");
        if (_v0.length <= 2) throw Object.defineProperty(Error(`Invalid interception route: ${_v0}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
          value: "E486",
          enumerable: !1,
          configurable: !0
        });
        _v3 = _v0.slice(0, -2).concat(_v3).join("/");
        break;
      default:
        throw Object.defineProperty(Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
          value: "E112",
          enumerable: !1,
          configurable: !0
        });
    }
    return {
      interceptingRoute: _v1,
      interceptedRoute: _v3
    };
  }
}