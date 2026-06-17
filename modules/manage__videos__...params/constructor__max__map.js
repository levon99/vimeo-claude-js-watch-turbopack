{
  "use strict";

  _v1.exports = class {
    constructor() {
      this.max = 0, this.map = new Map();
    }
    get(_v0) {
      let _v1 = this.map.get(_v0);
      if (void 0 !== _v1) return this.map.delete(_v0), this.map.set(_v0, _v1), _v1;
    }
    delete(_v0) {
      return this.map.delete(_v0);
    }
    set(_v0, _v1) {
      if (!this.delete(_v0) && void 0 !== _v1) {
        if (this.map.size >= this.max) {
          let _v0 = this.map.keys().next().value;
          this.delete(_v0);
        }
        this.map.set(_v0, _v1);
      }
      return this;
    }
  };
}