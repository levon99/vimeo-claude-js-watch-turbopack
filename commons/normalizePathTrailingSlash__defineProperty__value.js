{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "normalizePathTrailingSlash", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0 => {
      if (47 !== _v0.charCodeAt(0)) return _v0;
      let {
        pathname: _v1,
        query: _v2,
        hash: _v3
      } = (0, _v4.parsePath)(_v0);
      return `${(0, _v3.removeTrailingSlash)(_v1)}${_v2}${_v3}`;
    };
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}