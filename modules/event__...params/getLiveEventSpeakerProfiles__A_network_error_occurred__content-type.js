{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      liveEventId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v2.measureLatency)("getLiveEventSpeakerProfiles", "GET", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v2}/speaker_profiles?${(0, _v3.searchQueryString)(_v3)}&fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      liveEventId: _v3
    },
    ..._v4
  }) {
    return (0, _v2.measureLatency)("postLiveEventSpeakerProfiles", "POST", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v3}/speaker_profiles?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v3.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.i(0), _v0.i(0);
  var _v8 = _v0.i(0);
  _v0.s(["useGetLiveEventSpeakerProfiles", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v8.useGctlConfig)();
    return (0, _v7.default)(_v2 ? `/live_events/${_v2.where.liveEventId}/speaker_profiles${(0, _v1.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v4({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, "usePostLiveEventSpeakerProfiles", 0, function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v8.useGctlConfig)(),
      [_v4, _v5] = (0, _v1.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v5({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = (0, _v14.rem)(204),
    _v18 = (0, _v14.rem)(277);
  _v0.s(["SpeakerProfileCard", 0, function ({
    name: _v0 = "Name (required)",
    role: _v1 = "",
    description: _v2 = "",
    thumbnailUrl: _v3 = null,
    width: _v4 = _v17,
    height: _v5 = _v18,
    ..._v6
  }) {
    return (0, _v9.jsxs)(_v11.Flex, {
      direction: "column",
      gap: "xs",
      p: "xs",
      children: [(0, _v9.jsx)(_v11.Flex, {
        width: _v4,
        height: _v5,
        align: "center",
        backgroundColor: "fill-component",
        borderColor: "input-stroke",
        borderRadius: (0, _v14.rem)(20),
        borderStyle: "solid",
        borderWidth: (0, _v14.rem)(1),
        justify: "center",
        overflow: "hidden",
        ..._v6,
        children: _v3 ? (0, _v9.jsx)(_v12.Image, {
          alt: (0, _v16.translate)({
            singular: "Speaker avatar",
            dictionary: {
              es: {
                singular: "Avatar del orador"
              },
              "de-DE": {
                singular: "Sprecher-Avatar"
              },
              "fr-FR": {
                singular: "Avatar de l'intervenant"
              },
              "ja-JP": {
                singular: "スピーカーのアバター"
              },
              "ko-KR": {
                singular: "발표자 아바타"
              },
              "pt-BR": {
                singular: "Avatar do palestrante"
              },
              "zh-CN": {
                singular: "演讲者头像"
              }
            }
          }),
          height: "100%",
          objectFit: "cover",
          src: _v3,
          width: "100%"
        }) : (0, _v9.jsx)(_v10.Box, {
          color: "icon-secondary",
          children: (0, _v9.jsx)(_v15.PersonUserFilled, {})
        })
      }), (0, _v9.jsxs)(_v11.Flex, {
        direction: "column",
        p: "xs",
        width: _v4,
        children: [(0, _v9.jsx)(_v13.Text, {
          variant: "heading-md",
          children: _v0
        }), (0, _v9.jsx)(_v13.Text, {
          variant: "body-sm",
          children: _v1
        }), (0, _v9.jsx)(_v13.Text, {
          variant: "body-md",
          mt: (0, _v14.rem)(8),
          children: _v2
        })]
      })]
    });
  }], 0);
}