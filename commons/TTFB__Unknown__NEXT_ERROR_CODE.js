{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    DecodeError: function () {
      return _v17;
    },
    MiddlewareNotFoundError: function () {
      return _v21;
    },
    MissingStaticPage: function () {
      return _v20;
    },
    NormalizeError: function () {
      return _v18;
    },
    PageNotFoundError: function () {
      return _v19;
    },
    SP: function () {
      return _v15;
    },
    ST: function () {
      return _v16;
    },
    WEB_VITALS: function () {
      return _v5;
    },
    execOnce: function () {
      return _v6;
    },
    getDisplayName: function () {
      return _v11;
    },
    getLocationOrigin: function () {
      return _v9;
    },
    getURL: function () {
      return _v10;
    },
    isAbsoluteUrl: function () {
      return _v8;
    },
    isResSent: function () {
      return _v12;
    },
    loadGetInitialProps: function () {
      return _v14;
    },
    normalizeRepeatedSlashes: function () {
      return _v13;
    },
    stringifyError: function () {
      return _v22;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
  function _v6(_v0) {
    let _v1,
      _v2 = !1;
    return (..._v0) => (_v2 || (_v2 = !0, _v1 = _v0(..._v0)), _v1);
  }
  let _v7 = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
    _v8 = _v0 => {
      let _v1 = _v0.charCodeAt(0);
      return !!(_v1 >= 65 && _v1 <= 90 || _v1 >= 97 && _v1 <= 122) && _v7.test(_v0);
    };
  function _v9() {
    let {
      protocol: _v0,
      hostname: _v1,
      port: _v2
    } = window.location;
    return `${_v0}//${_v1}${_v2 ? ":" + _v2 : ""}`;
  }
  function _v10() {
    let {
        href: _v0
      } = window.location,
      _v1 = _v9();
    return _v0.substring(_v1.length);
  }
  function _v11(_v0) {
    return "string" == typeof _v0 ? _v0 : _v0.displayName || _v0.name || "Unknown";
  }
  function _v12(_v0) {
    return _v0.finished || _v0.headersSent;
  }
  function _v13(_v0) {
    let _v1 = _v0.split("?");
    return _v1[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (_v1[1] ? `?${_v1.slice(1).join("?")}` : "");
  }
  async function _v14(_v0, _v1) {
    let _v2 = _v1.res || _v1.ctx && _v1.ctx.res;
    if (!_v0.getInitialProps) return _v1.ctx && _v1.Component ? {
      pageProps: await _v14(_v1.Component, _v1.ctx)
    } : {};
    let _v3 = await _v0.getInitialProps(_v1);
    if (_v2 && _v12(_v2)) return _v3;
    if (!_v3) throw Object.defineProperty(Error(`"${_v11(_v0)}.getInitialProps()" should resolve to an object. But found "${_v3}" instead.`), "__NEXT_ERROR_CODE", {
      value: "E1025",
      enumerable: !1,
      configurable: !0
    });
    return _v3;
  }
  let _v15 = "u" > typeof performance,
    _v16 = _v15 && ["mark", "measure", "getEntriesByName"].every(_v0 => "function" == typeof performance[_v0]);
  class _v17 extends Error {}
  class _v18 extends Error {}
  class _v19 extends Error {
    constructor(_v0) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${_v0}`;
    }
  }
  class _v20 extends Error {
    constructor(_v0, _v1) {
      super(), this.message = `Failed to load static file for page: ${_v0} ${_v1}`;
    }
  }
  class _v21 extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
    }
  }
  function _v22(_v0) {
    return JSON.stringify({
      message: _v0.message,
      stack: _v0.stack
    });
  }
}