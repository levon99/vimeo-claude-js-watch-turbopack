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
    parseAppRouteSegment: function () {
      return _v8;
    },
    parseAppRouteWithSlots: function () {
      return _v13;
    },
    parseNormalizedAppRoute: function () {
      return _v12;
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
  function _v11(_v0, _v1) {
    let _v2,
      _v3,
      _v4,
      _v5 = _v0.split("/").filter(Boolean),
      _v6 = [];
    for (let _v0 of _v5) {
      let _v0 = _v8(function (_v0) {
        if (!/%5b|%5d/i.test(_v0)) return _v0;
        try {
          let _v0 = decodeURIComponent(_v0);
          return (0, _v6.getSegmentParam)(_v0) ? _v0 : _v0;
        } catch {
          return _v0;
        }
      }(_v0));
      if (_v0) {
        if ("route-group" === _v0.type && !(2 & _v1)) throw Object.defineProperty(new _v5.InvariantError(`${_v0} is being parsed as a normalized route, but it has a route group segment.`), "__NEXT_ERROR_CODE", {
          value: "E1151",
          enumerable: !1,
          configurable: !0
        });
        if ("parallel-route" === _v0.type && !(1 & _v1)) throw Object.defineProperty(new _v5.InvariantError(`${_v0} is being parsed as a normalized route, but it has a parallel route segment.`), "__NEXT_ERROR_CODE", {
          value: "E1152",
          enumerable: !1,
          configurable: !0
        });
        if (_v6.push(_v0), _v0.interceptionMarker) {
          let _v0 = _v0.split(_v0.interceptionMarker);
          if (2 !== _v0.length) throw Object.defineProperty(Error(`Invalid interception route: ${_v0}`), "__NEXT_ERROR_CODE", {
            value: "E924",
            enumerable: !1,
            configurable: !0
          });
          _v3 = _v11(_v0[0], _v1), _v4 = _v11(_v0[1], _v1), _v2 = _v0.interceptionMarker;
        }
      }
    }
    let _v7 = _v6.filter(_v0 => "dynamic" === _v0.type);
    return {
      normalized: 0 === _v1,
      pathname: _v0,
      segments: _v6,
      dynamicSegments: _v7,
      interceptionMarker: _v2,
      interceptingRoute: _v3,
      interceptedRoute: _v4
    };
  }
  function _v12(_v0) {
    return _v11(_v0, 0);
  }
  function _v13(_v0) {
    return _v11(_v0, 1);
  }
}