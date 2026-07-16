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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
    pmId: _v0
  }) => {
    let _v1 = (0, _v3.useRouter)(),
      _v2 = (0, _v13.useViewer)();
    return _v1.isReady && _v2 ? (0, _v1.jsx)(_v11.GctlProvider, {
      xVimeoPage: _v1.pathname,
      jwt: _v2?.jwt,
      baseUrl: _v2 ? `https://${_v2.apiUrl}` : "",
      locale: _v2?.locale,
      children: (0, _v1.jsx)(_v2.Elements, {
        stripe: null,
        children: (0, _v1.jsx)(_v4.AddPaymentMethod, {
          isVerification: !0,
          pmId: _v0,
          paymentFormType: _v5.PaymentFormTypes.TYPE_CREDIT_CARD,
          stripeConfig: null,
          openInvoice: null,
          redirectUrl: "/home"
        })
      })
    }) : null;
  };
  _v15.getLayout = _v0 => (0, _v1.jsxs)(_v14.QueryParamProvider, {
    children: [(0, _v1.jsx)(_v8.DefaultNavigation, {}), _v0, (0, _v1.jsx)(_v12.MinimalFooterLayout, {})]
  }), (0, _v6.withPageSetup)(async _v0 => {
    let _v1;
    if ((0, _v7.isLoggedOut)(_v0.req)) return {
      redirect: {
        destination: "/log_in",
        permanent: !1
      }
    };
    try {
      let _v0 = await (0, _v10.getMeSubscriptions)({
          baseUrl: _v0.baseUrl,
          headers: _v0.headers,
          select: ["paymentMethodId", "isLatest"],
          query: {
            status: "SUBSCRIPTION_STATUS_ACTIVE",
            types: ["SUBSCRIPTION_TYPE_BASE"]
          }
        }),
        _v1 = _v0?.data ?? [];
      _v1 = _v1.find(_v0 => _v0.isLatest && _v0.paymentMethodId)?.paymentMethodId ?? _v1.find(_v0 => _v0.paymentMethodId)?.paymentMethodId;
    } catch {
      _v1 = void 0;
    }
    if (!_v1) try {
      let _v0 = await (0, _v9.getMePaymentMethods)({
          baseUrl: _v0.baseUrl,
          headers: _v0.headers,
          select: ["id", "isDefault", "type"],
          query: {
            showDisabled: !1
          }
        }),
        _v1 = (_v0?.data ?? []).filter(_v0 => "PAYMENT_METHOD_TYPES_CARD" === _v0.type || "PAYMENT_METHOD_TYPES_CC_REF" === _v0.type);
      _v1 = (_v1.find(_v0 => _v0.isDefault) ?? _v1[0])?.id;
    } catch {
      _v1 = void 0;
    }
    return _v1 ? {
      props: {
        pmId: _v1
      }
    } : {
      redirect: {
        destination: "/checkout/payments/new",
        permanent: !1
      }
    };
  }, {
    omitEsi: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v15], 0);
}