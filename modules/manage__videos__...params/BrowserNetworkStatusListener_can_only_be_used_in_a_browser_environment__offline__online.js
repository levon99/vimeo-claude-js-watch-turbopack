{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = class {
    constructor() {
      if (this.listeners = [], this.debounceTimer = null, "u" < typeof window) throw Error("BrowserNetworkStatusListener can only be used in a browser environment");
      this._isOffline = "boolean" == typeof navigator.onLine && !navigator.onLine, window.addEventListener("offline", () => this.notifyListeners(!0)), window.addEventListener("online", () => this.notifyListeners(!1));
    }
    isOffline() {
      return this._isOffline;
    }
    onNetworkStatusChange(_v0) {
      this.listeners.push(_v0);
    }
    removeNetworkStatusChange(_v0) {
      let _v1 = this.listeners.indexOf(_v0);
      -1 !== _v1 && this.listeners.splice(_v1, 1);
    }
    notifyListeners(_v0) {
      this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(() => {
        this._isOffline = _v0, [...this.listeners].forEach(_v0 => _v0(_v0));
      }, 200);
    }
  };
}