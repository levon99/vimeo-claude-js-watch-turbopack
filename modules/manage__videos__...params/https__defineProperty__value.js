{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  class _v5 {
    constructor(_v0) {
      this.params = Object.assign({}, {
        defaultUrl: _v3.BASE_URL
      }, _v0), this.sdkToken = _v0.sdkTokenDecoder ?? null, this._effectiveBaseUrl = this.determineBaseUrl();
    }
    static createEventIngestionUrl(_v0) {
      return new _v5({
        sdkTokenDecoder: new _v4.default(_v0)
      }).eventIngestionEndpoint();
    }
    normalizeUrl(_v0, _v1 = "https://") {
      return _v0.match(/^(https?:\/\/|\/\/)/i) ? _v0 : `${_v1}${_v0}`;
    }
    joinUrlParts(..._v0) {
      return _v0.map(_v0 => _v0.trim()).map((_v0, _v1) => 0 === _v1 ? _v0.replace(/\/+$/, "") : _v0.replace(/^\/+|\/+$/g, "")).join("/");
    }
    determineBaseUrl() {
      if (this.params.baseUrl && this.params.baseUrl !== this.params.defaultUrl) return this.normalizeUrl(this.params.baseUrl);
      let _v0 = this.sdkToken?.getSubdomain();
      if (_v0 && this.sdkToken?.isValid()) {
        let _v0 = this.params.defaultUrl.replace(/^(https?:\/\/|\/\/)/, "");
        return this.normalizeUrl(`${_v0}.${_v0}`);
      }
      return this.normalizeUrl(this.params.defaultUrl);
    }
    endpoint(_v0) {
      let _v1 = this.joinUrlParts(this._effectiveBaseUrl, _v0),
        _v2 = this.params.queryParams;
      if (!_v2) return _v1;
      let _v3 = new URLSearchParams();
      return Object.entries(_v2).forEach(([_v0, _v1]) => _v3.append(_v0, _v1)), `${_v1}?${_v3}`;
    }
    ufcEndpoint() {
      return this.endpoint(_v3.UFC_ENDPOINT);
    }
    banditParametersEndpoint() {
      return this.endpoint(_v3.BANDIT_ENDPOINT);
    }
    precomputedFlagsEndpoint() {
      return this.endpoint(_v3.PRECOMPUTED_FLAGS_ENDPOINT);
    }
    eventIngestionEndpoint() {
      if (!this.sdkToken?.isValid()) return null;
      let _v0 = this.sdkToken.getEventIngestionHostname(),
        _v1 = this.sdkToken.getSubdomain();
      return _v0 || _v1 ? _v0 ? this.normalizeUrl(this.joinUrlParts(_v0, _v3.EVENT_ENDPOINT)) : _v1 ? this.normalizeUrl(this.joinUrlParts(`${_v1}.${_v3.DEFAULT_EVENT_DOMAIN}`, _v3.EVENT_ENDPOINT)) : null : null;
    }
  }
  _v2.default = _v5;
}