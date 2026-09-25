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
    }),
    _v9 = _v0 => (0, _v1.jsx)(_v7.Icon, {
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
        icon: (0, _v1.jsx)(_v3.Code, {
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
        icon: (0, _v1.jsx)(_v3.Code, {
          boxSize: _v0
        })
      }
    }),
    _v12 = [{
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
        singular: "Only you and people you invite can view",
        dictionary: {
          es: {
            singular: "Solo tú y las personas que invites pueden ver"
          },
          "de-DE": {
            singular: "Nur Sie und Personen, die Sie einladen, können es ansehen"
          },
          "fr-FR": {
            singular: "Seuls vous et les personnes que vous invitez peuvent visionner"
          },
          "ja-JP": {
            singular: "あなただけと招待した人のみが視聴できます"
          },
          "ko-KR": {
            singular: "귀하와 귀하가 초대한 사람만 볼 수 있음"
          },
          "pt-BR": {
            singular: "Somente você e as pessoas que você convidar podem visualizar"
          },
          "zh-CN": {
            singular: "只有您和您邀请的人可以查看"
          }
        }
      })
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
        singular: "Anyone with the link and password can view",
        dictionary: {
          es: {
            singular: "Cualquier persona con el enlace y la contraseña puede ver"
          },
          "de-DE": {
            singular: "Jeder mit Link und Passwort kann es ansehen"
          },
          "fr-FR": {
            singular: "Toute personne disposant du lien et du mot de passe peut visionner"
          },
          "ja-JP": {
            singular: "リンクとパスワードを知っている人は誰でも視聴できます"
          },
          "ko-KR": {
            singular: "링크와 비밀번호가 있는 사람은 누구나 볼 수 있음"
          },
          "pt-BR": {
            singular: "Qualquer pessoa com o link e a senha pode visualizar"
          },
          "zh-CN": {
            singular: "任何拥有链接和密码的人都可以查看"
          }
        }
      }),
      upsellEvent: "password privacy"
    }, {
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
        singular: "Anyone with the link can view",
        dictionary: {
          es: {
            singular: "Cualquier persona con el enlace puede ver"
          },
          "de-DE": {
            singular: "Jeder mit dem Link kann es ansehen"
          },
          "fr-FR": {
            singular: "Toute personne disposant du lien peut visionner"
          },
          "ja-JP": {
            singular: "リンクを知っている人は誰でも視聴できます"
          },
          "ko-KR": {
            singular: "링크가 있는 사람은 누구나 볼 수 있음"
          },
          "pt-BR": {
            singular: "Qualquer pessoa com o link pode visualizar"
          },
          "zh-CN": {
            singular: "任何拥有链接的人都可以查看"
          }
        }
      }),
      upsellEvent: "unlisted privacy"
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
        singular: "Anyone on the internet can find and view",
        dictionary: {
          es: {
            singular: "Cualquiera en internet puede encontrar y ver"
          },
          "de-DE": {
            singular: "Jeder im Internet kann es finden und ansehen"
          },
          "fr-FR": {
            singular: "Toute personne sur Internet peut trouver et visionner"
          },
          "ja-JP": {
            singular: "インターネット上の誰でも見つけて視聴できます"
          },
          "ko-KR": {
            singular: "인터넷에서 누구나 찾고 볼 수 있음"
          },
          "pt-BR": {
            singular: "Qualquer pessoa na internet pode encontrar e visualizar"
          },
          "zh-CN": {
            singular: "互联网上的任何人都可以找到并查看"
          }
        }
      })
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
        singular: "All team members can find and view",
        dictionary: {
          es: {
            singular: "Todos los miembros del equipo pueden encontrar y ver"
          },
          "de-DE": {
            singular: "Alle Teammitglieder können finden und ansehen"
          },
          "fr-FR": {
            singular: "Tous les membres de l'équipe peuvent trouver et visionner"
          },
          "ja-JP": {
            singular: "チームの全メンバーが見つけて閲覧できます"
          },
          "ko-KR": {
            singular: "모든 팀 구성원은 찾고 볼 수 있습니다"
          },
          "pt-BR": {
            singular: "Todos os membros da equipe podem encontrar e visualizar"
          },
          "zh-CN": {
            singular: "所有团队成员均可查找并查看"
          }
        }
      })
    }, {
      privacy: "disable",
      title: (0, _v10.translate)({
        singular: "Embed only",
        dictionary: {
          es: {
            singular: "Solo incrustado"
          },
          "de-DE": {
            singular: "Nur Einbetten"
          },
          "fr-FR": {
            singular: "Intégration uniquement"
          },
          "ja-JP": {
            singular: "埋め込みのみ"
          },
          "ko-KR": {
            singular: "임베드 전용"
          },
          "pt-BR": {
            singular: "Somente incorporado"
          },
          "zh-CN": {
            singular: "仅限嵌入"
          }
        }
      }),
      description: (0, _v10.translate)({
        singular: "Embeddable anywhere, but private on Vimeo",
        dictionary: {
          es: {
            singular: "Incrustable en cualquier lugar, pero privado en Vimeo"
          },
          "de-DE": {
            singular: "Überall einbettbar, aber auf Vimeo privat"
          },
          "fr-FR": {
            singular: "Intégrable n'importe où, mais privé sur Vimeo"
          },
          "ja-JP": {
            singular: "どこにでも埋め込めますが、Vimeo上では非公開です"
          },
          "ko-KR": {
            singular: "어디에나 임베드 가능하나 Vimeo에서는 비공개"
          },
          "pt-BR": {
            singular: "Incorporável em qualquer lugar, mas privado no Vimeo"
          },
          "zh-CN": {
            singular: "可以嵌入到任何地方，但在 Vimeo 上保持私密"
          }
        }
      }),
      upsellEvent: "disable privacy"
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