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
  let _v12 = ({
    organizationUuid: _v0
  }) => {
    let {
        teamSettingsResult: _v1,
        teamSettingsLoading: _v2
      } = (0, _v6.useGetOrgSettings)({
        orgUuid: _v0,
        settings: ["reviewPagePreferences"]
      }),
      {
        teamSettingsUpdateError: _v3,
        teamSettingsUpdateLoading: _v4,
        onUpdateSetting: _v5
      } = (0, _v7.useUpdateOrgSettings)({
        orgUuid: _v0
      });
    return _v2 || !_v1 ? (0, _v1.jsx)(_v8.LoadSpinner, {}) : (0, _v1.jsxs)(_v3.VStack, {
      alignItems: "flex-start",
      gap: 0,
      children: [(0, _v1.jsx)(_v10.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v2.Box, {
        padding: "xl",
        pt: 0,
        w: "100%",
        children: (0, _v1.jsx)(_v5.ReviewPageSettingsComponent, {
          redirectPath: "/manage/organization/security-and-data",
          teamSettingsResult: _v1,
          teamSettingsUpdateError: _v3,
          teamSettingsUpdateLoading: _v4,
          onUpdateSetting: _v5,
          showApplyToAll: !0
        })
      })]
    });
  };
  (0, _v4.withPageSetup)(_v11.getOrgAndWspUuidServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v12.getLayout = (_v0, _v1) => (0, _v9.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}