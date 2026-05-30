{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getTranslations", 0, () => ({
    getTeamPrivacyTranslation: (_v0, _v1) => !_v0 && _v1 ? (0, _v1.translate)({
      singular: "Anyone at my workspace",
      dictionary: {
        es: {
          singular: "Cualquiera en mi espacio de trabajo"
        },
        "de-DE": {
          singular: "Jeder in meinem Arbeitsbereich"
        },
        "fr-FR": {
          singular: "Toute personne de mon espace de travail"
        },
        "ja-JP": {
          singular: "自分のワークスペース内の誰でも"
        },
        "ko-KR": {
          singular: "내 워크스페이스의 누구나"
        },
        "pt-BR": {
          singular: "Qualquer pessoa no meu espaço de trabalho"
        },
        "zh-CN": {
          singular: "我的工作区内的任何人"
        }
      }
    }) : _v0 ? (0, _v1.translate)({
      singular: "Anyone at {TEAM_NAME}",
      replacements: {
        TEAM_NAME: _v0
      },
      dictionary: {
        es: {
          singular: "Cualquier persona en {TEAM_NAME}"
        },
        "de-DE": {
          singular: "Jemand von {TEAM_NAME}"
        },
        "fr-FR": {
          singular: "Tous les membres de {TEAM_NAME}"
        },
        "ja-JP": {
          singular: "{TEAM_NAME}の全員"
        },
        "ko-KR": {
          singular: "{TEAM_NAME}의 모든 사용자"
        },
        "pt-BR": {
          singular: "Qualquer pessoa em {TEAM_NAME}"
        },
        "zh-CN": {
          singular: "{TEAM_NAME} 内的任何人"
        }
      }
    }) : (0, _v1.translate)({
      singular: "Anyone at my company",
      dictionary: {
        es: {
          singular: "Cualquier persona en mi empresa"
        },
        "de-DE": {
          singular: "Jemand in meinem Unternehmen"
        },
        "fr-FR": {
          singular: "Tous les membres de mon entreprise"
        },
        "ja-JP": {
          singular: "社内全員"
        },
        "ko-KR": {
          singular: "내 회사의 모든 사용자"
        },
        "pt-BR": {
          singular: "Qualquer pessoa na minha empresa"
        },
        "zh-CN": {
          singular: "我公司内的任何人"
        }
      }
    })
  })]);
}