{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
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
    _v21 = _v0.i(0);
  let _v22 = _v0 => {
      let _v1 = (0, _v4.useRouter)(),
        _v2 = (0, _v20.useViewer)();
      return _v1.isReady && _v2 ? (0, _v1.jsx)(_v16.GctlProvider, {
        xVimeoPage: _v1.pathname,
        jwt: _v1.query?.token && !(0, _v9.isPayPalToken)(String(_v1.query?.token)) ? String(_v1.query?.token) : _v2?.jwt,
        baseUrl: _v2 ? `https://${_v2.apiUrl}` : "",
        locale: _v2?.locale,
        children: (0, _v1.jsx)(_v23, {
          ..._v0
        })
      }) : null;
    },
    _v23 = ({
      paymentFormType: _v0,
      stripeConfig: _v1,
      openInvoice: _v2
    }) => {
      let _v3,
        _v4 = (0, _v20.useViewer)(),
        _v5 = (0, _v4.useRouter)(),
        {
          settings: _v6,
          isLoadingResponse: _v7
        } = (0, _v18.useOrionSettings)(),
        _v8 = _v6.force_stripe_checkout ? _v7.PaymentFormTypes.TYPE_STRIPE : _v0,
        _v9 = _v8 === _v7.PaymentFormTypes.TYPE_STRIPE && null === _v1,
        {
          data: _v10,
          isLoading: _v11
        } = (0, _v17.useGetMeStripeConfig)(() => _v9 ? {
          select: _v7.STRIPE_CONFIG_FIELDS,
          query: {
            withBalance: !0
          }
        } : null),
        _v12 = _v1 ?? _v10 ?? null;
      _v4?.user || _v5.query?.token || (window.location.href = "/log_in");
      let _v13 = "u" > typeof document && document.referrer ? new URL(document.referrer) : "",
        _v14 = _v5.query?.verify === "1",
        _v15 = _v5.query?.token ? `?token=${_v5.query?.token}&mwru=${_v5.query?.mwru}` : "",
        _v16 = (0, _v5.useMemo)(() => _v12?.publishableKey ? (0, _v3.loadStripe)(_v12.publishableKey) : null, [_v12?.publishableKey]);
      if (_v7 || _v9 && _v11) return null;
      if (_v8 === _v7.PaymentFormTypes.TYPE_STRIPE) {
        if (!_v4?.locale || !_v12) return null;
        _v3 = _v12.clientSecret ? (0, _v8.getStripeOptions)({
          clientSecret: _v12.clientSecret,
          customerSessionClientSecret: _v12.customerSessionClientSecret
        }) : (0, _v8.getStripeOptions)({
          mode: "setup",
          locale: _v4.locale,
          amount: _v12.balance.unit,
          currency: _v12.currency,
          paymentMethodConfigId: _v12.paymentMethodConfigId,
          customerSessionClientSecret: _v12.customerSessionClientSecret
        });
      }
      return (0, _v1.jsx)(_v2.Elements, {
        stripe: _v16,
        options: _v3,
        children: (0, _v1.jsx)(_v6.AddPaymentMethod, {
          redirectUrl: _v14 ? "/home" : _v13 ? `${_v13.pathname}${_v15}` : void 0,
          isVerificationFlow: _v14,
          paymentFormType: _v8,
          forceStripeCheckout: _v6.force_stripe_checkout,
          stripeConfig: _v12,
          openInvoice: _v2
        })
      }, _v8);
    };
  _v22.getLayout = _v0 => (0, _v1.jsxs)(_v21.QueryParamProvider, {
    children: [(0, _v1.jsx)(_v13.DefaultNavigation, {}), _v0, (0, _v1.jsx)(_v19.MinimalFooterLayout, {})]
  }), (0, _v11.withPageSetup)(async _v0 => {
    let {
      token: _v1
    } = _v0.query;
    if (!_v1 && (0, _v12.isLoggedOut)(_v0.req)) return {
      redirect: {
        destination: "/log_in",
        permanent: !1
      }
    };
    let _v2 = {
      ..._v0.headers
    };
    _v1 && !(0, _v9.isPayPalToken)(String(_v1)) && (_v2.Authorization = `jwt ${_v1}`);
    let _v3 = await (0, _v10.getUserCapabilities)({
      capabilities: ["canUsePaymentsService", "useStripeCheckout", "hasUsedStripeCheckout"],
      jwt: _v0.jwt,
      apiUrl: _v0.baseUrl,
      headers: _v2
    });
    if (void 0 === _v3.canUsePaymentsService) return {
      redirect: {
        destination: "/upgrade-plan",
        permanent: !1
      }
    };
    let _v4 = _v3?.useStripeCheckout || !1,
      _v5 = _v3?.hasUsedStripeCheckout || !1,
      _v6 = _v4 || _v5 ? _v7.PaymentFormTypes.TYPE_STRIPE : _v7.PaymentFormTypes.TYPE_CREDIT_CARD;
    switch (_v0.query.type) {
      case _v7.PaymentFormTypes.TYPE_CREDIT_CARD.toString():
        _v6 = _v7.PaymentFormTypes.TYPE_CREDIT_CARD;
        break;
      case _v7.PaymentFormTypes.TYPE_STRIPE.toString():
        _v6 = _v7.PaymentFormTypes.TYPE_STRIPE;
    }
    let _v7 = null,
      _v8 = null;
    if (_v6 === _v7.PaymentFormTypes.TYPE_STRIPE) _v8 = await (0, _v15.getMeStripeConfig)({
      baseUrl: _v0.baseUrl,
      headers: _v2,
      query: {
        withBalance: !0
      },
      select: _v7.STRIPE_CONFIG_FIELDS
    });else try {
      _v7 = await (0, _v14.getMeInvoicesOpen)({
        baseUrl: _v0.baseUrl,
        headers: _v2,
        select: _v7.OPEN_INVOICE_FIELDS
      });
    } catch (_v0) {
      _v7 = null;
    }
    return {
      props: {
        paymentFormType: _v6,
        stripeConfig: _v8,
        openInvoice: _v7
      }
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v22], 0);
}