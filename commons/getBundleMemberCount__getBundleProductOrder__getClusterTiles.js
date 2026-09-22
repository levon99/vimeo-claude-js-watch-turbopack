{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => _v1.BUNDLE_PRODUCT_ORDER[_v0];
  _v0.s(["getBundleMemberCount", 0, () => _v1.BUNDLE_PRODUCT_IDS.length, "getBundleProductOrder", 0, _v2, "getClusterTiles", 0, _v0 => _v2(_v0).slice(0, 4).map(_v0 => ({
    productId: _v0
  })), "getOtherProductsCount", 0, () => {
    let _v0 = _v1.BUNDLE_PRODUCT_IDS.length - 4;
    return _v0 > 0 ? _v0 : void 0;
  }]);
}