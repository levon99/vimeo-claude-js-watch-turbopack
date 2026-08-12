{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useMergeLibrariesVisible", 0, function (_v0, _v1) {
    let _v2 = (0, _v1.useViewer)(),
      {
        contentSpaceEnabled: _v3,
        isTeamGateEnabled: _v4,
        loading: _v5
      } = (0, _v2.useContentSpaceEnabled)(_v0),
      _v6 = 0 === (_v1?.currentTeamSize ?? _v2?.team?.currentTeamSize ?? 0);
    return {
      isMergeLibrariesVisible: _v4 && _v3 && !_v5 && _v6,
      isSoleTeamOwner: _v6,
      contentSpaceEnabled: _v3,
      isTeamGateEnabled: _v4,
      loading: _v5
    };
  }]);
}