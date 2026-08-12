{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = _v0 => {
    switch (_v0) {
      case "CARD_BRAND_VISA":
        return ["visa", "Visa"];
      case "CARD_BRAND_AMERICAN_EXPRESS":
        return ["amex", "American Express"];
      case "CARD_BRAND_DISCOVER":
        return ["discover", "Discover"];
      case "CARD_BRAND_MASTER_CARD":
        return ["mastercard", "MasterCard"];
      default:
        return ["creditcard", _v8.default.Unknown];
    }
  };
  _v0.s(["default", 0, ({
    canFetchPaymentMethods: _v0,
    canUsePaymentsService: _v1,
    ownerId: _v2
  }) => {
    let _v3 = (0, _v7.useHideCardExpiry)(),
      [_v4, _v5] = (0, _v1.useState)(null),
      [_v6, _v7] = (0, _v1.useState)(!1),
      [_v8, _v9] = (0, _v1.useState)(null),
      [_v10, {
        error: _v11,
        data: _v12,
        loading: _v13
      }] = (0, _v3.useGetUserSettingsBillingMembershipLazy)(),
      [_v14, {
        data: _v15,
        loading: _v16
      }] = (0, _v5.useGetUserSubscriptionLazy)(),
      [_v17, {
        error: _v18,
        data: _v19,
        loading: _v20
      }] = (0, _v4.useGetUserSettingsBillingPaymentMethodsLazy)(),
      [_v21, {
        error: _v22,
        data: _v23,
        loading: _v24
      }] = (0, _v2.useGetMePaymentMethodsLazy)(),
      {
        data: _v25
      } = _v8 || {},
      [_v26, _v27] = (0, _v1.useState)(),
      _v28 = _v26?.type === "paypal",
      _v29 = _v12?.pricePerSeatForDisplay ?? "--",
      _v30 = _v12?.billingPeriod === "month" ? _v8.default.Monthly : _v8.default.Annually,
      _v31 = !!(_v26 && (0, _v9.isPaymentExpired)(_v26));
    return (0, _v1.useEffect)(() => {
      _v27(_v25?.find(_v0 => _v0.inUse) || _v25?.find(_v0 => _v0.isSuggested));
    }, [_v25]), (0, _v1.useEffect)(function () {
      _v2 && _v0 && (_v1 ? _v21({
        select: [],
        query: {}
      }) : _v17({
        select: [],
        where: {
          userId: _v2
        }
      })), _v2 && _v10({
        select: ["additionalSeatPrice", "basePlanPrice", "billingPeriod", "currency", "endDate", "hasAutorenew", "isFreeTrial", "pricePerSeat", "pricePerSeatForDisplay", "seatCount", "subscriptionId", "suggestedPaymentMethod"],
        where: {
          userId: _v2
        }
      });
    }, [_v0, _v1, _v10, _v21, _v17, _v2]), (0, _v1.useEffect)(function () {
      _v0 && _v1 && _v2 && _v12?.subscriptionId && _v14({
        select: [],
        where: {
          userId: `${_v2}`,
          subscriptionId: _v12.subscriptionId
        }
      });
    }, [_v0, _v1, _v14, _v12, _v2]), (0, _v1.useEffect)(function () {
      _v1 ? (_v5(_v22), _v7(_v24), _v23 && _v9(function ({
        data: _v0
      }, _v1) {
        return {
          data: _v0.map(_v0 => {
            if ("PAYMENT_METHOD_TYPES_CARD" === _v0.type && !_v0.card) return null;
            let [_v1, _v2] = function (_v0) {
                switch (_v0.type) {
                  case "PAYMENT_METHOD_TYPES_CARD":
                    return _v10(_v0.card?.brand);
                  case "PAYMENT_METHOD_TYPES_PAYPAL":
                    return ["paypal", "PayPal"];
                  case "PAYMENT_METHOD_TYPES_APPLEPAY":
                    return ["applepay", "Apple Pay"];
                  default:
                    return ["creditcard", _v8.default.Unknown];
                }
              }(_v0),
              [_v3] = _v10(_v0.card?.brand),
              _v4 = (0, _v6.getPaymentMethodLabel)(_v0, _v1);
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
              textType: "PAYMENT_METHOD_TYPES_CC_REF" === _v0.type ? _v4 : _v2,
              type: "PAYMENT_METHOD_TYPES_CC_REF" === _v0.type ? _v3 : _v1,
              uri: `/me/payment_methods/${_v0.id}`
            };
          }).filter(_v0 => null !== _v0)
        };
      }(_v23, _v3))) : (_v5(_v18), _v7(_v20), _v9(_v19 ?? null));
    }, [_v1, _v3, _v23, _v22, _v24, _v15, _v19, _v18, _v20]), {
      billingPeriod: _v30,
      billingPlanId: _v15?.plans?.[0]?.billingPlanId,
      currency: _v12?.currency,
      endDate: _v12?.endDate,
      hasAutoRenew: _v12?.hasAutorenew,
      isExpired: _v31,
      isPayPal: _v28,
      isTrial: _v12?.isFreeTrial,
      paymentInUse: _v26,
      paymentMethods: _v25,
      paymentMethodsData: _v8,
      paymentMethodsError: _v4 || _v11,
      paymentMethodsLoading: _v6 || _v13 || _v1 && _v16 && !_v8,
      additionalSeatPrice: _v12?.additionalSeatPrice ?? null,
      basePlanPrice: _v12?.basePlanPrice ?? null,
      pricePerSeat: _v12?.pricePerSeat,
      seatCount: _v12?.seatCount,
      setPaymentInUse: _v27,
      subscriptionId: _v15?.id,
      subtotalWithCurrencyPerSeat: _v29
    };
  }]);
}