{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["default", 0, ({
    canFetchPaymentMethods: _v0,
    canUsePaymentsService: _v1,
    ownerId: _v2
  }) => {
    let [_v3, _v4] = (0, _v1.useState)(null),
      [_v5, _v6] = (0, _v1.useState)(!1),
      [_v7, _v8] = (0, _v1.useState)(null),
      [_v9, {
        error: _v10,
        data: _v11,
        loading: _v12
      }] = (0, _v3.useGetUserSettingsBillingMembershipLazy)(),
      [_v13, {
        data: _v14,
        loading: _v15
      }] = (0, _v5.useGetUserSubscriptionLazy)(),
      [_v16, {
        error: _v17,
        data: _v18,
        loading: _v19
      }] = (0, _v4.useGetUserSettingsBillingPaymentMethodsLazy)(),
      [_v20, {
        error: _v21,
        data: _v22,
        loading: _v23
      }] = (0, _v2.useGetMePaymentMethodsLazy)(),
      {
        data: _v24
      } = _v7 || {},
      [_v25, _v26] = (0, _v1.useState)(),
      _v27 = _v25?.type === "paypal",
      _v28 = _v11?.pricePerSeatForDisplay ?? "--",
      _v29 = _v11?.billingPeriod === "month" ? _v6.default.Monthly : _v6.default.Annually,
      _v30 = !!(_v25 && (0, _v7.isPaymentExpired)(_v25));
    return (0, _v1.useEffect)(() => {
      _v26(_v24?.find(_v0 => _v0.inUse) || _v24?.find(_v0 => _v0.isSuggested));
    }, [_v24]), (0, _v1.useEffect)(function () {
      _v2 && _v0 && (_v1 ? _v20({
        select: [],
        query: {}
      }) : _v16({
        select: [],
        where: {
          userId: _v2
        }
      })), _v2 && _v9({
        select: ["additionalSeatPrice", "basePlanPrice", "billingPeriod", "currency", "endDate", "hasAutorenew", "isFreeTrial", "pricePerSeat", "pricePerSeatForDisplay", "seatCount", "subscriptionId", "suggestedPaymentMethod"],
        where: {
          userId: _v2
        }
      });
    }, [_v0, _v1, _v9, _v20, _v16, _v2]), (0, _v1.useEffect)(function () {
      _v0 && _v1 && _v2 && _v11?.subscriptionId && _v13({
        select: [],
        where: {
          userId: `${_v2}`,
          subscriptionId: _v11.subscriptionId
        }
      });
    }, [_v0, _v1, _v13, _v11, _v2]), (0, _v1.useEffect)(function () {
      _v1 ? (_v4(_v21), _v6(_v23), _v22 && _v8(function ({
        data: _v0
      }) {
        return {
          data: _v0.map(_v0 => {
            if ("PAYMENT_METHOD_TYPES_CARD" === _v0.type && !_v0.card) return null;
            let [_v1, _v2] = function (_v0) {
              switch (_v0.type) {
                case "PAYMENT_METHOD_TYPES_CARD":
                  switch (_v0.card?.brand) {
                    case "CARD_BRAND_VISA":
                      return ["visa", "Visa"];
                    case "CARD_BRAND_AMERICAN_EXPRESS":
                      return ["amex", "American Express"];
                    case "CARD_BRAND_DISCOVER":
                      return ["discover", "Discover"];
                    case "CARD_BRAND_MASTER_CARD":
                      return ["mastercard", "MasterCard"];
                    default:
                      return ["creditcard", _v6.default.Unknown];
                  }
                case "PAYMENT_METHOD_TYPES_PAYPAL":
                  return ["paypal", "PayPal"];
                case "PAYMENT_METHOD_TYPES_APPLEPAY":
                  return ["applepay", "Apple Pay"];
                default:
                  return ["creditcard", _v6.default.Unknown];
              }
            }(_v0);
            if ("PAYMENT_METHOD_TYPES_CC_REF" === _v0.type) {
              let _v0 = new Date(_v0.createdAt).toISOString().split("T")[0];
              _v2 = `Indian Bank Card - Saved ${_v0}`;
            }
            return {
              canUseToOptin: !0,
              disableOption: !!_v0.disabledAt,
              expirationMonth: _v0.card?.expirationMonth ?? 0,
              expirationYear: _v0.card?.expirationYear ?? 0,
              inUse: _v0.isDefault,
              isInstantPurchase: !1,
              isSuggested: !1,
              lastFour: _v0.card?.lastFourDigits ?? "",
              paypalEmail: "",
              textType: _v2,
              type: _v1,
              uri: `/me/payment_methods/${_v0.id}`
            };
          }).filter(_v0 => null !== _v0)
        };
      }(_v22))) : (_v4(_v17), _v6(_v19), _v8(_v18 ?? null));
    }, [_v1, _v22, _v21, _v23, _v14, _v18, _v17, _v19]), {
      billingPeriod: _v29,
      billingPlanId: _v14?.plans?.[0]?.billingPlanId,
      currency: _v11?.currency,
      endDate: _v11?.endDate,
      hasAutoRenew: _v11?.hasAutorenew,
      isExpired: _v30,
      isPayPal: _v27,
      isTrial: _v11?.isFreeTrial,
      paymentInUse: _v25,
      paymentMethods: _v24,
      paymentMethodsData: _v7,
      paymentMethodsError: _v3 || _v10,
      paymentMethodsLoading: _v5 || _v12 || _v1 && _v15 && !_v7,
      additionalSeatPrice: _v11?.additionalSeatPrice ?? null,
      basePlanPrice: _v11?.basePlanPrice ?? null,
      pricePerSeat: _v11?.pricePerSeat,
      seatCount: _v11?.seatCount,
      setPaymentInUse: _v26,
      subscriptionId: _v14?.id,
      subtotalWithCurrencyPerSeat: _v28
    };
  }]);
}