{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2
    },
    ..._v3
  }) {
    return (0, _v2.measureLatency)("getVideoPrivacySelect", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/privacy_select?fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  var _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["useClipPrivacyOptions", 0, (_v0, _v1 = !0, _v2 = "xs") => {
    let _v3 = (0, _v8.useViewer)(),
      {
        data: _v4,
        error: _v5,
        isLoading: _v6
      } = function (_v0) {
        let _v1 = "function" == typeof _v0 ? _v0() : _v0,
          {
            baseUrl: _v2,
            jwt: _v3,
            xVimeoPage: _v4,
            locale: _v5
          } = (0, _v7.useGctlConfig)();
        return (0, _v5.default)(_v1 ? `/videos/${_v1.where.videoId}/privacy_select${(0, _v6.serializeQuery)(_v1)}` : () => null, _v1 ? () => _v4({
          ..._v1,
          headers: {
            ..._v1.headers,
            "Content-Type": "application/json",
            Authorization: _v3 ? `jwt ${_v3}` : "",
            "Vimeo-Page": `${_v4}`,
            "Accept-Language": _v5 ?? "en"
          },
          baseUrl: _v2
        }) : null, void 0);
      }(() => void 0 === _v0 || "string" == typeof _v0 && "" === _v0.trim() ? null : {
        where: {
          videoId: _v0
        },
        select: ["options"],
        headers: {
          Accept: `application/vnd.vimeo.*+json;version=${_v9.VIDEO_API_VERSION}`
        }
      });
    return {
      privacyOptions: (0, _v1.useMemo)(() => ((_v0, _v1 = !0, _v2) => {
        if (!_v0?.options?.length) return [];
        let _v3 = (0, _v9.videoPrivacyIcons)(_v2);
        return _v0.options.map(_v0 => {
          let _v1 = _v0.hasUpsell ? _v9.PRIVACY_VALUE_TO_UPSELL[_v0.value] : void 0;
          return {
            privacy: _v0.value,
            title: _v0.label,
            description: _v0.description,
            icon: _v3[_v0.value]?.icon,
            isDisabled: _v0.isDisabled,
            upsellEvent: _v1,
            showUpsell: _v0.hasUpsell,
            showUpsellModal: _v1 && _v0.hasUpsell && _v9.PAID_PRIVACY_UPSELL_MODAL_VALUES.has(_v0.value)
          };
        });
      })(_v4 ?? null, _v1, _v2).map(_v0 => ({
        ..._v0,
        title: "team" === _v0.privacy ? (0, _v10.getTranslations)().getTeamPrivacyTranslation(_v3?.teamUser?.teamName, _v3?.teamUser?.isWorkspace) : _v0.title
      })), [_v4, _v3?.teamUser?.teamName, _v3?.teamUser?.isWorkspace, _v1, _v2]),
      error: _v5,
      isLoading: _v6
    };
  }], 0);
}