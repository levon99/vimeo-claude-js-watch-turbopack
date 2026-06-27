{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v0 => (0, _v1.jsx)(_v7.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M13.005 13a1 1 0 1 0-2 0v.768l-.665-.384a1 1 0 1 0-1 1.732l.665.384-.665.384a1 1 0 0 0 1 1.732l.665-.384V18a1 1 0 1 0 2 0v-.768l.665.384a1 1 0 1 0 1-1.732l-.665-.384.665-.384a1 1 0 0 0-1-1.732l-.665.384V13Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17 7v2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3V7a5 5 0 1 1 10 0ZM9.879 4.879A3 3 0 0 0 9 7v2h6V7a3 3 0 0 0-5.121-2.121Zm7.828 14.828A1 1 0 0 0 18 19v-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 .707-.293Z"
      })]
    })
  });
  _v0.s(["LockPassword", 0, _v8], 0);
  let _v9 = _v0 => (0, _v1.jsx)(_v7.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M21 2h-6a1 1 0 1 0 0 2h5v5a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Zm0 12a1 1 0 0 0-1 1v5h-5a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-9-8a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2V9a3 3 0 0 0-3-3Zm-1 3a1 1 0 0 1 2 0v1h-2V9Zm4 7H9v-4h6v4ZM3 10a1 1 0 0 0 1-1V4h5a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm6 10H4v-5a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2Z",
      fill: "currentColor"
    })
  });
  var _v10 = _v0.i(0);
  let _v11 = _v0 => ({
      password: {
        icon: (0, _v1.jsx)(_v8, {
          boxSize: _v0
        })
      },
      unlisted: {
        icon: (0, _v1.jsx)(_v5.LinkSecurityLock, {
          boxSize: _v0
        })
      },
      disable: {
        icon: (0, _v1.jsx)(_v3.EyeShut, {
          boxSize: _v0
        })
      },
      team: {
        icon: (0, _v1.jsx)(_v2.Building, {
          boxSize: _v0
        })
      },
      nobody: {
        icon: (0, _v1.jsx)(_v6.Lock, {
          boxSize: _v0
        })
      },
      anybody: {
        icon: (0, _v1.jsx)(_v4.Globe, {
          boxSize: _v0
        })
      },
      purgatory: {
        icon: (0, _v1.jsx)(_v9, {
          boxSize: _v0
        })
      },
      embed_only: {
        icon: (0, _v1.jsx)(_v3.EyeShut, {
          boxSize: _v0
        })
      }
    }),
    _v12 = [{
      privacy: "unlisted",
      title: (0, _v10.translate)({
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
      description: (0, _v10.translate)({
        singular: "Only people with the link can view",
        dictionary: {
          es: {
            singular: "Solo quienes tengan el enlace pueden ver"
          },
          "de-DE": {
            singular: "Nur Personen mit dem Link können anschauen"
          },
          "fr-FR": {
            singular: "Seules les personnes disposant du lien peuvent voir ce contenu"
          },
          "ja-JP": {
            singular: "リンクを持っている人のみ視聴可能"
          },
          "ko-KR": {
            singular: "링크가 있는 사람만 시청할 수 있습니다."
          },
          "pt-BR": {
            singular: "Somente pessoas com o link podem ver"
          },
          "zh-CN": {
            singular: "只有拥有链接的人才能查看"
          }
        }
      }),
      upsellEvent: "unlisted privacy"
    }, {
      privacy: "password",
      title: (0, _v10.translate)({
        singular: "Password",
        dictionary: {
          es: {
            singular: "Contraseña"
          },
          "de-DE": {
            singular: "Kennwort"
          },
          "fr-FR": {
            singular: "Mot de passe "
          },
          "ja-JP": {
            singular: "パスワード"
          },
          "ko-KR": {
            singular: "비밀번호"
          },
          "pt-BR": {
            singular: "Senha"
          },
          "zh-CN": {
            singular: "密码"
          }
        }
      }),
      description: (0, _v10.translate)({
        singular: "Only people with the password can view",
        dictionary: {
          es: {
            singular: "Solo quienes tengan la contraseña pueden ver"
          },
          "de-DE": {
            singular: "Nur Personen mit Kennwort können sehen."
          },
          "fr-FR": {
            singular: "Seules les personnes disposant du mot de passe peuvent voir ce contenu"
          },
          "ja-JP": {
            singular: "パスワードを持っている人のみ視聴可能"
          },
          "ko-KR": {
            singular: "비밀번호가 있는 사람만 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Somente pessoas com a senha podem ver"
          },
          "zh-CN": {
            singular: "只有知道密码的人才能查看"
          }
        }
      }),
      upsellEvent: "password privacy"
    }, {
      privacy: "disable",
      title: (0, _v10.translate)({
        singular: "Hide from Vimeo",
        dictionary: {
          es: {
            singular: "Ocultar de Vimeo"
          },
          "de-DE": {
            singular: "Bei Vimeo ausblenden"
          },
          "fr-FR": {
            singular: "Masquer dans Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoで非表示にする"
          },
          "ko-KR": {
            singular: "Vimeo에서 숨기기"
          },
          "pt-BR": {
            singular: "Ocultar do Vimeo"
          },
          "zh-CN": {
            singular: "从 Vimeo 隐藏"
          }
        }
      }),
      description: (0, _v10.translate)({
        singular: "Private on your account, but embeddable anywhere",
        dictionary: {
          es: {
            singular: "Se establece como privado en su cuenta, pero se puede insertar en cualquier lugar"
          },
          "de-DE": {
            singular: "Privat in Ihrem Konto, aber überall einbettbar"
          },
          "fr-FR": {
            singular: "La vidéo est privée sur votre compte mais intégrable partout"
          },
          "ja-JP": {
            singular: "アカウント上では非公開ですが、どこにでも埋め込みは可能です"
          },
          "ko-KR": {
            singular: "동영상을 계정에서 비공개로 설정하더라도 원하는 모든 곳에 임베드할 수 있습니다."
          },
          "pt-BR": {
            singular: "Privado na sua conta, mas incorporável em qualquer lugar"
          },
          "zh-CN": {
            singular: "在您的帐户上是私密的，但可嵌入到任何位置"
          }
        }
      }),
      upsellEvent: "disable privacy"
    }, {
      privacy: "team",
      title: (0, _v10.translate)({
        singular: "Team",
        dictionary: {
          es: {
            singular: "Equipo"
          },
          "fr-FR": {
            singular: "Équipe"
          },
          "ja-JP": {
            singular: "チーム"
          },
          "ko-KR": {
            singular: "팀"
          },
          "pt-BR": {
            singular: "Equipe"
          },
          "zh-CN": {
            singular: "团队"
          }
        }
      }),
      description: (0, _v10.translate)({
        singular: "Anyone in this team can view",
        dictionary: {
          es: {
            singular: "Cualquiera en este equipo puede ver"
          },
          "de-DE": {
            singular: "Jedes Teammitglied kann es ansehen"
          },
          "fr-FR": {
            singular: "Visible par tous les membres de cette equipe"
          },
          "ja-JP": {
            singular: "このチームのメンバーは誰でも閲覧できます"
          },
          "ko-KR": {
            singular: "이 팀의 누구나 볼 수 있습니다"
          },
          "pt-BR": {
            singular: "Qualquer pessoa nesta equipe pode visualizar"
          },
          "zh-CN": {
            singular: "团队中的任何人均可查看"
          }
        }
      })
    }, {
      privacy: "nobody",
      title: (0, _v10.translate)({
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
      description: (0, _v10.translate)({
        singular: "Only you and people with access can view",
        dictionary: {
          es: {
            singular: "Solo usted y quienes tengan acceso pueden ver"
          },
          "de-DE": {
            singular: "Nur Sie und Personen mit Zugriffsrechten können anschauen"
          },
          "fr-FR": {
            singular: "Seuls vous et les personnes autorisées pouvez voir ce contenu"
          },
          "ja-JP": {
            singular: "あなたとアクセス権を持つ人のみ視聴可能"
          },
          "ko-KR": {
            singular: "본인 및 액세스 권한이 있는 사람만 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Somente você e as pessoas com acesso podem ver"
          },
          "zh-CN": {
            singular: "只有您和具有访问权限的人员可以查看"
          }
        }
      })
    }, {
      privacy: "anybody",
      title: (0, _v10.translate)({
        singular: "Public",
        dictionary: {
          es: {
            singular: "Público"
          },
          "de-DE": {
            singular: "Öffentlich"
          },
          "ja-JP": {
            singular: "一般公開"
          },
          "ko-KR": {
            singular: "공개"
          },
          "pt-BR": {
            singular: "Público"
          },
          "zh-CN": {
            singular: "公开"
          }
        }
      }),
      description: (0, _v10.translate)({
        singular: "Anyone on the internet can view",
        dictionary: {
          es: {
            singular: "Cualquier persona en internet puede ver"
          },
          "de-DE": {
            singular: "Jeder im Internet kann anschauen"
          },
          "fr-FR": {
            singular: "Visible par tous les internautes"
          },
          "ja-JP": {
            singular: "インターネット上の誰もが視聴可能"
          },
          "ko-KR": {
            singular: "인터넷 사용자는 누구나 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Qualquer pessoa na internet pode ver"
          },
          "zh-CN": {
            singular: "互联网上的任何人都可以查看"
          }
        }
      })
    }],
    _v13 = _v11("xs"),
    _v14 = new Set(["password", "unlisted", "disable"]);
  _v0.s(["DEFAULT_PRIVACY_OPTIONS", 0, _v12, "DEFAULT_PRIVACY_VALUES", 0, {
    UNLISTED: "unlisted",
    PASSWORD: "password",
    HIDE_FROM_VIMEO: "disable",
    TEAM: "team",
    PRIVATE: "nobody",
    PUBLIC: "anybody"
  }, "DEFAULT_UPSELL_PRIVACIES", 0, ["password", "unlisted", "disable"], "EMBED_PRIVACY_VALUES", 0, {
    PRIVATE: "private",
    PUBLIC: "public",
    WHITELIST: "whitelist"
  }, "EVENT_PRIVACY_VALUES", 0, {
    UNLISTED: "unlisted",
    PASSWORD: "password",
    HIDE_FROM_VIMEO: "embed_only",
    TEAM: "team",
    PRIVATE: "nobody",
    PUBLIC: "anybody"
  }, "PAID_PRIVACY_UPSELL_MODAL_VALUES", 0, _v14, "PRIVACY_VALUE_TO_UPSELL", 0, {
    password: "password privacy",
    unlisted: "unlisted privacy",
    disable: "disable privacy"
  }, "UPSELL_TYPE_TO_UPSALE_NAME", 0, {
    "password privacy": "privacy_settings_password",
    "unlisted privacy": "privacy_settings_unlisted",
    "disable privacy": "privacy_settings_hide_from_vimeo"
  }, "VIDEO_API_VERSION", 0, "3.4.15", "VIDEO_PRIVACY_ICON_MAP", 0, _v13, "videoPrivacyIcons", 0, _v11], 0);
}