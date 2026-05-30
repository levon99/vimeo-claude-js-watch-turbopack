{
  "use strict";

  let _v1 = Symbol("store"),
    _v2 = Symbol("listeners");
  class _v3 {
    [_v1] = new Map();
    [_v2] = {};
    maxSize;
    constructor({
      maxSize: _v0
    } = {
      maxSize: 0
    }) {
      this.maxSize = _v0;
    }
    set(_v0, _v1) {
      if (0 !== this.maxSize) {
        if (this[_v1].has(_v0)) {
          this[_v1].delete(_v0), this[_v1].set(_v0, _v1), this.notifyListeners(_v0, _v1);
          return;
        }
        if (this[_v1].size >= this.maxSize) {
          let _v0 = this[_v1].keys().next().value;
          this[_v1].delete(_v0);
        }
        this.notifyListeners(_v0, _v1), this[_v1].set(_v0, _v1);
      }
    }
    get(_v0) {
      let _v1 = this[_v1].get(_v0);
      return _v1 && (this[_v1].delete(_v0), this[_v1].set(_v0, _v1)), _v1;
    }
    delete(_v0) {
      let _v1 = this[_v1].get(_v0);
      return _v1 && (this[_v1].delete(_v0), this.notifyListeners(_v0)), _v1;
    }
    size() {
      return this[_v1].size;
    }
    subscribeToKey(_v0, _v1) {
      let _v2 = this[_v2][_v0] || [];
      return this[_v2][_v0] = [..._v2, _v1], () => {
        this[_v2][_v0] = this[_v2][_v0].filter(_v0 => _v0 !== _v1);
      };
    }
    notifyListeners(_v0, _v1) {
      let _v2 = this[_v2][_v0];
      _v2 && _v2.forEach(_v0 => _v0(_v1));
    }
  }
  _v0.s(["Cache", 0, _v3]);
}