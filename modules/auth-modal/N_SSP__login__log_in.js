{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  (0, _v3.withPageSetup)(() => ({
    props: {
      isIframe: !0,
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      {
        type: _v1
      } = _v0.query,
      _v2 = Array.isArray(_v1) ? _v1[0] : _v1,
      _v3 = (0, _v5.useAdoptedAuthAttribution)("login" === _v2 || "log_in" === _v2 ? "login" : "join", "iframe"),
      _v4 = (0, _v6.readAdoptedOrigin)(_v0.query);
    return (0, _v1.jsx)(_v4.AuthModal, {
      attribution: _v3,
      originUrl: _v4,
      allowRoutedCompletion: !0
    });
  }], 0);
}