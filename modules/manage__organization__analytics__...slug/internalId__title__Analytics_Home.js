{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = {
      hasThemeSupport: !0,
      hasEppo: !0,
      organizationInternalId: 0,
      organizationUuid: ""
    },
    _v10 = async _v0 => {
      try {
        let _v0 = await (0, _v6.getMePreferences)({
          select: [_v8.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID],
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        if (!_v0 || !_v0[_v8.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]) return {
          props: _v9,
          notFound: !0
        };
        let _v1 = await (0, _v7.getOrganization)({
          select: ["uri", "internalId"],
          where: {
            orgUuid: _v0[_v8.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]
          },
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        if (!_v1 || !_v1.uri) return {
          props: _v9,
          notFound: !0
        };
        return {
          props: {
            hasThemeSupport: !0,
            hasEppo: !0,
            organizationInternalId: _v1.internalId,
            organizationUuid: _v0[_v8.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID]
          }
        };
      } catch {
        return {
          props: _v9,
          notFound: !0
        };
      }
    };
  var _v11 = _v0.i(0);
  function _v12(_v0) {
    let _v1 = (0, _v5.useViewer)();
    return (0, _v1.jsx)(_v3.AnalyticsLayout, {
      ..._v0,
      viewer: _v1
    });
  }
  _v12.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("title", {
        children: "Analytics Home"
      })
    }), (0, _v1.jsx)(_v11.ReactRouterLayout, {
      path: ["/manage/organization/analytics/teams/:teamOwnerId/users/:userOrVideoId", "/manage/organization/analytics/teams/:teamOwnerId/videos/:userOrVideoId", "/manage/organization/analytics/teams/:teamOwnerId/users", "/manage/organization/analytics/teams/:teamOwnerId/videos", "/manage/organization/analytics/teams", "/manage/organization/analytics/video", "/manage/organization/analytics/region", "/manage/organization/analytics/source", "/manage/organization/analytics/device", "/manage/organization/analytics/date", "/manage/organization/analytics/bandwidth/video", "/manage/organization/analytics/bandwidth", "/manage/organization/analytics/v2/:reportName", "/manage/organization/analytics"],
      children: _v0
    })]
  }), (0, _v4.withPageSetup)(_v10, {
    requireLogin: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}