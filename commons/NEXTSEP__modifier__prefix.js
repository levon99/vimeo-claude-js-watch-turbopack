{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    PARAM_SEPARATOR: function () {
      return _v5;
    },
    hasAdjacentParameterIssues: function () {
      return _v6;
    },
    normalizeAdjacentParameters: function () {
      return _v7;
    },
    normalizeTokensForRegexp: function () {
      return _v8;
    },
    stripNormalizedSeparators: function () {
      return _v9;
    },
    stripParameterSeparators: function () {
      return _v10;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = "_NEXTSEP_";
  function _v6(_v0) {
    return "string" == typeof _v0 && !!(/\/\(\.{1,3}\):[^/\s]+/.test(_v0) || /:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(_v0));
  }
  function _v7(_v0) {
    let _v1 = _v0;
    return (_v1 = _v1.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${_v5}:$2`)).replace(/:([^:/\s)]+)(?=:)/g, `:$1${_v5}`);
  }
  function _v8(_v0) {
    return _v0.map(_v0 => "object" == typeof _v0 && null !== _v0 && "modifier" in _v0 && ("*" === _v0.modifier || "+" === _v0.modifier) && "prefix" in _v0 && "suffix" in _v0 && "" === _v0.prefix && "" === _v0.suffix ? {
      ..._v0,
      prefix: "/"
    } : _v0);
  }
  function _v9(_v0) {
    return _v0.replace(RegExp(`\\)${_v5}`, "g"), ")");
  }
  function _v10(_v0) {
    let _v1 = {};
    for (let [_v0, _v1] of Object.entries(_v0)) "string" == typeof _v1 ? _v1[_v0] = _v1.replace(RegExp(`^${_v5}`), "") : Array.isArray(_v1) ? _v1[_v0] = _v1.map(_v0 => "string" == typeof _v0 ? _v0.replace(RegExp(`^${_v5}`), "") : _v0) : _v1[_v0] = _v1;
    return _v1;
  }
}