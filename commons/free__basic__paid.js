{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return _v0?.user ? ["free", "basic"].includes(_v0.teamUser?.accountType ?? _v0.user.account) ? "free" : "paid" : "logged_out";
  }
  function _v6(_v0, _v1) {
    let _v2 = _v0.pathname,
      _v3 = "true" === _v0.searchParams.get("isPrivate");
    return /^\/search/.test(_v2) ? "search" : /^\/staff_picks/.test(_v2) ? "staff_picks" : /^\/categories/.test(_v2) ? "category_page" : /^\/watch\/?$/.test(_v2) || /^\/watch\//.test(_v2) ? "watchpage" : /^\/analytics(\/|$)/.test(_v2) || /^\/manage\/organization\/analytics(\/|$)/.test(_v2) ? "analytics" : /^\/manage\/team(\/|$)/.test(_v2) ? "manage_team" : /^\/manage\/workspace(\/|$)/.test(_v2) ? "manage_workspace" : /^\/manage\/organization(\/|$)/.test(_v2) ? "manage_organization" : "/" === _v2 || /^\/home\/?$/.test(_v2) ? "homepage" : /^\/create\/edit(\/|$)/.test(_v2) ? "editor" : /^\/shared-with-me(\/|$)/.test(_v2) ? "shared_with_me" : /^\/my-feed(\/|$)/.test(_v2) ? "feed" : /^\/recently-deleted(\/|$)/.test(_v2) ? "recently_deleted" : /^\/channels\/staffpicks(\/|$)/.test(_v2) ? "staff_picks" : /^\/channels(\/|$)/.test(_v2) ? "channel_page" : /^\/apps(\/|$)/.test(_v2) ? "app_center" : /^\/library\/events(\/|$)/.test(_v2) ? "live_events" : /^\/library\/event_series(\/|$)/.test(_v2) ? "event_series" : /^\/library\/showcases(\/|$)/.test(_v2) ? "showcases" : /^\/user\/[^/]+\/folder\//.test(_v2) ? _v3 ? "my_library" : "team_library" : /^\/library(\/|$)/.test(_v2) ? _v1?.is_team_user == null ? "unknown" : _v1.is_team_user ? "team_library" : "my_library" : /^\/\d+(?:\/[0-9a-fA-F]+)?\/?$/.test(_v2) || /^\/video\/\d+(?:\/[0-9a-fA-F]+)?\/?$/.test(_v2) || /^\/share\/[^/]+\/?$/.test(_v2) ? "clip_page" : /^\/album\/\d+(?:\/[0-9a-fA-F]+)?\/?$/.test(_v2) || /^\/showcase\/[^/]+(?:\/[^/]+)?\/?$/.test(_v2) ? "showcases" : /^\/channels\/[^/]+(\/|$)/.test(_v2) ? "channel_page" : /^\/[^/]+\/?$/.test(_v2) ? "user_profile" : "unknown";
  }
  _v0.s(["deriveCanonicalPage", 0, _v6, "deriveIsInGracePeriod", 0, function () {
    return !("u" < typeof document) && "1" === _v4.default.get("is_in_grace_period");
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
      if (("/" === _v0.pathname || "" === _v0.pathname) && !_v0.search && !_v0.hash) return "origin_only";
      return _v6(_v0);
    } catch {
      return "unknown";
    }
  }, "deriveViewerAuthStatus", 0, _v5, "extractSafeViewerInfo", 0, function (_v0) {
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
  }], 0);
  let _v7 = ["uri"];
  function _v8(_v0, _v1, _v2) {
    let _v3 = null !== _v0 ? `picox:cold_content:${_v0}:${_v1}` : null,
      _v4 = function (_v0) {
        if (null === _v0) return null;
        try {
          let _v0 = window.localStorage.getItem(_v0);
          if (null === _v0) return null;
          let _v1 = JSON.parse(_v0);
          if ("boolean" != typeof _v1?.v || "number" != typeof _v1?.e || Date.now() >= _v1.e) return window.localStorage.removeItem(_v0), null;
          return _v1.v;
        } catch {
          return null;
        }
      }(_v3),
      _v5 = _v2 && null !== _v3 && null === _v4,
      {
        data: _v6,
        isLoading: _v7
      } = (0, _v2.useGetUserVideos)(() => _v5 && null !== _v0 ? {
        where: {
          userId: _v0
        },
        select: _v7,
        query: {
          filter: _v1,
          perPage: 1
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateIfStale: !1
      });
    return (0, _v1.useEffect)(() => {
      _v5 && null !== _v3 && _v6 && function (_v0, _v1) {
        try {
          window.localStorage.setItem(_v0, JSON.stringify({
            v: _v1,
            e: Date.now() + 0
          }));
        } catch {}
      }(_v3, (_v6.total ?? 0) > 0);
    }, [_v5, _v3, _v6]), !!_v2 && (null !== _v4 ? _v4 : _v7 ? null : (_v6?.total ?? 0) > 0);
  }
  _v0.s(["useColdContentContext", 0, () => {
    let _v0 = (0, _v3.useViewer)(),
      _v1 = _v0?.user?.id ?? null,
      _v2 = !!_v1 && "paid" !== _v5(_v0);
    return {
      has_cold_storage_videos: _v8(_v1, "cold_storage", _v2),
      has_cold_privacy_videos: _v8(_v1, "cold_privacy", _v2)
    };
  }], 0);
}