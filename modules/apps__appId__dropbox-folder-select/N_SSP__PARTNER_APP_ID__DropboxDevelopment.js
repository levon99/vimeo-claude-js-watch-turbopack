{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = [_v6.PARTNER_APP_ID.DropboxDevelopment, _v6.PARTNER_APP_ID.DropboxProduction],
    _v8 = ({
      appId: _v0
    }) => (0, _v1.jsx)(_v2.DropboxConnect, {
      appId: _v0
    });
  (0, _v3.withPageSetup)(async ({
    params: _v0
  }) => {
    let _v1 = Number(_v0?.appId),
      _v2 = _v7.includes(_v1);
    return _v1 && _v2 ? {
      props: {
        hasThemeSupport: !0,
        appId: _v1
      }
    } : {
      notFound: !0
    };
  }, {
    requireLogin: !0
  }), _v8.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.DefaultNavigation, {
      hasSearch: !1,
      isSideNavActive: !1
    }), _v0, (0, _v1.jsx)(_v5.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}