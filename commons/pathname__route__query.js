{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    Router: function () {
      return _v7.default;
    },
    createRouter: function () {
      return _v17;
    },
    default: function () {
      return _v15;
    },
    makePublicRouterInstance: function () {
      return _v18;
    },
    useRouter: function () {
      return _v16;
    },
    withRouter: function () {
      return _v10.default;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v5._(_v0.r(0)),
    _v7 = _v5._(_v0.r(0)),
    _v8 = _v0.r(0),
    _v9 = _v5._(_v0.r(0)),
    _v10 = _v5._(_v0.r(0)),
    _v11 = {
      router: null,
      readyCallbacks: [],
      ready(_v0) {
        if (this.router) return _v0();
        "u" > typeof window && this.readyCallbacks.push(_v0);
      }
    },
    _v12 = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain", "domainLocales"],
    _v13 = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
  function _v14() {
    if (!_v11.router) throw Object.defineProperty(Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n'), "__NEXT_ERROR_CODE", {
      value: "E1044",
      enumerable: !1,
      configurable: !0
    });
    return _v11.router;
  }
  Object.defineProperty(_v11, "events", {
    get: () => _v7.default.events
  }), _v12.forEach(_v0 => {
    Object.defineProperty(_v11, _v0, {
      get: () => _v14()[_v0]
    });
  }), _v13.forEach(_v0 => {
    _v11[_v0] = (..._v0) => _v14()[_v0](..._v0);
  }), ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach(_v0 => {
    _v11.ready(() => {
      _v7.default.events.on(_v0, (..._v0) => {
        let _v1 = `on${_v0.charAt(0).toUpperCase()}${_v0.substring(1)}`;
        if (_v11[_v1]) try {
          _v11[_v1](..._v0);
        } catch (_v0) {
          console.error(`Error when running the Router event: ${_v1}`), console.error((0, _v9.default)(_v0) ? `${_v0.message}
${_v0.stack}` : _v0 + "");
        }
      });
    });
  });
  let _v15 = _v11;
  function _v16() {
    let _v0 = _v6.default.useContext(_v8.RouterContext);
    if (!_v0) throw Object.defineProperty(Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted"), "__NEXT_ERROR_CODE", {
      value: "E509",
      enumerable: !1,
      configurable: !0
    });
    return _v0;
  }
  function _v17(..._v0) {
    return _v11.router = new _v7.default(..._v0), _v11.readyCallbacks.forEach(_v0 => _v0()), _v11.readyCallbacks = [], _v11.router;
  }
  function _v18(_v0) {
    let _v1 = {};
    for (let _v0 of _v12) {
      if ("object" == typeof _v0[_v0]) {
        _v1[_v0] = Object.assign(Array.isArray(_v0[_v0]) ? [] : {}, _v0[_v0]);
        continue;
      }
      _v1[_v0] = _v0[_v0];
    }
    return _v1.events = _v7.default.events, _v13.forEach(_v0 => {
      _v1[_v0] = (..._v0) => _v0[_v0](..._v0);
    }), _v1;
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}