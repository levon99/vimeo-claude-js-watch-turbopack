{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  (0, _v2.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.sessionType,
      _v2 = _v0.params?.sessionId;
    if (!_v2 || !_v1) return {
      notFound: !0
    };
    try {
      _v0.query?.embed_forbidden !== "true" && (await (0, _v3.getInteractionRoomRoomId)({
        where: {
          roomId: _v2,
          roomType: _v1
        },
        query: {
          roomPassword: _v0.query?.room_password ?? _v0.query?.auth_room_password,
          roomHashedPassword: _v0.query?.room_hashed_password,
          roomUnlistedHash: _v0.query?.room_unlisted_hash ?? _v0.query?.auth_room_unlisted_hash,
          roomJwtToken: _v0.query?.room_jwt_token
        },
        select: ["uri"],
        baseUrl: _v0.baseUrl,
        headers: _v0.headers,
        referrer: _v0.req.headers.referer
      })), _v0.res.removeHeader("X-Frame-Options");
    } catch (_v0) {
      if (!(await (0, _v5.canEmbed)(_v0))) {
        let _v0 = new URLSearchParams(_v0.query);
        return _v0.set("embed_forbidden", "true"), {
          redirect: {
            destination: `${_v0.resolvedUrl.split("?")[0]}?${_v0.toString()}`,
            permanent: !1
          }
        };
      }
      _v0.res.removeHeader("X-Frame-Options");
    }
    return {
      props: {
        isIframe: !0,
        isThemePersistent: !1,
        hasThemeSupport: !0,
        layoutOptions: {
          globalNotifications: !1
        }
      }
    };
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => (0, _v1.jsx)(_v4.LiveInteractionToolsRoot, {
    ..._v0
  })], 0);
}