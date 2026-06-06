{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v0 => ({
      team_owner_id: _v0.teamData.ownerId,
      actor_team_role: _v0.untranslatedUserRole.toLowerCase()
    }),
    _v7 = async (_v0, _v1 = {}, _v2 = 1) => {
      try {
        let _v0 = new _v1.Event(_v0, _v2, {
          product: _v2.EVENT_PRODUCT,
          feature: _v2.EVENT_FEATURE,
          path: window.parent.location.pathname,
          ..._v1
        });
        _v1.BigPictureClient.sendEvent(_v0);
      } catch (_v0) {
        console.error(_v0);
      }
    },
    _v8 = async (_v0, _v1 = {}, _v2 = 1) => {
      try {
        let _v0 = new _v1.Event(_v0, _v2, {
          page: _v2.EVENT_FEATURE,
          feature: _v2.EVENT_FEATURE,
          ..._v1
        });
        _v1.BigPictureClient.sendEvent(_v0);
      } catch (_v0) {
        console.error(_v0);
      }
    },
    _v9 = async (_v0, _v1 = {}, _v2 = 1) => {
      try {
        let _v0 = new _v1.Event(_v0, _v2, {
          ..._v1
        });
        _v1.BigPictureClient.sendEvent(_v0);
      } catch (_v0) {
        console.error(_v0);
      }
    };
  _v0.s(["getNewGlobalCapability", 0, _v0 => {
    if (!_v0) return null;
    for (let _v0 of _v0) if (_v0.isRegionToggle) {
      if (_v0.checked && _v0.value === _v2.COUNTRY_CODE_CHINA) return "can_view_videos_in_china";
    } else if (_v0.checked) {
      if ("China Delivery Publisher" === _v0.value) return "can_share_videos_in_china";else if ("China Delivery Manager" === _v0.value) return "can_share_videos_and_manage_users_in_china";
    }
    return null;
  }, "getOldGlobalCapability", 0, _v0 => _v0.region === _v2.COUNTRY_CODE_CHINA ? "can_view_videos_in_china" : _v0.currentTeamPermissionPolicies.some(_v0 => "China Delivery Manager" === _v0.name) ? "can_share_videos_and_manage_users_in_china" : _v0.currentTeamPermissionPolicies.some(_v0 => "China Delivery Publisher" === _v0.name) ? "can_share_videos_in_china" : null, "initAnalytics", 0, (_v0, _v1, _v2) => ({
    trackUploadTeamLogo: _v0 => _v7(_v2.TeamEvents.UPLOAD_TEAM_LOGO, {
      location: _v2.EventLocation.SETTINGS,
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackUploadTeamLogoFromModal: _v0 => _v7(_v2.TeamEvents.UPLOAD_TEAM_LOGO, {
      location: _v2.EventLocation.LOGO_MODAL,
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackLogoEditButton: _v0 => _v7(_v2.TeamEvents.LOGO_EDIT_BUTTON, {
      location: _v2.EventLocation.SETTINGS,
      ..._v6(_v0),
      ..._v0
    }, 2),
    trackScrollTeamLogo: _v0 => _v7(_v2.TeamEvents.SCROLL_TEAM_LOGO, {
      location: _v2.EventLocation.LOGO_MODAL,
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackRemoveTeamLogo: _v0 => _v7(_v2.TeamEvents.REMOVE_TEAM_LOGO, {
      location: _v2.EventLocation.LOGO_MODAL,
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackLogoModalCancel: _v0 => _v7(_v2.TeamEvents.LOGO_MODAL_CANCEL, {
      location: _v2.EventLocation.LOGO_MODAL,
      ..._v6(_v0),
      ..._v0
    }, 2),
    trackTeamBrandingUpdated: _v0 => _v7(_v2.TeamEvents.TEAM_SETTING_UPDATED, {
      location: _v2.EventLocation.SETTINGS,
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackTeamAccentColor: _v0 => _v7(_v2.TeamEvents.SET_TEAM_ACCENT_COLOR, {
      location: _v2.EventLocation.SETTINGS,
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackSelectTeamShowcase: _v0 => _v7(_v2.TeamEvents.SET_TEAM_SHOWCASE, {
      location: _v2.EventLocation.SETTINGS,
      ..._v6(_v0),
      ..._v0
    }, 2),
    trackOpenTeamShowcaseDropdown: _v0 => _v7(_v2.TeamEvents.OPEN_TEAM_SHOWCASE, {
      location: _v2.EventLocation.SETTINGS,
      ..._v6(_v0),
      ..._v0
    }, 2),
    trackTeamMemberChangeRole: _v0 => _v7(_v2.TeamEvents.CHANGE_TEAM_MEMBER_ROLE, {
      location: _v2.EventLocation.MEMBERS,
      is_live_permission_granted: null,
      ..._v6(_v0),
      ..._v0
    }, 7),
    trackRemoveTeamMember: _v0 => _v7(_v2.TeamEvents.REMOVE_TEAM_MEMBER, {
      location: _v2.EventLocation.MEMBERS,
      ..._v6(_v0),
      ..._v0
    }, 5),
    trackInviteNewTeamMember: _v0 => _v7(_v2.TeamEvents.INVITE_NEW_TEAM_MEMBER, {
      location: _v2.EventLocation.INVITE_MODAL,
      is_live_permission_granted: null,
      entry_point: null,
      ..._v6(_v0),
      ..._v0
    }, 8),
    trackCopyInviteLink: _v0 => _v7(_v2.TeamEvents.COPY_TEAM_INVITE_LINK, {
      location: _v2.EventLocation.MEMBERS,
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackSendInviteReminder: _v0 => _v7(_v2.TeamEvents.SEND_TEAM_INVITE_REMINDER, {
      location: _v2.EventLocation.MEMBERS,
      ..._v6(_v0),
      ..._v0
    }, 2),
    trackUpsellClick: _v0 => _v8(_v2.TeamEvents.UPSELL_CLICK, {
      location: "banner",
      target: "/upgrade",
      name: "team_management_upgrade",
      copy: "upgrade",
      type: "upsell",
      ..._v0
    }, 63),
    trackTeamGroupsRowClick: () => _v8(_v2.TeamEvents.GENERAL_CLICK, {
      location: "team_groups_row",
      target: "/manage/team/groups",
      name: "manage_team_group_users",
      copy: "team_group_name",
      type: "general"
    }, 30),
    trackManageTeamPageView: _v0 => _v7(_v2.TeamEvents.MANAGE_TEAM_PAGE_VIEW, {
      ..._v6(_v0),
      ..._v0
    }, 3),
    trackDownloadUsersClick: () => _v8(_v2.TeamEvents.GENERAL_CLICK, {
      target: "/manage/team/members",
      location: "header",
      name: "download_users",
      copy: _v4.T.DownloadUsers,
      type: "general"
    }, 45),
    trackBillingAction: _v0 => {
      _v9(_v2.BILLING_ACTION, {
        page: _v2.BILLING_ACTION_PAGE,
        error_id: null,
        error_copy: null,
        ...{
          seat_total: _v1.seatCount,
          subscription_end_date: (0, _v5.convertDateToMMDDYY)(_v1.endDate),
          renewal_date: (0, _v5.convertDateToMMDDYY)(_v1.renewalDate),
          autorenewal: _v1.hasAutorenew,
          consumer_renewal_prohibited: _v1.isImpactedByGermanConsumerLaw && _v1.userEntity === _v3.UserEntity.Personal
        },
        ...{
          quota_allocated: _v2.space?.max,
          quota_used: _v2.space?.used
        },
        ..._v0
      }, 1);
    },
    trackRoleUpgradeRequests: _v0 => {
      ((_v0, _v1 = {}, _v2 = 1) => {
        try {
          let _v0 = new _v1.Event(_v0, _v2, {
            ..._v1
          });
          _v1.BigPictureClient.sendEvent(_v0);
        } catch (_v0) {
          console.error(_v0);
        }
      })(_v2.TeamEvents.ROLE_UPGRADE, {
        team_owner_id: _v0.teamData.ownerId,
        team_owner_subscription: _v0.owner.account,
        ..._v0
      }, 4);
    }
  })]);
}