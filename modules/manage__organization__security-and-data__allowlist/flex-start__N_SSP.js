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
  let _v10 = ({
    organizationInternalId: _v0
  }) => (0, _v1.jsxs)(_v5.VStack, {
    alignItems: "flex-start",
    gap: 0,
    children: [(0, _v1.jsx)(_v8.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v3.AllowlistProvider, {
      ownerId: _v0,
      children: (0, _v1.jsx)(_v4.Box, {
        padding: "xl",
        pt: 0,
        w: "100%",
        children: (0, _v1.jsx)(_v2.default, {
          ownerId: _v0
        })
      })
    })]
  });
  (0, _v6.withPageSetup)(_v9.getOrgAndWspUuidServerSideProps, {
    requireLogin: !0
  }), _v10.getLayout = (_v0, _v1) => (0, _v7.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v10], 0);
}