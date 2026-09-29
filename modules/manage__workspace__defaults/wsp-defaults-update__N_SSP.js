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
    _v13 = _v0.i(0);
  let _v14 = "wsp-defaults-update",
    _v15 = () => {
      let _v0 = (0, _v3.useToast)(),
        _v1 = (0, _v12.getTranslations)(),
        _v2 = (0, _v2.useCallback)(_v0 => {
          _v0.isActive(_v14) || _v0({
            title: _v0 ? _v1.WorkspaceDefaultsUpdateSuccess : _v1.SomethingWentWrong,
            id: _v14
          });
        }, [_v1, _v0]);
      return (0, _v1.jsxs)(_v7.SettingsPageLayout, {
        header: _v1.Defaults,
        maxWidth: (0, _v4.rem)(640),
        children: [(0, _v1.jsx)(_v10.WorkspaceVideoUploadsDefaults, {
          onDidUpdate: _v2,
          privacyRestrictionsHref: _v8.WORKSPACE_SETTINGS_ROUTES.PRIVACY_RESTRICTIONS
        }), (0, _v1.jsx)(_v9.WorkspaceReviewsDefaults, {
          onDidUpdate: _v2
        }), (0, _v1.jsx)(_v11.WorkspaceViewerPermissions, {
          onDidUpdate: _v2
        })]
      });
    };
  (0, _v5.withPageSetup)(_v13.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v15.getLayout = (_v0, _v1) => (0, _v6.getLayout)(_v0, _v1, _v6.WORKSPACE_STANDARD_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v15], 0);
}