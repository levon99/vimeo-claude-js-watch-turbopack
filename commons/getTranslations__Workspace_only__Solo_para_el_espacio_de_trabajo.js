{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getTranslations", 0, () => ({
    getTeamPrivacyTranslation: (_v0, _v1) => !_v0 && _v1 ? (0, _v1.translate)({
      singular: "Workspace only",
      dictionary: {
        es: {
          singular: "Solo para el espacio de trabajo"
        },
        "de-DE": {
          singular: "Nur Arbeitsbereich"
        },
        "fr-FR": {
          singular: "Réservé à l'espace de travail"
        },
        "ja-JP": {
          singular: "ワークスペースのみ"
        },
        "ko-KR": {
          singular: "워크스페이스 전용"
        },
        "pt-BR": {
          singular: "Apenas para o espaço de trabalho"
        },
        "zh-CN": {
          singular: "仅限工作区"
        }
      }
    }) : _v0 ? (0, _v1.translate)({
      singular: "{TEAM_NAME} only",
      replacements: {
        TEAM_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Solo para {TEAM_NAME}"
        },
        "de-DE": {
          singular: "Nur {TEAM_NAME}"
        },
        "fr-FR": {
          singular: "Réservé à {TEAM_NAME}"
        },
        "ja-JP": {
          singular: "{TEAM_NAME} のみ"
        },
        "ko-KR": {
          singular: "{TEAM_NAME} 전용"
        },
        "pt-BR": {
          singular: "Apenas para {TEAM_NAME}"
        },
        "zh-CN": {
          singular: "{TEAM_NAME} 专属"
        }
      }
    }) : (0, _v1.translate)({
      singular: "Company only",
      dictionary: {
        es: {
          singular: "Solo para la empresa"
        },
        "de-DE": {
          singular: "Nur Unternehmen"
        },
        "fr-FR": {
          singular: "Réservé à l'entreprise"
        },
        "ja-JP": {
          singular: "会社のみ"
        },
        "ko-KR": {
          singular: "회사 전용"
        },
        "pt-BR": {
          singular: "Apenas para a empresa"
        },
        "zh-CN": {
          singular: "仅限公司"
        }
      }
    })
  })]);
}