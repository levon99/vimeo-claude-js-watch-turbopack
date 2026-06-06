{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    safeCompile: function () {
      return _v8;
    },
    safePathToRegexp: function () {
      return _v7;
    },
    safeRegexpToFunction: function () {
      return _v9;
    },
    safeRouteMatcher: function () {
      return _v10;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  function _v7(_v0, _v1, _v2) {
    if ("string" != typeof _v0) return (0, _v5.pathToRegexp)(_v0, _v1, _v2);
    let _v3 = (0, _v6.hasAdjacentParameterIssues)(_v0),
      _v4 = _v3 ? (0, _v6.normalizeAdjacentParameters)(_v0) : _v0;
    try {
      return (0, _v5.pathToRegexp)(_v4, _v1, _v2);
    } catch (_v0) {
      if (!_v3) try {
        let _v0 = (0, _v6.normalizeAdjacentParameters)(_v0);
        return (0, _v5.pathToRegexp)(_v0, _v1, _v2);
      } catch (_v0) {}
      throw _v0;
    }
  }
  function _v8(_v0, _v1) {
    let _v2 = (0, _v6.hasAdjacentParameterIssues)(_v0),
      _v3 = _v2 ? (0, _v6.normalizeAdjacentParameters)(_v0) : _v0;
    try {
      let _v0 = (0, _v5.compile)(_v3, _v1);
      if (_v2) return _v0 => (0, _v6.stripNormalizedSeparators)(_v0(_v0));
      return _v0;
    } catch (_v0) {
      if (!_v2) try {
        let _v0 = (0, _v6.normalizeAdjacentParameters)(_v0),
          _v1 = (0, _v5.compile)(_v0, _v1);
        return _v0 => (0, _v6.stripNormalizedSeparators)(_v1(_v0));
      } catch (_v0) {}
      throw _v0;
    }
  }
  function _v9(_v0, _v1) {
    let _v2 = (0, _v5.regexpToFunction)(_v0, _v1 || []);
    return _v0 => {
      let _v1 = _v2(_v0);
      return !!_v1 && {
        ..._v1,
        params: (0, _v6.stripParameterSeparators)(_v1.params)
      };
    };
  }
  function _v10(_v0) {
    return _v0 => {
      let _v1 = _v0(_v0);
      return !!_v1 && (0, _v6.stripParameterSeparators)(_v1);
    };
  }
}