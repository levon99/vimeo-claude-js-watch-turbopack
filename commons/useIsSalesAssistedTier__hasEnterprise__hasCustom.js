{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useIsSalesAssistedTier", 0, function (_v0) {
    let {
      capabilities: _v1
    } = (0, _v1.useCapability)(["hasEnterprise", "hasCustom", "hasOttCustom"], _v0 ?? null);
    return !!(_v1.hasEnterprise || _v1.hasCustom || _v1.hasOttCustom);
  }]);
}