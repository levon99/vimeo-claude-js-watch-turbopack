{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.HttpRequestError = void 0;
  class _v3 extends Error {
    constructor(_v0, _v1, _v2) {
      super(_v0), this.message = _v0, this.status = _v1, this.cause = _v2, _v2 && (this.cause = _v2);
    }
  }
  _v2.HttpRequestError = _v3, _v2.default = class {
    constructor(_v0, _v1) {
      this.apiEndpoints = _v0, this.timeout = _v1;
    }
    async getUniversalFlagConfiguration() {
      let _v0 = this.apiEndpoints.ufcEndpoint();
      return await this.rawGet(_v0);
    }
    async getBanditParameters() {
      let _v0 = this.apiEndpoints.banditParametersEndpoint();
      return await this.rawGet(_v0);
    }
    async getPrecomputedFlags(_v0) {
      let _v1 = this.apiEndpoints.precomputedFlagsEndpoint();
      return await this.rawPost(_v1, _v0);
    }
    async rawGet(_v0) {
      try {
        let _v0 = new AbortController(),
          _v1 = _v0.signal,
          _v2 = setTimeout(() => _v0.abort(), this.timeout),
          _v3 = await fetch(_v0, {
            signal: _v1
          });
        if (clearTimeout(_v2), !_v3?.ok) throw new _v3("Failed to fetch data", _v3?.status);
        return await _v3.json();
      } catch (_v0) {
        if ("AbortError" === _v0.name) throw new _v3("Request timed out", 408, _v0);
        if (_v0 instanceof _v3) throw _v0;
        throw new _v3("Network error", 0, _v0);
      }
    }
    async rawPost(_v0, _v1) {
      try {
        let _v0 = new AbortController(),
          _v1 = _v0.signal,
          _v2 = setTimeout(() => _v0.abort(), this.timeout),
          _v3 = await fetch(_v0, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(_v1),
            signal: _v1
          });
        if (clearTimeout(_v2), !_v3?.ok) {
          let _v0 = await _v3.text();
          throw new _v3(_v0 || "Failed to post data", _v3?.status);
        }
        return await _v3.json();
      } catch (_v0) {
        if ("AbortError" === _v0.name) throw new _v3("Request timed out", 408, _v0);
        if (_v0 instanceof _v3) throw _v0;
        throw new _v3("Network error", 0, _v0);
      }
    }
  };
}