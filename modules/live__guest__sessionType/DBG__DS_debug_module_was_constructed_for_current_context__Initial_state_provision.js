{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  class _v9 extends _v1.ContextManager {
    context = {
      debugActions: (0, _v1.createActions)({
        clearLogs: () => this.clearLogs(),
        setFileReporting: (_v0, _v1) => this.toggleFileLoggingState(_v0, _v1),
        setDebugState: (_v0, _v1) => this.toggleDebugState(_v0, _v1),
        setLoggingState: (_v0, _v1) => this.toggleLoggingState(_v0, _v1),
        saveReportFile: () => this.saveReportFile()
      }),
      isEnabled: (0, _v8.getLiveConfigValue)(_v3.localStorageConfig.DEBUG.ENABLED, !1),
      isLoggingEnabled: (0, _v8.getLiveConfigValue)(_v3.localStorageConfig.DEBUG.LOGGING, _v7.environmentConfig.IS_DEV),
      isFileLoggingEnabled: (0, _v8.getLiveConfigValue)(_v3.localStorageConfig.DEBUG.FILE_LOGGING, !1)
    };
    log = new _v2.Logger("🌪️DBG");
    constructor(_v0) {
      super(), _v2.Logger.IS_CONSOLE_ENABLED = this.context.isLoggingEnabled, _v2.Logger.IS_MARKING_ENABLED = this.context.isLoggingEnabled, _v2.Logger.IS_FILE_ENABLED = this.context.isFileLoggingEnabled, this.log.info("DS debug module was constructed for current context"), this.log.info("Initial state provision:", _v0);
    }
    toggleDebugState(_v0, _v1 = !0) {
      return function (_v0, _v1, _v2 = !0) {
        _v0.log.info("Toggling debug mode:", _v1), _v2 && (0, _v6.setLocalStorageItem)(_v3.localStorageConfig.DEBUG.ENABLED, _v1), _v0.setContext({
          isEnabled: _v1
        });
      }(this, _v0, _v1);
    }
    toggleLoggingState(_v0, _v1 = !0) {
      return function (_v0, _v1, _v2 = !0) {
        _v2.Logger.IS_CONSOLE_ENABLED = _v1, _v2.Logger.IS_MARKING_ENABLED = _v1, _v2 && (0, _v6.setLocalStorageItem)(_v3.localStorageConfig.DEBUG.LOGGING, _v1), _v0.log.info("Setting logging mode:", _v1), _v0.setContext({
          isLoggingEnabled: _v1
        });
      }(this, _v0, _v1);
    }
    toggleFileLoggingState(_v0, _v1 = !0) {
      return function (_v0, _v1, _v2 = !0) {
        _v0.log.info("Toggling file reporting, state:", _v1), _v2.Logger.IS_FILE_ENABLED = _v1, _v2 && (0, _v6.setLocalStorageItem)(_v3.localStorageConfig.DEBUG.FILE_LOGGING, _v1), _v0.setContext({
          isFileLoggingEnabled: _v1
        });
      }(this, _v0, _v1);
    }
    saveReportFile() {
      return function (_v0) {
        if (!_v0.context.isFileLoggingEnabled) return;
        let _v1 = new Date().toLocaleString("en-GB"),
          _v2 = `LIV_LOG_${_v1}.txt`,
          _v3 = [`Url: ${window.location.href}
`, `Date: ${_v1}

`, ..._v2.Logger.LOG_FILE_BUFFER, "\n\nState snapshot:\n"];
        for (let [_v0, _v1] of _v0.getScope().INTERNAL.REGISTRY.CONTEXT_STATES_REGISTRY.entries()) _v3.push(`[🌪${_v0.name}]: ${JSON.stringify(_v1, (0, _v5.getCircularReplacer)(), 2)}

`);
        _v0.log.info("Saving file:", _v1), (0, _v4.downloadFileByBlob)(_v2, new Blob(_v3, {
          type: "text/plain"
        }));
      }(this);
    }
    clearLogs() {
      this.log.info("Clearing up file logs"), _v2.Logger.clearLogs();
    }
  }
  _v0.s(["DebugControlManager", 0, _v9], 0);
}