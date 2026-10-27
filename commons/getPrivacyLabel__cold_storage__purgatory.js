{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["getPrivacyLabel", 0, (_v0, _v1, _v2) => {
    let _v3 = ("cold_storage" === _v0 || "purgatory" === _v0) && _v2 ? _v2 : _v0;
    if ("team" === _v3) return (0, _v3.getTeamPrivacyTranslation)(_v1?.teamName, _v1?.isWorkspace);
    let _v4 = _v2.DEFAULT_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v3)?.title;
    return _v4 || ("purgatory" === _v3 || "cold_storage" === _v3 ? (0, _v1.translate)({
      singular: "Restricted",
      dictionary: {
        es: {
          singular: "Restringido"
        },
        "de-DE": {
          singular: "Eingeschränkt"
        },
        "fr-FR": {
          singular: "Restreint"
        },
        "ja-JP": {
          singular: "制限付き"
        },
        "ko-KR": {
          singular: "제한됨"
        },
        "pt-BR": {
          singular: "Restrito"
        },
        "zh-CN": {
          singular: "受限"
        }
      }
    }) : _v3);
  }]);
}