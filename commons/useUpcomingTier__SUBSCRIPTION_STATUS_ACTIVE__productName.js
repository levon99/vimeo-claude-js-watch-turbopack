{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useUpcomingTier", 0, function () {
    let _v0 = (0, _v1.useContext)(_v4.ViewerContext),
      _v1 = !!_v0?.user,
      {
        data: _v2
      } = (0, _v2.useGetMeSubscriptions)(() => _v1 ? {
        select: ["id"],
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE"
        }
      } : null),
      _v3 = _v2?.data?.[0]?.id,
      {
        data: _v4
      } = (0, _v3.useGetMeSubscriptionScheduledOrder)(() => _v3 ? {
        select: ["productName"],
        where: {
          subscriptionId: _v3
        }
      } : null);
    if (_v4?.productName) return _v4.productName.toLowerCase();
  }]);
}