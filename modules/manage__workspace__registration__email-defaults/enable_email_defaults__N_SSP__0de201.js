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
    workspaceUuid: _v0,
    workspaceInternalId: _v1
  }) => {
    let _v2 = (0, _v7.useOrionSettingsFields)(["enable_email_defaults"]),
      _v3 = (0, _v6.useOrionLoading)();
    if (!_v3 && !_v2.enable_email_defaults) throw new _v3.UnauthorizedError();
    return (0, _v1.jsx)(_v2.Box, {
      paddingTop: "lg",
      children: (0, _v1.jsx)(_v5.EmailDefaults, {
        userId: _v1 ?? 0,
        isGateLoading: _v3 || !_v1,
        workspaceUuid: _v0,
        registrationHref: _v9.WORKSPACE_SETTINGS_ROUTES.REGISTRATION
      })
    });
  };
  (0, _v4.withPageSetup)(_v10.getWspServerSideProps, {
    requireLogin: !0,
    noIndex: !0
  }), _v11.getLayout = (_v0, _v1) => (0, _v8.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}