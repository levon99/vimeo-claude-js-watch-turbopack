{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v3 = _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ({
      token: _v0,
      pathname: _v1,
      baseUrl: _v2,
      jwt: _v3,
      success: _v4,
      refId: _v5,
      addPm: _v6
    }) => {
      let _v7 = (0, _v7.getCurrentLocale)();
      return (0, _v1.jsx)(_v6.GctlProvider, {
        xVimeoPage: _v1,
        jwt: _v0 || _v3,
        baseUrl: _v2,
        locale: _v7,
        children: (0, _v1.jsx)(_v2.Suspense, {
          fallback: null,
          children: (0, _v1.jsx)(_v10, {
            success: _v4,
            refId: _v5,
            addPm: _v6
          })
        })
      });
    },
    _v10 = ({
      success: _v0,
      refId: _v1,
      addPm: _v2
    }) => {
      if (!(0, _v8.useViewer)() || "u" < typeof document) return null;
      let _v3 = document.referrer ? new URL(document.referrer) : null;
      return (0, _v1.jsx)(_v3.RedirectContainer, {
        redirectUrl: _v3 ? `${_v3.pathname}` : "/",
        success: _v0,
        paymentMethodId: _v1,
        addedPaymentMethod: _v2
      });
    };
  _v9.getLayout = _v0 => (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }), (0, _v4.withPageSetup)(_v0 => {
    let _v1 = _v0.query.token ?? null;
    return (0, _v5.isLoggedOut)(_v0.req) && !_v1 ? {
      notFound: !0
    } : {
      props: {
        token: _v1 || "",
        pathname: _v0.resolvedUrl,
        baseUrl: _v0.baseUrl,
        jwt: _v0.jwt || "",
        success: "true" === _v0.query.success,
        refId: _v0.query.refId,
        addPm: "1" === _v0.query.addPm
      }
    };
  }, {
    requireLogin: !0,
    capability: "canUsePaymentsService",
    redirect: "/upgrade-plan"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v9], 0);
}