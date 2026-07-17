{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useAgencyIdentity", 0, function (_v0, _v1 = "an") {
    let {
        data: _v2,
        isLoading: _v3,
        error: _v4
      } = (0, _v1.useGetUser)(() => null != _v0 && _v0 > 0 ? {
        where: {
          userId: _v0
        },
        select: ["name", "pictures"]
      } : null),
      _v5 = _v2?.name,
      _v6 = !!_v5 && /^user\d+$/.test(_v5),
      _v7 = "an" === _v1 ? (0, _v2.translate)({
        singular: "An agency",
        dictionary: {
          es: {
            singular: "Una agencia"
          },
          "de-DE": {
            singular: "Eine Agentur"
          },
          "fr-FR": {
            singular: "Une agence"
          },
          "ja-JP": {
            singular: "代理店"
          },
          "ko-KR": {
            singular: "대행사"
          },
          "pt-BR": {
            singular: "Uma agência"
          },
          "zh-CN": {
            singular: "一家代理机构"
          }
        }
      }) : (0, _v2.translate)({
        singular: "The agency",
        dictionary: {
          es: {
            singular: "La agencia"
          },
          "de-DE": {
            singular: "Die Agentur"
          },
          "fr-FR": {
            singular: "L'agence"
          },
          "ja-JP": {
            singular: "その代理店"
          },
          "ko-KR": {
            singular: "해당 대행사"
          },
          "pt-BR": {
            singular: "A agência"
          },
          "zh-CN": {
            singular: "该代理机构"
          }
        }
      }),
      _v8 = _v5 ? _v6 ? _v5.charAt(0).toUpperCase() + _v5.slice(1) : _v5 : _v7;
    return {
      resolvedName: _v5,
      displayName: _v8,
      avatarSrc: _v2?.pictures?.baseLink ?? void 0,
      isLoading: _v3,
      isError: !!_v4
    };
  }]);
}