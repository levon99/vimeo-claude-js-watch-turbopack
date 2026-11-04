{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useAcceptStudioRenewalOffer", 0, function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v4.useGctlConfig)(),
      [_v4, _v5] = (0, _v1.useState)(!1),
      {
        data: _v6
      } = (0, _v6.useGetMeSubscriptions)(() => ({
        select: ["id", "autoRenew"],
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE",
          perPage: 1
        }
      })),
      _v7 = _v6?.data?.[0]?.id,
      _v8 = _v6?.data?.[0]?.autoRenew ?? !1,
      {
        data: _v9
      } = (0, _v5.useGetMePaymentMethods)(() => ({
        select: ["id"],
        query: {
          perPage: 1
        }
      })),
      _v10 = _v9?.data?.[0]?.id;
    return {
      acceptRenewalOffer: (0, _v1.useCallback)(async ({
        billingPlanId: _v0,
        discountPercent: _v1
      }) => {
        if (void 0 === _v7 || "" === _v7) throw Error("No active subscription");
        _v5(!0);
        try {
          _v8 || (await (0, _v2.patchMeSubscription)({
            select: [],
            where: {
              subscriptionId: _v7
            },
            variables: {
              autoRenew: !0,
              paymentMethodId: _v10 ?? void 0
            },
            baseUrl: _v0,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v1 ? `jwt ${_v1}` : "",
              "Vimeo-Page": `${_v2}`,
              "Accept-Language": _v3 ?? "en"
            }
          })), await (0, _v3.putMeSubscriptionScheduledOrder)({
            where: {
              subscriptionId: _v7
            },
            variables: {
              billingPlanId: _v0,
              discountPercent: _v1,
              offerMarker: _v7.B2B_PERMANENT_DISCOUNT_OFFER_MARKER,
              acceptedFromCancellationFlow: !0
            },
            baseUrl: _v0,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v1 ? `jwt ${_v1}` : "",
              "Vimeo-Page": `${_v2}`,
              "Accept-Language": _v3 ?? "en"
            }
          });
        } finally {
          _v5(!1);
        }
      }, [_v7, _v8, _v10, _v0, _v1, _v2, _v3]),
      isAccepting: _v4
    };
  }]);
}