{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0);
  _v2.default = class {
    constructor(_v0, _v1, _v2, _v3) {
      this.httpClient = _v0, this.flagConfigurationStore = _v1, this.banditVariationConfigurationStore = _v2, this.banditModelConfigurationStore = _v3, this.banditModelVersions = [], this.configuration = new _v3.StoreBackedConfiguration(this.flagConfigurationStore, this.banditVariationConfigurationStore, this.banditModelConfigurationStore);
    }
    setConfigurationStores(_v0, _v1, _v2) {
      this.flagConfigurationStore = _v0, this.banditVariationConfigurationStore = _v1, this.banditModelConfigurationStore = _v2, this.configuration = new _v3.StoreBackedConfiguration(this.flagConfigurationStore, this.banditVariationConfigurationStore, this.banditModelConfigurationStore);
    }
    isFlagConfigExpired() {
      return this.flagConfigurationStore.isExpired();
    }
    getConfiguration() {
      return this.configuration;
    }
    async fetchAndStoreConfigurations() {
      let _v0,
        _v1,
        _v2 = await this.httpClient.getUniversalFlagConfiguration();
      if (!_v2?.flags) return;
      let _v3 = {
          entries: _v2.flags,
          environment: _v2.environment,
          createdAt: _v2.createdAt,
          format: _v2.format
        },
        _v4 = Object.keys(_v2.banditReferences ?? {}).length > 0,
        _v5 = !!(this.banditVariationConfigurationStore && this.banditModelConfigurationStore);
      if (_v4 && _v5 && (_v0 = {
        entries: this.indexBanditVariationsByFlagKey(_v2.banditReferences),
        environment: _v2.environment,
        createdAt: _v2.createdAt,
        format: _v2.format
      }, this.requiresBanditModelConfigurationStoreUpdate(this.banditModelVersions, _v2.banditReferences))) {
        let _v0 = await this.httpClient.getBanditParameters();
        _v0?.bandits && (_v1 = {
          entries: _v0.bandits,
          environment: _v2.environment,
          createdAt: _v2.createdAt,
          format: _v2.format
        }, this.banditModelVersions = this.getLoadedBanditModelVersions(_v0.bandits));
      }
      await this.configuration.hydrateConfigurationStores(_v3, _v0, _v1);
    }
    getLoadedBanditModelVersions(_v0) {
      return Object.values(_v0).map(_v0 => _v0.modelVersion);
    }
    requiresBanditModelConfigurationStoreUpdate(_v0, _v1) {
      return !Object.values(_v1).map(_v0 => _v0.modelVersion).every(_v0 => _v0.includes(_v0));
    }
    indexBanditVariationsByFlagKey(_v0) {
      let _v1 = {};
      return Object.values(_v0).forEach(_v0 => {
        _v0.flagVariations.forEach(_v0 => {
          let _v1 = _v1[_v0.flagKey];
          _v1 || (_v1 = [], _v1[_v0.flagKey] = _v1), _v1.push(_v0);
        });
      }), _v1;
    }
  };
}