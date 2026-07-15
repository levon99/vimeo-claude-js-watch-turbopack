{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useGetWsSettings", 0, ({
    wsUuid: _v0,
    settings: _v1 = []
  }) => {
    let [_v2, {
      error: _v3,
      data: _v4,
      loading: _v5
    }] = (0, _v2.useGetWorkspaceSettingsLazy)();
    return (0, _v1.useEffect)(() => {
      _v0 && _v2 ? _v2({
        select: _v1 || [],
        where: {
          workspaceUuid: _v0
        }
      }) : Promise.resolve();
    }, [_v0]), {
      teamSettingsResult: _v4,
      teamSettingsLoading: _v5,
      teamSettingsError: _v3
    };
  }]);
}