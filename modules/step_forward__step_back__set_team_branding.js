{
  "use strict";

  var _v1,
    _v2 = ((_v1 = {}).STEP_FORWARD = "step_forward", _v1.STEP_BACK = "step_back", _v1.SET_TEAM_BRANDING = "set_team_branding", _v1.SET_TEAM_BRANDING_SUGGESTION = "set_team_branding_suggestion", _v1.SKIP_STEP = "skip_step", _v1);
  _v0.s(["Actions", () => _v2, "updateTeamBranding", 0, (_v0, _v1) => {
    _v0({
      type: "set_team_branding",
      payload: _v1
    });
  }, "updateTeamBrandingSuggestion", 0, (_v0, _v1) => {
    _v0({
      type: "set_team_branding_suggestion",
      payload: _v1
    });
  }]);
}