{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  class _v4 {
    log = new _v2.Logger("🔂BFR");
    bufferName;
    buffer;
    onUpdate = _v3.CallablePlaceholder;
    constructor(_v0) {
      this.bufferName = _v0.name, this.buffer = _v0.initialValue, _v0.onUpdate && (this.onUpdate = (0, _v1.default)(() => _v0.onUpdate(this.buffer), _v0.throttleDelay)), this.log.info("Init buffer:", this.bufferName, this.buffer);
    }
    get name() {
      return this.bufferName;
    }
    getValue() {
      return this.buffer;
    }
    setValue(_v0) {
      this.buffer = _v0, this.onUpdate();
    }
    updateValue(_v0) {
      this.buffer = {
        ...this.buffer,
        ..._v0
      }, this.onUpdate();
    }
    resetValue() {
      this.buffer = {}, this.onUpdate();
    }
    dispose() {
      this.log.info("Dispose buffer:", this.bufferName), this.bufferName = "", this.buffer = {}, this.onUpdate = _v3.CallablePlaceholder;
    }
  }
  _v0.s(["InMemoryBuffer", 0, _v4]);
}