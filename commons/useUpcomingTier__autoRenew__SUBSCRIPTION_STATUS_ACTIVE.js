{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useUpcomingTier", 0, function () {
    let _v0 = (0, _v1.useContext)(_v5.ViewerContext),
      _v1 = !!_v0?.user,
      {
        data: _v2
      } = (0, _v2.useGetMeSubscriptions)(() => _v1 ? {
        select: ["id", "autoRenew"],
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE"
        }
      } : null),
      _v3 = _v2?.data?.[0]?.id,
      _v4 = void 0 === _v2 || _v2?.data?.[0]?.autoRenew,
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v3.useGetMeSubscriptionScheduledOrder)(() => _v3 ? {
        select: ["billingPeriod", "productName", "productId", "renewalDate"],
        where: {
          subscriptionId: _v3
        }
      } : null),
      _v7 = void 0 === _v2 || _v6;
    return _v5?.productName ? {
      tier: (0, _v4.normalizeTier)(_v5.productName),
      hasAutorenew: _v4,
      renewalDate: _v5.renewalDate,
      billingPeriod: _v5.billingPeriod,
      productId: _v5.productId,
      isLoading: _v7
    } : {
      tier: void 0,
      hasAutorenew: _v4,
      renewalDate: void 0,
      billingPeriod: void 0,
      productId: void 0,
      isLoading: _v7
    };
  }]);
}