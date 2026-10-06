{
  "use strict";

  var _v1 = _v0.i(0);
  class _v2 extends _v1.ContextManager {
    eventUnSubscribers = [];
    addUnSubscribers(_v0, _v1) {
      _v1 ? this.eventUnSubscribers = this.eventUnSubscribers.concat(_v0.map(_v0 => [_v1, _v0])) : this.eventUnSubscribers = this.eventUnSubscribers.concat(_v0);
    }
    disposeSubscribers(_v0) {
      _v0 ? this.eventUnSubscribers = this.eventUnSubscribers.filter(_v0 => !Array.isArray(_v0) || _v0[0] !== _v0 || (_v0[1](), !1)) : (this.eventUnSubscribers.forEach(_v0 => Array.isArray(_v0) ? _v0[1]() : _v0()), this.eventUnSubscribers = []);
    }
    onProvisionEnded() {
      this.disposeSubscribers();
    }
  }
  _v0.s(["UnsubscribingContextManager", 0, _v2]);
}