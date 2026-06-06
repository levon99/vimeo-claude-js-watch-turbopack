{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "getPathMatch", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = _v0.r(0);
  function _v4(_v0, _v1) {
    let _v2 = [],
      _v3 = (0, _v3.pathToRegexp)(_v0, _v2, {
        delimiter: "/",
        sensitive: "boolean" == typeof _v1?.sensitive && _v1.sensitive,
        strict: _v1?.strict
      }),
      _v4 = (0, _v3.regexpToFunction)(_v1?.regexModifier ? new RegExp(_v1.regexModifier(_v3.source), _v3.flags) : _v3, _v2);
    return (_v0, _v1) => {
      if ("string" != typeof _v0) return !1;
      let _v2 = _v4(_v0);
      if (!_v2) return !1;
      if (_v1?.removeUnnamedParams) for (let _v0 of _v2) "number" == typeof _v0.name && delete _v2.params[_v0.name];
      return {
        ..._v1,
        ..._v2.params
      };
    };
  }
}