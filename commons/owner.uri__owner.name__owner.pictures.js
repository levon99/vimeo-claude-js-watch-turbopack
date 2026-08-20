{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["owner.uri", "owner.name", "owner.pictures", "owner.account", "owner.email", "owner.max_team_members", "owner.metadata.connections.team_members.roles", "owner.metadata.connections.team_members.roles.applicable_permission_policies.regional_delivery.display_description", "owner.metadata.connections.team_members.roles.region_options", "team_data.id", "team_data.owner_id", "team_data.logo_uri", "team_data.accent_color", "team_data.team_name", "team_data.pictures.sizes", "team_data.team_showcase_id", "user_role", "untranslated_user_role", "current_team_size", "max_team_size", "seat_details", "team_members_count", "team_seats"],
    _v5 = ["email", "role", "permission_level", "permission_actions", "status", "invite_url", "has_accepted", "uri", "user.name", "user.pictures", "user.uri", "recently_reminded", "metadata.connections.permissions", "metadata.connections.personal_team_folder.uri", "metadata.connections.owner.email", "applicable_permission_policies.folder.name", "applicable_permission_policies.folder.display_name", "applicable_permission_policies.folder.display_description", "applicable_permission_policies.folder.uri", "applicable_permission_policies.regional_delivery.name", "applicable_permission_policies.regional_delivery.display_name", "applicable_permission_policies.regional_delivery.display_description", "applicable_permission_policies.regional_delivery.uri", "current_team_permission_policies", "region", "applicable_roles.permission_level", "applicable_roles.display_name", "applicable_roles.display_description", "applicable_roles.applicable_permission_policies", "applicable_roles.applicable_permission_policies.regional_delivery.display_description", "applicable_roles.region_options", "applicable_roles.is_disabled", "exclude_sso", "has_lms_user"];
  _v0.s(["RoleUpgradeField", 0, ["id", "user.name", "team_user.email", "role_name", "team_user.role", "status"], "TeamInfoFields", 0, _v4, "TeamMembershipFields", 0, _v5], 0);
  var _v6 = _v0.i(0);
  new URLSearchParams({
    fields: "name,uri,is_private_to_user",
    exclude_private_to_me_folder: "true",
    per_page: "5"
  }).toString();
  let _v7 = (_v0, _v1) => {
      let _v2,
        _v3 = [];
      for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0)) {
        let _v0 = _v0[_v0];
        switch (_v1 && (_v0 = _v1 + "[" + _v0 + "]"), Object.prototype.toString.call(_v0)) {
          case "[object Object]":
            _v2 = _v7(_v0, _v0);
            break;
          case "[object Array]":
            let _v0 = {};
            if (0 === _v0.length) _v0 = null;else {
              for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0[_v0] = _v0[_v0];
              _v2 = _v7(_v0, _v0);
            }
            break;
          default:
            _v2 = _v0 + "=" + encodeURIComponent(_v0);
        }
        null !== _v0 && _v3.push(_v2);
      }
      return _v3.join("&");
    },
    _v8 = (_v0, _v1) => {
      let _v2 = _v1.filter(_v0 => _v0.applied).map(_v0 => _v0.value);
      return _v2.length ? `&${_v0}=${_v2.join(",")}` : "";
    };
  async function _v9(_v0, _v1, _v2 = "GET", _v3, _v4) {
    _v0 = _v0.trim();
    try {
      if (!/^\//.test(_v0)) throw Error();
      let _v0 = await fetch(`//${_v1.apiUrl}${_v0}`, {
        method: _v2,
        headers: {
          Authorization: `jwt ${_v1.jwt}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.vimeo.*+json;version=3.4.1",
          "Accept-Language": _v1.locale || "en"
        },
        ...(_v3 ? {
          body: JSON.stringify(_v3)
        } : {}),
        ...(_v4 ? {
          signal: _v4
        } : {})
      });
      if (204 === _v0.status) return (0, _v1.camelize)({});
      let _v1 = await _v0.json();
      if (_v1.error) {
        let _v0 = Error(_v1.error);
        throw Object.assign(_v0, {
          errorCode: _v1.error_code
        }), _v0;
      }
      return (0, _v1.camelize)(_v1);
    } catch (_v0) {
      throw _v0;
    }
  }
  let _v10 = async _v0 => {
      let _v1 = encodeURIComponent(_v4.join(","));
      return _v9(`/users/${_v0.user?.id}/teams?fields=${_v1}`, _v0);
    },
    _v11 = _v0 => _v0.some(_v0 => _v0.applied),
    _v12 = async (_v0, _v1, _v2, _v3, _v4, _v5, _v6 = [], _v7 = [], _v8 = [], _v9) => {
      let _v10 = encodeURIComponent(_v5.join(",")),
        _v11 = _v2 ? `&page=${_v2}` : "",
        _v12 = _v23("search", _v3),
        _v13 = _v23("sort", _v4),
        _v14 = _v23("direction", _v5),
        _v15 = _v8("roles", _v11(_v6) ? _v6 : _v3.ROLES_FILTER_DEFAULT),
        _v16 = _v8("accesses", _v11(_v8) ? _v8 : []),
        _v17 = _v8("team_invite_statuses", _v7);
      return _v9(`${_v1}/teammembers?fields=${_v10}${"" + _v11 + _v12 + _v15 + _v16 + _v17 + _v13 + _v14 + "&bypass_beluga=true"}`, _v0, "GET", void 0, _v9);
    },
    _v13 = async (_v0, _v1, _v2) => {
      let _v3 = encodeURIComponent(_v6.AlbumsField.join(",")),
        _v4 = _v2 ? `&page=${_v2}` : "";
      return _v9(`${_v1}/albums?fields=${_v3}${_v4}&per_page=100`, _v0);
    },
    _v14 = async (_v0, _v1) => _v9(`/sso/${_v1}/connections?fields=is_active`, _v0, "GET"),
    _v15 = async (_v0, _v1) => {
      let _v2 = encodeURIComponent(_v5.join(","));
      return _v9(`${_v1}?fields=${_v2}`, _v0, "GET");
    },
    _v16 = async ({
      viewer: _v0,
      teamMemberUri: _v1,
      newRole: _v2,
      updatedRegion: _v3,
      policies: _v4,
      excludeSso: _v5
    }) => {
      let _v6 = encodeURIComponent(_v5.join(","));
      return _v9(`${_v1}?fields=${_v6}`, _v0, "PATCH", {
        role: _v2 ? _v2.toLowerCase().replaceAll(/\s/g, "_") : _v2,
        permission_policies: _v4,
        region: _v3,
        exclude_sso: _v5
      });
    },
    _v17 = async (_v0, _v1) => _v9(`${_v1}`, _v0, "DELETE"),
    _v18 = async (_v0, _v1, _v2) => _v9(`/users/${_v1}/team_groups${_v2}`, _v0),
    _v19 = async (_v0, _v1) => {
      let _v2 = await _v9(`/users/${_v1}/settings/billing/membership`, _v0);
      return (0, _v2.mapMembershipResponse)("membership" in _v2 ? _v2.membership : _v2);
    },
    _v20 = async (_v0, _v1, _v2) => _v9(`/me/subscriptions/${_v1}/withdrawal`, _v0, "POST", {
      receiver_email: _v2
    }),
    _v21 = async (_v0, _v1) => _v9(`/me/subscriptions/${_v1}/rejoin_offer`, _v0, "POST"),
    _v22 = async (_v0, _v1) => _v9(`/users/${_v1}/settings/billing/payment_methods`, _v0),
    _v23 = (_v0, _v1) => _v1 && _v1.length ? `&${_v0}=${_v1}` : "";
  _v0.s(["fetchTeamGroups", 0, _v18, "makeApiCall", 0, _v9, "requestAcceptRejoinOffer", 0, _v21, "requestAlbums", 0, _v13, "requestDeleteTeamMember", 0, _v17, "requestMembershipInfo", 0, _v19, "requestPaymentMethods", 0, _v22, "requestSSOConnections", 0, _v14, "requestSubscriptionWithdrawal", 0, _v20, "requestTeamMember", 0, _v15, "requestTeamMembers", 0, _v12, "requestTeamsInfo", 0, _v10, "requestUpdateTeamMember", 0, _v16, "serialize", 0, _v7, "updatePaymentMethodRequest", 0, (_v0, _v1) => fetch("/settings?action=update_membership_payment_method", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: _v7({
      payment_method_id: parseInt(_v1),
      token: _v0.xsrft
    })
  })], 0);
}