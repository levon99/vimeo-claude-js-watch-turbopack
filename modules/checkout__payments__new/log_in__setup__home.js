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
      isIndianUser: _v1,
      stripeConfig: _v2,
      openInvoice: _v3
    }) => {
      let _v4,
        _v5 = (0, _v20.useViewer)(),
        _v6 = (0, _v4.useRouter)(),
        {
          settings: _v7,
          isLoadingResponse: _v8
        } = (0, _v18.useOrionSettings)(),
        _v9 = _v7.force_stripe_checkout ? _v7.PaymentFormTypes.TYPE_STRIPE : _v0,
        _v10 = _v9 === _v7.PaymentFormTypes.TYPE_STRIPE && null === _v2,
        {
          data: _v11,
          isLoading: _v12
        } = (0, _v17.useGetMeStripeConfig)(() => _v10 ? {
          select: _v7.STRIPE_CONFIG_FIELDS,
          query: {
            withBalance: !0
          }
        } : null),
        _v13 = _v2 ?? _v11 ?? null;
      _v5?.user || _v6.query?.token || (window.location.href = "/log_in");
      let _v14 = "u" > typeof document && document.referrer ? new URL(document.referrer) : "",
        _v15 = _v6.query?.verify === "1",
        _v16 = _v6.query?.token ? `?token=${_v6.query?.token}&mwru=${_v6.query?.mwru}` : "",
        _v17 = (0, _v5.useMemo)(() => _v13?.publishableKey ? (0, _v3.loadStripe)(_v13.publishableKey) : null, [_v13?.publishableKey]);
      if (_v8 || _v10 && _v12) return null;
      if (_v9 === _v7.PaymentFormTypes.TYPE_STRIPE) {
        if (!_v5?.locale || !_v13) return null;
        _v4 = _v13.clientSecret ? (0, _v8.getStripeOptions)({
          clientSecret: _v13.clientSecret,
          customerSessionClientSecret: _v13.customerSessionClientSecret
        }) : (0, _v8.getStripeOptions)({
          mode: "setup",
          locale: _v5.locale,
          amount: _v13.balance.unit,
          currency: _v13.currency,
          paymentMethodConfigId: _v13.paymentMethodConfigId,
          customerSessionClientSecret: _v13.customerSessionClientSecret
        });
      }
      return (0, _v1.jsx)(_v2.Elements, {
        stripe: _v17,
        options: _v4,
        children: (0, _v1.jsx)(_v6.AddPaymentMethod, {
          redirectUrl: _v15 ? "/home" : _v14 ? `${_v14.pathname}${_v16}` : void 0,
          isVerificationFlow: _v15,
          paymentFormType: _v9,
          forceStripeCheckout: _v7.force_stripe_checkout,
          isIndianUser: _v1,
          stripeConfig: _v13,
          openInvoice: _v3
        })
      }, _v9);
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
        isIndianUser: _v4,
        stripeConfig: _v8,
        openInvoice: _v7
      }
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v22], 0);
}