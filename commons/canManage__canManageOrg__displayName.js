{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ["canManage", "canManageOrg", "displayName", "icon", "icon.sizes", "logo", "logo.uri", "logo.sizes", "logo.defaultPicture", "orgUserRole", "orgUuid", "recordType", "teamDomain", "teamDomain.api", "teamDomain.site", "teamOwnerId", "untranslatedOrgUserRole", "untranslatedUserRole", "uri", "userRole", "tier"],
    _v4 = (_v0, _v1, _v2) => {
      let {
        data: _v3,
        error: _v4,
        isValidating: _v5
      } = (0, _v2.useGetUserWorkspaces)(() => _v0 ? {
        where: {
          userId: _v0
        },
        select: _v3
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      });
      return {
        workspaceItems: (0, _v1.useMemo)(() => {
          let _v0 = _v3?.data;
          if (!_v0) return null;
          let _v1 = _v2 ? ["Admin", "Owner"] : ["Admin", "Owner", "Contributor", "Contributor Plus"];
          return _v0.filter(_v0 => !_v1 || "user" === _v0.recordType).map(_v0 => {
            let _v1 = ["user_workspace", "workspace"].includes(_v0.recordType) ? _v0.icon?.sizes[0]?.link : _v0.logo?.sizes[0]?.link ?? _v0.logo?.baseLink;
            return {
              id: _v0.teamOwnerId,
              uri: _v0.uri,
              imgSrc: _v1,
              ownerAccount: _v0.tier,
              privateToMeFolderId: null,
              role: _v0.untranslatedUserRole,
              title: _v0.displayName
            };
          }).filter(({
            role: _v0,
            ownerAccount: _v1
          }) => _v1 ? _v1.includes(_v0) && "enterprise" === _v1 : "Viewer" !== _v0 && "Uploader" !== _v0);
        }, [_v3, _v2, _v1]),
        workspaceLoading: _v5,
        workspaceError: _v4
      };
    };
  _v0.s(["useFetchFormattedWorkspaces", 0, _v4], 0);
  var _v5 = _v0.i(0);
  let _v6 = ["nobody"];
  _v0.s(["useAllowedPrivacies", 0, ({
    userId: _v0,
    teamOwnerId: _v1,
    isMsTeamsApp: _v2
  }) => {
    let {
        workspaceLoading: _v3,
        workspaceItems: _v4
      } = _v4(_v0, _v2),
      _v5 = (0, _v1.useMemo)(() => {
        let _v0;
        if (!_v4) return null;
        let _v1 = _v4.find(_v0 => _v0.id === _v1);
        return _v1 && _v1 ? {
          workspaceUuid: (_v0 = _v1.uri).startsWith("/workspaces") ? _v0.split("/")[2] ?? "" : "",
          teamOwnerId: _v1,
          isAdmin: !!_v1.role && ["Admin", "Owner"].includes(_v1.role),
          isContributor: !!_v1.role && ["Contributor", "Contributor Plus"].includes(_v1.role)
        } : null;
      }, [_v4, _v1]),
      {
        teamSettingsLoading: _v6,
        teamSettingsResult: _v7
      } = (0, _v5.useGetTeamSettings)({
        userId: _v5?.workspaceUuid ? void 0 : _v5?.teamOwnerId,
        workspaceUuid: _v5?.workspaceUuid,
        settings: ["allowedPrivaciesAdmin", "allowedPrivaciesContributor"]
      });
    return {
      allowedPrivacies: (0, _v1.useMemo)(() => _v7 && _v5 ? _v5.isAdmin && _v7.allowedPrivaciesAdmin ? _v7.allowedPrivaciesAdmin : _v5.isContributor && _v7.allowedPrivaciesContributor ? _v7.allowedPrivaciesContributor : _v6 : _v6, [_v7, _v5]).filter(_v0 => "team" !== _v0),
      isLoading: _v3 || _v6
    };
  }], 0);
}