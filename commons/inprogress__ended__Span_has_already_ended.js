{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "default", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0)._(_v0.r(0));
  class _v4 {
    constructor(_v0, _v1, _v2) {
      this.name = _v0, this.attributes = _v1.attributes ?? {}, this.startTime = _v1.startTime ?? Date.now(), this.onSpanEnd = _v2, this.state = {
        state: "inprogress"
      };
    }
    end(_v0) {
      if ("ended" === this.state.state) throw Object.defineProperty(Error("Span has already ended"), "__NEXT_ERROR_CODE", {
        value: "E17",
        enumerable: !1,
        configurable: !0
      });
      this.state = {
        state: "ended",
        endTime: _v0 ?? Date.now()
      }, this.onSpanEnd(this);
    }
  }
  let _v5 = new class {
    startSpan(_v0, _v1) {
      return new _v4(_v0, _v1, this.handleSpanEnd);
    }
    onSpanEnd(_v0) {
      return this._emitter.on("spanend", _v0), () => {
        this._emitter.off("spanend", _v0);
      };
    }
    constructor() {
      this._emitter = (0, _v3.default)(), this.handleSpanEnd = _v0 => {
        this._emitter.emit("spanend", _v0);
      };
    }
  }();
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}