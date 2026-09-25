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
    _v15 = _v0.i(0);
  let _v16 = "team-defaults-update",
    _v17 = () => {
      let _v0 = (0, _v4.useToast)(),
        _v1 = (0, _v10.useTeamDefaultsPageAvailability)(),
        _v2 = (0, _v2.useCallback)(_v0 => {
          _v0.isActive(_v16) || _v0({
            title: _v0 ? _v9.T.DefaultsUpdateSuccess : _v9.T.DefaultsUpdateError,
            id: _v16
          });
        }, [_v0]);
      return "loading" === _v1.status ? (0, _v1.jsx)(_v7.Spinner, {}) : "unavailable" === _v1.status ? (0, _v1.jsx)(_v11.ErrorPage, {
        error: new _v5.UnauthorizedError()
      }) : (0, _v1.jsxs)(_v12.SettingsPageLayout, {
        header: _v9.T.Defaults,
        maxWidth: (0, _v3.rem)(640),
        children: [(0, _v1.jsx)(_v14.WorkspaceVideoUploadsDefaults, {
          onDidUpdate: _v2
        }), (0, _v1.jsx)(_v13.WorkspaceReviewsDefaults, {
          onDidUpdate: _v2
        }), (0, _v1.jsx)(_v15.WorkspaceViewerPermissions, {
          onDidUpdate: _v2
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
  }), _v17.getLayout = _v8.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v17], 0);
}