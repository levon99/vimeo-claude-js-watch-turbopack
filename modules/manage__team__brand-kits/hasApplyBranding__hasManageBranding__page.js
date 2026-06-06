{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9() {
    let _v0 = (0, _v2.useContext)(_v8.ViewerContext),
      _v1 = _v0?.user?.id,
      _v2 = _v0?.teamUser?.ownerId || _v1,
      {
        capabilities: _v3,
        ready: _v4
      } = (0, _v5.useCapability)(["hasApplyBranding", "hasManageBranding"], _v2);
    return _v4 ? (0, _v1.jsx)(_v3.BrandCenter, {
      userId: _v2,
      allowManage: _v3?.hasManageBranding || !1
    }) : (0, _v1.jsx)(_v4.BrandkitLoader, {
      type: "page"
    });
  }
  (0, _v6.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0
  }), _v9.getLayout = _v7.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v9], 0);
}