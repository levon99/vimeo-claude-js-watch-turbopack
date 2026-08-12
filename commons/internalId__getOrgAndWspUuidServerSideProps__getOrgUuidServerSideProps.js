{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = async _v0 => {
      try {
        let _v0 = await (0, _v1.getMePreferences)({
          select: [_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID, _v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        if (!_v0 || !_v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]) return {
          notFound: !0
        };
        let _v1 = await (0, _v2.getOrganization)({
          select: ["uri", "internalId"],
          where: {
            orgUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]
          },
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        if (!_v1 || !_v1.uri) return {
          notFound: !0
        };
        return {
          props: {
            hasThemeSupport: !0,
            organizationUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID],
            organizationInternalId: _v1.internalId,
            workspaceUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID] ?? ""
          }
        };
      } catch {
        return {
          notFound: !0
        };
      }
    },
    _v5 = async _v0 => {
      try {
        let _v0 = await (0, _v1.getMePreferences)({
          select: [_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID, _v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        if (!_v0 || !_v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID] || !_v0[_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]) return {
          notFound: !0
        };
        let _v1 = await (0, _v2.getOrganization)({
          select: ["uri", "internalId"],
          where: {
            orgUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]
          },
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        if (!_v1 || !_v1.uri) return {
          notFound: !0
        };
        return {
          props: {
            hasThemeSupport: !0,
            organizationUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID],
            organizationInternalId: _v1.internalId,
            workspaceUuid: _v0[_v3.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
          }
        };
      } catch {
        return {
          notFound: !0
        };
      }
    };
  _v0.s(["getOrgAndWspUuidServerSideProps", 0, _v5, "getOrgUuidServerSideProps", 0, _v4]);
}