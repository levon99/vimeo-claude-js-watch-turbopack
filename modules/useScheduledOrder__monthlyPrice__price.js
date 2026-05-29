{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    return _v0?.trim().toLowerCase().replace(/^vimeo\s+/, "").replace(/\s+/g, "_");
  }
  _v0.s(["useScheduledOrder", 0, function (_v0, _v1, _v2) {
    let _v3 = !!_v0,
      {
        data: _v4,
        isLoading: _v5,
        mutate: _v6
      } = (0, _v1.useGetMeSubscriptionScheduledOrder)(() => _v3 ? {
        select: ["monthlyPrice", "price", "productName", "renewalDate", "seatCount", "billingPeriod", "discount", "originalPrice", "originalMonthlyPrice", "discountPercent"],
        where: {
          subscriptionId: _v0
        }
      } : null, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v7 = !!_v4?.productName,
      _v8 = _v2(_v4?.productName),
      _v9 = _v2(_v1),
      _v10 = !!_v2 && _v7 && !!_v8 && !!_v9 && _v8 !== _v9;
    return {
      scheduledOrder: _v7 ? _v4 : void 0,
      hasScheduledDowngrade: _v10,
      isScheduledOrderLoading: _v5,
      normalizedScheduledTier: _v8,
      normalizedCurrentTier: _v9,
      mutateScheduledOrder: _v6
    };
  }]);
}