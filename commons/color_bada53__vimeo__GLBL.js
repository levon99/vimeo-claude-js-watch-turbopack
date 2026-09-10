{
  "use strict";

  class _v1 {
    static LOG_FILE_BUFFER = [];
    static LOG_FILE_BUFFER_LINES_LIMIT = 0;
    static LOG_FILE_BUFFER_SPLICE = 100;
    static IS_MARKING_ENABLED = !1;
    static IS_CONSOLE_ENABLED = !1;
    static IS_FILE_ENABLED = !1;
    static PREFIX_STYLE = "color: #bada53";
    static PREFIX_VIMEO_MARK = "@vimeo:";
    static GLOBAL = null;
    prefix;
    isEnabled = !0;
    static getGlobal() {
      return _v1.GLOBAL || (_v1.GLOBAL = new _v1("🪐GLBL")), _v1.GLOBAL;
    }
    static clearLogs() {
      this.LOG_FILE_BUFFER = [];
    }
    static logInFile(_v0) {
      _v1.IS_FILE_ENABLED && (_v1.LOG_FILE_BUFFER.push(_v0), _v1.LOG_FILE_BUFFER.length > _v1.LOG_FILE_BUFFER_LINES_LIMIT && _v1.LOG_FILE_BUFFER.splice(0, _v1.LOG_FILE_BUFFER_SPLICE));
    }
    static mark(_v0) {
      this.IS_MARKING_ENABLED && window.performance?.mark(`${_v1.PREFIX_VIMEO_MARK}${_v0}`);
    }
    constructor(_v0 = "", _v1) {
      this.prefix = `[${_v0}]`, void 0 !== _v1 && (this.isEnabled = _v1);
    }
    debug(..._v0) {
      this.logAs("debug", _v0);
    }
    warn(..._v0) {
      this.logAs("warn", _v0);
    }
    error(..._v0) {
      this.logAs("error", _v0);
    }
    info(..._v0) {
      this.logAs("info", _v0);
    }
    table(..._v0) {
      _v1.IS_CONSOLE_ENABLED && window.console?.table(..._v0);
    }
    mark(_v0) {
      return _v1.mark(_v0);
    }
    group(_v0) {
      _v1.IS_CONSOLE_ENABLED && this.isEnabled && window.console.group(_v0);
    }
    closeGroup() {
      _v1.IS_CONSOLE_ENABLED && this.isEnabled && window.console.groupEnd();
    }
    logAs(_v0, _v1) {
      if (this.isEnabled) {
        let _v0 = new Date();
        _v1.IS_CONSOLE_ENABLED && window.console[_v0](`%c${_v0.toLocaleTimeString("en-GB")}:${_v0.getMilliseconds()} ${this.prefix}`, _v1.PREFIX_STYLE, ..._v1), _v1.IS_FILE_ENABLED && _v1.logInFile(`${_v0.toLocaleTimeString("en-GB")}:${_v0.getMilliseconds()} [${_v0}] ${this.prefix} ${_v1.map(_v0 => "object" == typeof _v0 ? JSON.stringify(_v0, this.getCircularReplacer()) : _v0).join(" ")}
`);
      }
    }
    getCircularReplacer(_v0 = "~circular~") {
      let _v1 = new WeakSet();
      return (_v0, _v1) => {
        if ("object" == typeof _v1 && null !== _v1) {
          if (_v1.has(_v1)) return _v0;
          _v1.add(_v1);
        }
        return _v1;
      };
    }
  }
  _v0.s(["Logger", 0, _v1]);
}