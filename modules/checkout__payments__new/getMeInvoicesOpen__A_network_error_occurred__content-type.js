{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v6 = _v6,
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  async function _v16({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v14.measureLatency)("getMeInvoicesOpen", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/invoices/open?fields=${_v1.map(_v15.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v15.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v15.deepCamelCase)(_v1);
    });
  }
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = _v0 => {
      let _v1 = (0, _v4.useRouter)(),
        _v2 = (0, _v20.useViewer)();
      return _v1.isReady && _v2 ? (0, _v1.jsx)(_v18.GctlProvider, {
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
        _v5 = (0, _v4.useRouter)();
      _v4?.user || _v5.query?.token || (window.location.href = "/log_in");
      let _v6 = "u" > typeof document && document.referrer ? new URL(document.referrer) : "",
        _v7 = _v5.query?.token ? `?token=${_v5.query?.token}&mwru=${_v5.query?.mwru}` : "",
        _v8 = (0, _v5.useMemo)(() => _v1?.publishableKey ? (0, _v3.loadStripe)(_v1.publishableKey) : null, [_v1?.publishableKey]);
      return _v0 === _v7.PaymentFormTypes.TYPE_STRIPE && _v4?.locale && _v1 && (_v3 = _v1.clientSecret ? (0, _v8.getStripeOptions)({
        clientSecret: _v1.clientSecret,
        customerSessionClientSecret: _v1.customerSessionClientSecret
      }) : (0, _v8.getStripeOptions)({
        mode: "setup",
        locale: _v4.locale,
        amount: _v1.balance.unit,
        currency: _v1.currency,
        paymentMethodConfigId: _v1.paymentMethodConfigId,
        customerSessionClientSecret: _v1.customerSessionClientSecret
      })), (0, _v1.jsx)(_v2.Elements, {
        stripe: _v8,
        options: _v3,
        children: (0, _v1.jsx)(_v6.AddPaymentMethodContainer, {
          redirectUrl: _v6 ? `${_v6.pathname}${_v7}` : void 0,
          paymentFormType: _v0,
          stripeConfig: _v1,
          openInvoice: _v2
        })
      });
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
      capabilities: ["canUsePaymentsService", "canUseStripeCheckout"],
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
    let _v4 = _v3?.canUseStripeCheckout ? _v7.PaymentFormTypes.TYPE_STRIPE : _v7.PaymentFormTypes.TYPE_CREDIT_CARD;
    switch (_v0.query.type) {
      case _v7.PaymentFormTypes.TYPE_CREDIT_CARD.toString():
        _v4 = _v7.PaymentFormTypes.TYPE_CREDIT_CARD;
        break;
      case _v7.PaymentFormTypes.TYPE_STRIPE.toString():
        _v4 = _v7.PaymentFormTypes.TYPE_STRIPE;
    }
    let _v5 = null,
      _v6 = null;
    if (_v4 === _v7.PaymentFormTypes.TYPE_STRIPE) _v6 = await (0, _v17.getMeStripeConfig)({
      baseUrl: _v0.baseUrl,
      headers: _v2,
      query: {
        withBalance: !0
      },
      select: _v7.STRIPE_CONFIG_FIELDS
    });else try {
      _v5 = await _v16({
        baseUrl: _v0.baseUrl,
        headers: _v2,
        select: _v7.OPEN_INVOICE_FIELDS
      });
    } catch (_v0) {
      _v5 = null;
    }
    return {
      props: {
        paymentFormType: _v4,
        stripeConfig: _v6,
        openInvoice: _v5
      }
    };
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v22], 0);
}