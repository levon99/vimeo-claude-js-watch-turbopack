{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "bad request error",
    _v6 = "SelectRole",
    _v7 = (_v0, _v1 = !1) => ({
      email: "",
      isEmailValid: !0,
      role: _v1 ? _v6 : _v0 ? _v3.TeamUserPermissionLevel.Viewer : _v3.TeamUserPermissionLevel.Admin
    });
  _v0.s(["BAD_REQUEST_ERROR", 0, _v5, "MAX_INVITE_COUNT", 0, 10, "MAX_SINGLE_SEAT_INVITE_COUNT", 0, 200, "SelectRole", 0, _v6, "TOAST_OOPS", 0, "TOAST_OOPS", "emptyInvite", 0, _v7, "filterInvitesWithEmails", 0, _v0 => _v0.filter(_v0 => !!_v0.email), "generateRandomHash", 0, () => Date.now().toString(36), "getInitialPendingInvites", 0, (_v0, _v1) => Array(Math.min(_v0, 3)).fill(_v7(_v1)), "getValidatedEmails", 0, _v0 => _v0.map((_v0, _v1) => {
    if (!_v0.email) return {
      ..._v0,
      isEmailValid: !0
    };
    if (_v0.findIndex(_v0 => _v0.email === _v0.email) !== _v1) return {
      ..._v0,
      isEmailValid: !1
    };
    let _v2 = document.querySelector(`#emailInput_${_v1}`);
    return {
      ..._v0,
      isEmailValid: _v2.checkValidity()
    };
  }), "inviteTeamMembers", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = (0, _v4.getReceiptValue)(_v4.RECEIPT_ONBOARDING_USER_EMAIL);
    return Promise.all(_v0.filter(_v0 => _v0.email.toLowerCase() !== _v5?.toLowerCase()).map(async _v0 => {
      try {
        let _v0 = _v0.role.toLowerCase();
        ("admin" === _v0 || "contributor" === _v0 || "viewer" === _v0 || "uploader" === _v0) && _v1.BigPictureClient.sendEvent(new _v1.Event("invite_user_to_team", 2, {
          product: "Workflow",
          path: window.location.pathname,
          location: "onboarding",
          team_id: _v1,
          role: _v0
        }));
      } catch (_v0) {
        console.error(_v0);
      }
      try {
        let _v0 = await fetch(`https://${_v2}/users/${_v1}/teammembers/${_v0.email}`, {
          method: "PUT",
          body: JSON.stringify({
            role: _v0.role
          }),
          headers: {
            Authorization: `jwt ${_v3}`,
            "Content-Type": "application/json"
          }
        });
        if (!_v0.ok) {
          if (_v1.BigPictureClient.sendEvent(new _v1.Event("onboarding.team_invites_email_error", 1, {
            product: "Onboarding",
            path: window.location.pathname,
            location: "onboarding"
          })), 400 === _v0.status) throw Error(`${_v5}: ${_v0.email}`);
          throw Error(`Failed adding team member ${_v0.email}: ${_v0.status} ${_v0.statusText}`);
        }
        return _v4?.({
          number_of_users_invited: 1,
          new_role: _v0.role.toLowerCase()
        }), _v0;
      } catch (_v0) {
        throw _v0;
      }
    }));
  }, "isOwnerEmail", 0, _v0 => {
    let _v1 = (0, _v4.getReceiptValue)(_v4.RECEIPT_ONBOARDING_USER_EMAIL);
    return !!_v1 && _v0.trim().toLowerCase() === _v1.toLowerCase();
  }, "isTestUser", 0, _v0 => !!/^.*\+idt617@vimeo\.com$/.exec(_v0), "setInviteCountInStorage", 0, _v0 => {
    let _v1 = new Date(new Date().getTime() + 0);
    _v2.default.set("post_checkout_teams_action", "invited", {
      expires: _v1
    }), window.localStorage.setItem("teams_onboarding_invites_count", JSON.stringify(_v0));
  }, "teamMemberRoleCount", 0, _v0 => {
    let _v1 = [];
    return _v1[_v3.TeamUserPermissionLevel.Admin] = 0, _v1[_v3.TeamUserPermissionLevel.Contributor] = 0, _v1[_v3.TeamUserPermissionLevel.Viewer] = 0, _v0.forEach(_v0 => {
      _v1[_v0.role] += 1;
    }), [_v1[_v3.TeamUserPermissionLevel.Admin], _v1[_v3.TeamUserPermissionLevel.Contributor], _v1[_v3.TeamUserPermissionLevel.Viewer]];
  }], 0);
  let _v8 = {
      WelcomePage: "welcome",
      TeamBranding: "branding",
      TeamInvites: "invites",
      "/": "LIHP"
    },
    _v9 = "onboarding";
  _v0.s(["sendBigPictureBackEvent", 0, (_v0, _v1) => {
    let {
        sectionIndex: _v2,
        stepIndex: _v3,
        flow: _v4
      } = _v0,
      _v5 = _v8[_v4[_v2][_v3].name],
      _v6 = _v8[_v1.flow[_v1.sectionIndex][_v1.stepIndex].name];
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("collaboration.click_back_onboarding", 1, {
        product: "Onboarding",
        path: window.parent.location.pathname,
        location: _v5,
        last_step: _v6
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }, "sendBigPictureSkipEvent", 0, (_v0, _v1, _v2) => {
    let _v3,
      {
        sectionIndex: _v4,
        stepIndex: _v5,
        flow: _v6
      } = _v0,
      _v7 = _v8[_v6[_v4][_v5].name];
    _v3 = _v2 ? _v8[_v4.REDIRECT_LOCATION_AFTER_ONBOARDING] : _v8[_v1.flow[_v1.sectionIndex][_v1.stepIndex].name];
    try {
      _v1.BigPictureClient.sendEvent(new _v1.Event("onboarding.click_skip_onboarding", 1, {
        product: "Onboarding",
        path: window.parent.location.pathname,
        location: _v7,
        next_step: _v3
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }, "trackCheckoutWithViewers", 0, (_v0, _v1, _v2, _v3) => {
    try {
      let _v0 = new _v1.Event("vimeo.checkout_with_viewers", 1, {
        product: _v9,
        path: window.parent.location.pathname,
        location: _v9,
        feature: _v9,
        subscription_type: _v0,
        team_owner_id: _v1,
        is_trial: _v2,
        number_of_seats: _v3
      });
      _v1.BigPictureClient.sendEvent(_v0);
    } catch (_v0) {
      console.error(_v0);
    }
  }, "trackCompletedOrder", 0, _v0 => {
    try {
      if ("" === _v0) throw Error("zuoraOrderId is empty");
      let _v0 = new _v1.Event("vimeo.zuora_order_completed", 2, {
        zuora_order_id: _v0,
        product: _v9,
        path: window.parent.location.pathname
      });
      _v1.BigPictureClient.sendEvent(_v0);
    } catch (_v0) {
      var _v1 = _v0.message;
      try {
        let _v0 = new _v1.Event("onboarding.event_error", 1, {
          path: window.parent.location.pathname,
          product: _v9,
          event_name: "vimeo.zuora_order_completed",
          error_message: _v1
        });
        _v1.BigPictureClient.sendEvent(_v0);
      } catch (_v0) {
        console.error(_v0);
      }
      console.error(_v0);
    }
  }, "trackTeamRoleChange", 0, (_v0, _v1, _v2) => {
    try {
      let _v0 = new _v1.Event("vimeo.change_team_member_role", 2, {
        product: _v9,
        path: window.parent.location.pathname,
        location: _v9,
        feature: _v9,
        old_role: _v0 === _v6 ? null : _v0.toLowerCase(),
        new_role: _v1.toLocaleLowerCase(),
        team_owner_id: _v2,
        actor_team_role: "owner",
        team_member_id: null,
        is_live_permission_granted: null
      });
      _v1.BigPictureClient.sendEvent(_v0);
    } catch (_v0) {
      console.error(_v0);
    }
  }], 0);
}