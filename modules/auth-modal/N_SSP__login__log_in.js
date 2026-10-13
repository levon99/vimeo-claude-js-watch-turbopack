{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
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
    let {
        type: _v0
      } = (0, _v2.useRouter)().query,
      _v1 = Array.isArray(_v0) ? _v0[0] : _v0,
      _v2 = (0, _v5.useAdoptedAuthAttribution)("login" === _v1 || "log_in" === _v1 ? "login" : "join", "iframe");
    return (0, _v1.jsx)(_v4.AuthModal, {
      attribution: _v2
    });
  }], 0);
}