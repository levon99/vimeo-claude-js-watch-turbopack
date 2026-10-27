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
        error: _v6,
        mutate: _v7
      } = (0, _v1.useGetMeSubscriptionScheduledOrder)(() => _v3 ? {
        select: ["monthlyPrice", "price", "productName", "productId", "renewalDate", "seatCount", "billingPeriod", "discount", "originalPrice", "originalMonthlyPrice", "discountPercent"],
        where: {
          subscriptionId: _v0
        }
      } : null, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v8 = !_v3 || void 0 !== _v4 || !!_v6,
      _v9 = !!_v4?.productName,
      _v10 = _v2(_v4?.productName),
      _v11 = _v2(_v1),
      _v12 = !!_v2 && _v9 && !!_v10 && !!_v11 && _v10 !== _v11;
    return {
      scheduledOrder: _v9 ? _v4 : void 0,
      hasScheduledDowngrade: _v12,
      isScheduledOrderLoading: _v5,
      isScheduledOrderResolved: _v8,
      normalizedScheduledTier: _v10,
      normalizedCurrentTier: _v11,
      mutateScheduledOrder: _v7
    };
  }]);
}