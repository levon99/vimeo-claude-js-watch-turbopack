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
  let _v11 = ({
    orgUuid: _v0,
    orgInternalId: _v1,
    isTeamInfoLoading: _v2 = !1
  }) => {
    let _v3 = (0, _v10.getTranslations)(),
      {
        teamSettingsResult: _v4,
        teamSettingsLoading: _v5
      } = (0, _v6.useGetOrgSettings)({
        orgUuid: _v0,
        settings: _v8.SETTING_FIELDS
      }),
      {
        teamSettingsUpdateError: _v6,
        teamSettingsUpdateLoading: _v7,
        onUpdateSetting: _v8
      } = (0, _v7.useUpdateOrgSettings)({
        orgUuid: _v0
      }),
      _v9 = (0, _v5.useCallback)(_v0 => {
        _v8((0, _v4.default)(_v0, _v8.SETTINGS_FIELDS_ORG));
      }, [_v8]);
    return (0, _v1.jsx)(_v9.PrivacyRestrictions, {
      preferencesUserId: _v1,
      teamSettingsResult: _v4 ?? null,
      teamSettingsLoading: _v5,
      hasEnterprise: !0,
      isTeamInfoLoading: _v2,
      teamSettingsUpdateError: _v6,
      teamSettingsUpdateLoading: _v7,
      onUpdateSetting: _v9,
      pageTitle: _v3.PrivacyRestrictions,
      pageDescription: _v3.DecideWhichPrivacySettingsWorkspacesCanUse,
      privacySectionTitle: _v3.VideoPrivacy,
      splitByRoles: !1,
      isOrgLevel: !0
    });
  };
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
    organizationInternalId: _v0,
    organizationUuid: _v1
  }) => (0, _v1.jsxs)(_v2.VStack, {
    alignItems: "flex-start",
    gap: 0,
    children: [(0, _v1.jsx)(_v13.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v11, {
      orgInternalId: _v0,
      orgUuid: _v1
    })]
  });
  (0, _v3.withPageSetup)(_v14.getOrgAndWspUuidServerSideProps, {
    requireLogin: !0
  }), _v15.getLayout = (_v0, _v1) => (0, _v12.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v15], 0);
}