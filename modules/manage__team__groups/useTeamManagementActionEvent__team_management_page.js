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
  _v0.s(["useTeamManagementActionEvent", 0, () => {
    let _v0 = (0, _v7.useViewer)(),
      _v1 = (0, _v2.useMemo)(() => (0, _v4.buildTeamBpContextFromTeamUser)(_v0?.teamUser), [_v0?.teamUser]),
      {
        pathname: _v2
      } = (0, _v1.useRouter)(),
      _v3 = (0, _v2.useMemo)(() => (0, _v5.buildWebBpContext)({
        path: _v2,
        page_name: "team_management_page"
      }), [_v2]);
    return (0, _v2.useCallback)(({
      name: _v0,
      version: _v1,
      actionContext: _v2,
      productAnalyticsContext: _v3,
      additionalFields: _v4
    }) => {
      let _v5 = (0, _v3.buildActionBpContext)({
          feature: null,
          ..._v2
        }),
        _v6 = (0, _v8.buildProductAnalyticsContext)(_v3),
        _v7 = (0, _v8.buildThirdPartyContext)(),
        _v8 = {
          ..._v5,
          ..._v6,
          ..._v3,
          ..._v1,
          ..._v7
        };
      (0, _v6.sendBpEventWithContexts)(_v0, _v8, _v1, _v4);
    }, [_v1, _v3]);
  }]);
}