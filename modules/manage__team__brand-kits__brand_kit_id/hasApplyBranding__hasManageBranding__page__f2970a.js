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
    _v10 = _v0.i(0);
  function _v11() {
    let _v0 = (0, _v3.useContext)(_v10.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      _v2 = _v0?.user?.id,
      _v3 = _v0?.teamUser?.ownerId || _v2,
      {
        capabilities: _v4,
        ready: _v5
      } = (0, _v6.useCapability)(["hasApplyBranding", "hasManageBranding"], _v3),
      _v6 = !_v5 || !_v1.isReady,
      _v7 = _v1.query.brand_kit_id;
    if (_v6) return (0, _v1.jsx)(_v5.BrandkitLoader, {
      type: "page"
    });
    if (!_v4?.hasApplyBranding) throw new _v7.UnauthorizedError();
    return (0, _v1.jsx)(_v4.SingleBrandkit, {
      brandkitId: _v7,
      userId: _v3,
      allowManage: _v4?.hasManageBranding || !1
    });
  }
  (0, _v8.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v11.getLayout = _v9.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}