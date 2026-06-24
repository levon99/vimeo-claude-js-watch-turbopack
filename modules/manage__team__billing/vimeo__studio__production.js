{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    let _v1 = _v0?.toLowerCase().replace("vimeo ", "") ?? "";
    return "studio" === _v1 || "production" === _v1;
  }
  _v0.s(["isCorporateScheduledTier", 0, _v2, "useCorporateUpgradeModalState", 0, function (_v0) {
    let {
      scheduledOrder: _v1,
      hasScheduledDowngrade: _v2
    } = (0, _v1.useScheduledOrder)(_v0?.subscriptionId, _v0?.tier, _v0?.hasAutorenew);
    return {
      shouldRender: _v2 && _v2(_v1?.productName),
      productName: _v1?.productName ?? _v0?.tierForDisplay ?? ""
    };
  }]);
}