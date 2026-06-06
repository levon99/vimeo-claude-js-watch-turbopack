{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = async _v0 => {
    try {
      let _v0 = await (0, _v1.getMePreferences)({
        select: [_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID, _v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID],
        baseUrl: _v0.baseUrl,
        headers: _v0.headers
      });
      if (!_v0 || !_v0[_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID] || !_v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]) return {
        notFound: !0
      };
      let _v1 = await (0, _v2.getWorkspace)({
          select: ["displayName", "metadata.interactions", "uri", "internalId"],
          where: {
            workspaceUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
          },
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        }),
        _v2 = _v1?.metadata?.interactions?.edit?.uri;
      if (!_v1 || !_v1.uri || _v2 !== _v1.uri) return {
        notFound: !0
      };
      return {
        props: {
          displayName: _v1.displayName,
          hasThemeSupport: !0,
          workspaceUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          workspaceInternalId: _v1.internalId,
          organizationUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]
        }
      };
    } catch {
      return {
        notFound: !0
      };
    }
  };
  _v0.s(["getWspServerSideProps", 0, _v4]);
}