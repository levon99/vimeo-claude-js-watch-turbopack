{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useUpdateWsSettings", 0, ({
    wsUuid: _v0
  }) => {
    let [_v1, _v2] = (0, _v1.usePatchWorkspaceSettings)(),
      {
        loading: _v3,
        error: _v4
      } = _v2;
    return {
      teamSettingsUpdateError: _v4,
      teamSettingsUpdateLoading: _v3,
      onUpdateSetting: async _v0 => {
        await _v1({
          where: {
            workspaceUuid: _v0
          },
          variables: _v0
        });
      }
    };
  }]);
}