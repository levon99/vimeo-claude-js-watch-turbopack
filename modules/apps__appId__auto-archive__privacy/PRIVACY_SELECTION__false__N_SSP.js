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
  let {
      MSTeamProduction: _v10,
      MSTeamDevelopment: _v11
    } = _v7.PARTNER_APP_ID,
    _v12 = ({
      appId: _v0,
      msTeamsParams: _v1
    }) => {
      let _v2 = (0, _v8.useViewer)();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v5.AppSettingsPage, {
          viewer: _v2,
          appId: _v0,
          msTeamsParams: _v1,
          step: "PRIVACY_SELECTION"
        })
      });
    };
  (0, _v2.withPageSetup)(async ({
    params: _v0,
    query: _v1
  }) => {
    let _v2 = Number(_v0?.appId),
      _v3 = {
        msTeamsEncryptedTeamId: String(_v1?.ms_teams_encrypted_team_id ?? ""),
        msTeamsEncryptedTeamUserId: String(_v1?.ms_teams_encrypted_team_user_id ?? ""),
        teamOwnerId: (0, _v6.parseTeamOwnerId)(_v1?.team_owner_id ?? null),
        adminOnboarding: (0, _v6.parseBoolean)(_v1?.admin_onboarding ?? "false")
      },
      _v4 = ![_v10, _v11].includes(_v2) || (_v3.adminOnboarding ? !!_v3.msTeamsEncryptedTeamId : !!(_v3.msTeamsEncryptedTeamUserId && _v3.teamOwnerId));
    return _v2 && _v4 && (0, _v9.isValidAppId)(_v2) ? {
      props: {
        hasThemeSupport: !0,
        appId: _v2,
        msTeamsParams: _v3
      }
    } : {
      notFound: !0
    };
  }, {
    requireLogin: !0,
    inlineViewer: !0
  }), _v12.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v3.DefaultNavigation, {
      hasSearch: !1,
      isSideNavActive: !1
    }), _v0, (0, _v1.jsx)(_v4.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}