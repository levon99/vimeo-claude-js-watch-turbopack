{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  async function _v8() {
    try {
      _v7.DEBUG_BUILD && _v6.debug.log("Flushing events..."), await (0, _v4.flush)(0), _v7.DEBUG_BUILD && _v6.debug.log("Done flushing events");
    } catch (_v0) {
      _v7.DEBUG_BUILD && _v6.debug.log("Error while flushing events:\n", _v0);
    }
  }
  function _v9(_v0) {
    var _v1;
    "function" == typeof _v10()?.waitUntil ? (_v1 = _v0, _v10()?.waitUntil(_v1)) : function (_v0) {
      if ("string" != typeof EdgeRuntime) return;
      let _v1 = _v5.GLOBAL_OBJ[Symbol.for("@vercel/request-context")],
        _v2 = _v1?.get?.();
      _v2?.waitUntil && _v2.waitUntil(_v0);
    }(_v0);
  }
  function _v10() {
    let _v0 = Symbol.for("__cloudflare-context__");
    return _v5.GLOBAL_OBJ[_v0]?.ctx;
  }
  async function _v11(_v0) {
    let {
        req: _v1,
        res: _v2,
        err: _v3
      } = _v0,
      _v4 = _v2?.statusCode || _v0.statusCode;
    if (_v4 && _v4 < 500 || !_v0.pathname) return;
    if (_v3 && (0, _v2.isAlreadyCaptured)(_v3)) {
      _v9(_v8());
      let _v0 = "object" == typeof _v3 ? _v3.__sentry_event_id__ : void 0;
      return "string" == typeof _v0 ? ((0, _v3.getIsolationScope)().setLastEventId(_v0), _v0) : (0, _v3.getIsolationScope)().lastEventId();
    }
    let _v5 = (0, _v3.withScope)(_v0 => {
      if (_v1) {
        let _v0,
          _v1,
          _v2,
          _v3,
          _v4,
          _v5,
          _v6,
          _v7 = (_v1 = ("string" == typeof (_v0 = _v1.headers || {})["x-forwarded-host"] ? _v0["x-forwarded-host"] : void 0) || ("string" == typeof _v0.host ? _v0.host : void 0), _v2 = ("string" == typeof _v0["x-forwarded-proto"] ? _v0["x-forwarded-proto"] : void 0) || _v1.protocol || (_v1.socket?.encrypted ? "https" : "http"), _v4 = function ({
            url: _v0,
            protocol: _v1,
            host: _v2
          }) {
            return _v0?.startsWith("http") ? _v0 : _v0 && _v2 ? `${_v1}://${_v2}${_v0}` : void 0;
          }({
            url: _v3 = _v1.url || "",
            host: _v1,
            protocol: _v2
          }), _v5 = _v1.body || void 0, _v6 = _v1.cookies, {
            url: _v4,
            method: _v1.method,
            query_string: function (_v0) {
              if (_v0) try {
                let _v0 = new URL(_v0, "http://s.io").search.slice(1);
                return _v0.length ? _v0 : void 0;
              } catch {
                return;
              }
            }(_v3),
            headers: function (_v0) {
              let _v1 = Object.create(null);
              try {
                Object.entries(_v0).forEach(([_v0, _v1]) => {
                  "string" == typeof _v1 && (_v1[_v0] = _v1);
                });
              } catch {}
              return _v1;
            }(_v0),
            cookies: _v6,
            data: _v5
          });
        _v0.setSDKProcessingMetadata({
          normalizedRequest: _v7
        });
      }
      return (0, _v4.captureException)(_v3 || `_error.js called with falsy error (${_v3})`, {
        mechanism: {
          type: "auto.function.nextjs.underscore_error",
          handled: !1,
          data: {
            function: "_error.getInitialProps"
          }
        }
      });
    });
    return _v9(_v8()), _v5;
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = {
    ForbiddenError: _v12.ForbiddenError,
    NotAvailableError: _v12.NotAvailableError,
    RateLimitError: _v12.RateLimitError,
    ResourceNotFoundError: _v12.ResourceNotFoundError,
    UnauthorizedError: _v12.UnauthorizedError
  };
  function _v15(_v0) {
    return (0, _v1.jsx)(_v13.ErrorPageWithHeader, {
      error: _v0.error ? new _v14[_v0.error]() : new _v12.ResourceNotFoundError()
    });
  }
  _v15.getInitialProps = async ({
    res: _v0,
    err: _v1
  }) => {
    try {
      await _v11({
        res: _v0,
        err: _v1
      });
    } catch {}
    return {
      statusCode: _v0 ? _v0.statusCode : _v1 ? _v1.statusCode : 404,
      error: _v0?.req?.headers["x-vimeo-error-page"],
      omitEsi: !0
    };
  }, _v0.s(["default", 0, _v15], 0);
}