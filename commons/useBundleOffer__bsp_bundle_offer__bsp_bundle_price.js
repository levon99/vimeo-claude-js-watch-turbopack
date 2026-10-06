{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useBundleOffer", 0, () => {
    let {
      bsp_bundle_offer: _v0,
      bsp_bundle_price: _v1,
      bsp_bundle_triggers: _v2
    } = (0, _v2.useOrionSettingsFields)(["bsp_bundle_offer", "bsp_bundle_price", "bsp_bundle_triggers"]);
    return (0, _v1.useMemo)(() => {
      var _v0;
      let _v1, _v2, _v3;
      return (_v1 = (_v0 = {
        bsp_bundle_offer: _v0,
        bsp_bundle_price: _v1,
        bsp_bundle_triggers: _v2
      }).bsp_bundle_offer, _v4.BUNDLE_TYPES.some(_v0 => _v0 === _v1)) ? {
        status: "enabled",
        bundleType: _v0.bsp_bundle_offer,
        price: (_v2 = _v0.bsp_bundle_price, _v3.BUNDLE_PRICE_TIERS.some(_v0 => _v0 === _v2)) ? _v0.bsp_bundle_price : "free",
        triggers: Array.isArray(_v3 = _v0.bsp_bundle_triggers) ? _v3.filter(_v0 => _v3.BUNDLE_TRIGGERS.some(_v0 => _v0 === _v0)) : []
      } : {
        status: "disabled"
      };
    }, [_v0, _v1, _v2]);
  }], 0);
}