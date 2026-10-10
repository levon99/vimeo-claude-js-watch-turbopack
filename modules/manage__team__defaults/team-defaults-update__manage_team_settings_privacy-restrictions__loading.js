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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = "team-defaults-update",
    _v20 = () => {
      let _v0 = (0, _v4.useToast)(),
        _v1 = (0, _v13.useViewer)(),
        _v2 = (0, _v11.useTeamDefaultsPageAvailability)(),
        _v3 = _v1?.user?.organizationId != null ? _v14.ORGANIZATION_SETTINGS_ROUTES.PRIVACY_RESTRICTIONS : "/manage/team/settings/privacy-restrictions",
        _v4 = (0, _v2.useCallback)((_v0, _v1 = !1) => {
          _v0.isActive(_v19) || _v0({
            title: _v0 ? _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v10.T.DefaultsUpdateSuccess, (0, _v1.jsx)("br", {}), _v10.T.DefaultsUpdateAppliedToAllDescription]
            }) : _v10.T.DefaultsUpdateSuccess : _v10.T.DefaultsUpdateError,
            id: _v19
          });
        }, [_v0]);
      return "loading" === _v2.status ? (0, _v1.jsx)(_v8.Spinner, {}) : "unavailable" === _v2.status ? (0, _v1.jsx)(_v12.ErrorPage, {
        error: new _v5.UnauthorizedError()
      }) : (0, _v1.jsxs)(_v15.SettingsPageLayout, {
        header: _v10.T.Defaults,
        maxWidth: (0, _v3.rem)(640),
        children: [(0, _v1.jsx)(_v17.WorkspaceVideoUploadsDefaults, {
          onDidUpdate: _v4,
          privacyRestrictionsHref: _v3
        }), (0, _v1.jsx)(_v16.WorkspaceReviewsDefaults, {
          onDidUpdate: _v4
        }), (0, _v1.jsx)(_v18.WorkspaceViewerPermissions, {
          onDidUpdate: _v4
        }), (0, _v1.jsx)(_v7.PresetsDefaultsCrossLink, {
          scope: "team",
          direction: "to-presets"
        })]
      });
    };
  (0, _v6.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v20.getLayout = _v9.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v20], 0);
}