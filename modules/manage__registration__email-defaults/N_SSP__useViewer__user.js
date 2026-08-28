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
  let _v9 = () => {
    let _v0 = (0, _v8.useViewer)(),
      _v1 = _v0?.user,
      _v2 = _v0?.teamUser?.ownerId ?? _v1?.id,
      {
        settings: _v3,
        isLoadingResponse: _v4
      } = (0, _v7.useOrionSettings)();
    if (!_v4 && !_v3.enable_email_defaults) throw new _v2.UnauthorizedError();
    return (0, _v1.jsx)(_v4.EmailDefaults, {
      userId: _v2 ?? 0,
      isGateLoading: _v4 || !_v2,
      registrationHref: _v6.REGISTRATION_SETTINGS_URL
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
  }), _v9.getLayout = _v5.getSharedContentLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v9], 0);
}