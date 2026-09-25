{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      autorenewalOptInRequirement: null,
      billingPlan: void 0,
      checkoutType: "purchase",
      creatorProductAction: void 0,
      creatorProductId: void 0,
      creatorProductThumbnailUrl: null,
      creatorProductTitlePageUrl: null,
      currentSubscription: void 0,
      inPlayer: !1,
      isBundleChecked: !1,
      bundleAddOn: null,
      isOrderPreviewLoading: !1,
      isFreeTrial: !1,
      isMonthly: !1,
      isRenewNow: !1,
      order: void 0,
      subscriptionProduct: void 0,
      canUsePaymentsService: !0,
      errorMessage: void 0,
      storePaymentMethod: !1
    },
    _v3 = (0, _v1.createContext)({
      state: _v2,
      dispatch: () => void 0
    }),
    _v4 = (0, _v1.createContext)(!1),
    _v5 = {
      loading: !1,
      data: null,
      error: null,
      called: !1,
      callCount: 0,
      lastCalled: null
    },
    _v6 = {
      orderPreview: _v5,
      submitOrder: _v5
    },
    _v7 = (0, _v1.createContext)({
      state: _v6,
      dispatch: () => void 0
    });
  _v0.s(["ApiStateContext", 0, _v7, "PaypalSelectedContext", 0, _v4, "StateContext", 0, _v3, "initialApiState", 0, _v6, "initialState", 0, _v2, "useApiStateContext", 0, () => (0, _v1.useContext)(_v7), "usePaypalSelected", 0, () => (0, _v1.useContext)(_v4), "useStateContext", 0, () => (0, _v1.useContext)(_v3)]);
}