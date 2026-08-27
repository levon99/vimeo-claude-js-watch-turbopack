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
    ownerId: _v0,
    hasEnterprise: _v1 = !1,
    isTeamInfoLoading: _v2 = !1
  }) => {
    let _v3 = (0, _v8.getTranslations)(),
      {
        teamSettingsResult: _v4,
        teamSettingsLoading: _v5
      } = (0, _v5.useGetTeamSettings)({
        userId: _v0,
        settings: _v6.SETTING_FIELDS
      }),
      {
        teamSettingsUpdateError: _v6,
        teamSettingsUpdateLoading: _v7,
        onUpdateSetting: _v8
      } = (0, _v4.useUpdateTeamSettings)({
        userId: _v0
      });
    return (0, _v1.jsx)(_v7.PrivacyRestrictions, {
      preferencesUserId: _v0,
      teamSettingsResult: _v4 ?? null,
      teamSettingsLoading: _v5,
      hasEnterprise: _v1,
      isTeamInfoLoading: _v2,
      teamSettingsUpdateError: _v6,
      teamSettingsUpdateLoading: _v7,
      onUpdateSetting: _v8,
      pageTitle: _v3.PrivacyRestrictionsByRole,
      pageDescription: _v3.DecideWhichPrivacy,
      splitByRoles: !0
    });
  };
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = () => {
    let {
      teamInfo: {
        teamData: {
          ownerId: _v0
        }
      },
      teamCapabilities: {
        hasEnterprise: _v1
      },
      isTeamInfoLoading: _v2
    } = (0, _v2.useContext)(_v11.ManageTeamStateCtx);
    return (0, _v1.jsx)(_v9, {
      isTeamInfoLoading: _v2,
      ownerId: _v0,
      hasEnterprise: _v1
    });
  };
  (0, _v3.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v12.getLayout = _v0 => (0, _v10.getTeamSettingsPageLayout)(_v0, {
    contentColumn: "compactSettings"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}