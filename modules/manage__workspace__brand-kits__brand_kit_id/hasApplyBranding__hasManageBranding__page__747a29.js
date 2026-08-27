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
    _v12 = _v0.i(0);
  let _v13 = () => {
    let _v0 = (0, _v3.useContext)(_v10.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      _v2 = _v0?.user?.id,
      _v3 = _v0?.teamUser?.ownerId || _v2,
      {
        capabilities: _v4,
        ready: _v5
      } = (0, _v7.useCapability)(["hasApplyBranding", "hasManageBranding"], _v3),
      _v6 = !_v5 || !_v1.isReady,
      _v7 = _v1.query.brand_kit_id;
    if (_v6) return (0, _v1.jsx)(_v6.BrandkitLoader, {
      type: "page"
    });
    if (!_v4?.hasApplyBranding) throw new _v8.UnauthorizedError();
    return (0, _v1.jsx)(_v4.Box, {
      padding: "xl",
      children: (0, _v1.jsx)(_v5.SingleBrandkit, {
        brandkitId: _v7,
        userId: _v3,
        allowManage: _v4?.hasManageBranding || !1
      })
    });
  };
  (0, _v9.withPageSetup)(_v12.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v13.getLayout = (_v0, _v1) => (0, _v11.getLayout)(_v0, _v1, _v11.WORKSPACE_DETAILS_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v13], 0);
}