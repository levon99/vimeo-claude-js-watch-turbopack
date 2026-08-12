{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    isInterceptionAppRoute: function () {
      return _v10;
    },
    isNormalizedAppRoute: function () {
      return _v9;
    },
    parseAppRoute: function () {
      return function _v0(_v1, _v2) {
        let _v3,
          _v4,
          _v5,
          _v6 = _v1.split("/").filter(Boolean),
          _v7 = [];
        for (let _v0 of _v6) {
          let _v0 = _v8(_v0);
          if (_v0) {
            if (_v2 && ("route-group" === _v0.type || "parallel-route" === _v0.type)) throw Object.defineProperty(new _v5.InvariantError(`${_v1} is being parsed as a normalized route, but it has a route group or parallel route segment.`), "__NEXT_ERROR_CODE", {
              value: "E923",
              enumerable: !1,
              configurable: !0
            });
            if (_v7.push(_v0), _v0.interceptionMarker) {
              let _v0 = _v1.split(_v0.interceptionMarker);
              if (2 !== _v0.length) throw Object.defineProperty(Error(`Invalid interception route: ${_v1}`), "__NEXT_ERROR_CODE", {
                value: "E924",
                enumerable: !1,
                configurable: !0
              });
              _v4 = _v2 ? _v0(_v0[0], !0) : _v0(_v0[0], !1), _v5 = _v2 ? _v0(_v0[1], !0) : _v0(_v0[1], !1), _v3 = _v0.interceptionMarker;
            }
          }
        }
        let _v8 = _v7.filter(_v0 => "dynamic" === _v0.type);
        return {
          normalized: _v2,
          pathname: _v1,
          segments: _v7,
          dynamicSegments: _v8,
          interceptionMarker: _v3,
          interceptingRoute: _v4,
          interceptedRoute: _v5
        };
      };
    },
    parseAppRouteSegment: function () {
      return _v8;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  function _v8(_v0) {
    if ("" === _v0) return null;
    let _v1 = _v7.INTERCEPTION_ROUTE_MARKERS.find(_v0 => _v0.startsWith(_v0)),
      _v2 = (0, _v6.getSegmentParam)(_v0);
    return _v2 ? {
      type: "dynamic",
      name: _v0,
      param: _v2,
      interceptionMarker: _v1
    } : _v0.startsWith("(") && _v0.endsWith(")") ? {
      type: "route-group",
      name: _v0,
      interceptionMarker: _v1
    } : _v0.startsWith("@") ? {
      type: "parallel-route",
      name: _v0,
      interceptionMarker: _v1
    } : {
      type: "static",
      name: _v0,
      interceptionMarker: _v1
    };
  }
  function _v9(_v0) {
    return _v0.normalized;
  }
  function _v10(_v0) {
    return void 0 !== _v0.interceptionMarker && void 0 !== _v0.interceptingRoute && void 0 !== _v0.interceptedRoute;
  }
}