{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0, _v1) {
    let _v2 = _v0.pathname,
      _v3 = "true" === _v0.searchParams.get("isPrivate");
    return /^\/search/.test(_v2) ? "search" : /^\/staff_picks/.test(_v2) ? "staff_picks" : /^\/categories/.test(_v2) ? "category_page" : /^\/watch\/?$/.test(_v2) ? "watchpage" : "/" === _v2 || /^\/home\/?$/.test(_v2) ? "homepage" : /^\/create\/edit(\/|$)/.test(_v2) ? "editor" : /^\/shared-with-me(\/|$)/.test(_v2) ? "shared_with_me" : /^\/user\/[^/]+\/folder\//.test(_v2) ? _v3 ? "my_library" : "team_library" : /^\/library(\/|$)/.test(_v2) ? _v1?.is_team_user == null ? "unknown" : _v1.is_team_user ? "team_library" : "my_library" : /^\/\d+\/?$/.test(_v2) ? "clip_page" : /^\/[^/]+\/?$/.test(_v2) ? "user_profile" : "unknown";
  }
  _v0.s(["deriveCanonicalPage", 0, _v2, "deriveIsInGracePeriod", 0, function () {
    return !("u" < typeof document) && "1" === _v1.default.get("is_in_grace_period");
  }, "deriveLibraryReferrerPage", 0, function (_v0) {
    if ("sidebar" === _v0) return "sidebar";
    if ("u" < typeof document || !document.referrer) return "unknown";
    try {
      let _v0 = new URL(document.referrer);
      if ("vimeo.com" !== _v0.hostname && !_v0.hostname.endsWith(".vimeo.com")) return "external";
      let _v1 = _v0.pathname;
      if ("/" === _v1 || "/home" === _v1 || "/home/" === _v1) return "homepage";
      return "unknown";
    } catch {
      return "unknown";
    }
  }, "deriveLibraryType", 0, function (_v0) {
    return _v0.isSharedWithMe ? "shared_with_me" : !0 === _v0.isPrivateToUser ? "my_library" : !1 === _v0.isPrivateToUser || _v0.hasContentSpaceEnabled ? "team_library" : "my_library";
  }, "deriveReferrerPage", 0, function () {
    if ("u" < typeof document || !document.referrer) return "unknown";
    try {
      let _v0 = new URL(document.referrer);
      if ("vimeo.com" !== _v0.hostname && !_v0.hostname.endsWith(".vimeo.com")) return "external";
      return _v2(_v0);
    } catch {
      return "unknown";
    }
  }, "deriveViewerAuthStatus", 0, function (_v0) {
    return _v0?.user ? ["free", "basic"].includes(_v0.teamUser?.accountType ?? _v0.user.account) ? "free" : "paid" : "logged_out";
  }, "extractSafeViewerInfo", 0, function (_v0) {
    if (!_v0) return {
      user_id: null,
      vuid: null,
      team_id: null,
      team_owner_id: null,
      actor_id: null,
      organization_id: null,
      account_type: null,
      is_team_user: !1,
      is_free_trial: !1,
      country: null,
      is_mobile: !1
    };
    let _v1 = _v0.user?.id?.toString() ?? null,
      _v2 = _v0.vuid,
      _v3 = _v0.teamUser?.teamId?.toString() ?? null,
      _v4 = _v0.teamUser?.ownerId?.toString() ?? null,
      _v5 = _v4 ? `T_${_v4}` : _v1 ? `U_${_v1}` : null,
      _v6 = _v0.user?.organizationId ?? null,
      _v7 = _v0.teamUser?.accountType?.toString() ?? _v0.user?.account?.toString() ?? null,
      _v8 = _v0.user?.isTeamUser ?? !1,
      _v9 = _v0.user?.isFreeTrial ?? !1;
    return {
      user_id: _v1,
      vuid: _v2,
      team_id: _v3,
      team_owner_id: _v4,
      actor_id: _v5,
      organization_id: _v6,
      account_type: _v7,
      is_team_user: _v8,
      is_free_trial: _v9,
      country: _v0.location,
      is_mobile: _v0.isMobile
    };
  }]);
}