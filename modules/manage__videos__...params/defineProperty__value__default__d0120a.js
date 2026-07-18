{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.default = class {
    constructor(_v0, _v1, _v2, _v3, _v4, _v5) {
      this.httpClient = _v0, this.precomputedFlagStore = _v1, this.subjectKey = _v2, this.subjectAttributes = _v3, this.precomputedBanditsStore = _v4, this.banditActions = _v5;
    }
    async fetchAndStorePrecomputedFlags() {
      let _v0 = await this.httpClient.getPrecomputedFlags({
        subject_key: this.subjectKey,
        subject_attributes: this.subjectAttributes,
        bandit_actions: this.banditActions
      });
      if (!_v0) return;
      let _v1 = [];
      _v1.push((0, _v3.hydrateConfigurationStore)(this.precomputedFlagStore, {
        entries: _v0.flags,
        environment: _v0.environment ?? {
          name: _v4.UNKNOWN_ENVIRONMENT_NAME
        },
        createdAt: _v0.createdAt,
        format: _v0.format,
        salt: _v0.salt
      })), this.precomputedBanditsStore && _v1.push((0, _v3.hydrateConfigurationStore)(this.precomputedBanditsStore, {
        entries: _v0.bandits,
        environment: _v0.environment ?? {
          name: _v4.UNKNOWN_ENVIRONMENT_NAME
        },
        createdAt: _v0.createdAt,
        format: _v0.format,
        salt: _v0.salt
      })), await Promise.all(_v1);
    }
  };
}