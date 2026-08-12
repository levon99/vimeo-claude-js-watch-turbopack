{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => {
    let _v0 = (0, _v3.useRouter)(),
      _v1 = "string" == typeof _v0.query.source ? _v0.query.source : "",
      {
        sendChannelMessage: _v2,
        isChannelActive: _v3
      } = (0, _v6.useBroadcastChannel)({
        name: "vimeo-auth-sync"
      }),
      [_v4, _v5] = (0, _v4.useState)(!1);
    return ((0, _v4.useEffect)(() => {
      if (!_v3) return;
      let _v0 = !1;
      return (async () => {
        let _v0 = await (0, _v5.getViewerPromise)();
        _v0 || (_v2({
          type: "auth-complete",
          payload: {
            userId: _v0?.user?.id ?? null,
            source: _v1
          }
        }), window.close(), setTimeout(() => {
          _v0 || _v5(!0);
        }, 500));
      })(), () => {
        _v0 = !0;
      };
    }, [_v3, _v2, _v1]), _v4) ? (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsx)("h1", {
        children: "You're signed in"
      }), (0, _v1.jsx)("p", {
        children: "Return to your upload tab."
      })]
    }) : null;
  };
  (0, _v2.withPageSetup)(() => ({
    props: {}
  }), {
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v1.jsx)(_v7, {})], 0);
}