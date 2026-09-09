{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["canManage", "canManageOrg", "displayName", "icon", "logo", "orgUserRole", "recordType", "teamDomain.site", "teamOrWorkspaceName", "teamOwnerId", "untranslatedOrgUserRole", "untranslatedUserRole", "uri", "userRole"];
  _v0.s(["useGetAllWorkspacesForUser", 0, () => {
    let _v0 = (0, _v3.useViewer)(),
      _v1 = (0, _v1.useCallback)(() => _v0?.user?.id ? {
        where: {
          userId: _v0.user?.id
        },
        select: _v4
      } : null, [_v0?.user?.id]);
    return (0, _v2.useGetUserWorkspaces)(_v1, {
      revalidateOnFocus: !1
    });
  }]);
}