{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  class _v5 {
    constructor(_v0) {
      this.name = _v0, this.eventKeys = [], this.localStorageKey = `eventQueue:${this.name}`, this.loadStateFromLocalStorage();
    }
    splice(_v0) {
      let _v1 = Array.from({
        length: _v0
      }, () => this.shift());
      return (0, _v4.takeWhile)(_v1, _v0 => void 0 !== _v0);
    }
    isEmpty() {
      return 0 === this.length;
    }
    get length() {
      return this.eventKeys.length;
    }
    push(_v0) {
      let _v1 = this.generateEventKey(_v0),
        _v2 = JSON.stringify(_v0);
      localStorage.setItem(_v1, _v2), this.eventKeys.push(_v1), this.saveStateToLocalStorage();
    }
    *[Symbol.iterator]() {
      for (let _v0 of this.eventKeys) {
        let _v0 = localStorage.getItem(_v0);
        _v0 && (yield JSON.parse(_v0));
      }
    }
    shift() {
      if (0 === this.eventKeys.length) return;
      let _v0 = this.eventKeys.shift();
      if (!_v0) throw Error("Unexpected undefined event key");
      let _v1 = localStorage.getItem(_v0);
      if (_v1) return localStorage.removeItem(_v0), this.saveStateToLocalStorage(), JSON.parse(_v1);
    }
    loadStateFromLocalStorage() {
      let _v0 = localStorage.getItem(this.localStorageKey);
      if (_v0) try {
        this.eventKeys = JSON.parse(_v0);
      } catch (_v0) {
        _v3.applicationLogger.error(`Failed to parse event queue ${this.name} state. Initializing empty queue.`), this.eventKeys = [];
      }
    }
    saveStateToLocalStorage() {
      let _v0 = JSON.stringify(this.eventKeys);
      localStorage.setItem(this.localStorageKey, _v0);
    }
    generateEventKey(_v0) {
      let _v1 = this.hashEvent(_v0);
      return `eventQueue:${this.name}:${_v1}`;
    }
    hashEvent(_v0) {
      let _v1 = JSON.stringify(_v0),
        _v2 = 0;
      for (let _v0 = 0; _v0 < _v1.length; _v0++) _v2 = (_v2 << 5) - _v2 + _v1.charCodeAt(_v0) | 0;
      return _v2.toString(36);
    }
  }
  _v2.default = _v5;
}