{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.OverrideValidator = _v2.sendValidationRequest = void 0;
  let _v3 = _v0.r(0);
  _v2.sendValidationRequest = async _v0 => {
    let _v1 = await fetch("https://eppo.cloud/api/flag-overrides/v1/validate-key", {
      method: "POST",
      body: JSON.stringify({
        key: _v0
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (200 !== _v1.status) throw Error(`Unable to authorize key: ${_v1.statusText}`);
  }, _v2.OverrideValidator = class {
    constructor() {
      this.validKeyCache = new _v3.TLRUCache(100, 0);
    }
    parseOverridePayload(_v0) {
      try {
        let _v0 = JSON.parse(_v0);
        return this.validateParsedOverridePayload(_v0), _v0;
      } catch (_v0) {
        let _v1;
        throw Error((_v1 = _v0?.message ?? "unknown error", `Unable to parse overridePayload: ${_v1}`));
      }
    }
    validateParsedOverridePayload(_v0) {
      if ("object" != typeof _v0) throw Error(`Expected object, but received ${typeof _v0}`);
      let _v1 = Object.keys(_v0);
      if (!_v1.includes("browserExtensionKey")) throw Error("Missing required field: 'browserExtensionKey'");
      if (!_v1.includes("overrides")) throw Error("Missing required field: 'overrides'");
      if ("string" != typeof _v0.browserExtensionKey) throw Error(`Invalid type for 'browserExtensionKey'. Expected string, but received ${typeof _v0.browserExtensionKey}`);
      if ("object" != typeof _v0.overrides) throw Error(`Invalid type for 'overrides'. Expected object, but received ${typeof _v0.overrides}.`);
    }
    async validateKey(_v0) {
      if ("true" === this.validKeyCache.get(_v0)) return !0;
      await (0, _v2.sendValidationRequest)(_v0), this.validKeyCache.set(_v0, "true");
    }
  };
}