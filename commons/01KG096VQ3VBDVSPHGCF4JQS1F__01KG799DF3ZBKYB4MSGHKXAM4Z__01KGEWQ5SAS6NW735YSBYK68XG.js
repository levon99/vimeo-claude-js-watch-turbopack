{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
      pi_2026_storage_seat: "01KG096VQ3VBDVSPHGCF4JQS1F",
      pi_2026_legacy_plans: "01KG799DF3ZBKYB4MSGHKXAM4Z",
      rp_2026: "01KGEWQ5SAS6NW735YSBYK68XG",
      rp_2026_strict: "01KGPR56B56Z9H89TBNS98ASMT",
      rp_2026_low: "01KW9DH1F0FDGXW85ZBDYXYCRK",
      rp_2026_high: "01KW9DH1F0Z5XGAH2JCG9FWC4K",
      rp_2026_oct_rollout: "01M4WTDVF8PGHG3XH1Q4R07RW9"
    },
    _v8 = ["rp_2026", "rp_2026_strict", "rp_2026_low", "rp_2026_high", "rp_2026_oct_rollout"].map(_v0 => _v7[_v0]),
    _v9 = _v7.rp_2026_low,
    _v10 = _v7.rp_2026_high,
    _v11 = _v7.rp_2026_oct_rollout,
    _v12 = _v0 => _v0 && "null" !== _v0 && _v7.hasOwnProperty(_v0) ? _v7[_v0] : null,
    _v13 = () => {
      let _v0 = (0, _v6.useOrionSetting)("campaign_id_override_top_priority"),
        _v1 = (0, _v6.useOrionSetting)("campaign_id_override"),
        _v2 = (0, _v4.useViewer)(),
        _v3 = _v12(_v0);
      if (_v3) return _v3;
      let _v4 = _v1;
      return "pi_2026" === _v4 && (_v4 = _v14(_v2?.teamUser?.accountType?.toString() ?? _v2?.user?.account?.toString() ?? "") ? "pi_2026_legacy_plans" : "pi_2026_storage_seat"), _v12(_v4);
    },
    _v14 = _v0 => ["basic", "plus", "pro", "pro_unlimited", "pro_custom", "business", "live_business", "live_pro", "live_premium"].includes(_v0);
  _v0.s(["REPACKAGING_CAMPAIGN_IDS", 0, _v8, "RP_2026_HIGH_CAMPAIGN_ID", 0, _v10, "RP_2026_LOW_CAMPAIGN_ID", 0, _v9, "RP_2026_OCT_ROLLOUT_CAMPAIGN_ID", 0, _v11, "useCampaignIdOverride", 0, () => {
    let _v0 = _v13(),
      _v1 = (0, _v4.useViewer)(),
      {
        isInRepackModel: _v2,
        showLegacyPlans: _v3,
        isRepackFree: _v4,
        isRepackFreeWithoutHistory: _v5,
        isLoading: _v6
      } = (0, _v2.useRepackagingGate)(),
      _v7 = (0, _v5.useOrionLoading)() || _v6,
      _v8 = _v4 && !_v1?.teamUser?.hasPaid;
    if (_v7 || _v3) return {
      campaignId: null,
      isLoading: _v7,
      showLegacyPlans: _v3
    };
    if (_v0) return {
      campaignId: _v0,
      isLoading: !1,
      showLegacyPlans: _v3
    };
    if (_v5) return {
      campaignId: null,
      isLoading: !1,
      showLegacyPlans: _v3
    };
    if (_v8) return {
      campaignId: _v11,
      isLoading: !1,
      showLegacyPlans: _v3
    };
    let _v9 = _v1?.teamUser?.accountType?.toString() ?? _v1?.user?.account?.toString() ?? "";
    return !_v2 || _v1?.teamUser?.hasPaid || _v3.REPACKAGED_TIERS.includes(_v9) ? {
      campaignId: null,
      isLoading: !1,
      showLegacyPlans: _v3
    } : {
      campaignId: _v11,
      isLoading: !1,
      showLegacyPlans: _v3
    };
  }, "useIsRepackFreeWithRepackagingCampaign", 0, () => {
    let {
        isRepackagedFree: _v0
      } = (0, _v1.useIsRepackagedFree)(),
      _v1 = _v13();
    return _v0 && null !== _v1 && _v8.includes(_v1);
  }]);
}