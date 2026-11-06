{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "api_error",
    _v4 = "validation_error",
    _v5 = "permission_error",
    _v6 = "network_error",
    _v7 = "medium",
    _v8 = {
      RESOURCE_TYPE: "uninitialized",
      RESOURCE_ID: null,
      USER_ID: null,
      USER_LOCALE: null,
      LOG_ERRORS_TRACKED: 0,
      LOG_ERRORS_LIMIT: 50,
      PAGE_NAME: null
    };
  function _v9() {
    return {
      ..._v10()
    };
  }
  function _v10() {
    return {
      resourceType: _v8.RESOURCE_TYPE,
      resourceId: _v8.RESOURCE_ID,
      userId: _v8.USER_ID,
      userLocale: _v8.USER_LOCALE,
      pageName: _v8.PAGE_NAME
    };
  }
  _v0.s(["getApplicationGlobals", 0, _v10, "getApplicationInfo", 0, _v9, "updateDatadogGlobals", 0, function (_v0) {
    window.DD_RUM && window.DD_RUM.onReady(() => {
      for (let _v0 in _v0) window.DD_RUM.setViewContextProperty(_v0, String(_v0[_v0]));
    });
  }, "updateTrackingConfig", 0, function (_v0) {
    for (let _v0 in _v0) _v8[_v0] = _v0[_v0];
  }], 0);
  let _v11 = location.host.endsWith("vimeo.com");
  function _v12(_v0, _v1) {
    if (!(_v8.LOG_ERRORS_TRACKED <= _v8.LOG_ERRORS_LIMIT)) return console.debug("Skipping error tracking, session facing limit");
    _v8.LOG_ERRORS_TRACKED += 1;
    let _v2 = {
      ..._v1,
      ..._v9()
    };
    _v11 && window.DD_RUM && window.DD_RUM.onReady(() => {
      window.DD_RUM.getUser(), window.DD_RUM.addError(_v0, _v2);
    });
  }
  _v0.s(["trackError", 0, _v12], 0);
  let _v13 = {};
  _v0.s(["useErrorTracking", 0, function ({
    defaultContext: _v0 = _v13,
    enableConsoleLogging: _v1 = !1,
    maxErrorsPerSession: _v2 = 50
  } = {}) {
    let _v3 = (0, _v2.useRef)(0),
      _v4 = (0, _v2.useRef)(new Set()),
      _v5 = (0, _v2.useCallback)((_v0, _v1) => btoa(`${_v0}-${_v1?.substring(0, 100) || ""}`).substring(0, 16), []),
      _v6 = (0, _v2.useCallback)(_v0 => !(_v3.current >= _v2 || _v4.current.has(_v0)), [_v2]),
      _v7 = (0, _v2.useCallback)(_v0 => (0, _v1.default)(_v0, _v0), [_v0]),
      _v8 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0.message.toLowerCase(),
          _v2 = _v0.stack?.toLowerCase() || "";
        return _v1.includes("network") || _v1.includes("fetch") || _v1.includes("timeout") ? _v6 : _v1.includes("permission") || _v1.includes("unauthorized") || _v1.includes("forbidden") ? _v5 : _v1.includes("validation") || _v1.includes("invalid") || _v1.includes("required") ? _v4 : _v1.includes("api") || _v1.includes("server") || _v2.includes("api") ? _v3 : "unknown_error";
      }, []),
      _v9 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v1.message.toLowerCase();
        return _v0 === _v6 && _v2.includes("timeout") ? _v7 : _v0 === _v5 ? "high" : _v0 === _v3 && _v2.includes("500") ? "critical" : _v0 === _v4 ? "low" : _v7;
      }, []);
    return {
      logError: (0, _v2.useCallback)((_v0, _v1) => {
        try {
          let _v0;
          if (_v0 instanceof Error) {
            let _v0 = _v8(_v0),
              _v1 = _v9(_v0, _v0);
            _v0 = {
              message: _v0.message.substring(0, 0),
              category: _v0,
              severity: _v1,
              stack: _v0.stack?.substring(0, 0),
              timestamp: Date.now(),
              errorId: _v5(_v0.message, _v0.stack)
            };
          } else _v0 = {
            ..._v0,
            message: _v0.message.substring(0, 0),
            stack: _v0.stack?.substring(0, 0),
            timestamp: _v0.timestamp || Date.now(),
            errorId: _v0.errorId || _v5(_v0.message, _v0.stack)
          };
          if (!_v0.errorId || !_v6(_v0.errorId)) return;
          let _v1 = _v7(_v1),
            _v2 = _v0 instanceof Error ? _v0 : Error(_v0.message);
          _v12(_v2, {
            category: _v0.category,
            severity: _v0.severity,
            timestamp: _v0.timestamp,
            errorId: _v0.errorId,
            resourceType: _v8.RESOURCE_TYPE,
            resourceId: _v8.RESOURCE_ID,
            userId: _v8.USER_ID,
            userLocale: _v8.USER_LOCALE,
            pageName: _v8.PAGE_NAME,
            ..._v1
          }), _v3.current += 1, _v4.current.add(_v0.errorId), _v8.LOG_ERRORS_TRACKED = _v3.current, _v1 && console.error("RSM Error tracked:", {
            ..._v0,
            context: _v1
          });
        } catch (_v0) {
          _v1 && (console.error("Failed to log error:", _v0), console.error("Original error:", _v0));
        }
      }, [_v8, _v9, _v5, _v6, _v7, _v1])
    };
  }], 0);
}