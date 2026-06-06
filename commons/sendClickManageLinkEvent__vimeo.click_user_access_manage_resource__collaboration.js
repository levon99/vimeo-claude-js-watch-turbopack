{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => _v0?.toLowerCase().replace(/ /g, "_");
  _v0.s(["sendClickManageLinkEvent", 0, _v0 => {
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_user_access_manage_resource", 3, {
        product: "collaboration",
        path: window.parent.location.pathname,
        location: "top-level-view-team-member-permissions",
        team_owner_id: _v0.teamOwnerId,
        team_role: _v0.currentTeamUserRole,
        receiver_team_role: _v2(_v0.member.role),
        receiver_email: _v0.member.email,
        receiver_user_id: _v0.member.userId,
        resource_type: _v0.resource.type,
        resource_id: _v0.resource.id
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }, "sendClickUserAccessEmptyStateEvent", 0, _v0 => {
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_user_access_empty_state", 2, {
        product: "collaboration",
        path: window.parent.location.pathname,
        location: "top-level-view-team-member-permissions",
        team_owner_id: _v0.teamOwnerId,
        team_role: _v0.currentTeamUserRole,
        receiver_team_role: _v2(_v0.member.role),
        receiver_email: _v0.member.email,
        receiver_user_id: _v0.member.userId
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }, "sendClickUserAccessHierarchyEvent", 0, _v0 => {
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_user_access_hierarachy", 3, {
        product: "collaboration",
        path: window.parent.location.pathname,
        location: "top-level-view-team-member-permissions",
        team_owner_id: _v0.teamOwnerId,
        team_role: _v0.currentTeamUserRole,
        receiver_team_role: _v2(_v0.member.role),
        receiver_email: _v0.member.email,
        receiver_user_id: _v0.member.userId,
        resource_type: _v0.resource.type,
        resource_id: _v0.resource.id
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }]);
}