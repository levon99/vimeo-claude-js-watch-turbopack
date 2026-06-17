{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ChromeStorageEngine = void 0;
  let _v3 = _v0.r(0);
  _v2.ChromeStorageEngine = class {
    constructor(_v0, _v1) {
      this.storageMap = _v0, this.getContentsJsonString = async () => {
        let _v0 = await this.storageMap.get(this.contentsKey);
        return null != _v0 ? _v0 : null;
      }, this.getMetaJsonString = async () => {
        let _v0 = await this.storageMap.get(this.metaKey);
        return null != _v0 ? _v0 : null;
      }, this.setContentsJsonString = async _v0 => {
        await this.storageMap.set(this.contentsKey, _v0);
      }, this.setMetaJsonString = async _v0 => {
        await this.storageMap.set(this.metaKey, _v0);
      };
      const _v2 = _v1 ? `-${_v1}` : "";
      this.contentsKey = _v3.CONFIGURATION_KEY + _v2, this.metaKey = _v3.META_KEY + _v2;
    }
  };
}