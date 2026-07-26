{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useRegionalPrivacyOptions", 0, () => [{
    privacy: "unlisted",
    title: (0, _v1.translate)({
      singular: "Unlisted",
      dictionary: {
        es: {
          singular: "Sin listar"
        },
        "de-DE": {
          singular: "Nicht gelistet"
        },
        "fr-FR": {
          singular: "Non répertorié"
        },
        "ja-JP": {
          singular: "限定公開"
        },
        "ko-KR": {
          singular: "일부 공개"
        },
        "pt-BR": {
          singular: "Não listado"
        },
        "zh-CN": {
          singular: "未公开发布"
        }
      }
    }),
    description: (0, _v1.translate)({
      singular: "Anyone with the link can view.",
      dictionary: {
        es: {
          singular: "Cualquier persona con el enlace puede ver."
        },
        "de-DE": {
          singular: "Jeder mit dem Link kann den Inhalt ansehen."
        },
        "fr-FR": {
          singular: "Toute personne disposant du lien peut visualiser."
        },
        "ja-JP": {
          singular: "リンクを知っている人なら誰でも閲覧できます."
        },
        "ko-KR": {
          singular: "링크가 있는 사람은 누구나 볼 수 있습니다."
        },
        "pt-BR": {
          singular: "Qualquer pessoa com o link pode visualizar."
        },
        "zh-CN": {
          singular: "任何拥有链接的人都可以查看."
        }
      }
    }),
    icon: _v2.VIDEO_PRIVACY_ICON_MAP.unlisted.icon
  }, {
    privacy: "nobody",
    title: (0, _v1.translate)({
      singular: "Private",
      dictionary: {
        es: {
          singular: "Privado"
        },
        "de-DE": {
          singular: "Privat"
        },
        "fr-FR": {
          singular: "Privé"
        },
        "ja-JP": {
          singular: "プライベート"
        },
        "ko-KR": {
          singular: "비공개"
        },
        "pt-BR": {
          singular: "Privado"
        },
        "zh-CN": {
          singular: "私密"
        }
      }
    }),
    description: (0, _v1.translate)({
      singular: "Only you and people you invite can view.",
      dictionary: {
        es: {
          singular: "Solo tú y las personas que invites pueden ver."
        },
        "de-DE": {
          singular: "Nur Sie und Personen, die Sie einladen, können es ansehen."
        },
        "fr-FR": {
          singular: "Uniquement vous et les personnes que vous invitez peuvent consulter."
        },
        "ja-JP": {
          singular: "あなたと招待した人のみが閲覧できます。"
        },
        "ko-KR": {
          singular: "본인과 초대한 사람만 볼 수 있음."
        },
        "pt-BR": {
          singular: "Apenas você e as pessoas que você convidar podem visualizar."
        },
        "zh-CN": {
          singular: "只有你和你邀请的人可以查看."
        }
      }
    }),
    icon: _v2.VIDEO_PRIVACY_ICON_MAP.nobody.icon
  }]]);
}