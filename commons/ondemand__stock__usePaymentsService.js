{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.i(0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = (0, _v2.default)(async () => {
      let {
        Checkout: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v24 = {
      promo: _v5.StringParam,
      currency: _v5.StringParam,
      action: _v5.StringParam,
      product: _v5.StringParam,
      player: _v5.BooleanParam,
      error: _v5.StringParam,
      type: (0, _v5.createEnumParam)([_v8.PaymentFormTypes.TYPE_CREDIT_CARD.toString(), _v8.PaymentFormTypes.TYPE_STRIPE.toString()]),
      campaign: _v5.StringParam,
      bandwidthPlanBSelected: _v5.StringParam,
      fdsource: _v5.StringParam
    },
    _v25 = _v0 => {
      let _v1 = (0, _v21.useViewer)(),
        _v2 = (0, _v3.useRouter)(),
        [_v3] = (0, _v6.useQueryParams)(_v24),
        {
          trackCheckoutOpen: _v4
        } = (0, _v16.useCheckoutTracking)(_v0.iosUserId),
        {
          trackFakeDoorCheckoutOpen: _v5
        } = (0, _v10.useFakeDoorCheckoutTracking)(),
        _v6 = _v2.query?.plan,
        _v7 = "string" == typeof _v6 ? _v6 : null,
        _v8 = !!_v7 && ["ondemand", "stock"].includes(_v7),
        _v9 = _v3.action && (0, _v7.isCreatorProductAction)(_v3.action) ? _v3.action : void 0,
        _v10 = "string" == typeof _v3.product ? Number(_v3.product) : void 0,
        _v11 = (0, _v9.getFakeDoorConfig)(_v3.fdsource),
        {
          data: _v12,
          isLoading: _v13
        } = (0, _v13.useGetMeCapabilities)(() => _v1 ? {
          select: ["usePaymentsService", "beenInFreeTrial", "isLapsed", "useStripeCheckout", "inAppSubscription"]
        } : null, {
          revalidateIfStale: !1,
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        }),
        _v14 = _v12?.usePaymentsService,
        _v15 = _v12?.useStripeCheckout || !1,
        _v16 = _v12?.inAppSubscription,
        {
          settings: _v17,
          isLoadingResponse: _v18
        } = (0, _v14.useOrionSettings)(),
        _v19 = _v2.pathname.includes("/trial"),
        _v20 = _v19 && (_v12?.beenInFreeTrial || _v12?.isLapsed),
        _v21 = null === _v7 || _v13 || _v18 || void 0 === _v14 || _v8 && (!_v9 || !_v10),
        _v22 = _v8 ? "rent" === _v9 ? "rental" : "buy" === _v9 ? "onetime" : "monthly" : _v0.isMonthly ? "monthly" : "annual",
        _v23 = _v17.checkout_default_payment_method,
        _v24 = _v15 ? _v8.PaymentFormTypes.TYPE_STRIPE : _v3.type ? Number(_v3.type) : "paypal" === _v23 ? _v8.PaymentFormTypes.TYPE_PAYPAL : _v8.PaymentFormTypes.TYPE_CREDIT_CARD,
        _v25 = _v24 === _v8.PaymentFormTypes.TYPE_STRIPE ? "stripe" : _v24 === _v8.PaymentFormTypes.TYPE_PAYPAL ? "paypal" : "credit_card";
      (0, _v17.usePicoEffect)(() => {
        if (_v21) return !1;
        _v4({
          tier: _v7,
          periodicity: _v22,
          isFreeTrial: _v19,
          defaultPaymentMethod: _v25
        });
      }, [_v21, _v7, _v22, _v19, _v25], {
        once: !0
      });
      let _v26 = _v21 || !_v11;
      if ((0, _v17.usePicoEffect)(() => {
        if (_v26 || !_v11) return !1;
        _v5(_v11);
      }, [_v26, _v11], {
        once: !0
      }), _v20 && !_v11) {
        let _v0 = "string" == typeof _v2.query.post_checkout_url ? _v2.query.post_checkout_url : void 0,
          _v1 = _v0 && (0, _v18.isVimeoRedirectableUrl)(_v0) ? _v0 : void 0;
        _v2.push((0, _v15.buildUpgradePlanUrl)({
          paywallTrigger: "checkout_lapsed_or_trial_upgrade_redirect",
          paywallLocation: "checkout",
          paywallFeature: "subscription",
          postCheckoutUrl: _v1
        }));
      }
      return _v7 && (_v16 && !_v8 && (window.location.href = "/settings/billing/membership_plan"), !_v13 && void 0 !== _v14 && !_v18 && (_v8 || "custom_self_serve" === _v7 || _v14) && (!_v8 || _v9 && _v10)) ? (0, _v1.jsx)(_v23, {
        ..._v0,
        defaultPaymentType: _v24,
        defaultPromoCodeId: _v3.promo ?? void 0,
        currencyQuery: _v3.currency ?? void 0,
        plan: _v7,
        canUsePaymentsService: _v14,
        creatorProductAction: _v9,
        creatorProductId: _v10,
        inPlayer: !!_v3.player ?? !1,
        errorMessage: _v3.error ?? void 0,
        campaign: _v3.campaign ?? void 0,
        bandwidthPlanBSelected: _v3.bandwidthPlanBSelected ?? void 0,
        fakeDoorConfig: _v11
      }) : null;
    };
  (0, _v11.withPageSetup)({
    inlineViewer: "all"
  }), _v0.s(["default", 0, _v0 => {
    let _v1 = (0, _v3.useRouter)(),
      _v2 = (0, _v4.useContext)(_v20.ViewerContext),
      _v3 = (0, _v4.useMemo)(() => {
        if (!_v1.query?.token) return null;
        try {
          return JSON.parse(atob(String(_v1.query?.token).split(".")[1]));
        } catch (_v0) {
          return null;
        }
      }, [_v1.query?.token]);
    return ((0, _v4.useEffect)(() => {
      _v1.isReady && _v19.postCheckoutUrl.sync(_v1.query.post_checkout_url ?? null);
    }, [_v1.isReady, _v1.query.post_checkout_url]), _v1.isReady && _v2) ? _v2?.user || _v1.query?.token ? (0, _v1.jsx)(_v12.GctlProvider, {
      xVimeoPage: _v1.pathname,
      jwt: _v1.query?.token && !(0, _v7.isPayPalToken)(String(_v1.query?.token)) ? String(_v1.query?.token) : _v2?.jwt,
      baseUrl: _v2 ? `https://${_v2.apiUrl}` : "",
      locale: _v2?.locale,
      children: (0, _v1.jsx)(_v22.QueryParamProvider, {
        children: (0, _v1.jsx)(_v4.Suspense, {
          fallback: null,
          children: (0, _v1.jsx)(_v25, {
            ..._v0,
            iosUserId: _v3?.user_id
          })
        })
      })
    }) : (window.location.href = `/log_in?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`, null) : null;
  }]);
}