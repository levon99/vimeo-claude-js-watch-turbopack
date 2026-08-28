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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = (0, _v2.default)(async () => {
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
    _v26 = {
      promo: _v5.StringParam,
      currency: _v5.StringParam,
      action: _v5.StringParam,
      product: _v5.StringParam,
      player: _v5.BooleanParam,
      error: _v5.StringParam,
      type: (0, _v5.createEnumParam)([_v10.PaymentFormTypes.TYPE_CREDIT_CARD.toString(), _v10.PaymentFormTypes.TYPE_STRIPE.toString()]),
      campaign: _v5.StringParam,
      bandwidthPlanBSelected: _v5.StringParam,
      fdsource: _v5.StringParam
    },
    _v27 = _v0 => {
      let _v1 = (0, _v23.useViewer)(),
        _v2 = (0, _v3.useRouter)(),
        [_v3] = (0, _v6.useQueryParams)(_v26),
        {
          trackCheckoutOpen: _v4
        } = (0, _v18.useCheckoutTracking)(_v0.iosUserId),
        {
          trackFakeDoorCheckoutOpen: _v5
        } = (0, _v12.useFakeDoorCheckoutTracking)(),
        _v6 = _v2.query?.plan,
        _v7 = "string" == typeof _v6 ? _v6 : null,
        {
          isLoading: _v8,
          showIndividualPlans: _v9
        } = (0, _v8.useB2BRepackagingContext)(_v0.iosUserId, _v0.b2bJwt),
        _v10 = !_v8 && null !== _v7 && !(0, _v7.isB2BRepackagingPlanAvailable)(_v7, _v9),
        _v11 = !!_v7 && ["ondemand", "stock"].includes(_v7),
        _v12 = _v3.action && (0, _v9.isCreatorProductAction)(_v3.action) ? _v3.action : void 0,
        _v13 = "string" == typeof _v3.product ? Number(_v3.product) : void 0,
        _v14 = (0, _v11.getFakeDoorConfig)(_v3.fdsource),
        {
          data: _v15,
          isLoading: _v16,
          isValidating: _v17
        } = (0, _v15.useGetMeCapabilities)(() => _v1 ? {
          select: ["usePaymentsService", "beenInFreeTrial", "isLapsed", "useStripeCheckout", "hasUsedStripeCheckout", "inAppSubscription"]
        } : null, {
          revalidateOnMount: !0,
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        }),
        _v18 = _v15?.usePaymentsService,
        _v19 = _v15?.useStripeCheckout || !1,
        _v20 = _v15?.hasUsedStripeCheckout || !1,
        _v21 = _v15?.inAppSubscription,
        {
          settings: _v22,
          isLoadingResponse: _v23
        } = (0, _v16.useOrionSettings)(),
        _v24 = "string" == typeof _v2.query.post_checkout_url ? _v2.query.post_checkout_url : void 0,
        _v25 = _v24 && (0, _v20.isVimeoRedirectableUrl)(_v24) ? _v24 : void 0;
      (0, _v4.useEffect)(() => {
        !_v8 && _v10 && _v2.replace((0, _v17.buildUpgradePlanUrl)({
          paywallTrigger: "checkout_b2b_restricted_plan_redirect",
          paywallLocation: "checkout",
          paywallFeature: "b2b_repackaging",
          postCheckoutUrl: _v25
        }));
      }, [_v8, _v10, _v2, _v25]);
      let _v26 = _v2.pathname.includes("/trial"),
        _v27 = _v26 && (_v15?.beenInFreeTrial || _v15?.isLapsed),
        _v28 = null === _v7 || _v8 || _v10 || _v16 || _v17 || _v23 || void 0 === _v18 || _v11 && (!_v12 || !_v13),
        _v29 = _v11 ? "rent" === _v12 ? "rental" : "buy" === _v12 ? "onetime" : "monthly" : _v0.isMonthly ? "monthly" : "annual",
        _v30 = _v22.checkout_default_payment_method,
        _v31 = _v19 || _v20 || _v22.force_stripe_checkout ? _v10.PaymentFormTypes.TYPE_STRIPE : _v3.type ? Number(_v3.type) : "paypal" === _v30 ? _v10.PaymentFormTypes.TYPE_PAYPAL : _v10.PaymentFormTypes.TYPE_CREDIT_CARD,
        _v32 = _v31 === _v10.PaymentFormTypes.TYPE_STRIPE ? "stripe" : _v31 === _v10.PaymentFormTypes.TYPE_PAYPAL ? "paypal" : "credit_card";
      (0, _v19.usePicoEffect)(() => {
        if (_v28) return !1;
        _v4({
          tier: _v7,
          periodicity: _v29,
          isFreeTrial: _v26,
          defaultPaymentMethod: _v32
        });
      }, [_v28, _v7, _v29, _v26, _v32], {
        once: !0
      });
      let _v33 = _v28 || !_v14;
      return ((0, _v19.usePicoEffect)(() => {
        if (_v33 || !_v14) return !1;
        _v5(_v14);
      }, [_v33, _v14], {
        once: !0
      }), _v27 && !_v14 && _v2.push((0, _v17.buildUpgradePlanUrl)({
        paywallTrigger: "checkout_lapsed_or_trial_upgrade_redirect",
        paywallLocation: "checkout",
        paywallFeature: "subscription",
        postCheckoutUrl: _v25
      })), !_v7 || _v8 || _v10 || (_v21 && !_v11 && (window.location.href = "/settings/billing/membership_plan"), _v16 || _v17 || void 0 === _v18 || _v23 || !_v11 && "custom_self_serve" !== _v7 && !_v18 || _v11 && (!_v12 || !_v13))) ? null : (0, _v1.jsx)(_v25, {
        ..._v0,
        defaultPaymentType: _v31,
        isIndianUser: _v19,
        defaultPromoCodeId: _v3.promo ?? void 0,
        currencyQuery: _v3.currency ?? void 0,
        plan: _v7,
        canUsePaymentsService: _v18,
        creatorProductAction: _v12,
        creatorProductId: _v13,
        inPlayer: !!_v3.player ?? !1,
        errorMessage: _v3.error ?? void 0,
        campaign: _v3.campaign ?? void 0,
        bandwidthPlanBSelected: _v3.bandwidthPlanBSelected ?? void 0,
        fakeDoorConfig: _v14
      });
    };
  (0, _v13.withPageSetup)({
    inlineViewer: "all"
  }), _v0.s(["default", 0, _v0 => {
    let _v1 = (0, _v3.useRouter)(),
      _v2 = (0, _v4.useContext)(_v22.ViewerContext),
      _v3 = (0, _v4.useMemo)(() => {
        if (!_v1.query?.token) return null;
        try {
          return JSON.parse(atob(String(_v1.query?.token).split(".")[1]));
        } catch (_v0) {
          return null;
        }
      }, [_v1.query?.token]);
    return ((0, _v4.useEffect)(() => {
      _v1.isReady && _v21.postCheckoutUrl.sync(_v1.query.post_checkout_url ?? null);
    }, [_v1.isReady, _v1.query.post_checkout_url]), _v1.isReady && _v2) ? _v2?.user || _v1.query?.token ? (0, _v1.jsx)(_v14.GctlProvider, {
      xVimeoPage: _v1.pathname,
      jwt: _v1.query?.token && !(0, _v9.isPayPalToken)(String(_v1.query?.token)) ? String(_v1.query?.token) : _v2?.jwt,
      baseUrl: _v2 ? `https://${_v2.apiUrl}` : "",
      locale: _v2?.locale,
      children: (0, _v1.jsx)(_v24.QueryParamProvider, {
        children: (0, _v1.jsx)(_v4.Suspense, {
          fallback: null,
          children: (0, _v1.jsx)(_v27, {
            ..._v0,
            iosUserId: _v3?.user_id,
            b2bJwt: _v1.query?.token && !(0, _v9.isPayPalToken)(String(_v1.query.token)) ? String(_v1.query.token) : _v2?.jwt
          })
        })
      })
    }) : (window.location.href = `/log_in?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`, null) : null;
  }]);
}