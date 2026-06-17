{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ConfigurationWireHelper = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  class _v7 {
    static build(_v0, _v1 = {
      sdkName: "js-client-sdk",
      sdkVersion: "4.0.0"
    }) {
      let {
        sdkName: _v2,
        sdkVersion: _v3,
        baseUrl: _v4,
        fetchBandits: _v5
      } = _v1;
      return new _v7(_v0, _v2, _v3, _v4, _v5);
    }
    constructor(_v0, _v1 = "js-client-sdk", _v2 = "4.0.0", _v3, _v4 = !1) {
      this.fetchBandits = _v4;
      const _v5 = new _v3.default({
        baseUrl: _v3,
        queryParams: {
          sdkName: _v1,
          sdkVersion: _v2,
          apiKey: _v0,
          sdkProxy: "config-wire-helper"
        },
        sdkTokenDecoder: new _v5.default(_v0)
      });
      this.httpClient = new _v4.default(_v5, 0);
    }
    async fetchConfiguration() {
      let _v0,
        _v1 = await this.httpClient.getUniversalFlagConfiguration();
      if (!_v1?.flags) return console.warn("Unable to fetch configuration, returning empty configuration"), Promise.resolve(_v6.ConfigurationWireV1.empty());
      let _v2 = Object.keys(_v1.banditReferences ?? {}).length > 0;
      return this.fetchBandits && _v2 && (_v0 = await this.httpClient.getBanditParameters()), _v6.ConfigurationWireV1.fromResponses(_v1, _v0);
    }
  }
  _v2.ConfigurationWireHelper = _v7;
}