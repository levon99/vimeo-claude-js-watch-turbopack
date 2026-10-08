{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = () => {
    let _v0 = (0, _v1.useViewer)();
    return {
      isRepackagedFree: _v0?.user?.productId === 0,
      isLoading: !1
    };
  };
  _v0.s(["useIsRepackagedFree", 0, _v2], 0);
  var _v3 = _v0.i(0);
  let _v4 = {
      pi_2026_storage_seat: "01KG096VQ3VBDVSPHGCF4JQS1F",
      pi_2026_legacy_plans: "01KG799DF3ZBKYB4MSGHKXAM4Z",
      rp_2026: "01KGEWQ5SAS6NW735YSBYK68XG",
      rp_2026_strict: "01KGPR56B56Z9H89TBNS98ASMT",
      rp_2026_low: "01KW9DH1F0FDGXW85ZBDYXYCRK",
      rp_2026_high: "01KW9DH1F0Z5XGAH2JCG9FWC4K"
    },
    _v5 = ["rp_2026", "rp_2026_strict", "rp_2026_low", "rp_2026_high"].map(_v0 => _v4[_v0]),
    _v6 = _v4.rp_2026_low,
    _v7 = _v4.rp_2026_high,
    _v8 = _v0 => _v0 && "null" !== _v0 && _v4.hasOwnProperty(_v0) ? _v4[_v0] : null,
    _v9 = () => {
      let _v0 = (0, _v3.useOrionSetting)("campaign_id_override_top_priority"),
        _v1 = (0, _v3.useOrionSetting)("campaign_id_override"),
        _v2 = (0, _v1.useViewer)(),
        _v3 = _v8(_v0);
      if (_v3) return _v3;
      let _v4 = _v1;
      return "pi_2026" === _v4 && (_v4 = _v10(_v2?.teamUser?.accountType?.toString() ?? _v2?.user?.account?.toString() ?? "") ? "pi_2026_legacy_plans" : "pi_2026_storage_seat"), _v8(_v4);
    },
    _v10 = _v0 => ["basic", "plus", "pro", "pro_unlimited", "pro_custom", "business", "live_business", "live_pro", "live_premium"].includes(_v0);
  _v0.s(["REPACKAGING_CAMPAIGN_IDS", 0, _v5, "RP_2026_HIGH_CAMPAIGN_ID", 0, _v7, "RP_2026_LOW_CAMPAIGN_ID", 0, _v6, "useCampaignIdOverride", 0, _v9, "useIsRepackFreeWithRepackagingCampaign", 0, () => {
    let {
        isRepackagedFree: _v0
      } = _v2(),
      _v1 = _v9();
    return _v0 && null !== _v1 && _v5.includes(_v1);
  }], 0);
}