{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  (0, _v0.i(0).withPageSetup)({
    requireLogin: !0,
    omitEsi: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => ((0, _v2.useEffect)(() => {
    if (window.opener && "function" == typeof window.opener.connectCallback) {
      let _v0 = new URLSearchParams(window.location.search).get("access_token");
      window.opener.connectCallback({
        access_token: _v0
      }), window.close();
    }
  }, []), (0, _v1.jsx)(_v1.Fragment, {}))], 0);
}