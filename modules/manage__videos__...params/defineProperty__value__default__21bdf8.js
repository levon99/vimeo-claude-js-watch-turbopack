{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0);
  _v2.default = class {
    constructor(_v0) {
      this.sdkKey = _v0;
      try {
        const [, _v0] = _v0.split("."),
          _v1 = _v0 ?? null;
        this.decodedParams = _v1 ? new URLSearchParams(_v3.Base64.decode(_v1)) : null;
      } catch {
        this.decodedParams = null;
      }
    }
    getDecodedValue(_v0) {
      return this.decodedParams?.get(_v0) || null;
    }
    getEventIngestionHostname() {
      return this.getDecodedValue("eh");
    }
    getSubdomain() {
      return this.getDecodedValue("cs");
    }
    getToken() {
      return this.sdkKey;
    }
    isValid() {
      return !!this.decodedParams && (!!this.getEventIngestionHostname() || !!this.getSubdomain());
    }
  };
}