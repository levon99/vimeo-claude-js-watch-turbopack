{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ["contentSpaceEnabled", "contentSpaceEnabledTeamGated", "libraryMigrationStarted", "explicitlyCreatedTeam"];
  _v0.s(["CONTENT_SPACE_CAPABILITY_FIELDS", 0, _v6], 0), _v0.s(["useContentSpaceEnabled", 0, function (_v0) {
    let _v1 = (0, _v5.useViewer)(),
      _v2 = null != _v0 ? (0, _v1.getUserId)(`${_v0}`) : _v1?.user?.id ?? null,
      _v3 = (0, _v4.useOrionSetting)("enable_content_space_team_gate"),
      _v4 = (0, _v3.useOrionLoading)(),
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v2.useGetUserCapabilities)(() => null != _v2 && _v2 > 0 ? {
        select: _v6,
        where: {
          userId: _v2
        }
      } : null),
      _v7 = _v3 ?? !1,
      _v8 = !!_v5?.contentSpaceEnabled;
    return {
      contentSpaceEnabled: _v7 ? !!_v5?.contentSpaceEnabledTeamGated : _v8,
      notTeamGatedContentSpaceEnabled: _v8,
      isTeamGateEnabled: _v7,
      loading: _v6 || _v4
    };
  }], 0);
}