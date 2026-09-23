{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {};
  _v0.s(["useErrorTracking", 0, function ({
    defaultContext: _v0 = _v5,
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
        return _v1.includes("network") || _v1.includes("fetch") || _v1.includes("timeout") ? _v3.TRACKED_ERRORS.NETWORK_ERROR : _v1.includes("permission") || _v1.includes("unauthorized") || _v1.includes("forbidden") ? _v3.TRACKED_ERRORS.PERMISSION_ERROR : _v1.includes("validation") || _v1.includes("invalid") || _v1.includes("required") ? _v3.TRACKED_ERRORS.VALIDATION_ERROR : _v1.includes("api") || _v1.includes("server") || _v2.includes("api") ? _v3.TRACKED_ERRORS.API_ERROR : _v3.TRACKED_ERRORS.UNKNOWN_ERROR;
      }, []),
      _v9 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v1.message.toLowerCase();
        return _v0 === _v3.TRACKED_ERRORS.NETWORK_ERROR && _v2.includes("timeout") ? _v3.ERROR_SEVERITY_LEVELS.MEDIUM : _v0 === _v3.TRACKED_ERRORS.PERMISSION_ERROR ? _v3.ERROR_SEVERITY_LEVELS.HIGH : _v0 === _v3.TRACKED_ERRORS.API_ERROR && _v2.includes("500") ? _v3.ERROR_SEVERITY_LEVELS.CRITICAL : _v0 === _v3.TRACKED_ERRORS.VALIDATION_ERROR ? _v3.ERROR_SEVERITY_LEVELS.LOW : _v3.ERROR_SEVERITY_LEVELS.MEDIUM;
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
          (0, _v4.trackError)(_v2, {
            category: _v0.category,
            severity: _v0.severity,
            timestamp: _v0.timestamp,
            errorId: _v0.errorId,
            resourceType: _v3.trackingConfig.RESOURCE_TYPE,
            resourceId: _v3.trackingConfig.RESOURCE_ID,
            userId: _v3.trackingConfig.USER_ID,
            userLocale: _v3.trackingConfig.USER_LOCALE,
            pageName: _v3.trackingConfig.PAGE_NAME,
            ..._v1
          }), _v3.current += 1, _v4.current.add(_v0.errorId), _v3.trackingConfig.LOG_ERRORS_TRACKED = _v3.current, _v1 && console.error("RSM Error tracked:", {
            ..._v0,
            context: _v1
          });
        } catch (_v0) {
          _v1 && (console.error("Failed to log error:", _v0), console.error("Original error:", _v0));
        }
      }, [_v8, _v9, _v5, _v6, _v7, _v1])
    };
  }]);
}