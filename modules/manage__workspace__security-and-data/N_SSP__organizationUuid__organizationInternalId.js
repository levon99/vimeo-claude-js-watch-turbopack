{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ({
    organizationUuid: _v0,
    organizationInternalId: _v1,
    workspaceUuid: _v2
  }) => (0, _v1.jsx)(_v2.Box, {
    paddingTop: "lg",
    children: (0, _v1.jsx)(_v5.SecurityAndData, {
      isWorkspaceSettingsPage: !0,
      organizationUuid: _v0,
      organizationInternalId: _v1,
      workspaceUuid: _v2
    })
  });
  (0, _v3.withPageSetup)(_v6.getWspServerSideProps, {
    requireLogin: !0
  }), _v7.getLayout = (_v0, _v1) => (0, _v4.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}