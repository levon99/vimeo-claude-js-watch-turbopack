{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    return _v0?.trim().toLowerCase().replace(/^vimeo\s+/, "").replace(/\s+/g, "_");
  }
  _v0.s(["useScheduledOrder", 0, function (_v0, _v1, _v2) {
    let {
        data: _v3,
        isLoading: _v4,
        error: _v5,
        mutate: _v6
      } = (0, _v1.useGetMeSubscriptionScheduledOrder)(() => void 0 === _v0 || "" === _v0 ? null : {
        select: ["billingPlanId", "monthlyPrice", "price", "productName", "productId", "renewalDate", "seatCount", "billingPeriod", "discount", "originalPrice", "originalMonthlyPrice", "discountPercent"],
        where: {
          subscriptionId: _v0
        }
      }, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v7 = !_v0 || void 0 !== _v3 || !!_v5,
      _v8 = !!_v3?.productName,
      _v9 = _v2(_v3?.productName),
      _v10 = _v2(_v1),
      _v11 = !!_v2 && _v8 && !!_v9 && !!_v10 && _v9 !== _v10;
    return {
      scheduledOrder: _v8 ? _v3 : void 0,
      hasScheduledDowngrade: _v11,
      isScheduledOrderLoading: _v4,
      isScheduledOrderResolved: _v7,
      isScheduledOrderError: !!_v5,
      normalizedScheduledTier: _v9,
      normalizedCurrentTier: _v10,
      mutateScheduledOrder: _v6
    };
  }]);
}