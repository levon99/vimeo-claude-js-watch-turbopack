{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useContentSpaceEnabled", 0, function (_v0) {
    let {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v2.useOrionSettings)(),
      {
        capabilities: _v3,
        loading: _v4
      } = (0, _v1.useCapability)(["hasContentSpaceEnabled", "hasContentSpaceEnabledTeamGated"], _v0),
      _v5 = !!_v3?.hasContentSpaceEnabled;
    return {
      contentSpaceEnabled: _v1.enable_content_space_team_gate ? !!_v3?.hasContentSpaceEnabledTeamGated : _v5,
      notTeamGatedContentSpaceEnabled: _v5,
      loading: _v4 || _v2
    };
  }]);
}