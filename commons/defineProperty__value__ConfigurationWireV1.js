{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ConfigurationWireV1 = _v2.ObfuscatedPrecomputedConfigurationResponse = _v2.PrecomputedConfigurationResponse = _v2.PrecomputedConfiguration = void 0, _v2.inflateResponse = function (_v0) {
    return JSON.parse(_v0);
  }, _v2.deflateResponse = _v9;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  class _v5 {
    constructor(_v0, _v1, _v2) {
      this.subjectKey = _v0, this.subjectAttributes = _v1, this.environment = _v2, this.format = _v3.FormatEnum.PRECOMPUTED, this.createdAt = new Date().toISOString();
    }
  }
  class _v6 {
    constructor(_v0, _v1, _v2) {
      this.response = _v0, this.subjectKey = _v1, this.subjectAttributes = _v2;
    }
    static obfuscated(_v0, _v1, _v2, _v3, _v4, _v5) {
      return new _v6(JSON.stringify(new _v8(_v0, _v1, _v2, _v3, _v4, _v5)), _v0, _v4);
    }
    static unobfuscated(_v0, _v1, _v2, _v3, _v4) {
      return new _v6(JSON.stringify(new _v7(_v0, _v1, _v2, _v3, _v4)), _v0, _v3);
    }
  }
  _v2.PrecomputedConfiguration = _v6;
  class _v7 extends _v5 {
    constructor(_v0, _v1, _v2, _v3, _v4) {
      super(_v0, _v3, _v4), this.flags = _v1, this.bandits = _v2, this.obfuscated = !1;
    }
  }
  _v2.PrecomputedConfigurationResponse = _v7;
  class _v8 extends _v5 {
    constructor(_v0, _v1, _v2, _v3, _v4, _v5) {
      super(_v0, _v4, _v5), this.obfuscated = !0, this.salt = _v3, this.bandits = (0, _v4.obfuscatePrecomputedBanditMap)(this.salt, _v2), this.flags = (0, _v4.obfuscatePrecomputedFlags)(this.salt, _v1);
    }
  }
  function _v9(_v0) {
    return JSON.stringify(_v0);
  }
  _v2.ObfuscatedPrecomputedConfigurationResponse = _v8;
  class _v10 {
    constructor(_v0, _v1, _v2) {
      this.precomputed = _v0, this.config = _v1, this.bandits = _v2, this.version = 1;
    }
    toString() {
      return JSON.stringify(this);
    }
    static fromResponses(_v0, _v1, _v2, _v3) {
      return new _v10(void 0, {
        response: _v9(_v0),
        fetchedAt: new Date().toISOString(),
        etag: _v2
      }, _v1 ? {
        response: _v9(_v1),
        fetchedAt: new Date().toISOString(),
        etag: _v3
      } : void 0);
    }
    static precomputed(_v0) {
      return new _v10(_v0);
    }
    static empty() {
      return new _v10();
    }
  }
  _v2.ConfigurationWireV1 = _v10;
}