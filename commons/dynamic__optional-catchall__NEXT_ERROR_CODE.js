{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    PARAMETER_PATTERN: function () {
      return _v11;
    },
    getDynamicParam: function () {
      return _v10;
    },
    interpolateParallelRouteParams: function () {
      return _v9;
    },
    parseMatchedParameter: function () {
      return _v13;
    },
    parseParameter: function () {
      return _v12;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  function _v9(_v0, _v1, _v2, _v3) {
    let _v4 = structuredClone(_v1),
      _v5 = [{
        tree: _v0,
        depth: 0
      }],
      _v6 = (0, _v7.parseAppRoute)(_v2, !0);
    for (; _v5.length > 0;) {
      let {
          tree: _v0,
          depth: _v1
        } = _v5.pop(),
        {
          segment: _v2,
          parallelRoutes: _v3
        } = (0, _v6.parseLoaderTree)(_v0),
        _v4 = (0, _v7.parseAppRouteSegment)(_v2);
      if (_v4?.type === "dynamic" && !_v4.hasOwnProperty(_v4.param.paramName) && !_v3?.has(_v4.param.paramName)) {
        let {
            paramName: _v0,
            paramType: _v1
          } = _v4.param,
          _v2 = (0, _v8.resolveParamValue)(_v0, _v1, _v1, _v6, _v4);
        if (void 0 !== _v2) _v4[_v0] = _v2;else if ("optional-catchall" !== _v1) throw Object.defineProperty(new _v5.InvariantError(`Could not resolve param value for segment: ${_v0}`), "__NEXT_ERROR_CODE", {
          value: "E932",
          enumerable: !1,
          configurable: !0
        });
      }
      let _v5 = _v1;
      for (let _v0 of (_v4 && "route-group" !== _v4.type && "parallel-route" !== _v4.type && _v5++, Object.values(_v3))) _v5.push({
        tree: _v0,
        depth: _v5
      });
    }
    return _v4;
  }
  function _v10(_v0, _v1, _v2, _v3, _v4) {
    let _v5 = function (_v0, _v1, _v2) {
      let _v3 = _v0[_v1];
      if (_v2?.has(_v1)) {
        let [_v0] = _v2.get(_v1);
        _v3 = _v0;
      } else Array.isArray(_v3) ? _v3 = _v3.map(_v0 => encodeURIComponent(_v0)) : "string" == typeof _v3 && (_v3 = encodeURIComponent(_v3));
      return _v3;
    }(_v0, _v1, _v3);
    if (!_v5 || 0 === _v5.length) {
      if ("oc" === _v2) return {
        param: _v1,
        value: null,
        type: _v2,
        treeSegment: [_v1, "", _v2, _v4]
      };
      throw Object.defineProperty(new _v5.InvariantError(`Missing value for segment key: "${_v1}" with dynamic param type: ${_v2}`), "__NEXT_ERROR_CODE", {
        value: "E864",
        enumerable: !1,
        configurable: !0
      });
    }
    let _v6 = Array.isArray(_v5) ? _v5.join("/") : _v5;
    return {
      param: _v1,
      value: _v5,
      treeSegment: [_v1, _v6, _v2, _v4],
      type: _v2
    };
  }
  let _v11 = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
  function _v12(_v0) {
    let _v1 = _v0.match(_v11);
    return _v1 ? _v13(_v1[2]) : _v13(_v0);
  }
  function _v13(_v0) {
    let _v1 = _v0.startsWith("[") && _v0.endsWith("]");
    _v1 && (_v0 = _v0.slice(1, -1));
    let _v2 = _v0.startsWith("...");
    return _v2 && (_v0 = _v0.slice(3)), {
      key: _v0,
      repeat: _v2,
      optional: _v1
    };
  }
}