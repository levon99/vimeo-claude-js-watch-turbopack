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
    wsUuid: _v0,
    wsOwnerId: _v1,
    isTeamInfoLoading: _v2 = !1
  }) => {
    let _v3 = (0, _v9.getTranslations)(),
      {
        teamSettingsResult: _v4,
        teamSettingsLoading: _v5
      } = (0, _v5.useGetWsSettings)({
        wsUuid: _v0,
        settings: _v7.SETTINGS_FIELDS_WS
      }),
      {
        teamSettingsUpdateError: _v6,
        teamSettingsUpdateLoading: _v7,
        onUpdateSetting: _v8
      } = (0, _v6.useUpdateWsSettings)({
        wsUuid: _v0
      }),
      _v9 = (0, _v4.useCallback)(_v0 => !_v4?.orgAllowedPrivaciesAdmin?.includes(_v0), [_v4?.orgAllowedPrivaciesAdmin]),
      _v10 = (0, _v4.useCallback)(_v0 => _v4?.[_v0.orgAdminKey] === !1, [_v4]),
      _v11 = (0, _v4.useCallback)(_v0 => {
        if (_v9(_v0)) return _v3.ThisIsDisabledBy;
      }, [_v3.ThisIsDisabledBy, _v9]),
      _v12 = (0, _v4.useCallback)(_v0 => {
        if (_v10(_v0)) return _v3.ThisIsDisabledBy;
      }, [_v3.ThisIsDisabledBy, _v10]);
    return (0, _v1.jsx)(_v8.PrivacyRestrictions, {
      preferencesUserId: _v1,
      teamSettingsResult: _v4 ?? null,
      teamSettingsLoading: _v5,
      hasEnterprise: !0,
      isTeamInfoLoading: _v2,
      teamSettingsUpdateError: _v6,
      teamSettingsUpdateLoading: _v7,
      onUpdateSetting: _v8,
      pageTitle: _v3.PrivacyRestrictionsByRole,
      pageDescription: _v3.DecideWhichPrivacy,
      privacySectionTitle: _v3.VideoPrivacy,
      splitByRoles: !0,
      isAdminPrivacyDisabledExtra: _v9,
      getAdminPrivacyTooltipExtra: _v11,
      isAdminSharingOptionDisabledExtra: _v10,
      getAdminSharingOptionTooltipExtra: _v12,
      isWsLevel: !0
    });
  };
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = ({
    workspaceUuid: _v0,
    workspaceInternalId: _v1
  }) => (0, _v1.jsxs)(_v2.VStack, {
    alignItems: "flex-start",
    gap: 0,
    children: [(0, _v1.jsx)(_v12.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v10, {
      wsUuid: _v0,
      wsOwnerId: _v1
    })]
  });
  (0, _v3.withPageSetup)(_v13.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v14.getLayout = (_v0, _v1) => (0, _v11.getLayout)(_v0, _v1, _v11.WORKSPACE_COMPACT_SETTINGS_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v14], 0);
}