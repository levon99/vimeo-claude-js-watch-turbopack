{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2
    },
    ..._v3
  }) {
    return (0, _v3.measureLatency)("getVideoPrivacySelect", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/privacy_select?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v9.useGctlConfig)();
    return (0, _v6.default)(_v2 ? `/videos/${_v2.where.videoId}/privacy_select${(0, _v8.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v5({
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
  }
  "true" === _v2.default.env.STORYBOOK && (0, _v8.assignMswData)(_v10, {
    endpoint: "/videos/:videoId/privacy_select",
    method: "GET"
  }), "true" === _v2.default.env.STORYBOOK && (0, _v8.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/privacy_select${(0, _v8.serializeQuery)(_v0)}`, _v5({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/videos/:videoId/privacy_select",
    method: "GET"
  });
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["useClipPrivacyOptions", 0, (_v0, _v1 = !0, _v2 = "xs") => {
    let _v3 = (0, _v11.useViewer)(),
      {
        data: _v4,
        error: _v5,
        isLoading: _v6
      } = _v10(() => void 0 === _v0 || "string" == typeof _v0 && "" === _v0.trim() ? null : {
        where: {
          videoId: _v0
        },
        select: ["options"],
        headers: {
          Accept: `application/vnd.vimeo.*+json;version=${_v12.VIDEO_API_VERSION}`
        }
      });
    return {
      privacyOptions: (0, _v1.useMemo)(() => ((_v0, _v1 = !0, _v2) => {
        if (!_v0?.options?.length) return [];
        let _v3 = (0, _v12.videoPrivacyIcons)(_v2);
        return _v0.options.map(_v0 => {
          let _v1 = _v0.hasUpsell ? _v12.PRIVACY_VALUE_TO_UPSELL[_v0.value] : void 0;
          return {
            privacy: _v0.value,
            title: _v0.label,
            description: _v0.description,
            icon: _v3[_v0.value]?.icon,
            isDisabled: _v0.isDisabled,
            upsellEvent: _v1,
            showUpsell: _v0.hasUpsell,
            showUpsellModal: _v1 && _v0.hasUpsell && _v12.PAID_PRIVACY_UPSELL_MODAL_VALUES.has(_v0.value)
          };
        });
      })(_v4 ?? null, _v1, _v2).map(_v0 => ({
        ..._v0,
        title: "team" === _v0.privacy ? (0, _v13.getTranslations)().getTeamPrivacyTranslation(_v3?.teamUser?.teamName, _v3?.teamUser?.isWorkspace) : _v0.title
      })), [_v4, _v3?.teamUser?.teamName, _v3?.teamUser?.isWorkspace, _v1, _v2]),
      error: _v5,
      isLoading: _v6
    };
  }], 0);
}