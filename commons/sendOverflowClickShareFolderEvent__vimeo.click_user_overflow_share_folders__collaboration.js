{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["sendOverflowClickShareFolderEvent", 0, (_v0, _v1) => {
    let _v2 = _v1.uri.match(/(\d+)/g)?.[0],
      _v3 = _v1.user?.uri.match(/(\d+)/g)?.[0],
      _v4 = _v1.permissionLevel.toLowerCase().replace(/ /g, "_"),
      _v5 = _v1.email;
    (({
      teamId: _v0,
      teamMemberId: _v1,
      actorTeamRole: _v2,
      role: _v3,
      shareeId: _v4,
      shareeEmail: _v5
    }) => {
      try {
        _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_user_overflow_share_folders", 3, {
          product: "collaboration",
          path: window.parent.location.pathname,
          location: "bulk_share_invite_modal",
          team_id: _v0,
          team_member_id: _v1,
          actor_team_role: _v2,
          role: _v3,
          sharee_id: _v4,
          sharee_email: _v5
        }));
      } catch (_v0) {
        console.error(_v0);
      }
    })({
      teamId: parseInt(_v2),
      teamMemberId: parseInt(_v3),
      actorTeamRole: _v0 ? "admin" : "owner",
      role: _v4,
      shareeId: parseInt(_v3),
      shareeEmail: _v5
    });
  }, "sendOverflowClickViewTeamMembersAccessEvent", 0, (_v0, _v1, _v2) => {
    let _v3 = (0, _v2.getIdFromLink)(_v2.uri),
      _v4 = _v1.permissionLevel.toLowerCase().replace(/ /g, "_"),
      _v5 = (0, _v2.getIdFromLink)(_v1.user?.uri);
    var _v6 = _v3,
      _v7 = _v0 ? "admin" : "owner",
      _v8 = _v4,
      _v9 = _v5,
      _v10 = _v1.email;
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_user_overflow_view_user_access", 2, {
        product: "collaboration",
        path: window.parent.location.pathname,
        location: "view_team_members_access",
        team_owner_id: _v6,
        team_role: _v7,
        receiver_team_role: _v8,
        receiver_user_id: _v9,
        receiver_email: _v10
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }, "sendOverflowExitShareModalEvent", 0, (_v0, _v1) => {
    (({
      team_owner_id: _v0,
      actorTeamRole: _v1
    }) => {
      try {
        _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.click_exit_bulk_share_folders", 1, {
          product: "collaboration",
          path: window.parent.location.pathname,
          location: "bulk_share_invite_modal",
          feature: "team_management",
          actor_team_role: _v1,
          team_owner_id: _v0
        }));
      } catch (_v0) {
        console.error(_v0);
      }
    })({
      team_owner_id: _v1,
      actorTeamRole: _v0 ? "admin" : "owner"
    });
  }, "sendTeamManagementViewActivityEvent", 0, () => {
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.select_members_overflow_view_team_activity", 1, {
        product: "collaboration",
        path: window.parent.location.pathname,
        location: "view_team_members_activity"
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }, "sendViewTeamMembersActivityEvent", 0, _v0 => {
    let _v1 = _v0.permissionLevel.toLowerCase().replace(/ /g, "_"),
      _v2 = (0, _v2.getIdFromLink)(_v0.user?.uri),
      _v3 = _v0.email;
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("vimeo.select_user_overflow_view_user_activity", 1, {
        product: "collaboration",
        path: window.parent.location.pathname,
        location: "view_team_members_activity",
        receiver_team_role: _v1,
        receiver_user_id: _v2,
        receiver_email: _v3
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }]);
}