{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    getNamedMiddlewareRegex: function () {
      return _v15;
    },
    getNamedRouteRegex: function () {
      return _v14;
    },
    getRouteRegex: function () {
      return _v11;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0);
  function _v10(_v0, _v1, _v2) {
    let _v3 = {},
      _v4 = 1,
      _v5 = [];
    for (let _v0 of (0, _v8.removeTrailingSlash)(_v0).slice(1).split("/")) {
      let _v0 = _v6.INTERCEPTION_ROUTE_MARKERS.find(_v0 => _v0.startsWith(_v0)),
        _v1 = _v0.match(_v9.PARAMETER_PATTERN);
      if (_v0 && _v1 && _v1[2]) {
        let {
          key: _v0,
          optional: _v1,
          repeat: _v2
        } = (0, _v9.parseMatchedParameter)(_v1[2]);
        _v3[_v0] = {
          pos: _v4++,
          repeat: _v2,
          optional: _v1
        }, _v5.push(`/${(0, _v7.escapeStringRegexp)(_v0)}([^/]+?)`);
      } else if (_v1 && _v1[2]) {
        let {
          key: _v0,
          repeat: _v1,
          optional: _v2
        } = (0, _v9.parseMatchedParameter)(_v1[2]);
        _v3[_v0] = {
          pos: _v4++,
          repeat: _v1,
          optional: _v2
        }, _v2 && _v1[1] && _v5.push(`/${(0, _v7.escapeStringRegexp)(_v1[1])}`);
        let _v3 = _v1 ? _v2 ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
        _v2 && _v1[1] && (_v3 = _v3.substring(1)), _v5.push(_v3);
      } else _v5.push(`/${(0, _v7.escapeStringRegexp)(_v0)}`);
      _v1 && _v1 && _v1[3] && _v5.push((0, _v7.escapeStringRegexp)(_v1[3]));
    }
    return {
      parameterizedRoute: _v5.join(""),
      groups: _v3
    };
  }
  function _v11(_v0, {
    includeSuffix: _v1 = !1,
    includePrefix: _v2 = !1,
    excludeOptionalTrailingSlash: _v3 = !1
  } = {}) {
    let {
        parameterizedRoute: _v4,
        groups: _v5
      } = _v10(_v0, _v1, _v2),
      _v6 = _v4;
    return _v3 || (_v6 += "(?:/)?"), {
      re: RegExp(`^${_v6}$`),
      groups: _v5
    };
  }
  function _v12({
    interceptionMarker: _v0,
    getSafeRouteKey: _v1,
    segment: _v2,
    routeKeys: _v3,
    keyPrefix: _v4,
    backreferenceDuplicateKeys: _v5
  }) {
    let _v6,
      {
        key: _v7,
        optional: _v8,
        repeat: _v9
      } = (0, _v9.parseMatchedParameter)(_v2),
      _v10 = _v7.replace(/\W/g, "");
    _v4 && (_v10 = `${_v4}${_v10}`);
    let _v11 = !1;
    (0 === _v10.length || _v10.length > 30) && (_v11 = !0), isNaN(parseInt(_v10.slice(0, 1))) || (_v11 = !0), _v11 && (_v10 = _v1());
    let _v12 = _v10 in _v3;
    _v4 ? _v3[_v10] = `${_v4}${_v7}` : _v3[_v10] = _v7;
    let _v13 = _v0 ? (0, _v7.escapeStringRegexp)(_v0) : "";
    return _v6 = _v12 && _v5 ? `\\k<${_v10}>` : _v9 ? `(?<${_v10}>.+?)` : `(?<${_v10}>[^/]+?)`, {
      key: _v7,
      pattern: _v8 ? `(?:/${_v13}${_v6})?` : `/${_v13}${_v6}`,
      cleanedKey: _v10,
      optional: _v8,
      repeat: _v9
    };
  }
  function _v13(_v0, _v1, _v2, _v3, _v4, _v5 = {
    names: {},
    intercepted: {}
  }) {
    let _v6,
      _v7 = (_v6 = 0, () => {
        let _v0 = "",
          _v1 = ++_v6;
        for (; _v1 > 0;) _v0 += String.fromCharCode(97 + (_v1 - 1) % 26), _v1 = Math.floor((_v1 - 1) / 26);
        return _v0;
      }),
      _v8 = {},
      _v9 = [],
      _v10 = [];
    for (let _v0 of (_v5 = structuredClone(_v5), (0, _v8.removeTrailingSlash)(_v0).slice(1).split("/"))) {
      let _v0,
        _v1 = _v6.INTERCEPTION_ROUTE_MARKERS.some(_v0 => _v0.startsWith(_v0)),
        _v2 = _v0.match(_v9.PARAMETER_PATTERN),
        _v3 = _v1 ? _v2?.[1] : void 0;
      if (_v3 && _v2?.[2] ? (_v0 = _v1 ? _v5.NEXT_INTERCEPTION_MARKER_PREFIX : void 0, _v5.intercepted[_v2[2]] = _v3) : _v0 = _v2?.[2] && _v5.intercepted[_v2[2]] ? _v1 ? _v5.NEXT_INTERCEPTION_MARKER_PREFIX : void 0 : _v1 ? _v5.NEXT_QUERY_PARAM_PREFIX : void 0, _v3 && _v2 && _v2[2]) {
        let {
          key: _v0,
          pattern: _v1,
          cleanedKey: _v2,
          repeat: _v3,
          optional: _v4
        } = _v12({
          getSafeRouteKey: _v7,
          interceptionMarker: _v3,
          segment: _v2[2],
          routeKeys: _v8,
          keyPrefix: _v0,
          backreferenceDuplicateKeys: _v4
        });
        _v9.push(_v1), _v10.push(`/${_v2[1]}:${_v5.names[_v0] ?? _v2}${_v3 ? _v4 ? "*" : "+" : ""}`), _v5.names[_v0] ??= _v2;
      } else if (_v2 && _v2[2]) {
        _v3 && _v2[1] && (_v9.push(`/${(0, _v7.escapeStringRegexp)(_v2[1])}`), _v10.push(`/${_v2[1]}`));
        let {
            key: _v0,
            pattern: _v1,
            cleanedKey: _v2,
            repeat: _v3,
            optional: _v4
          } = _v12({
            getSafeRouteKey: _v7,
            segment: _v2[2],
            routeKeys: _v8,
            keyPrefix: _v0,
            backreferenceDuplicateKeys: _v4
          }),
          _v5 = _v1;
        _v3 && _v2[1] && (_v5 = _v5.substring(1)), _v9.push(_v5), _v10.push(`/:${_v5.names[_v0] ?? _v2}${_v3 ? _v4 ? "*" : "+" : ""}`), _v5.names[_v0] ??= _v2;
      } else _v9.push(`/${(0, _v7.escapeStringRegexp)(_v0)}`), _v10.push(`/${_v0}`);
      _v2 && _v2 && _v2[3] && (_v9.push((0, _v7.escapeStringRegexp)(_v2[3])), _v10.push(_v2[3]));
    }
    return {
      namedParameterizedRoute: _v9.join(""),
      routeKeys: _v8,
      pathToRegexpPattern: _v10.join(""),
      reference: _v5
    };
  }
  function _v14(_v0, _v1) {
    let _v2 = _v13(_v0, _v1.prefixRouteKeys, _v1.includeSuffix ?? !1, _v1.includePrefix ?? !1, _v1.backreferenceDuplicateKeys ?? !1, _v1.reference),
      _v3 = _v2.namedParameterizedRoute;
    return _v1.excludeOptionalTrailingSlash || (_v3 += "(?:/)?"), {
      ..._v11(_v0, _v1),
      namedRegex: `^${_v3}$`,
      routeKeys: _v2.routeKeys,
      pathToRegexpPattern: _v2.pathToRegexpPattern,
      reference: _v2.reference
    };
  }
  function _v15(_v0, _v1) {
    let {
        parameterizedRoute: _v2
      } = _v10(_v0, !1, !1),
      {
        catchAll: _v3 = !0
      } = _v1;
    if ("/" === _v2) return {
      namedRegex: `^/${_v3 ? ".*" : ""}$`
    };
    let {
      namedParameterizedRoute: _v4
    } = _v13(_v0, !1, !1, !1, !1, void 0);
    return {
      namedRegex: `^${_v4}${_v3 ? "(?:(/.*)?)" : ""}$`
    };
  }
}