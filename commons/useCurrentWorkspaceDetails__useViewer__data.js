{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useCurrentWorkspaceDetails", 0, () => {
    let _v0 = (0, _v2.useViewer)(),
      {
        data: _v1,
        ..._v2
      } = (0, _v1.useGetMePreferences)(() => _v0 ? {
        select: [_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID, _v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
      } : null, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      });
    return {
      organizationUuid: _v1?.[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID],
      workspaceUuid: _v1?.[_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
      ..._v2
    };
  }]);
}