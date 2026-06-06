{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "team_context",
    _v5 = (0, _v3.createNullObject)(["joined_team_at", "resource_permission_level", "team_id", "team_size", "team_owner_id", "team_role", "team_subscription_type"]);
  _v0.s(["buildTeamBpContext", 0, _v0 => ({
    team_context: new _v2.EventContext(_v4, 7, {
      ..._v5,
      ..._v0
    })
  }), "buildTeamBpContextFromTeam", 0, _v0 => ({
    team_context: new _v2.EventContext(_v4, 7, {
      is_team_member: !!_v0,
      team_owner_id: _v0?.ownerId || null,
      team_subscription_type: null,
      team_role: null,
      team_size: _v0?.currentTeamSize || null,
      team_id: null,
      resource_permission_level: null,
      joined_team_at: null
    })
  }), "buildTeamBpContextFromTeamUser", 0, (_v0, _v1) => ({
    team_context: new _v2.EventContext(_v4, 7, {
      is_team_member: !!_v0,
      team_owner_id: _v0?.ownerId || null,
      team_subscription_type: _v0?.accountType || null,
      team_role: (0, _v1.default)(_v0?.plainTextPermissionLevel?.toLowerCase()) || null,
      team_size: _v0?.currentTeamSize || null,
      team_id: _v0?.teamId || null,
      resource_permission_level: _v1 || null,
      joined_team_at: _v0?.joinedOn ? new Date(_v0?.joinedOn).getTime() : null
    })
  })]);
}