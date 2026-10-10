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
    _v14 = _v0.i(0);
  let _v15 = "wsp-defaults-update",
    _v16 = () => {
      let _v0 = (0, _v3.useToast)(),
        _v1 = (0, _v13.getTranslations)(),
        _v2 = (0, _v2.useCallback)((_v0, _v1 = !1) => {
          _v0.isActive(_v15) || _v0({
            title: _v0 ? _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v1.WorkspaceDefaultsUpdateSuccess, (0, _v1.jsx)("br", {}), _v1.WorkspaceDefaultsUpdateAppliedToAllDescription]
            }) : _v1.WorkspaceDefaultsUpdateSuccess : _v1.SomethingWentWrong,
            id: _v15
          });
        }, [_v1, _v0]);
      return (0, _v1.jsxs)(_v8.SettingsPageLayout, {
        header: _v1.Defaults,
        maxWidth: (0, _v4.rem)(640),
        children: [(0, _v1.jsx)(_v11.WorkspaceVideoUploadsDefaults, {
          onDidUpdate: _v2,
          privacyRestrictionsHref: _v9.WORKSPACE_SETTINGS_ROUTES.PRIVACY_RESTRICTIONS
        }), (0, _v1.jsx)(_v10.WorkspaceReviewsDefaults, {
          onDidUpdate: _v2
        }), (0, _v1.jsx)(_v12.WorkspaceViewerPermissions, {
          onDidUpdate: _v2
        }), (0, _v1.jsx)(_v6.PresetsDefaultsCrossLink, {
          scope: "workspace",
          direction: "to-presets"
        })]
      });
    };
  (0, _v5.withPageSetup)(_v14.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v16.getLayout = (_v0, _v1) => (0, _v7.getLayout)(_v0, _v1, _v7.WORKSPACE_STANDARD_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v16], 0);
}