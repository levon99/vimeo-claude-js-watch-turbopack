{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useRegionalPrivacyOptions", 0, () => {
    let {
      settings: _v0
    } = (0, _v2.useOrionSettings)();
    return _v0.privacy_settings_new_copy ? [{
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
            singular: "Cualquiera con el enlace puede ver."
          },
          "de-DE": {
            singular: "Jeder mit dem Link kann es ansehen."
          },
          "fr-FR": {
            singular: "Toute personne disposant du lien peut consulter."
          },
          "ja-JP": {
            singular: "リンクを知っている人は誰でも閲覧できます。"
          },
          "ko-KR": {
            singular: "링크가 있는 사람은 누구나 볼 수 있음."
          },
          "pt-BR": {
            singular: "Qualquer pessoa com o link pode visualizar."
          },
          "zh-CN": {
            singular: "任何拥有链接的人都可以查看."
          }
        }
      }),
      icon: _v3.VIDEO_PRIVACY_ICON_MAP.unlisted.icon
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
      icon: _v3.VIDEO_PRIVACY_ICON_MAP.nobody.icon
    }] : [{
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
        singular: "Only people with the link can view.",
        dictionary: {
          es: {
            singular: "Solo las personas con el enlace pueden ver."
          },
          "de-DE": {
            singular: "Nur Personen mit dem Link können es ansehen."
          },
          "fr-FR": {
            singular: "Seules les personnes disposant du lien peuvent consulter."
          },
          "ja-JP": {
            singular: "リンクを知っている人のみが閲覧できます。"
          },
          "ko-KR": {
            singular: "링크가 있는 사람만 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Apenas pessoas com o link podem visualizar."
          },
          "zh-CN": {
            singular: "只有拥有链接的人可以查看."
          }
        }
      }),
      icon: _v3.VIDEO_PRIVACY_ICON_MAP.unlisted.icon
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
        singular: "Only you and people on your account can view.",
        dictionary: {
          es: {
            singular: "Solo tú y las personas en tu cuenta pueden ver."
          },
          "de-DE": {
            singular: "Nur Sie und Personen in Ihrem Konto können es ansehen."
          },
          "fr-FR": {
            singular: "Vous et les personnes de votre compte êtes les seuls à pouvoir consulter."
          },
          "ja-JP": {
            singular: "あなたとアカウントのメンバーのみが閲覧できます。"
          },
          "ko-KR": {
            singular: "귀하와 계정 구성원만 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Apenas você e pessoas na sua conta podem visualizar."
          },
          "zh-CN": {
            singular: "只有您和您的账户中的人员可以查看."
          }
        }
      }),
      icon: _v3.VIDEO_PRIVACY_ICON_MAP.nobody.icon
    }];
  }]);
}