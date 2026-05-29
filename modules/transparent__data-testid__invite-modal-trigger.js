{
  "use strict";

  let _v1;
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (_v1 = () => {
    let _v0 = (0, _v4.useRef)(null);
    return (0, _v4.useEffect)(() => {
      _v0.current?.click(), document.documentElement.style.backgroundColor = "transparent";
    }, [_v0]), (0, _v2.jsx)(_v5.Box, {
      children: (0, _v2.jsx)(_v7.default, {
        hideModalOverlay: !0,
        children: (0, _v2.jsx)(_v5.Box, {
          ref: _v0,
          "data-testid": "invite-modal-trigger"
        })
      })
    });
  }, () => (0, _v6.useViewer)() ? (0, _v2.jsx)(_v1, {}) : null);
  (0, _v3.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !1
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v2.jsx)(_v8, {})], 0);
}