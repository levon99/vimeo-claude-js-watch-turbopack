{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.BoundedEventQueue = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  class _v5 {
    constructor(_v0, _v1 = [], _v2 = _v4.MAX_EVENT_QUEUE_SIZE) {
      this.name = _v0, this.queue = _v1, this.maxSize = _v2;
    }
    get length() {
      return this.queue.length;
    }
    splice(_v0) {
      return this.queue.splice(0, _v0);
    }
    isEmpty() {
      return 0 === this.queue.length;
    }
    [Symbol.iterator]() {
      return this.queue[Symbol.iterator]();
    }
    push(..._v0) {
      let {
        name: _v1,
        maxSize: _v2,
        queue: _v3
      } = this;
      for (; _v3.length < _v2 && _v0.length > 0;) _v3.push(..._v0.splice(0, 1));
      _v0.length > 0 && _v3.logger.warn(`Dropping ${_v0.length} events for queue ${_v1} since maxSize of ${_v2} reached.`);
    }
    flush() {
      let _v0 = [...this.queue];
      return this.queue.length = 0, _v0;
    }
  }
  _v2.BoundedEventQueue = _v5;
}