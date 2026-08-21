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
    _v8 = _v8,
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  (0, _v4.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.sessionType,
      _v2 = _v0.params?.sessionId;
    if (!_v2 || !_v1) return {
      notFound: !0
    };
    try {
      if (_v0.query?.embed_forbidden !== "true") {
        let _v0 = await (0, _v5.getInteractionRoomRoomId)({
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
          select: ["settings.authOptions.registrant"],
          baseUrl: _v0.baseUrl,
          headers: _v0.headers,
          referrer: _v0.req.headers.referer
        });
        !0 === _v0.settings.authOptions.registrant && _v0.res.removeHeader("X-Frame-Options");
      }
    } catch (_v0) {
      if (!(await (0, _v12.canEmbed)(_v0))) {
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
        hasThemeSupport: !0
      }
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v3.useContext)(_v11.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      {
        sessionType: _v2,
        sessionId: _v3
      } = _v1.query,
      [_v4, _v5] = (0, _v3.useState)(_v7.PREVIEW_TYPE.FORM),
      [_v6, _v7] = (0, _v3.useState)(null),
      {
        setAuthRoomPassword: _v8,
        setPageReferrer: _v9
      } = (0, _v6.useGlobalStore)(_v0 => _v0),
      {
        isChannelActive: _v10,
        sendChannelMessage: _v11
      } = (0, _v10.useBroadcastChannel)({
        name: _v7.BROADCAST_CHANNEL_NAME
      });
    (0, _v3.useEffect)(() => {
      let _v0 = _v0 => new URLSearchParams(window.location.search).get(_v0),
        _v1 = _v0("pageReferrer"),
        _v2 = _v0("authRoomPassword"),
        _v3 = _v0("authRoomUnlistedHash"),
        _v4 = _v0("previewType") || _v7.PREVIEW_TYPE.FORM;
      _v1 && _v9(_v1);
      let _v5 = _v3 && _v3.length ? `${_v3}:${_v3}` : _v3;
      if (_v2 && _v2.length) {
        _v8(_v2);
        let _v0 = `${_v5}_rlepassword`;
        (0, _v8.setCookieByName)(_v0, _v2);
      }
      Object.values(_v7.PREVIEW_TYPE).includes(_v4) && _v5(_v4), _v7(_v5);
    }, [_v3, _v1.isReady, _v9, _v8]);
    let _v12 = (0, _v3.useCallback)(_v0 => {
      _v10 && _v0 && _v3 && _v11({
        type: _v7.BROADCAST_CHANNEL_MESSAGE_TYPE.NEW_DATA,
        payload: {
          sessionId: String(_v3),
          type: _v7.BROADCAST_CHANNEL_MESSAGE_PAYLOAD_TYPE.REGISTRANT_UUID,
          value: String(_v0)
        }
      });
    }, [_v10, _v11, _v3]);
    return _v0 && _v6 ? (0, _v1.jsx)(_v9.LeadCaptureView, {
      type: _v2,
      entityId: _v6,
      previewType: _v4,
      setLeadUuid: _v12
    }) : null;
  }], 0);
}