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
    _v9 = _v0.i(0);
  _v0.i(0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = ({
    workspaceInternalId: _v0
  }) => {
    let {
      loading: _v1,
      capabilities: _v2
    } = (0, _v4.useCapability)(["hasLegalHoldsActive"], _v0);
    if (_v1) return (0, _v1.jsx)(_v7.default, {});
    if (_v2?.hasLegalHoldsActive === !1) throw new _v5.UnauthorizedError();
    return (0, _v1.jsxs)(_v3.VStack, {
      alignItems: "flex-start",
      gap: 0,
      children: [(0, _v1.jsx)(_v9.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v2.Box, {
        padding: "xl",
        pt: 0,
        w: "100%",
        children: (0, _v1.jsx)(_v10.default, {
          userId: _v0
        })
      })]
    });
  };
  (0, _v6.withPageSetup)(_v11.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v12.getLayout = (_v0, _v1) => (0, _v8.getLayout)(_v0, _v1, _v8.WORKSPACE_DETAILS_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}