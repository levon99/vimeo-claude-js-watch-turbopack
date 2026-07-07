{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      pi_2026_storage_seat: "01KG096VQ3VBDVSPHGCF4JQS1F",
      pi_2026_legacy_plans: "01KG799DF3ZBKYB4MSGHKXAM4Z",
      rp_2026: "01KGEWQ5SAS6NW735YSBYK68XG",
      rp_2026_strict: "01KGPR56B56Z9H89TBNS98ASMT",
      rp_2026_low: "01KW9DH1F0FDGXW85ZBDYXYCRK",
      rp_2026_high: "01KW9DH1F0Z5XGAH2JCG9FWC4K"
    },
    _v4 = ["rp_2026", "rp_2026_strict", "rp_2026_low", "rp_2026_high"].map(_v0 => _v3[_v0]),
    _v5 = _v3.rp_2026_low;
  _v0.s(["REPACKAGING_CAMPAIGN_IDS", 0, _v4, "RP_2026_LOW_CAMPAIGN_ID", 0, _v5, "useCampaignIdOverride", 0, () => {
    var _v0;
    let {
        settings: _v1
      } = (0, _v2.useOrionSettings)(),
      _v2 = (0, _v1.useViewer)(),
      _v3 = _v1.campaign_id_override;
    return "pi_2026" === _v3 && (_v3 = ["basic", "plus", "pro", "pro_unlimited", "pro_custom", "business", "live_business", "live_pro", "live_premium"].includes(_v2?.teamUser?.accountType?.toString() ?? _v2?.user?.account?.toString() ?? "") ? "pi_2026_legacy_plans" : "pi_2026_storage_seat"), (_v0 = _v3) && "null" !== _v0 && _v3.hasOwnProperty(_v0) ? _v3[_v0] : null;
  }]);
}