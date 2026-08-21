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
  _v0.i(0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = ({
    workspaceInternalId: _v0,
    workspaceUuid: _v1
  }) => {
    let _v2 = (0, _v2.useRouter)(),
      {
        loading: _v3,
        capabilities: _v4
      } = (0, _v5.useCapability)(["hasDataRetention"], _v0),
      {
        policy: _v5
      } = _v2.query;
    if (_v5 = Array.isArray(_v5) ? _v5[0] : _v5, !_v0 || !_v5 || _v3) return (0, _v1.jsx)(_v8.default, {});
    if (_v4?.hasDataRetention === !1) throw new _v6.UnauthorizedError();
    return (0, _v1.jsxs)(_v4.VStack, {
      alignItems: "flex-start",
      gap: 0,
      children: [(0, _v1.jsx)(_v10.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v3.Box, {
        padding: "xl",
        pt: 0,
        w: "100%",
        children: (0, _v1.jsx)(_v11.default, {
          userId: _v0,
          wsMode: !!_v1,
          policyId: parseInt(_v5)
        })
      })]
    });
  };
  (0, _v7.withPageSetup)(_v12.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v13.getLayout = (_v0, _v1) => (0, _v9.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v13], 0);
}