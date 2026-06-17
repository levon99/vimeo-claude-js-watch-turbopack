{
  "use strict";

  var _v3 = _v0.r(0);
  function _v4(_v0) {
    var _v1 = "https://react.dev/errors/" + _v0;
    if (1 < arguments.length) {
      _v1 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _v2 = 2; _v2 < arguments.length; _v2++) _v1 += "&args[]=" + encodeURIComponent(arguments[_v2]);
    }
    return "Minified React error #" + _v0 + "; visit " + _v1 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _v5() {}
  var _v6 = {
      d: {
        f: _v5,
        r: function () {
          throw Error(_v4(522));
        },
        D: _v5,
        C: _v5,
        L: _v5,
        m: _v5,
        X: _v5,
        S: _v5,
        M: _v5
      },
      p: 0,
      findDOMNode: null
    },
    _v7 = Symbol.for("react.portal"),
    _v8 = _v3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _v9(_v0, _v1) {
    return "font" === _v0 ? "" : "string" == typeof _v1 ? "use-credentials" === _v1 ? _v1 : "" : void 0;
  }
  _v2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _v6, _v2.createPortal = function (_v0, _v1) {
    var _v2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!_v1 || 1 !== _v1.nodeType && 9 !== _v1.nodeType && 11 !== _v1.nodeType) throw Error(_v4(299));
    return function (_v0, _v1, _v2) {
      var _v3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: _v7,
        key: null == _v3 ? null : "" + _v3,
        children: _v0,
        containerInfo: _v1,
        implementation: _v2
      };
    }(_v0, _v1, null, _v2);
  }, _v2.flushSync = function (_v0) {
    var _v1 = _v8.T,
      _v2 = _v6.p;
    try {
      if (_v8.T = null, _v6.p = 2, _v0) return _v0();
    } finally {
      _v8.T = _v1, _v6.p = _v2, _v6.d.f();
    }
  }, _v2.preconnect = function (_v0, _v1) {
    "string" == typeof _v0 && (_v1 = _v1 ? "string" == typeof (_v1 = _v1.crossOrigin) ? "use-credentials" === _v1 ? _v1 : "" : void 0 : null, _v6.d.C(_v0, _v1));
  }, _v2.prefetchDNS = function (_v0) {
    "string" == typeof _v0 && _v6.d.D(_v0);
  }, _v2.preinit = function (_v0, _v1) {
    if ("string" == typeof _v0 && _v1 && "string" == typeof _v1.as) {
      var _v2 = _v1.as,
        _v3 = _v9(_v2, _v1.crossOrigin),
        _v4 = "string" == typeof _v1.integrity ? _v1.integrity : void 0,
        _v5 = "string" == typeof _v1.fetchPriority ? _v1.fetchPriority : void 0;
      "style" === _v2 ? _v6.d.S(_v0, "string" == typeof _v1.precedence ? _v1.precedence : void 0, {
        crossOrigin: _v3,
        integrity: _v4,
        fetchPriority: _v5
      }) : "script" === _v2 && _v6.d.X(_v0, {
        crossOrigin: _v3,
        integrity: _v4,
        fetchPriority: _v5,
        nonce: "string" == typeof _v1.nonce ? _v1.nonce : void 0
      });
    }
  }, _v2.preinitModule = function (_v0, _v1) {
    if ("string" == typeof _v0) if ("object" == typeof _v1 && null !== _v1) {
      if (null == _v1.as || "script" === _v1.as) {
        var _v2 = _v9(_v1.as, _v1.crossOrigin);
        _v6.d.M(_v0, {
          crossOrigin: _v2,
          integrity: "string" == typeof _v1.integrity ? _v1.integrity : void 0,
          nonce: "string" == typeof _v1.nonce ? _v1.nonce : void 0
        });
      }
    } else null == _v1 && _v6.d.M(_v0);
  }, _v2.preload = function (_v0, _v1) {
    if ("string" == typeof _v0 && "object" == typeof _v1 && null !== _v1 && "string" == typeof _v1.as) {
      var _v2 = _v1.as,
        _v3 = _v9(_v2, _v1.crossOrigin);
      _v6.d.L(_v0, _v2, {
        crossOrigin: _v3,
        integrity: "string" == typeof _v1.integrity ? _v1.integrity : void 0,
        nonce: "string" == typeof _v1.nonce ? _v1.nonce : void 0,
        type: "string" == typeof _v1.type ? _v1.type : void 0,
        fetchPriority: "string" == typeof _v1.fetchPriority ? _v1.fetchPriority : void 0,
        referrerPolicy: "string" == typeof _v1.referrerPolicy ? _v1.referrerPolicy : void 0,
        imageSrcSet: "string" == typeof _v1.imageSrcSet ? _v1.imageSrcSet : void 0,
        imageSizes: "string" == typeof _v1.imageSizes ? _v1.imageSizes : void 0,
        media: "string" == typeof _v1.media ? _v1.media : void 0
      });
    }
  }, _v2.preloadModule = function (_v0, _v1) {
    if ("string" == typeof _v0) if (_v1) {
      var _v2 = _v9(_v1.as, _v1.crossOrigin);
      _v6.d.m(_v0, {
        as: "string" == typeof _v1.as && "script" !== _v1.as ? _v1.as : void 0,
        crossOrigin: _v2,
        integrity: "string" == typeof _v1.integrity ? _v1.integrity : void 0
      });
    } else _v6.d.m(_v0);
  }, _v2.requestFormReset = function (_v0) {
    _v6.d.r(_v0);
  }, _v2.unstable_batchedUpdates = function (_v0, _v1) {
    return _v0(_v1);
  }, _v2.useFormState = function (_v0, _v1, _v2) {
    return _v8.H.useFormState(_v0, _v1, _v2);
  }, _v2.useFormStatus = function () {
    return _v8.H.useHostTransitionStatus();
  }, _v2.version = "19.2.4";
}