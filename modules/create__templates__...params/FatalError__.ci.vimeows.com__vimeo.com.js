{
  "use strict";

  var _v1 = _v0.i(0);
  class _v2 extends Error {
    constructor(_v0) {
      super(_v0), this.name = "FatalError";
    }
  }
  _v0.s(["FatalError", 0, _v2], 0), _v0.i(0);
  let _v3 = location.host.endsWith(".ci.vimeows.com"),
    _v4 = location.host.endsWith("vimeo.com"),
    _v5 = {
      APP_TYPE: "artifacts-uploader",
      USER_ID: null,
      USER_LOCALE: null,
      LOG_ERRORS_TRACKED: 0,
      LOG_ERRORS_LIMIT: 200,
      STARTED_AT: Date.now()
    };
  function _v6() {
    return {
      ..._v7(),
      pageLifeDuration: Date.now() - _v5.STARTED_AT,
      pageErrorsTracked: _v5.LOG_ERRORS_TRACKED,
      pageIsFocused: window.document.hasFocus(),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height
    };
  }
  function _v7() {
    return {
      appType: _v5.APP_TYPE,
      pageSessionLocale: _v5.USER_LOCALE
    };
  }
  function _v8(_v0, _v1) {
    if (!(_v5.LOG_ERRORS_TRACKED <= _v5.LOG_ERRORS_LIMIT)) return console.debug("Skipping error tracking, session facing limit");
    _v5.LOG_ERRORS_TRACKED += 1;
    let _v2 = {
      ..._v1,
      ..._v6()
    };
    _v4 && window.DD_RUM && window.DD_RUM.onReady(() => {
      console.debug("Sending Datadog report", {
        error: _v0,
        errorInfo: _v2,
        globals: window.DD_RUM.getUser() ?? null
      }), window.DD_RUM.addError(_v0, _v2);
    });
  }
  _v0.s(["getApplicationGlobals", 0, _v7, "getApplicationInfo", 0, _v6, "trackingConfig", 0, _v5, "updateTrackingConfig", 0, function (_v0) {
    for (let _v0 in _v0) _v5[_v0] = _v0[_v0];
  }], 0), _v0.s(["trackError", 0, _v8, "updateDatadogGlobals", 0, function (_v0) {
    window.DD_RUM && window.DD_RUM.onReady(() => {
      for (let _v0 in _v0) window.DD_RUM.setViewContextProperty(_v0, String(_v0[_v0]));
    });
  }], 0);
  class _v9 extends Error {
    status;
    res;
    constructor(_v0, _v1, _v2) {
      super(_v0), this.name = "NetworkError", this.status = _v1, this.res = _v2;
    }
  }
  _v0.s(["NetworkError", 0, _v9], 0);
  class _v10 {
    params = {};
    constructor(_v0 = {}) {
      this.params = _v0, this.forCategory = this.forCategory.bind(this);
    }
    static createForCategory(_v0, {
      instance: _v1,
      setLogger: _v2
    }) {
      if (_v1) return _v1(_v0);
      {
        let _v0 = new _v10();
        return _v2(_v0.forCategory.bind(_v0)), _v0.forCategory(_v0);
      }
    }
    forCategory(_v0) {
      let _v1 = (_v0, _v1, _v2 = {}) => ({
        type: _v0,
        category: _v0 || null,
        args: _v2,
        message: _v1,
        created_ts: +new Date()
      });
      return {
        info: (_v0, _v1) => this.log(_v1("info", _v0, _v1)),
        debug: (_v0, _v1) => this.log(_v1("debug", _v0, _v1)),
        warn: (_v0, _v1) => this.log(_v1("warn", _v0, _v1)),
        error: (_v0, _v1) => {
          let _v2 = _v0 => {
            let _v1 = {
              ..._v1,
              ..._v0
            };
            this.log(_v1("error", String(_v0), _v1)), _v8(_v0, _v1);
          };
          if (_v0 instanceof _v9) {
            let _v0 = {
              httpStatus: _v0.res?.status
            };
            _v0.res?.text?.().then(_v0 => {
              try {
                _v0.httpBody = JSON.parse(_v0);
              } catch {
                _v0.httpBody = _v0;
              }
            }).catch(_v0 => {
              _v0.httpBody = String(_v0);
            }).finally(() => {
              _v2(_v0);
            });
          } else _v2({});
        }
      };
    }
    async download() {
      if (!this.params.shouldPersistLogs) throw Error("Persistent logger not implemented");
      let _v0 = document.createElement("a");
      _v0.href = URL.createObjectURL(new Blob([JSON.stringify([])])), _v0.download = "vimeo record studio logs.json", _v0.style.display = "none", document.body.appendChild(_v0), _v0.click(), _v0.remove();
    }
    log(_v0) {
      this.params.shouldPersistLogs && this.persistLog(_v0), _v3 && this.printToConsole(_v0);
    }
    persistLog(_v0) {
      if (!this.params.shouldPersistLogs) throw Error(`Persistent logger not implemented for log: [${_v0.message}]`);
    }
    printToConsole(_v0) {
      let _v1 = "";
      switch (_v0.type) {
        case "debug":
          _v1 = "color: green";
          break;
        case "warn":
          _v1 = "color: #d4ad13";
          break;
        case "error":
          _v1 = "color: red";
      }
      let _v2 = `🗂️ ${new Date().toLocaleString()}`;
      _v0.category && _v3 && (_v2 += ` [${_v0.category}]`);
      let _v3 = [`${_v2} %c${_v0.message}`, _v1],
        _v4 = _v0.args;
      _v3.push(...[_v4].flat()), window.console.log(..._v3);
    }
  }
  _v0.s(["Logger", 0, _v10], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = _v0 => (0, _v11.create)((0, _v12.subscribeWithSelector)((0, _v13.immer)(_v0)));
  _v0.s(["createStore", 0, _v14], 0);
  let _v15 = _v14(_v0 => ({
      instance: void 0,
      setLogger: _v0 => {
        _v0(_v0 => {
          _v0.instance = _v0;
        });
      }
    })),
    _v16 = _v0 => {
      let {
        setLogger: _v1,
        instance: _v2
      } = _v15.getState();
      if (_v2) return _v2(_v0);
      {
        let _v0 = new _v10();
        return _v1(_v0.forCategory), _v0.forCategory(_v0);
      }
    };
  _v0.s(["getLogger", 0, _v16], 0);
  let _v17 = (0, _v1.createContext)({
    upload: async () => {
      let _v0 = new _v2("ArtifactsUploaderContext was not initialized by provider Component.");
      throw _v16("ArtifactsUploaderContext").error(_v0, {
        category: "UNEXPECTED"
      }), _v0;
    }
  });
  _v0.s(["ArtifactsUploaderContext", 0, _v17], 0);
}