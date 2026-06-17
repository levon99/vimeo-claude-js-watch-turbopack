{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.StoreBackedConfiguration = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.StoreBackedConfiguration = class {
    constructor(_v0, _v1, _v2) {
      this.flagConfigurationStore = _v0, this.banditVariationConfigurationStore = _v1, this.banditModelConfigurationStore = _v2;
    }
    async hydrateConfigurationStores(_v0, _v1, _v2) {
      let _v3 = await (0, _v3.hydrateConfigurationStore)(this.flagConfigurationStore, _v0),
        _v4 = [];
      return this.banditVariationConfigurationStore && _v1 && _v4.push((0, _v3.hydrateConfigurationStore)(this.banditVariationConfigurationStore, _v1)), this.banditModelConfigurationStore && _v2 && _v4.push((0, _v3.hydrateConfigurationStore)(this.banditModelConfigurationStore, _v2)), await Promise.all(_v4), _v3;
    }
    getBandit(_v0) {
      return this.banditModelConfigurationStore?.get(_v0) ?? null;
    }
    getFlagVariationBandit(_v0, _v1) {
      let _v2 = this.banditVariationConfigurationStore?.get(_v0),
        _v3 = _v2?.find(_v0 => _v0.variationValue === _v1)?.key;
      return _v3 ? this.getBandit(_v3) : null;
    }
    getFlag(_v0) {
      return this.flagConfigurationStore.get(_v0) ?? null;
    }
    getFlagConfigDetails() {
      return {
        configFetchedAt: this.flagConfigurationStore.getConfigFetchedAt() ?? "",
        configPublishedAt: this.flagConfigurationStore.getConfigPublishedAt() ?? "",
        configEnvironment: this.flagConfigurationStore.getEnvironment() ?? {
          name: ""
        },
        configFormat: this.flagConfigurationStore.getFormat() ?? ""
      };
    }
    getFlagBanditVariations(_v0) {
      return this.banditVariationConfigurationStore?.get(_v0) ?? [];
    }
    getFlagKeys() {
      return this.flagConfigurationStore.getKeys();
    }
    getFlags() {
      return this.flagConfigurationStore.entries();
    }
    isObfuscated() {
      return _v4.OBFUSCATED_FORMATS.includes(this.getFlagConfigDetails().configFormat ?? "SERVER");
    }
    isInitialized() {
      return this.flagConfigurationStore.isInitialized() && (!this.banditVariationConfigurationStore || this.banditVariationConfigurationStore.isInitialized()) && (!this.banditModelConfigurationStore || this.banditModelConfigurationStore.isInitialized());
    }
    getBandits() {
      return this.banditModelConfigurationStore?.entries() ?? {};
    }
    getBanditVariations() {
      return this.banditVariationConfigurationStore?.entries() ?? {};
    }
  };
}