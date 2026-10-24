{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = new Set(["free", "basic"]);
  function _v5(_v0) {
    return void 0 !== _v0 && _v4.has(_v0);
  }
  function _v6(_v0, _v1, _v2) {
    return !0 === _v0 || _v1 > 0 && _v5(_v2);
  }
  let _v7 = () => {
    let _v0 = (0, _v2.useViewer)(),
      {
        free_tier_unlisted_expiry_days: _v1,
        free_tier_unlisted_default: _v2
      } = (0, _v1.useOrionSettingsFields)(["free_tier_unlisted_expiry_days", "free_tier_unlisted_default"]);
    return {
      expiryDays: _v1,
      isDefault: _v2,
      isEligible: _v0?.user?.capabilities?.canUnlistVideo !== !0 && _v5(_v0?.user?.account)
    };
  };
  _v0.s(["FREE_TIER_UNLISTED_MAX_EXPIRY_DAYS", 0, 7, "resolveEffectiveCanUnlistVideo", 0, _v6, "useEffectiveCanUnlistVideo", 0, () => {
    let _v0 = (0, _v2.useViewer)(),
      {
        free_tier_unlisted_expiry_days: _v1
      } = (0, _v1.useOrionSettingsFields)(["free_tier_unlisted_expiry_days"]);
    return _v6(_v0?.user?.capabilities?.canUnlistVideo, _v1, _v0?.user?.account);
  }, "useFreeTierUnlistedGrantIntervalDays", 0, () => {
    let {
      isEligible: _v0,
      expiryDays: _v1
    } = _v7();
    return !_v0 || _v1 <= 0 ? null : Math.min(_v1, 7);
  }, "useFreeTierUnlistedSettings", 0, _v7, "useIsFreeTierUnlisted", 0, (_v0, _v1) => {
    let _v2 = (0, _v2.useViewer)(),
      _v3 = _v2?.user?.capabilities?.canUnlistVideo === !0;
    return (null == _v1 || _v1 === _v2?.user?.id) && !_v3 && _v5(_v2?.user?.account) && _v0 === _v3.DEFAULT_PRIVACY_VALUES.UNLISTED;
  }]);
}