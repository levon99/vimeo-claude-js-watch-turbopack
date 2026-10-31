{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useEmbedPrivacyOptions", 0, (_v0 = !1, _v1 = !1) => (0, _v1.useMemo)(() => [{
    privacy: "public",
    title: (0, _v2.translate)({
      singular: "Anywhere",
      dictionary: {
        es: {
          singular: "En cualquier sitio"
        },
        "de-DE": {
          singular: "Überall"
        },
        "fr-FR": {
          singular: "N'importe où"
        },
        "ja-JP": {
          singular: "すべてのサイト"
        },
        "ko-KR": {
          singular: "어디에나"
        },
        "pt-BR": {
          singular: "Em qualquer lugar"
        },
        "zh-CN": {
          singular: "任何位置"
        }
      }
    })
  }, {
    privacy: "private",
    title: (0, _v2.translate)({
      singular: "Nowhere",
      dictionary: {
        es: {
          singular: "En ningún sitio"
        },
        "de-DE": {
          singular: "Nirgendwo"
        },
        "fr-FR": {
          singular: "Nulle part"
        },
        "ja-JP": {
          singular: "いっさい許可しない"
        },
        "ko-KR": {
          singular: "불가"
        },
        "pt-BR": {
          singular: "Em nenhum lugar"
        },
        "zh-CN": {
          singular: "无处"
        }
      }
    })
  }, {
    privacy: "whitelist",
    title: (0, _v2.translate)({
      singular: "Specific domains",
      dictionary: {
        es: {
          singular: "En dominios específicos"
        },
        "de-DE": {
          singular: "Bestimmte Domains"
        },
        "fr-FR": {
          singular: "Domaines spécifiques"
        },
        "ja-JP": {
          singular: "特定のドメイン"
        },
        "ko-KR": {
          singular: "특정 도메인"
        },
        "pt-BR": {
          singular: "Domínios específicos"
        },
        "zh-CN": {
          singular: "特定域"
        }
      }
    }),
    upsellEvent: "embed domain privacy",
    isDisabled: !_v0,
    showUpsell: !_v0,
    showUpsellModal: _v1
  }], [_v0, _v1])]);
}