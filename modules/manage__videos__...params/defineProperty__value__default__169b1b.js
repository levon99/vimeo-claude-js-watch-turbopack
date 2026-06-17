{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = class {
    constructor(_v0, _v1) {
      this.eventQueue = _v0, this.batchSize = Math.max(100, Math.min(0, _v1));
    }
    nextBatch() {
      return this.eventQueue.splice(this.batchSize);
    }
    push(..._v0) {
      this.eventQueue.push(..._v0);
    }
    isEmpty() {
      return this.eventQueue.isEmpty();
    }
  };
}