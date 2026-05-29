{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11(_v0) {
    if ((0, _v5.isLoggedOut)(_v0.req)) return !0;
    try {
      await (0, _v4.fetchAndFormatCapabilties)({
        jwt: _v0.jwt,
        capabilities: ["canViewStaffOnlyPage"],
        apiUrl: _v0.baseUrl
      });
    } catch (_v0) {
      return !0;
    }
    return !1;
  }
  (0, _v6.withPageSetup)(async _v0 => {
    var _v1;
    return (await _v11(_v0)) ? (_v1 = _v0, (0, _v10.isReferrerAllowedToIFrame)(_v1.req.headers.referer) ? _v1.res.removeHeader("x-frame-options") : _v1.res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups"), {
      props: {
        layoutOptions: {
          globalNotifications: !1
        },
        metadata: {
          className: "LoginFullPageMetadata"
        }
      }
    }) : {
      redirect: {
        destination: function (_v0) {
          let _v1 = "1" === _v0.player,
            _v2 = _v0.clip_id;
          if (_v1 && _v2) return `/${_v2}`;
          let _v3 = _v0.redirect ?? "",
            _v4 = (0, _v9.isVimeoRedirectableUrl)(_v3) ? _v3 : "/";
          return _v4.startsWith("http://help.vimeo.com") || _v4.startsWith("https://help.vimeo.com") || _v4.startsWith("http://vimeo.zendesk.com") || _v4.startsWith("https://vimeo.zendesk.com") ? `/help/sso?redirect_to=${encodeURIComponent(_v4)}` : _v4;
        }(_v0.query),
        statusCode: 302
      }
    };
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0,
      _v1 = (0, _v3.useRouter)(),
      {
        iframe: _v2,
        popup: _v3
      } = _v1.query,
      _v4 = "1" === _v2 || "1" === _v3;
    if (_v4) {
      let {
        redirect: _v0
      } = (0, _v8.getRedirectAndTypeFromQueryParams)(new URLSearchParams((0, _v2.encode)(_v1.query)));
      _v0 = _v0 || void 0;
    }
    return (0, _v1.jsx)(_v7.AuthModal, {
      authType: "login",
      disableDismiss: !0,
      isFullScreen: !_v4,
      redirectUrlAfterSocialLogin: _v0
    });
  }], 0);
}