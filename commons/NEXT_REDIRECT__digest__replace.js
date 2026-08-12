{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    REDIRECT_ERROR_CODE: function () {
      return _v6;
    },
    isRedirectError: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = "NEXT_REDIRECT";
  function _v7(_v0) {
    if ("object" != typeof _v0 || null === _v0 || !("digest" in _v0) || "string" != typeof _v0.digest) return !1;
    let _v1 = _v0.digest.split(";"),
      [_v2, _v3] = _v1,
      _v4 = _v1.slice(2, -2).join(";"),
      _v5 = Number(_v1.at(-2));
    return _v2 === _v6 && ("replace" === _v3 || "push" === _v3) && "string" == typeof _v4 && !isNaN(_v5) && _v5 in _v5.RedirectStatusCode;
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}