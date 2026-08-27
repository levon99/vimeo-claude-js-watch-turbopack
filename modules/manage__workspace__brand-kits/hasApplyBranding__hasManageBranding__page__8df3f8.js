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
    _v11 = _v0.i(0);
  let _v12 = () => {
    let _v0 = (0, _v2.useContext)(_v9.ViewerContext),
      _v1 = _v0?.user?.id,
      _v2 = _v0?.teamUser?.ownerId || _v1,
      {
        capabilities: _v3,
        ready: _v4
      } = (0, _v6.useCapability)(["hasApplyBranding", "hasManageBranding"], _v2);
    if (!_v4) return (0, _v1.jsx)(_v5.BrandkitLoader, {
      type: "page"
    });
    if (!_v3?.hasApplyBranding) throw new _v7.UnauthorizedError();
    return (0, _v1.jsx)(_v3.Box, {
      padding: "lg",
      children: (0, _v1.jsx)(_v4.BrandCenter, {
        userId: _v2,
        allowManage: _v3?.hasManageBranding || !1
      })
    });
  };
  (0, _v8.withPageSetup)(_v11.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v12.getLayout = (_v0, _v1) => (0, _v10.getLayout)(_v0, _v1, _v10.WORKSPACE_ROOT_LIST_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}