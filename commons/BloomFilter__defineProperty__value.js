{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "BloomFilter", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
  class _v3 {
    constructor(_v0, _v1 = 1e-4) {
      this.numItems = _v0, this.errorRate = _v1, this.numBits = Math.ceil(-(_v0 * Math.log(_v1)) / (Math.log(2) * Math.log(2))), this.numHashes = Math.ceil(this.numBits / _v0 * Math.log(2)), this.bitArray = Array(this.numBits).fill(0);
    }
    static from(_v0, _v1 = 1e-4) {
      let _v2 = new _v3(_v0.length, _v1);
      for (let _v0 of _v0) _v2.add(_v0);
      return _v2;
    }
    export() {
      return {
        numItems: this.numItems,
        errorRate: this.errorRate,
        numBits: this.numBits,
        numHashes: this.numHashes,
        bitArray: this.bitArray
      };
    }
    import(_v0) {
      this.numItems = _v0.numItems, this.errorRate = _v0.errorRate, this.numBits = _v0.numBits, this.numHashes = _v0.numHashes, this.bitArray = _v0.bitArray;
    }
    add(_v0) {
      this.getHashValues(_v0).forEach(_v0 => {
        this.bitArray[_v0] = 1;
      });
    }
    contains(_v0) {
      return this.getHashValues(_v0).every(_v0 => this.bitArray[_v0]);
    }
    getHashValues(_v0) {
      let _v1 = [];
      for (let _v0 = 1; _v0 <= this.numHashes; _v0++) {
        let _v0 = function (_v0) {
          let _v1 = 0;
          for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1 = Math.imul(_v1 ^ _v0.charCodeAt(_v0), 0), _v1 ^= _v1 >>> 13, _v1 = Math.imul(_v1, 0);
          return _v1 >>> 0;
        }(`${_v0}${_v0}`) % this.numBits;
        _v1.push(_v0);
      }
      return _v1;
    }
  }
}