{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    getRedirectError: function () {
      return _v8;
    },
    getRedirectStatusCodeFromError: function () {
      return _v13;
    },
    getRedirectTypeFromError: function () {
      return _v12;
    },
    getURLFromRedirectError: function () {
      return _v11;
    },
    permanentRedirect: function () {
      return _v10;
    },
    redirect: function () {
      return _v9;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  function _v8(_v0, _v1, _v2 = _v5.RedirectStatusCode.TemporaryRedirect) {
    let _v3 = Object.defineProperty(Error(_v6.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    return _v3.digest = `${_v6.REDIRECT_ERROR_CODE};${_v1};${_v0};${_v2};`, _v3;
  }
  function _v9(_v0, _v1) {
    throw _v8(_v0, _v1 ??= _v7.actionAsyncStorage?.getStore()?.isAction ? "push" : "replace", _v5.RedirectStatusCode.TemporaryRedirect);
  }
  function _v10(_v0, _v1 = "replace") {
    throw _v8(_v0, _v1, _v5.RedirectStatusCode.PermanentRedirect);
  }
  function _v11(_v0) {
    return (0, _v6.isRedirectError)(_v0) ? _v0.digest.split(";").slice(2, -2).join(";") : null;
  }
  function _v12(_v0) {
    if (!(0, _v6.isRedirectError)(_v0)) throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
      value: "E260",
      enumerable: !1,
      configurable: !0
    });
    return _v0.digest.split(";", 2)[1];
  }
  function _v13(_v0) {
    if (!(0, _v6.isRedirectError)(_v0)) throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
      value: "E260",
      enumerable: !1,
      configurable: !0
    });
    return Number(_v0.digest.split(";").at(-2));
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}