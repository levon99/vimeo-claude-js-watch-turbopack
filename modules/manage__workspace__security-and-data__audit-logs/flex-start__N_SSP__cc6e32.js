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
  let _v9 = ({
    workspaceUuid: _v0
  }) => (0, _v1.jsxs)(_v4.VStack, {
    alignItems: "flex-start",
    gap: 0,
    children: [(0, _v1.jsx)(_v7.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v3.Box, {
      padding: "xl",
      pt: 0,
      w: "100%",
      children: (0, _v1.jsx)(_v2.default, {
        workspaceUuid: _v0
      })
    })]
  });
  (0, _v5.withPageSetup)(_v8.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v9.getLayout = (_v0, _v1) => (0, _v6.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v9], 0);
}