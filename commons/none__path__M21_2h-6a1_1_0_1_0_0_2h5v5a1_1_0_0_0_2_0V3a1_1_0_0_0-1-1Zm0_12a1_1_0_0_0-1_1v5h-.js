{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = _v0 => (0, _v1.jsx)(_v8.Icon, {
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
        icon: (0, _v1.jsx)(_v7.LockPassword, {
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
    _v13 = {
      UNLISTED: "unlisted",
      PASSWORD: "password",
      HIDE_FROM_VIMEO: "disable",
      TEAM: "team",
      PRIVATE: "nobody",
      PUBLIC: "anybody"
    },
    _v14 = _v11("xs"),
    _v15 = {
      password: "password privacy",
      unlisted: "unlisted privacy",
      disable: "disable privacy"
    },
    _v16 = new Set(["password", "unlisted", "disable"]),
    _v17 = new Set(["nobody", "team", "unlisted"]),
    _v18 = new Set(["nobody", "team", "unlisted", "password"]),
    _v19 = {
      team: (0, _v10.translate)({
        singular: "All team members can view",
        dictionary: {
          es: {
            singular: "Todos los miembros del equipo pueden ver"
          },
          "de-DE": {
            singular: "Alle Teammitglieder können es ansehen"
          },
          "fr-FR": {
            singular: "Tous les membres de l'équipe peuvent visionner"
          },
          "ja-JP": {
            singular: "チームの全メンバーが閲覧できます"
          },
          "ko-KR": {
            singular: "모든 팀 구성원이 볼 수 있습니다"
          },
          "pt-BR": {
            singular: "Todos os membros da equipe podem visualizar"
          },
          "zh-CN": {
            singular: "所有团队成员均可查看"
          }
        }
      })
    },
    _v20 = _v0 => _v19[_v0] ?? _v12.find(_v0 => _v0.privacy === _v0)?.description,
    _v21 = _v12.filter(_v0 => _v17.has(_v0.privacy)).map(_v0 => ({
      privacy: _v0.privacy,
      title: _v0.title,
      description: _v20(_v0.privacy),
      icon: _v14[_v0.privacy]?.icon
    })),
    _v22 = ["nobody", "unlisted", "password", "team"].map(_v0 => ({
      privacy: _v0,
      title: _v12.find(_v0 => _v0.privacy === _v0)?.title ?? _v0,
      description: _v20(_v0),
      icon: _v14[_v0]?.icon
    })).filter(_v0 => _v18.has(_v0.privacy)),
    _v23 = ["nobody", "team", "unlisted", "password"],
    _v24 = _v0 => _v23.includes(_v0),
    _v25 = _v23.map(_v0 => ({
      privacy: _v0,
      title: _v12.find(_v0 => _v0.privacy === _v0)?.title ?? _v0,
      description: _v20(_v0),
      icon: _v14[_v0]?.icon
    })),
    _v26 = {
      privacy: "anybody",
      title: _v12.find(_v0 => "anybody" === _v0.privacy)?.title ?? "Public",
      description: _v12.find(_v0 => "unlisted" === _v0.privacy)?.description,
      icon: _v14.anybody?.icon
    },
    _v27 = [{
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
        singular: "Anyone can view the landing page",
        dictionary: {
          es: {
            singular: "Cualquiera puede ver la página de destino"
          },
          "de-DE": {
            singular: "Jeder kann die Landingpage ansehen"
          },
          "fr-FR": {
            singular: "Toute personne peut consulter la page d'accueil"
          },
          "ja-JP": {
            singular: "ランディングページは誰でも閲覧できます"
          },
          "ko-KR": {
            singular: "누구나 랜딩 페이지를 볼 수 있습니다"
          },
          "pt-BR": {
            singular: "Qualquer pessoa pode visualizar a página de destino"
          },
          "zh-CN": {
            singular: "任何人都可以查看着陆页"
          }
        }
      }),
      icon: (0, _v1.jsx)(_v4.Globe, {
        boxSize: "xs"
      })
    }, {
      privacy: "team",
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
            singular: "Solo usted y las personas con acceso pueden verla"
          },
          "de-DE": {
            singular: "Nur Sie und Personen mit Zugriff können sie ansehen"
          },
          "fr-FR": {
            singular: "Uniquement vous et les personnes disposant d'un accès peuvent consulter"
          },
          "ja-JP": {
            singular: "あなたとアクセス権を持つ人のみが閲覧できます"
          },
          "ko-KR": {
            singular: "귀하와 접근 권한이 있는 사람만 볼 수 있습니다"
          },
          "pt-BR": {
            singular: "Somente você e pessoas com acesso podem visualizar"
          },
          "zh-CN": {
            singular: "只有你和有访问权限的人可以查看"
          }
        }
      }),
      icon: (0, _v1.jsx)(_v6.Lock, {
        boxSize: "xs"
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
        singular: "Only people with the password can view",
        dictionary: {
          es: {
            singular: "Solo las personas con la contraseña pueden verla"
          },
          "de-DE": {
            singular: "Nur Personen mit dem Passwort können sie ansehen"
          },
          "fr-FR": {
            singular: "Seules les personnes disposant du mot de passe peuvent consulter"
          },
          "ja-JP": {
            singular: "パスワードを知っている人のみが閲覧できます"
          },
          "ko-KR": {
            singular: "비밀번호를 알고 있는 사람만 볼 수 있습니다"
          },
          "pt-BR": {
            singular: "Somente pessoas com a senha podem visualizar"
          },
          "zh-CN": {
            singular: "只有拥有密码的人可以查看"
          }
        }
      }),
      icon: (0, _v1.jsx)(_v7.LockPassword, {
        boxSize: "xs"
      })
    }];
  _v0.s(["DEFAULT_PRIVACY_OPTIONS", 0, _v12, "DEFAULT_PRIVACY_VALUES", 0, _v13, "DEFAULT_UPSELL_PRIVACIES", 0, ["password", "unlisted", "disable"], "EMBED_PRIVACY_VALUES", 0, {
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
  }, "EVENT_SERIES_PRIVACY_OPTIONS", 0, _v27, "FILE_PRIVACY_OPTIONS", 0, _v21, "FILE_PRIVACY_OPTIONS_WITH_PASSWORD", 0, _v22, "FOLDER_ITEM_LIST_CACHE_PATTERNS", 0, [".*\\/folders\\/root.*", ".*\\/projects\\/\\d+\\/items.*", ".*\\/users\\/\\d+\\/items.*"], "FOLDER_PRIVACY_API_FIELDS", 0, ["name", "privacy.view", "password", "hasPassword"], "FOLDER_PRIVACY_PASSWORD", 0, "password", "FOLDER_PRIVACY_PUBLIC_OPTION", 0, _v26, "PAID_PRIVACY_UPSELL_MODAL_VALUES", 0, _v16, "PRIVACY_VALUE_TO_UPSELL", 0, _v15, "UPSELL_TYPE_TO_UPSALE_NAME", 0, {
    "password privacy": "privacy_settings_password",
    "unlisted privacy": "privacy_settings_unlisted",
    "disable privacy": "privacy_settings_hide_from_vimeo"
  }, "VIDEO_API_VERSION", 0, "3.4.15", "VIDEO_PRIVACY_ICON_MAP", 0, _v14, "getFilePrivacyDescription", 0, _v20, "getFolderPrivacy", 0, _v0 => _v24(_v0) ? _v0 : "nobody", "getFolderPrivacyOptions", 0, (_v0, _v1, _v2) => {
    let _v3 = void 0 !== _v1 && _v16.has(_v1);
    return _v25.filter(_v0 => _v0.privacy !== _v13.TEAM || _v2 || _v0.privacy === _v1).map(_v0 => {
      let _v1 = _v16.has(_v0.privacy),
        _v2 = {
          ..._v0,
          isPaidPrivacy: _v1
        };
      return _v1 && "unknown" === _v0 ? {
        ..._v2,
        isDisabled: !0,
        ...(_v3 && _v0.privacy === _v1 ? {
          showUpsellWarning: !0
        } : {})
      } : _v1 && "upsell" === _v0 && !_v3 ? {
        ..._v2,
        upsellEvent: _v15[_v0.privacy],
        showUpsell: !0
      } : _v1 && "upsell" === _v0 && _v3 && _v0.privacy === _v1 ? {
        ..._v2,
        showUpsellWarning: !0
      } : _v2;
    });
  }, "isFolderPrivacy", 0, _v24, "isFolderPrivacyView", 0, _v0 => "anybody" === _v0 || _v24(_v0), "videoPrivacyIcons", 0, _v11], 0);
}