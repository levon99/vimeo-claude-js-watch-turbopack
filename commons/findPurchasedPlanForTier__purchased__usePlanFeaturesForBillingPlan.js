{
  "use strict";

  _v0.s(["findPurchasedPlanForTier", 0, (_v0, _v1) => {
    if (_v0 && void 0 !== _v1) return _v0.find(_v0 => _v0.tier === _v1 && _v0.metadata?.interactions?.purchase?.status === "purchased") ?? _v0.find(_v0 => _v0.tier === _v1);
  }], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["usePlanFeaturesForBillingPlan", 0, _v0 => {
    let _v1 = (0, _v1.useContext)(_v3.ViewerContext),
      {
        data: _v2
      } = (0, _v2.useGetMeSubscriptionProducts)(() => void 0 === _v0 || "" === _v0 || null == _v1 ? null : {
        select: ["plans"],
        query: {
          billingPlanId: _v0,
          country: _v1.location
        }
      }, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v3 = _v2?.data?.find(_v0 => _v0.plans?.annual?.id === _v0 || _v0.plans?.monthly?.id === _v0),
      _v4 = null != _v3 && _v3.plans?.annual?.id === _v0 ? _v3.plans.annual : _v3?.plans?.monthly;
    return _v4?.features ?? null;
  }], 0);
}