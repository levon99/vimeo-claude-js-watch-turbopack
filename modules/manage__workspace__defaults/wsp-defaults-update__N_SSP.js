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
    _v12 = _v0.i(0);
  let _v13 = "wsp-defaults-update",
    _v14 = () => {
      let _v0 = (0, _v3.useToast)(),
        _v1 = (0, _v11.getTranslations)(),
        _v2 = (0, _v2.useCallback)(_v0 => {
          _v0.isActive(_v13) || _v0({
            title: _v0 ? _v1.WorkspaceDefaultsUpdateSuccess : _v1.SomethingWentWrong,
            id: _v13
          });
        }, [_v1, _v0]);
      return (0, _v1.jsxs)(_v7.SettingsPageLayout, {
        header: _v1.Defaults,
        maxWidth: (0, _v4.rem)(640),
        children: [(0, _v1.jsx)(_v9.WorkspaceVideoUploadsDefaults, {
          onDidUpdate: _v2
        }), (0, _v1.jsx)(_v8.WorkspaceReviewsDefaults, {
          onDidUpdate: _v2
        }), (0, _v1.jsx)(_v10.WorkspaceViewerPermissions, {
          onDidUpdate: _v2
        })]
      });
    };
  (0, _v5.withPageSetup)(_v12.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v14.getLayout = (_v0, _v1) => (0, _v6.getLayout)(_v0, _v1, _v6.WORKSPACE_STANDARD_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v14], 0);
}