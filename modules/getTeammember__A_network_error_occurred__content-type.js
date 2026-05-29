{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  async function _v8({
    baseUrl: _v0,
    select: _v1,
    where: {
      code: _v2
    },
    ..._v3
  }) {
    return (0, _v6.measureLatency)("getTeammember", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teammembers/${_v2}?fields=${_v1.map(_v7.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v7.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v7.deepCamelCase)(_v1);
    });
  }
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11(_v0) {
    if ((0, _v5.isLoggedOut)(_v0.req)) return !0;
    try {
      await (0, _v3.fetchAndFormatCapabilties)({
        jwt: _v0.jwt,
        capabilities: ["canViewStaffOnlyPage"],
        apiUrl: _v0.baseUrl
      });
    } catch (_v0) {
      return !0;
    }
    return !1;
  }
  async function _v12(_v0) {
    let {
      redirect: _v1
    } = _v0.query;
    if (_v1 && "string" == typeof _v1) {
      let _v0 = new URLSearchParams(_v1.split("?")[1]).get("code");
      if (!_v0) return !0;
      try {
        let _v0 = await _v8({
          select: ["uri"],
          where: {
            code: _v0
          },
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        return !!(_v0 && _v0.uri);
      } catch (_v0) {
        return !1;
      }
    }
    return !0;
  }
  (0, _v4.withPageSetup)(async _v0 => {
    var _v1;
    return (await _v11(_v0)) ? (await _v12(_v0)) ? (_v1 = _v0, (0, _v10.isReferrerAllowedToIFrame)(_v1.req.headers.referer) || _v1.res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups"), {
      props: {
        layoutOptions: {
          globalNotifications: !1
        },
        metadata: {
          className: "JoinFullPageMetadata"
        }
      }
    }) : {
      notFound: !0
    } : {
      redirect: {
        destination: "/",
        statusCode: 302
      }
    };
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let {
      iframe: _v0,
      popup: _v1
    } = (0, _v2.useRouter)().query;
    return (0, _v1.jsx)(_v9.AuthModal, {
      authType: "join",
      disableDismiss: !0,
      isFullScreen: !_v0 && !_v1
    });
  }], 0);
}