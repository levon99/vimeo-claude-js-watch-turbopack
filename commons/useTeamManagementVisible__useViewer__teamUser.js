{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useTeamManagementVisible", 0, function () {
    let _v0 = (0, _v2.useViewer)(),
      _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        contentSpaceEnabled: _v2,
        isTeamGateEnabled: _v3,
        loading: _v4
      } = (0, _v3.useContentSpaceEnabled)(_v1),
      _v5 = _v0?.teamUser?.plainTextPermissionLevel;
    return {
      isTeamManagementVisible: _v5 !== _v1.TeamUserPermissionLevel.Viewer && _v5 !== _v1.TeamUserPermissionLevel.Contributor && _v5 !== _v1.TeamUserPermissionLevel.ContributorPlus && (!_v3 || _v2),
      loading: _v4
    };
  }]);
}