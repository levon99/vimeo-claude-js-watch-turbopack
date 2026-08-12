{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    HTTPAccessErrorStatus: function () {
      return _v5;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function () {
      return _v7;
    },
    getAccessFallbackErrorTypeByStatus: function () {
      return _v10;
    },
    getAccessFallbackHTTPStatus: function () {
      return _v9;
    },
    isHTTPAccessFallbackError: function () {
      return _v8;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    },
    _v6 = new Set(Object.values(_v5)),
    _v7 = "NEXT_HTTP_ERROR_FALLBACK";
  function _v8(_v0) {
    if ("object" != typeof _v0 || null === _v0 || !("digest" in _v0) || "string" != typeof _v0.digest) return !1;
    let [_v1, _v2] = _v0.digest.split(";");
    return _v1 === _v7 && _v6.has(Number(_v2));
  }
  function _v9(_v0) {
    return Number(_v0.digest.split(";")[1]);
  }
  function _v10(_v0) {
    switch (_v0) {
      case 401:
        return "unauthorized";
      case 403:
        return "forbidden";
      case 404:
        return "not-found";
      default:
        return;
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}