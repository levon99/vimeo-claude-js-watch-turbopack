{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    ReadonlyURLSearchParams: function () {
      return _v5.ReadonlyURLSearchParams;
    },
    RedirectType: function () {
      return _v12;
    },
    forbidden: function () {
      return _v8.forbidden;
    },
    notFound: function () {
      return _v7.notFound;
    },
    permanentRedirect: function () {
      return _v6.permanentRedirect;
    },
    redirect: function () {
      return _v6.redirect;
    },
    unauthorized: function () {
      return _v9.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return _v11;
    },
    unstable_rethrow: function () {
      return _v10.unstable_rethrow;
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
    _v9 = _v0.r(0),
    _v10 = _v0.r(0);
  function _v11() {
    throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
      value: "E776",
      enumerable: !1,
      configurable: !0
    });
  }
  let _v12 = {
    push: "push",
    replace: "replace"
  };
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}